let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");
let copyright = document.createElement("p");

//create text for paragraph
copyright.innerHTML = `\u00A9Larasati Sodjati ${thisYear}`;

//insert paragraph to webpage
footer.appendChild(copyright);

//list technical skills
let skills = ["Java Script", "HTML", "CSS","SAP and Salesforce Proficient", "Data Entry", 
"Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel", "Microsoft Outlook"];

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

//Projects with XHR
/*let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/larasodjati/repos");

//add event listener and callback function
githubRequest.addEventListener("load", function(){
    let repositories = JSON.parse(this.response);
    console.log(repositories);

//filtered out repositories name
    let filteredRepositories = repositories.filter((repo) =>
        repo.name.includes('intro-to-programming-bestla')
    )

    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

// create loop
    for(let repositories of filteredRepositories){
        let project = document.createElement("li");
        project.innerHTML = `<a href="${repositories.html_url}">${repositories.name}</a>`
        projectList.appendChild(project);
    }
})
githubRequest.send();
*/

//Projects with fetch API 
     fetch("https://api.github.com/users/larasodjati/repos")
        .then((response) => response.json())
        .then((repositories) =>{
            //filtered out repositories name
            let filteredRepositories = repositories.filter((repo) =>
            repo.name.includes('intro-to-programming-bestla')
            )

            let projectSection = document.getElementById("projects");
            let projectList = projectSection.querySelector("ul");

            // create loop
            for(let repositories of filteredRepositories){
            let project = document.createElement("li");
            project.innerHTML = `<a href="${repositories.html_url}">${repositories.name}</a>`
            projectList.appendChild(project);
            }   
        })
        .catch(error => alert(error.message));
        
       
        
    