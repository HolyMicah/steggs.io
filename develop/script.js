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

//   function getInfoFromKroger(){
//     $.ajax({
//         url: 'https://url.com',
//         type: 'post',
//         data: {
//             access_token: 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCIsImV4cCI6MTY1NDM2ODk0NCwiaWF0IjoxNjU0MzY3MTM5LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjU4MTc4NjNhLTUzMTYtNThkYi1iNmY1LTBjYjI1OTVlNTQxMCIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjU0MzY3MTQ0OTQ5MDQ5NDM5LCJhenAiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCJ9.X9GFDg-3VhnIU8AnoyiPxhO0_a9jc1v4pspZncdOUgir3w423TSyjb90W1AMN3IqkBI66Pg0_CadiQ1Wr0TU_ukVvZcMwlyFdQLyl04OVuFEqmvW18c7fDEZUF2JzLt2mkmPbV6UevuYPCFG4YcfJowvEroXhIbqGuStH-npdoRLoX6VBmHNUp-MCM8h1JvEjB0Jg0kPB509S4pcjrJV_g9AMjk-22jPG3zbgeW2Ljzp75s_uG0OSPbfYVJyLTIdfZOVpPZ7Hl0LGDAO2M54GkeHQs7zr95cafZ9Ng2z5NsIDTqaD7OAm98k4KkTtGUTwpgS-OYO0WsMm4QYKXuUzA'
//         },
//         headers: {
//             Header_Name_One: 'Header Value One',   //If your header name has spaces or any other char not appropriate
//             "Header Name Two": 'Header Value Two'  //for object property name, use quoted notation shown in second
//         },
//         dataType: 'json',
//         success: function (data) {
//             console.info(data);
//         }
//     }
//     )
//     };


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.kroger.com/v1/products?filter.brand=Kroger&filter.term=milk&filter.locationId=01400943",
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Authorization": "Bearer {{eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCIsImV4cCI6MTY1NDM3MDgzNSwiaWF0IjoxNjU0MzY5MDMwLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjU4MTc4NjNhLTUzMTYtNThkYi1iNmY1LTBjYjI1OTVlNTQxMCIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjU0MzY5MDM1MDUwOTk2MzgxLCJhenAiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCJ9.i_Hls-pwiYwFau73MEkN4_1pJnotrOSHgv7ope92NgwihfW7fEga1KXcCGT4ie7QfCeYdWLrHRAOAjqJq6TIdj-aCGTGuZvx3z3F_QqadSDlJqyc7EX-ckQzlIyxrX90ng5iDJpl33r27FhO0RCqXNFxkcZyvLSKFmtwemu9VfcG3Qsyq1d9fAuL9QuXsNMJY52MRhf1PHlnKntjRkC19UAI_gPJuyWNXuUBkuipFlsuxC2tjfqirEliNG2PsFVas1CtqE22GMpdDm7W0GjNgXoOmeX9g7jwWVgsMg9D4Bd37pJRocODzd-rz6lKhWAv0M-2A2Ye602oqg-IDHYwMA}}"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      }).fail(function(response){
          if(response){
              console.log(response)
          }
      })


     
      


