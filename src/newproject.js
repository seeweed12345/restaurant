let projects = [];
let i = 0;

class Project {
  constructor(projectName) {
    this.projectName = projectName;
  }
}
function pressNewProjectButton() {
  document.querySelector(".newprojectbutton").addEventListener("click", () => {
    document.querySelector(".newprojectpopup").classList.remove("hidden");
  });
}

function pressAddNewProjectButton() {
  document.querySelector(".addprojectbutton").addEventListener("click", () => {
    let projectName = document.querySelector(".projectinput").value;
    projects[i] = new Project(projectName);
    i++;
    displayProjects();
    document.querySelector(".newprojectpopup").classList.add("hidden");
    document.querySelector(".projectinput").value = "";
  });
}

function displayProjects() {
  const element = document.querySelector(".projectslist");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  for (let x = 0; x < projects.length; x++) {
    let project = document.createElement("div");
    project.setAttribute(`class`, `${x}`);
    project.textContent = `${projects[x].projectName}`;
    element.appendChild(project);
  }
}

export { pressNewProjectButton, pressAddNewProjectButton };
