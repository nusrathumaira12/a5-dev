const logContainer = document.getElementById("logContainer");
logContainer.style.display = "none"

const btnns = document.querySelectorAll(".btn")

// const newLog = document.createElement("p")
const titles = document.getElementsByClassName("title")
// console.log(titles)
for(const title of titles){
    // console.log(title.innerText)
    const newT = title.innerText
    console.log(newT)
}

for(btn of btns){
    btn.addEventListener("click", function(){
logContainer.style.display = "block"

const timeClicked = new Date().toLocaleTimeString()
const newLog = document.createElement("p")
newLog.classList.add("text-gray-400", "font-bold", "text-sm", "p-2");
      newLog.innerHTML = `
      you have completed the task "<span class = " text-gray-400 font-bold text-sm"> ${titles.innerText}</span>" <span class="text-gray-600"> ${timeClicked}PM</span>;
      
      `
      logContainer.appendChild(newLog);
    })
}

document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("logContainer").style.display = "none"
})

