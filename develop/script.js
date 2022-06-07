

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
})






 






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
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCIsImV4cCI6MTY1NDYzNjE0MCwiaWF0IjoxNjU0NjM0MzM1LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjU4MTc4NjNhLTUzMTYtNThkYi1iNmY1LTBjYjI1OTVlNTQxMCIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjU0NjM0MzQwODg1NDkzMTQxLCJhenAiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCJ9.lABfTXN0MLAIjaSJPZmpeeS0tGOlT9AoOxwwijn5cZ_YLCJdY6cNUsOns6wuRdfZ6H7D2gQv7otld7-9DsX0Wv9W4TPtFKA0XsPebaqmPj5jSTSJge637PgQVrk85SQYqQrcwOZzOFH5UHHWBWL_87oe4RDYQthGbuBU3ame1iSonYvb3z-IBUSv0m8PLgIAUDi5YIjgAqvdcEJFgTQ3BnkhVm0tegbcTnw_Va6DSYxtFOOCS1LcIgNY_r9kbAXo2wMtkxjoCHfByJikC8fwRvZpknNsHRyzp4WcpCkb4RuDz4kc1s2OAHge-6iEq2lb_wR35hCjitM1_NwOcWkZDQ"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
  
});
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