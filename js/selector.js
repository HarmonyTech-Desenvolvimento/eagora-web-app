/*
 -------------------------------------------------------
 syntax 
 MAIN.createRelatedSelector(
    from   -> the filtering element           
    to     -> the element for filtered options
    obj    -> An object containing the options per
              option of the filtering (from) element
    [sort] -> optional sorting method for sorting
              of the complete or filtered options list
 --------------------------------------------------------
*/

//create the interdepent selectors
function initSelectors(){
 // next 2 statements should generate error message, see console
 MAIN.createRelatedSelector(); 
 MAIN.createRelatedSelector(document.querySelector('#continents') );

  //categories
  MAIN.createRelatedSelector
    (document.querySelector('#idCategoria')           // from select element
    ,document.querySelector('#idEspecialidade')      // to select element
    ,{                                               // values object 
      Animais: ['Acessórios','Adestrador de animais','Banho e tosa','Cuidador de animais','Passeio para animais','Vendedor de Ração','Veterinário', 'Outros'],
      "Arte e Cultura": ['Aluguel de teatro','Artesão','Companhia de dança','Compahia de teatro','Escultor','Desenhista','Pintor de Telas',
      'Roteirista','Cantor','Músico','Outros'],
      "Assistência Técnica": ['Ar condicionado','Câmera','Computador','Eletrodomésticos','Eletrônicos','Tablets','Telefonia',
      'Outros'],
      Aulas: ['Artes e artesanato','Concursos','Aulas de dança','Aulas particulares','Esportes','Aulas de idiomas','Aulas de informática','Aulas de lutas','Aulas de música','Outros'],
      Autos: ['Alarme automotivo','Arcondicionado','Funilaria','Inspeção veicular','Insulfilm','Martelinho de ouro','Revisão','Som automotivo','Outros'],
      "Beleza e Estética": ['Cabeleireiros','Corte e costura','Depilação','Design de sobrancelhas','Esteticista','Manicure e pedicure','Maquiadores',
      'Personal stylist','Sapateiro','Outros'],
      "Construção e Reforma": ['Arquiteto','Automação Residencial','Chaveiro','Decorador','Dedetizador','Desentupidor','Eletricista',
      'Encanador','Engenheiro','Gesso e Drywall', 'Impermeabilizador','Jardineiro','Marceneiro','Montador de móveis','Paisagista','Pedreiro','Pintor',
      'Segurança Eletrônica','Serraria','Vidraceiro','Outros'],
      Consultoria: ['Advogados','Acessoria de imprensa','Auxilio administrativo','Consultor pessoal','Consultoria especializada','Contador',
      'Detetive particular', 'Digitalizar docmentos', 'Economia e finanças', 'Segurança do trabalho', 'Tradutores', 'Outros'],
      "Desing e Tecnologia": ['Animação','Apps para smartphone','Áudio e vídeo','Convites','Criação de logos','Desenvolvimento de sites',
      'Diagramador', 'Edição de fotos', 'Ilustração', 'Marketing online', 'Web Desing', 'Outros'],
      Eventos: ['Animação de festas','Acessor de eventos','Bandas e cantores','Batenders','Brindes','Buffet completo', 'Churrasqueiro', 'Confeitaria',
      'Decoração','DJs','Equipamentos para festa','Fotografia','Garçons e copeiros','Gravação de vídeos','Recepcionistas','Segurança','Outros'],
      Saúde: ['Acompanhante de idosos','Enfermeiro','Fisioterapeuta','Fonoaudiólogo','Nutricionista','Psicólogo','Quiroprático','Outros'],
      "Serviços Domésticos": ['Adestrador de cães','Babá','Cozinheira','Diarista','Limpeza de piscina','Motorista',
      'Passadeira', 'Passeador de cães', 'Outros']
    }
    ,function(a,b){return a>b ? 1 : a<b ? -1 : 0;}   // sort method
 );
}

//create MAIN namespace
(function(ns){ // don't pollute the global namespace
    
 function create(from, to, obj, srt){
  if (!from) {
         throw CreationError('create: parameter selector [from] missing');
  }
  if (!to) {
         throw CreationError('create: parameter related selector [to] missing');
  }
  if (!obj) {
         throw CreationError('create: related filter definition object [obj] missing');
  }
  
  //retrieve all options from obj and add it
  obj.all = (function(o){
     var a = [];
     for (var l in o) {
       a = /array/i.test (o[l].constructor) ? a.concat(o[l]) : a;
     }
     return a.sort(srt);
  }(obj));
 // initialize and populate to-selector with all
  populator.call( from
                  ,null
                  ,to
                  ,obj
                  ,srt
  );
    
  // assign handler    
  from.onchange = populator;

  function initStatics(fn,obj){
   for (var l in obj) {
       if (obj.hasOwnProperty(l)){
           fn[l] = obj[l];
       }
   }
   fn.initialized = true;
  }
     
 function populator(e, relatedto, obj, srt){
    // set pseudo statics
    var self = populator;
    if (!self.initialized) {
        initStatics(self,{optselects:obj,optselectsall:obj.all,relatedTo:relatedto,sorter:srt || false});
    }
     
    if (!self.relatedTo){
        throw 'not related to a selector';
    }
    // populate to-selector from filter/all
    var optsfilter = this.selectedIndex < 1
                   ? self.optselectsall 
                   : self.optselects[this.options[this.selectedIndex].firstChild.nodeValue]
       ,cselect = self.relatedTo
       ,opts = cselect.options;
    if (self.sorter) optsfilter.sort(self.sorter);
    opts.length = 0;
    for (var i=0;i<optsfilter.length;i+=1){
        opts[i] = new Option(optsfilter[i],i);
    }
  }
 }
    
 // custom Error
 function CreationError(mssg){
     return {name:'CreationError',message:mssg};
 }

 // return the create method with some error handling   
 window[ns] = { 
     createRelatedSelector: function(from,to,obj,srt) {
          try { 
              if (arguments.length<1) {
                 throw CreationError('no parameters');
              } 
              create.call(null,from,to,obj,srt); 
          } 
          catch(e) { console.log('createRelatedSelector ->',e.name,'\n'
                                   + e.message +
                                   '\ncheck parameters'); }
        }
 };    
}('MAIN'));
//initialize
initSelectors();