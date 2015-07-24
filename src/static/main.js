var gagagoanta = document.querySelector('#rent_checkbox');
var iubiroanta = document.querySelector('#rent_options');
gagagoanta.addEventListener("change", function() {
  if(gagagoanta.checked){
    iubiroanta.classList.remove("hide");
  }else{
    iubiroanta.classList.add("hide");
  }
});
