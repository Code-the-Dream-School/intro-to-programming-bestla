//  Create a new date object and store it in a variable named today (hint: new Date() constructor)
var today = new Date();
// Retrieve the current year from your date object and store it in a variable named thisYear (hint: getFullYear method)
const thisYear = today.getFullYear();
// Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer (hint: querySelector method)
const footer = document.querySelector('footer');
// Create a new paragraph (p) element and store it in a variable named copyright (hint: createElement method)
const copyright = document.createElement('p');
// Set the inner HTML of your copyright element to display your name and the current year (hint: use thisYear variable from earlier)
copyright.innerHTML = `Olga Musteata, ${thisYear}`;
// Using "DOM Manipulation", append the copyright element to the footer (hint: appendChild method)
footer.appendChild(copyright);
// Add Skills Section. List your technical skills by creating an Array of String values and store it in a variable named skills
const skills = ["typing certificate - 50WPM", "completed a few projects in Visual Basic and Python", "know how to push/pull a project on GitHub", 
"worked with Access, Oracle and Excel", "edited books for a publishing company"];
// Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection (hint: querySelector or getElementById method)
const skillsSection = document.getElementById("skills");
// Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
const skillsList = skillsSection.querySelector('ul');
// Create a for loop to iterate over your skills Array, starting at index 0
// Inside the loop, create a new list item (li) element and store it in a variable named skill (hint: createElement method)  
// On the next line, set the inner text of your skill variable to the value of the current Array element (hint: access the Array element using bracket notation)
// On the next line, append the skill element to the skillsList element (hint: appendChild method)
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName('leave_message');

messageForm[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(name + " " + email + " " + message);
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    const span = document.createElement('span'); 
    newMessage.appendChild(span);

    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span>  `;
    
    //edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';

    messageList.addEventListener('click', (e) => {

        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            const li = button.parentNode;
            const ul = li.parentNode;
            if (button.textContent === 'remove') {
                ul.removeChild(newMessage);
            } else if (button.textContent === 'edit') {
                const span = newMessage.childNodes[2];
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent;
                newMessage.insertBefore(input, span);
                newMessage.removeChild(span);
                button.textContent = 'save';
            } else if (button.textContent === 'save') {
                const input = newMessage.childNodes[2];
                const span = document.createElement('span');
                span.textContent = input.value;
                newMessage.insertBefore(span, input);
                newMessage.removeChild(input);
                button.textContent = 'edit';
            }
        }
    }); 
    newMessage.appendChild(editButton);
    // remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = "button";
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
        });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    // 'Messages' appear only when there is a message:
    const title_messages = document.getElementById('title_h2');
    if (newMessage.innerText.length > 1) {
        title_messages.innerText = 'Messages';
    }
    messageForm.item(0).reset();
});
