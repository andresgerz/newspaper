$(document).ready(function(){
  // document.getElementById("minus_zoom").addEventListener("click",decrease,false);
  // document.getElementById("minus_zoom2").addEventListener("click",decrease,false);
  // document.getElementById("minus_zoom3").addEventListener("click",decrease,false);

  // document.getElementById("more_zoom").addEventListener("click",increase, false);
  // document.getElementById("more_zoom2").addEventListener("click",increase, false);
  // document.getElementById("more_zoom3").addEventListener("click",increase, false);

  var buttoms=document.querySelectorAll("input");

  for(var i=0;buttoms.length;i++){
    
    buttoms[i].addEventListener("click",decrease,false);
    buttoms[i].addEventListener("click",increase,false);
    buttoms[i].addEventListener("click",mode_reading,false);
  }

});

function mode_reading(e){
  var zone_action;

  if(e.target==reading_mode){
    zone_action=".news_police";
  }else if(e.target==reading_mode2){
    zone_action=".news_sport";
  }else if(e.target==reading_mode3){
    zone_action=".news_science";
  }

  $(zone_action).css({"color":"white",
  "font-size":"1.4vw",
  "background-color":"black",
  "font-family": "newtimesromance"
  });
}



function decrease(e){

  var zone_action;

  if(e.target==minus_zoom){
    zone_action=".news_police";
  }else if(e.target==minus_zoom2){
    zone_action=".news_sport";
  }else if(e.target==minus_zoom3){
    zone_action=".news_science";
  }

  var size_default=$(zone_action).css("font-size");
  
  //alert(size_default);
 size_default=parseInt(size_default);
 $(zone_action).css("font-size",size_default/1.1)
}


function increase(e){
  var zone_action;

  if(e.target==more_zoom){
    zone_action=".news_police";
  }else if(e.target==more_zoom2){
    zone_action=".news_sport";  
  }else if(e.target==more_zoom3){
    zone_action=".news_science";
  }


  var size_default=$(zone_action).css("font-size");
 
  size_default=parseInt(size_default);
  $(zone_action).css("font-size",size_default*1.1);
}