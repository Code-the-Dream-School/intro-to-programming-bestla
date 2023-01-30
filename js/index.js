
const today = new Date();

const thisYear = today.getFullYear();

const footer_parent = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerText = "Edgar Ruiz" + " " + thisYear;

footer_parent.appendChild(copyright);

/*
const skills = [
    "JavaScript / HTML / CSS / Python / Git / GitHub / DOM", 
    "Microcomputer / Microship, Basic, Assembly", 
    "Electronic circuit design / Altium Designer", 
    "PCB layout design / Altium Designer", 
    "3D mechanical modeling / Creo PTC, SolidWorks, AutoCAD", 
    "Mechanical drawing standard / ASME Y14.5M", 
    "PLM engineering document control / Enovia", 
];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

for( let x in skills) {
    const skills_li = document.createElement("li");
    skills_li.innerText = skills[x];
    skillsList.appendChild(skills_li);
}
*/


const messageForm = document.querySelector("form");

messageForm.addEventListener("submit", message_input);

//***PENDING - Add edit button and show & hide checkbox for messages section
function message_input(event) {
    //If i change the parameter name inted of "event" eg. "evt", funtion work different
    event.preventDefault();
    const text = event.target.name;
    const email = event.target.email;
    const message = event.target.message;
    const messageSecction = document.getElementById("messages");
    const messageList = messageSecction.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = '<a href="mailto:'+ email.value +'">'+ text.value +'</a>' + '<span> wrote: '+ message.value + ' </span>'; 
    
    //Remove button 
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    removeButton.addEventListener("click",() => {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    messageForm.reset();
}
