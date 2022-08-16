let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");
let copyright = document.createElement("p");

//create text for paragraph
copyright.innerHTML = `Larasati Sodjati ${thisYear}`;

//insert paragraph to webpage
footer.appendChild(copyright);

//list technical skills
let skills = ["Java Script", "HTML","SAP and Salesforce Proficient", "Data Entry", 
"Microsoft Word, PowerPoint, Excel, and Outlook"];

//select the skills section by id
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

//create a loop
for(let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

//handle message form submit
let messageForm = document.getElementsByName("leave_message")[0];
let messageSection = document.getElementById("messages");
messageSection.hidden = true;
messageForm.addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;

    console.log(name);
    console.log(email);
    console.log(message);
    
    //display messages in list
    
    let messageList = messageSection.querySelector("ul")
    let newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href = "mailto: ${email}"> ${name}</a> wrote : <span> ${message} </span>`;
    
    //add remove button
    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", removeMessage);
    
    function removeMessage(){
        let entry = removeButton.parentNode;
        entry.remove();    
    }
    
    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    messageSection.hidden = false;    
    event.target.reset();

    //hide message list
    if(messageList== 0) {
        document.getElementById("messages").style.display = "none";
    }
   
}


