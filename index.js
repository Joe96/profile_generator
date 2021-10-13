const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Where are you located?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Tell me about yourself?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'Do you have LinkedIn profile you would like to share?',
        name: 'linkedInProfile',
    },
    {
        type: 'input',
        message: 'Do you have Github profile you would like to share?',
        name: 'githubProfile',
    },
]).then (function (surveyResults){
console.log(surveyResults)
var html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <title>Document</title>
</head>
<body>
    <p>${surveyResults.username}</p>
    <p>${surveyResults.location}</p>
    <p>${surveyResults.bio}</p>
    <p>${surveyResults.linkedInProfile}</p>
    <p>${surveyResults.githubProfile}</p>


</body>
</html>`
fs.writeFile('index.html',html,function(err){
if (err) {
    console.log(err)
};
})
})