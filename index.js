var dropbtn = $(".dropbtn");
var myDropdown = $(".myDropdown");

button.on("click", showDrop);

function showDrop(){
  myDropdown.dropdown("toggle");
}
//code to get rid of dropdown box... but it doesnt work :(
window.onclick = function(e) {
 if (!e.target.matches('.dropbtn')) {
 var myDropdown = myDropdown;
   if (myDropdown.classList.contains('show')) {
     myDropdown.classList.remove('show');
   }
 }
}
