const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const employees = [];

function init() {
    renderHtml();
    addEmployees();
}

function addEmployees() {
    inquirer.prompt([{
        message: "Enter name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter id",
        name: "id"
    },
    {
        message: "Enter email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let employeeRole = "";
        if (role === "Engineer") {
            employeeRole = "GitHub username";
        } else if (role === "Intern") {
            employeeRole = "School Name";
        } else {
            employeeRole = "Phone Number";
        }
        inquirer.prompt([{
            message: `Enter ${employeeRole}`,
            name: "employeeRole"
        },
        {
            type: "list",
            message: "add another member?",
            choices: [
                "yes",
                "no"
            ],
            name: "addedMember"
        }])
        .then(function({employeeRole, addedMember}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, employeeRole);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, employeeRole);
            } else {
                newMember = new Manager(name, id, email, employeeRole);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (addedMember === "yes") {
                    addEmployees();
                } else {
                    finish();
                }
            });
            
        });
    });
}

function renderHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Generator</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/index.html", html, (err) => {
        err ? console.log(err):console.log("Sucess");
    });
}

function addHtml(member) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let data = "";
    if (role === "Engineer") {
        const gitHub = member.getGithub();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3">
        <h5 class="card-header">${name}<br /><br />Engineer</h5>
        <ul class="list-group">
            <li class="list-item">ID: ${id}</li>
            <li class="list-item">Email Address: ${email}</li>
            <li class="list-item">GitHub: ${gitHub}</li>
        </ul>
        </div>
    </div>`;
    } else if (role === "Intern") {
        const school = member.getSchool();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3">
        <h5 class="card-header">${name}<br /><br />Intern</h5>
        <ul class="list-group list-group-flush">
            <li class="list-item">ID: ${id}</li>
            <li class="list-item">Email Address: ${email}</li>
            <li class="list-item">School: ${school}</li>
        </ul>
        </div>
    </div>`;
    } else {
        const officePhone = member.getNumber();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3">
        <h5 class="card-header">${name}<br /><br />Manager</h5>
        <ul class="list-group">
            <li class="list-item">ID: ${id}</li>
            <li class="list-item">Email Address: ${email}</li>
            <li class="list-item">Office Phone: ${officePhone}</li>
        </ul>
        </div>
    </div>`
    }
    console.log("adding member");
    fs.appendFile("./dist/index.html", data, (err) => {
        err ? console.log(err):console.log("Sucess");
    });
    
    
}

function finish() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/index.html", html, (err) => {
        err ? console.log(err):console.log("Sucess");
    });
}

init();