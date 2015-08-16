$(function () {
 $('#decapotabila_div').hide();

 $('#auto').change(function(){
   var auto = $('#auto').val();
   if (auto == 'porse'){
     $('#decapotabila_div').show();
   } else {
    $('#decapotabila_div').hide();
   }
 });
 $('#pret').change(function(){
  var pret = $('#pret').val();
  var preisnummber = parseInt(pret);
  if (pret < 10000) {
    alert('nu e voie sa fie mai mic de 10000');
    $('#buton').attr('disabled','disabled');

  }else {

    $('#buton').removeAttr('disabled');


  }

 });

});
