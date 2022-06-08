var storeNames = $("#stores")


$("#btnStart1").click(function(){
    window.location = "citys.html"
});


$("#btnStart2").click(function(){
  apiCall();
});






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
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCIsImV4cCI6MTY1NDY0OTcxOSwiaWF0IjoxNjU0NjQ3OTE0LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjU4MTc4NjNhLTUzMTYtNThkYi1iNmY1LTBjYjI1OTVlNTQxMCIsInNjb3BlIjoiIiwiYXV0aEF0IjoxNjU0NjQ3OTE5NTU4NzA4MzExLCJhenAiOiJzdGVnZ3Npby04MjhmZmFkM2UzOWNhZGVmNThhNTdlYWRhMWJkM2UwMDU4NDI3NjQ0MzcyNDI3ODUyMCJ9.sIXdzbiTLeBTIhpwbeLzneqIm3VrFZejfCEtI8uOxT1iYTI1sDNIJMCp4VPxYIgK-1B_XQnSmAfIEX7m85j6MJCz4XvyT8r2lrhdoDfd3PfJxX9Flrrf0egonm22Ddx8pwtPZGCzyQFyNzdnCvl5oTj4jHzglMrKMdIRPwRDIAwZjyqvIXR3G2GqXm_F5HWIuY9T2ezosIez82xZhyUStXS7oyLb8NJVJHAjBTsG6MeiCwh1QLgmi_Labr4gr4qeiqt3U9cuQVDEWZq71y7N5icZ-xn54zxOAfuWhDZ2YJ3l_EXOlBm5iygOKDnR50e-AV7fxwiOFsRJitgL1WsHDw"
    }
  };

  

  $.ajax(settings).done(function (data) {
    console.log(data.data.length);
    let nameList = data.data;
    for(var i = 0; i < data.data.length; i++){
      var newEle = document.createElement('li');
      newEle.innerText = nameList[i].name;
      newEle.classList.add("names");
      storeNames.append(newEle);
     
      
    };
  })
};


// function pageChange(){
//   window.location = "results.html";
// };


















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