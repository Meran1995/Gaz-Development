$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$(".navbar").addClass("sticky");
		}else{
			$(".navbar").removeClass("sticky");
			
		}
	});
	// toggle menu/navbarscript
	$(".hamburger-btn").click(function(){
		$(".header .navbar .max-width .margin-around .menu").toggleClass("active");
	});
})