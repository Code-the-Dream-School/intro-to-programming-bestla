let today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<p> Copyright &copy; ${thisYear} Maryna </p>`;
footer.append(copyright);


const skills = ["Self-motivated and hardworking", "Quick learner", "Ability to work independently or as part of a team"];
const skillsSection = document.getElementById("skills");


let skillslist = document.querySelector("#list");

for (let i=0; i< skills.length; i++) {
    let skill=document.createElement("li");
    skill.textContent = skills[i];
    skillslist.appendChild(skill);
}


const messageForm = document.getElementById("form");

messageForm.addEventListener("submit", (e)=> {
e.preventDefault();
  const nameInput = e.target.name.value;
  const emailInput = e.target.email.value;
  const messageInput = e.target.message.value;
  console.log(nameInput,emailInput,messageInput);


    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML=`<a href="mailto:maryna.radchenko@gmail.com">${nameInput}</a> <span>wrote: &nbsp${messageInput}&nbsp &nbsp</span>`

    const removeButton = document.createElement("button");
    removeButton.textContent="remove";
    removeButton.type="button";

   removeButton.addEventListener("click", (e)=>{
     const entry = removeButton.parentNode;
     entry.remove();
    })
   newMessage.appendChild(removeButton);
   messageList.appendChild(newMessage);

   messageForm.reset();

 })

/* var githubRequest = new XMLHttpRequest();
 githubRequest.open("GET","https://api.github.com/users/marinacod/repos");
 githubRequest.send();

 githubRequest.addEventListener("load",(e)=>{
 var repositories = JSON.parse(githubRequest.responseText);
 console.log (repositories);
 

 let projectSection = document.getElementById("projects");
 let projectList= projectSection.querySelector("ul");
 
 for (let i=0; i<repositories.length; i++) {
  let project = document.createElement("li");
 project.innerHTML=repositories[i].name;
 projectList.appendChild(project);
 }}
 )
 */


 

        fetch("https://api.github.com/users/marinacod/repos")
        .then((response) => response.json())
        .then((repositories) =>{
            
            let myRepositories = repositories.filter((repo) =>
            repo.name.includes('intro-to-programming')
            )

            let projectSection = document.getElementById("projects");
            let projectList = projectSection.querySelector("ul");

            
            for(let repositories of myRepositories){
            let project = document.createElement("li");
            project.innerHTML = `<a href="${repositories.html_url}">${repositories.name}</a>`
            projectList.appendChild(project);
            }   
        })
          