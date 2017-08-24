$( document ).on('turbolinks:load', function() {

   $(function(){
    if($('body').is('.virtual-pet')){
     virtualPet();
    }
  });

   $(function(){
    if($('body').is('.fbird-clone')){
     fBird();
    }
  });

});