let githubRequest = new XMLHttpRequest;
githubRequest.open('GET', 'https://api.github.com/users/edgarcodethedream/repos');
githubRequest.send();
githubRequest.addEventListener('load', function() {
    let repositories = JSON.parse(this.responseText);
    console.log(repositories);
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.querySelector('ul');
    for (let i = 0; i < repositories.length; i++) {
        let project = document.createElement('li');
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }
});
