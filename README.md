# JavaScriptAPI

**Set up:**
 1) Download copy : git@github.com:cahird/JavaScriptAPI.git
 2) Required: Node JS and NPM
 3) Required: Super Test
 4) Required: Cucumber – BDD
 3) To execute the tests run this command from root dir: npm test
 4) To generate a report run this command from root dir: node resport.js 

**CICD:**
  1) This framework can be attached to any pipeline 
  2) for example with Jenkins: 
        1) Create Git to Jenkins source code link with GIT-url, username, and password
        2) In the pipeline add "deploy" and 'test' steps
        3) Configure an agent
        4) to integrate with a test management tools like JIRA-Xray
             - add xray plugin with jenkins project
             - add user credentials
             - provide the correct URL

**Dependencies**
Note: please refer to repository-> package.json for the required dependecies

**Folder structure: **
<img width="947" alt="image" src="https://user-images.githubusercontent.com/111496750/189020078-118d721d-ad98-4e09-85a8-a45ab47256f4.png">

**Reporting:**
<img width="912" alt="image" src="https://user-images.githubusercontent.com/111496750/189020833-d8ff2595-4bcc-4c2c-824d-4ada9bfa22c7.png">

<img width="305" alt="image" src="https://user-images.githubusercontent.com/111496750/189020900-ffa9d1f8-8704-4958-9cab-01ed676c81d6.png">

<img width="305" alt="image" src="https://user-images.githubusercontent.com/111496750/189020970-c00f559f-ee32-4c4d-a97b-be79f8fa2d53.png">
