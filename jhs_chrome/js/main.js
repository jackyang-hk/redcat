//控制类目显隐
var a = true;


var catalog = document.getElementById("catalog");


var isCatalog = function(){
  if(a === true){
    catalog.style.display = "block";
    a = !a;
      }else{
   catalog.style.display = "none";
      a = !a;
   }
};

$(document).ready(function() {
    
    //and then change this code so that your callback gets run
    //when the button gets clicked instead of mine.
    // **by the way, this is jQuery!
    $('#main').lionbars();
    $('#cata_switch').click(isCatalog); 
});