const today = new Date();
const thisYear = today.getFullYear();
var footer = document.querySelector("#copyright");
const copyright = document.createElement("p");
copyright.innerHTML = ` roselynn ${thisYear}`;
footer.appendChild(copyright);

const skills = ['Html,Css and Javascript','Drupal','Q|A with webdriversIO','Service Now'];
let skillsSection = document.getElementById("#skills")
let skillList = skillsSection.querySelector('ul') //grabs ul element from #skills 

for(let i = 0; i < skills.length; i ++){ 
    let skill = document.createElement("li")
    skill.innerText = skills[i];
    skillList.appendChild(skill)

}