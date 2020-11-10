$("#login-button").on("click", function(event){
    event.preventDefault();
  //  $('form').fadeOut(500);
   
//console.log("66666");
    sendLoginRequest();
    window.open("index.html", "_self");
	// $('.wrapper').addClass('form-success');
});