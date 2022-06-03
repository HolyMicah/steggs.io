
$("#btnStart1").click(function(){
    window.location = "citys.html"
});

$("#btnStart2").click(function(){
    window.location = "ingredients.html"
});

$("#btnStart3").click(function(){
    window.location = "results.html"
    onClickBox();
});

$("#btnStart4").click(function(){
    window.location = "index.html"
});




function onClickBox() {
    // var checked = [($("#box-1"),$("#box-2"),$("#box-3"))];
    if($('#box-1').is(':checked')){
        alert('is checked!');
    }
    console.log(localStorage);
  }




