const colors = ["yellow", "pink", "Blue", "red"]
let index = 0;

document.getElementById('theme').addEventListener("click", function (event) {
   event.preventDefault();
   document.body.style.backgroundColor = colors[index];
   index = (index + 1) % colors.length;
});

document.getElementById("goToPage").addEventListener("click",
   function(){
      window.location.href = "new.html";
   }
)




// document.querySelectorAll(".btn")
const btns = document.querySelectorAll(".btn")
// const logContainer = document.getElementById("logContainer")
let clickedCount = 0;
const totalButtons = btns.length;
console.log(totalButtons)
//   console.log("hello")
for (const btn of btns){
   btn.addEventListener("click", function () {
      alert("Board updated Successfully");


      this.disabled = true;
      clickedCount++;

      // const taskTitle = titles[index].innerText;
      // const timeClicked = new Date().toLocaleTimeString()
      // const newLog = document.createElement("p")


      // newLog.classList.add("text-gray-400", "font-bold", "text-sm", "p-2");
      // newLog.innerHTML = `
      // you have completed "<span class = "text-gray-600"> ${taskTitle}</span>" <span class="text-gray-600"> ${timeClicked}PM</span>;
      
      // `
      // logContainer.appendChild(newLog);


      if (clickedCount === totalButtons) {
         setTimeout(() => {
            alert("congrates!!!you have completed all the current task");
         }, 500);
      }

         // const titles = document.querySelectorAll(".title");
         // titles.forEach(title => console.log(title.innerText)
         // );
         // const timeClicked = new Date().toLocaleTimeString();
         
        
     

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
   });
}

