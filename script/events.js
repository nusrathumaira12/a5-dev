const colors = ["yellow","pink","Blue" , "red"]
let index = 0;

document.getElementById('theme').addEventListener("click", function(event){
event.preventDefault();
document.body.style.backgroundColor = colors[index];
index = (index + 1) % colors.length;
})

// document.querySelectorAll(".btn")
const btns = document.getElementsByClassName("btn")
//   console.log("hello")
for(const btn of btns){
   btn.addEventListener("click", function(){
    alert("Board updated Successfully")
 const notAdd = document.getElementById("low")
//  console.log(notAdd)
//  console.log(typeof notAdd.innerText)
const convertedNotAdd = parseFloat(notAdd.innerText)
// console.log(typeof convertedNotAdd)
let result = convertedNotAdd - 1;

console.log(result)
document.getElementById("low").innerText = result;

   })
}
    

   


// function btn(){
//    alert()
// }
