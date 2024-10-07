//your JS code here. If required.
let counter=0;
let button=document.getElementById("incrementBtn");
let counterParagraph=document.getElementById("counter");
button.addEventListener("click",()=>{
	alert(counter);
	counter++;
	counterParagraph.textContent=counter;
})
