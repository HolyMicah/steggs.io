

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
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCIsImV4cCI6MTY1NDU3NTA5NCwiaWF0IjoxNjU0NTczMjg5LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjU4MTc4NjNhLTUzMTYtNThkYi1iNmY1LTBjYjI1OTVlNTQxMCIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjU0NTczMjk0OTM1NDcwNzg5LCJhenAiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCJ9.XbNJciN_QcTQmhnO_xQPMBf5XOJVxbzh_DlKN5j_7Xc59Ag4A0t0GD6RY5LnVRqKRNkeagHQJnRwytUnbjQ6tiZ_ZJlbPpb8ozxeEAW4vlCEUj4p3TL170Cs7db-P2hS0KOQl2XB7p_3X_Y-W1yMINaieOYHU3q6O_kEwhY4ek5etqXAc3RH_dcKOw0tnicacVHS3bnuvY-cxBivP0DdgUNYWpDp87Xk11gkLZP20qvjSralpdGiLeMaBLmsEHUDR0PzC7qXqXpTCKF8iaXdsE6ToWNOV3lVSHSyH1ML9Gc_YvQl2Z6OQbLLDsXTA2g6SWQ7kWZsO4wlxnJLGxCDKw"
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