document.getElementById("show").style.display = "none"

const btns = document.getElementsByClassName("btn")
//   console.log("hello")
for(const btn of btns){
   btn.addEventListener("click", function(){
const div = document.getElementById("show");
div.style.display= "block"


   })
}


