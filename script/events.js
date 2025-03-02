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
    alert("Board updated Successfully");

    this.disabled = true;

 const notAdd = document.getElementById("low")
 const add = document.getElementById("up")
 
//  console.log(notAdd)
//  console.log(typeof notAdd.innerText)
const convertedNotAdd = parseFloat(notAdd.innerText)
const convertedAdd = parseFloat(add.innerText)

// console.log(typeof convertedNotAdd)
let result = convertedNotAdd - 1;
let result2 = convertedAdd + 1;

console.log(result)
document.getElementById("low").innerText = result;
document.getElementById("up").innerText = result2;
// console.log(typeof add.innerText)
// console.log(typeof convertedAdd);
console.log(result2)



   })
}
    

   


// function btn(){
//    alert()
// }
