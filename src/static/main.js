$(function () {
 $('#decapotabila_div').hide();
 $('#auto').change(function(){
   var auto = $('#auto').val();
   if (auto == 'porse'){
     $('#decapotabila_div').show();
   } else {
    $('#decapotabila_div').hide();
   }
 })

});
