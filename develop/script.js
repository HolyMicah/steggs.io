
$("#btnStart1").click(function(){
    window.location = "location.html"
});

$("#btnStart2").click(function(){

    window.location = "ingredients.html"
});

$("#btnStart3").click(function(){
    window.location = "results.html"
});

$("#btnStart4").click(function(){
    window.location = "index.html"
});

let boxes = $(".box").length;

function save() {	
    for(let i = 1; i <= boxes; i++){
        var checkbox = document.getElementById(String(i));
      localStorage.setItem("checkbox" + String(i), checkbox.checked);	
    }
  }





















let cityArray = ["Seattle,Phoenix,Honolulu,Boise,Las Vegas,Portland,Houston,Los Angeles,DC"]

let ingredientsArray = ["Eggs,Bread,Milk,Steak,Orange Juice,Rice,Butter"]


