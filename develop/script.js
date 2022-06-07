

$("#btnStart1").click(function(){
    window.location = "citys.html"
});


$("#btnStart2").click(function(){
  apiCall();
    
});







// function localInput(){
//   var listItem = document.createElement('li');
//   var zip = localStorage.getItem("input");
//   $(listItem).append(zip);
// };








function apiCall(){
  
  var searchIpt = $(".searchBar").val();
  localStorage.setItem("input", searchIpt);


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.kroger.com/v1/locations?filter.zipCode.near=" + searchIpt, 
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCIsImV4cCI6MTY1NDY0MTM4OSwiaWF0IjoxNjU0NjM5NTg0LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjU4MTc4NjNhLTUzMTYtNThkYi1iNmY1LTBjYjI1OTVlNTQxMCIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjU0NjM5NTg5MzcwMTczOTEwLCJhenAiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCJ9.ZacTlW0QA9lbSiMzm2h-GUvMAmRMY8aDYzVsXKtIJXtvAWMrHJ6Mgcvm3HXIsWrOejkfzjj1c4LOIf_pPcmTiEp3CEiyknKSWSNMS20vMFc4K36D3c8upiglWYRKTNAqUWZGKt-2do4x7xpaFXTU8Fcs1XRRytGA-EJ67n4P4RGQ6onqylgLJH64MoW2EOit3mnQrghK6PUaXqFezcD1LZqr9teMhVFWcm2v4fG3XbCdI1GyA7jBuvqK_TWBWmN0EOU3n2ZZMmliNEOCIy6tq1vaDxfeYmLDutQZ2bp2_FTTVW9P9HGlYqrK8YJ622OLpNnOdlqKOVOYzVpE7leBBw"
  }
};

$.ajax(settings).done(function (response) {
 console.log(response);
})
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