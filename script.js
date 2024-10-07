//your JS code here. If required.
let counter=0;
let button=document.getElementById("incrementBtn");
let counterParagraph=document.getElementById("counter");
button.addEventListener("click",()=>{
	alert("current counter value: "+counter);
	counter++;
	counterParagraph.textContent=counter;
})
