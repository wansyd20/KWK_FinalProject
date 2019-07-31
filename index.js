var dropbtn = $(".dropbtn");
var myDropdown = $("#myDropdown");

// dropbtn.on("click", showLocations);
// function showLocations(){
//   myDropdown.classList.toggle('show');
//}

//code to get rid of dropdown box... but it doesnt work :(
dropbtn = function(e) {
  console.log("first check")
 if (!e.target.matches('.dropbtn')) {
   console.log("second check")
 var myDropdown = $('#myDropdown');
 var dropbtn = $(".dropbtn");
   if (myDropdown.classList.contains('show')) {
     myDropdown.classList.remove('show');
     console.log("third check");
   }
 }
}
