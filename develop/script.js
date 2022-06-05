

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
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCIsImV4cCI6MTY1NDQ2MzgyMywiaWF0IjoxNjU0NDYyMDE4LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjU4MTc4NjNhLTUzMTYtNThkYi1iNmY1LTBjYjI1OTVlNTQxMCIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjU0NDYyMDIzMDc5MzYyOTQzLCJhenAiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCJ9.inl5doPwRsCqaD1_CZulfKwyn4szSXyr5vTOm2RCUfl_98oueKSLr8o4PXZkqxsVaYVeZGt3__5ASwvKilPZnlNMII3pIWgfupaMOXsblWnVW7vorWR0lKFXPWqAz7rp2qd88RlCPRRw25hdM3KHZG-r_0OL41Yy6JE2eyFw8TSxc7HYJ5DkXOuSkOQeBa11Q5ENV6PqeoTCXW2UY30XBFZ2CI3ggacGg0_CaI9vN046367__m6QAkyQqssHlgsU-DAx-XF2Z_H2TpJ0qT01rGzMFH0HgSWEg-t2IINi2DsuVY70ZONVikqUUj7g6PrxCifB4ZOY5ZmiTtr5jAsUog"
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