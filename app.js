function myMap() {
var mapProp= {
    center:new google.maps.LatLng(-23.5676005,-46.805289),
    zoom:15,
};

var LatLng = {lat:-23.5676005,lng:-46.805289};

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
          map: map,
          position: LatLng,
          title: 'Estamos aqui!'
        });
}

$(document).ready(function(){

		$(".bolos").show(0);
		$(".doces").hide(0);
		$(".ovos").hide(0);
		$(".panetones").hide(0);

	$("#bolo").click(function(){
		$(".bolos").show(1000);
		$(".doces").hide(1000);
		$(".ovos").hide(1000);
		$(".panetones").hide(1000);
	});
	$("#doce").click(function(){
		$(".doces").show(1000);
		$(".bolos").hide(1000);
		$(".ovos").hide(1000);
		$(".panetones").hide(1000);
	});

	$("#ovo").click(function(){
		$(".ovos").show(1000);
		$(".bolos").hide(1000);
		$(".doces").hide(1000);
		$(".panetones").hide(1000);
	});

	$("#panetone").click(function(){
		$(".panetones").show(1000);
		$(".bolos").hide(1000);
		$(".ovos").hide(1000);
		$(".doces").hide(1000);
	});
  $("#bolos").click(function(){
		$(".bolos").show(1000);
		$(".doces").hide(1000);
		$(".ovos").hide(1000);
		$(".panetones").hide(1000);
	});
	$("#doces").click(function(){
		$(".doces").show(1000);
		$(".bolos").hide(1000);
		$(".ovos").hide(1000);
		$(".panetones").hide(1000);
	});

	$("#ovos").click(function(){
		$(".ovos").show(1000);
		$(".bolos").hide(1000);
		$(".doces").hide(1000);
		$(".panetones").hide(1000);
	});

	$("#panetones").click(function(){
		$(".panetones").show(1000);
		$(".bolos").hide(1000);
		$(".ovos").hide(1000);
		$(".doces").hide(1000);
	});
});
