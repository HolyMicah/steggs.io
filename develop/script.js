

$("#btnStart1").click(function(){
    window.location = "citys.html"
});


$("#btnStart2").click(function(){
   pageChange(); 
    
});


$("#btnStart4").click(function(){
    window.location = "index.html"
    
});


$("#submitIpt").click(function(){
  apiCall();
  // localInput();
});


// function localInput(){
//   var listItem = document.createElement('li');
//   let zip = localStorage.getItem("input");
//   listItem.textContent = zip
// }








function apiCall(){
    let searchIpt = $(".searchBar").val();
    localStorage.setItem("input", searchIpt);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.kroger.com/v1/locations?filter.zipCode.near=" + searchIpt,
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCIsImV4cCI6MTY1NDYzOTEzNSwiaWF0IjoxNjU0NjM3MzMwLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjU4MTc4NjNhLTUzMTYtNThkYi1iNmY1LTBjYjI1OTVlNTQxMCIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjU0NjM3MzM1NzczNDE4MjkzLCJhenAiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCJ9.kh5Aio89x9tjAnWZIPMS_e9qYZ935EYPCLlYJox0q905NKTHiuCx_vTWf02jKLMKTkmEpCoA0mS23OjAx_cnJmfUkgtkkxk8QYmGRl3H9IkQTbj_aqLMcZyAkIIj16vAH4f9KLNXeceNmdRdYyZG-ZZ9GzbLjxqCdE4BOmU2pu3rDSUfOocH4WPr6gngsvB8WzqoSUxaUIKcmfoKJyFiW0xp5beCqk9t-8dJk8sZe8DHooVyeUNYjiFMyoUgspE1rjDSUDPpNOwKq0biixMxp2vQVnz2_b6rIrKyC3esNmC-Dn5AxfNm8e9gBKbTKsvSWwsBcpRlt8Lf9GMYZ4sdFg"
  }
};

$.ajax(settings).done(function (response) {
 console.log(response);
})
};


function pageChange(){
  window.location = "results.html";
};


















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