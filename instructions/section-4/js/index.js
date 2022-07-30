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