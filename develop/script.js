

$("#btnStart1").click(function(){
    window.location = "citys.html"
});

$("#btnStart2").click(function(){
    
    let searchIpt = $(".searchBar").val();

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.kroger.com/v1/locations?filter.zipCode.near=" + searchIpt,
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCIsImV4cCI6MTY1NDU1ODU4OSwiaWF0IjoxNjU0NTU2Nzg0LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjU4MTc4NjNhLTUzMTYtNThkYi1iNmY1LTBjYjI1OTVlNTQxMCIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjU0NTU2Nzg5NjM5NDk3MzMzLCJhenAiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCJ9.wc3OVDCadZZWIK2f_RdtdCa4zdg1nTd9rqSWBp0fQh4bfiYQilcdsG1PZl0eJ2Ib_xmI5QMqaMKp337pfF381FfoQnBAOCnVTkCA25tsi1pITb80gDDtSq2wUdgwM2fhfxyOrgE30hUzhN4QoABWlHmRbKfAZBKhyrPsQuNxagsHaDyCiTXUgQfoTz0KM5Ip9iPn7XlImLSrXW4UMyv1W1PluvThf2BxVlGG8ZBAY_jN4DZutKoXU5f89D9HY_MeHrBjE82phkjcDOwfLhZtEcZ9t4hVQh_npNgqHYV1OsUa9kPHNsQj64wIVIO_wstgYtUbKvHWuHKFmKl-qPOc8w"
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });



    localStorage.setItem("input", searchIpt);
    // window.location = "results.html";
});

$("#btnStart4").click(function(){
    window.location = "index.html"
});

// var settings = [];
// settings.push(storeDisplay);
// I made this as an attempt to push the store loaction response to the loccationDisplay element in the HTML



 


// var box1 = $("#box-1").val();
// var box2 = $("#box-2").val();
// var box3 = $("#box-3").val();
// var box4 = $("#box-4").val();
// var box5 = $("#box-5").val();
// var box6 = $("#box-6").val();
// var box7 = $("#box-7").val();
// var box8 = $("#box-8").val();

//       function onClickBox() {
//             if($('#box-1').is(':checked')){
//                 localStorage.setItem("checkbox1", (box1));
//             }
//             else{
//                 localStorage.removeItem("checkbox1");
//             }
        
        
//             if($('#box-2').is(':checked')){
//                 localStorage.setItem("checkbox2", (box2));
//             }
//             else{
//                 localStorage.removeItem("checkbox2");
//             }
        
        
//             if($('#box-3').is(':checked')){
//                 localStorage.setItem("checkbox3", (box3));
//             }
//             else{
//                 localStorage.removeItem("checkbox3");
//             }
        
        
//             if($('#box-4').is(':checked')){
//                 localStorage.setItem("checkbox4", (box4));
//             }
//             else{
//                 localStorage.removeItem("checkbox4");
//             }
        
        
//             if($('#box-5').is(':checked')){
//                 localStorage.setItem("checkbox5", (box5));
//             }
//             else{
//                 localStorage.removeItem("checkbox5");
//             }
        
        
//             if($('#box-6').is(':checked')){
//                 localStorage.setItem("checkbox6", (box6));
//             }
//             else{
//                 localStorage.removeItem("checkbox6");
//             }
        
        
//             if($('#box-7').is(':checked')){
//                 localStorage.setItem("checkbox7", (box7));
//             }
//             else{
//                 localStorage.removeItem("checkbox7");
//             }
        
        
//             if($('#box-8').is(':checked')){
//                 localStorage.setItem("checkbox8", (box8));
//             }
//             else{
//                 localStorage.removeItem("checkbox8");
//             }
//           }