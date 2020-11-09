$("#login-button").on("click", function(event){
    event.preventDefault();
  //  $('form').fadeOut(500);
    window.open("index.html", "_self");
//console.log("66666");
    sendLoginRequest();
	// $('.wrapper').addClass('form-success');
});