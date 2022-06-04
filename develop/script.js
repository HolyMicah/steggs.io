var box1 = $("#box-1").val();
var box2 = $("#box-2").val();
var box3 = $("#box-3").val();
var box4 = $("#box-4").val();
var box5 = $("#box-5").val();
var box6 = $("#box-6").val();
var box7 = $("#box-7").val();
var box8 = $("#box-8").val();





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
    if($('#box-1').is(':checked')){
        localStorage.setItem("checkbox1", (box1));
    }
    else{
        localStorage.removeItem("checkbox1");
    }


    if($('#box-2').is(':checked')){
        localStorage.setItem("checkbox2", (box2));
    }
    else{
        localStorage.removeItem("checkbox2");
    }


    if($('#box-3').is(':checked')){
        localStorage.setItem("checkbox3", (box3));
    }
    else{
        localStorage.removeItem("checkbox3");
    }


    if($('#box-4').is(':checked')){
        localStorage.setItem("checkbox4", (box4));
    }
    else{
        localStorage.removeItem("checkbox4");
    }


    if($('#box-5').is(':checked')){
        localStorage.setItem("checkbox5", (box5));
    }
    else{
        localStorage.removeItem("checkbox5");
    }


    if($('#box-6').is(':checked')){
        localStorage.setItem("checkbox6", (box6));
    }
    else{
        localStorage.removeItem("checkbox6");
    }


    if($('#box-7').is(':checked')){
        localStorage.setItem("checkbox7", (box7));
    }
    else{
        localStorage.removeItem("checkbox7");
    }


    if($('#box-8').is(':checked')){
        localStorage.setItem("checkbox8", (box8));
    }
    else{
        localStorage.removeItem("checkbox8");
    }
  }

  function getInfoFromKroger(){
    $.ajax({
        url: 'https://url.com',
        type: 'post',
        data: {
            access_token: 'XXXXXXXXXXXXXXXXXXX'
        },
        headers: {
            Header_Name_One: 'Header Value One',   //If your header name has spaces or any other char not appropriate
            "Header Name Two": 'Header Value Two'  //for object property name, use quoted notation shown in second
        },
        dataType: 'json',
        success: function (data) {
            console.info(data);
        }
    }
    )
    };


