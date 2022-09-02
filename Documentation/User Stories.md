This page lists the user stories considered throughout the development.

<table>
<tr>
<th>User Stories</th>
<th>Details</th>
<th>Tests</th>
</tr>
<tr>
<td>

<span dir="">As a student I want to be able to provide my student information so that they can be used in the project registration form</span>
</td>
<td>

Information should include name, student id and degree programme that I am studying.

Invalid characters for inputs should be ignored.

<span dir="">From a degree standpoint, I will only be applying from the school of Computing</span>
</td>
<td>Input a valid name, student id and degree programme. Attempt to submit the form whilst leaving the input fields blank. Attempt to submit with invalid inputs – numbers or special characters for names, special characters for student id, an input that is not a degree programme.</td>
</tr>
<tr>
<td>

<span dir="">As a student I want to be able to specify if my project is in cyber security so that it can be it can be checked if my degree allows for the project type</span>
</td>
<td>

<span dir="">Cyber security students should only be able to register to a cyber security project</span>
</td>
<td>

<span dir="">Register a non-cyber-security project as a cyber security student. Register a cyber security project as a student that doesn’t study cyber security. Register a cyber security project as a cyber security student. Register a non-cyber security project as a non-cyber security student</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a student I want to be able to specify if my project is an individual or group project</span>
</td>
<td>

<span dir="">If it is a group project, there should be a section for me to announce my group members</span>
</td>
<td>Register an individual project. Register a group project. Fill out the section announcing group members. Attempt to fill out the section as an individual project</td>
</tr>
<tr>
<td>

<span dir="">As a student, I would like to be notified when I have been registered as part of a group project</span>
</td>
<td>

<span dir="">The notifications would be sent via email and have a section in the email to confirm my place on the group</span>
</td>
<td>

<span dir="">Register as a group. Check if emails were sent confirming the group members. Confirm or reject the place on the group project as a group member</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a student I would like to check the status of group members so that I can see whether they have confirmed their place on the project yet</span>
</td>
<td>There will be a section in the form to display the current status of each group member where only they have access to so that they can confirm or deny their place on the project</td>
<td>Check group member statuses. Attempt to confirm a member’s place on the project on their behalf.</td>
</tr>
<tr>
<td>

<span dir="">As a student I should be able to provide information on the project supervisor when registering for a project</span>
</td>
<td>

There can be any number of supervisors supervising a project

<span dir="">There must be at least one supervisor for every project</span>
</td>
<td>

<span dir="">Register with one supervisor. Register with multiple advisors. Attempt to register with no supervisors</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a student I would like to send reminders to group members so that they can be notified that they have not confirmed or denied their place on the project</span>
</td>
<td>

<span dir="">Notifications will be able to be sent from the section viewing group member status. Group members that have already confirmed or denied their place should not be able to be sent reminders</span>
</td>
<td>

<span dir="">Send notifications to group members that have not confirmed their place. Attempt to send notifications to group members that have already confirmed or denied their place on the project</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a student I should be able to specify if my project has any ethical concerns so that they can be reviewed by the appropriate ethical boards.</span>
</td>
<td>I should be able to specify what the concerns are and how they apply to my project</td>
<td>Register a project with no ethical concerns. Register a project with ethical concerns. Attempt to register with ethical concerns and leave the text box blank. Register with ethical concerns and fill out the text box describing the project</td>
</tr>
<tr>
<td>As a supervisor I should be sent details of the projects that I am supervising to check that they are appropriate for the student</td>
<td>

<span dir="">I should be able to see the student’s information and the details of the project</span>
</td>
<td>

<span dir="">View project details and student details. Attempt to view projects being supervised by other supervisors</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a supervisor I should be able to generate reports on students that I am supervising so that I can see if their project is appropriate for them</span>
</td>
<td>

<span dir="">I should be able to see if a cyber security student is registering to a project that is not listed as a cyber security project</span>
</td>
<td>

<span dir="">Generate report on students being supervised. Attempt to create reports on students being supervised by other supervisors. Check that cyber security students are highlighted if they are applying for a non-cyber-security project</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a supervisor, I should be notified when students register me for their project</span>
</td>
<td>Notifications will be sent by email when the student submits their project registration form and provide the form for viewing by me</td>
<td>

<span dir="">Check email is sent when student submits form. Check that the details of the form are provided in the email</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a supervisor, I should be able to accept or reject the projects being registered with me as the supervisor</span>
</td>
<td>I will be able to accept or reject in the email sent to notify me or on my own personal page</td>
<td>

<span dir="">Accept or reject projects using notification email. Accept or reject using personal page</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a supervisor, I should have access to my own page where I can see the projects that I am supervising over</span>
</td>
<td>

<span dir="">The students and projects I am supervising will be listed out in this page</span>
</td>
<td>See if supervisor has access to the page. See if only projects and students being supervised by that supervisor are being shown</td>
</tr>
<tr>
<td>

<span dir="">As a supervisor, I should be able to delete projects associated with me when they have been registered erroneously</span>
</td>
<td>The project should be deleted from the database and not show up on my personal page</td>
<td>

Delete project from supervisor page

<span dir="">Check that project also no longer shows in the database</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a member of professional services (PS), I should be able to remind students and supervisors if they are not registered to a project</span>
</td>
<td>The reminders will be sent by email. There could be a button to automatically remind all such students and supervisors</td>
<td>Send reminders to students and staff not registered. Attempt to send reminders to students and staff that are already registered to a project</td>
</tr>
<tr>
<td>As a member of professional services (PS), I should be able to generate a report on all students and supervisors</td>
<td>

The report will show the projects and information of each student and supervisor.

<span dir="">Reports will be generated in the form of excel spreadsheets and will be able to be filtered based on name, degree etc.</span>
</td>
<td>Query database on specific filters, such as those not registered to projects or those that are cyber security students</td>
</tr>
<tr>
<td>

<span dir="">As a member of professional services (PS), I should be able to check if there are any students registered to projects that are not appropriate for their course</span>
</td>
<td>The system will specifically search for cyber security students not registered with a cyber security project</td>
<td>

<span dir="">Query database on cyber security students registered to non cyber security projects.</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a member of professional services (PS), I should be able to notify and reject projects that cyber security students have registered with if the project is not listed as cyber security</span>
</td>
<td>

<span dir="">The notification will be sent by email to the student</span>
</td>
<td>

<span dir="">Reject a project of a student. Check that a notification email is sent to that student only. Reject a group project and check that all group members are notified</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a member of professional services (PS), I would like to upload an excel spreadsheet into the database that contains student information and projects already registered by students</span>
</td>
<td>

<span dir="">The spreadsheet will automatically update the database. There will be a specific format to the spreadsheet that must be followed</span>
</td>
<td>

<span dir="">Upload an excel spreadsheet. Attempt to upload an invalid spreadsheet. Attempt to upload something other than an excel spreadsheet</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a director of graduate studies, I would like access to a list of students and supervisors and see if they have registered with a project yet</span>
</td>
<td>This will be the same functionality as the one used by PS</td>
<td>Query spreadsheet for information on all students and staff</td>
</tr>
<tr>
<td>

<span dir="">As a user, I would like to be able to specify if I am a student, supervisor, director of graduate studies, module convenor or a superuser to gain access to the relevant sections of the system</span>
</td>
<td>

<span dir="">Each user type will have varying levels of access to information. Students will have access to no information or report generation, supervisors will only have access to their own students whilst PS will have access to all students and supervisors</span>
</td>
<td>

<span dir="">As a student, attempt to generate a report or upload an excel spreadsheet. As anyone else, attempt to register a project as a student. As a supervisor, attempt to generate reports on students being supervised by other supervisors.</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a superuser, I would like a developer mode where I can change the fields of the registration form and add inputs if they become necessary</span>
</td>
<td>Adding fields should automatically update the database so that it can accept the new input</td>
<td>

<span dir="">Register as a superuser. Attempt to add or remove fields from the registration form. Check if forms can still be submitted after there have been changes. Check that database has been updated with the changes made on the front-end</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a developer I would like the backend Spring Boot application of the registration form to be able to read to and write from the database.</span>
</td>
<td>This will be completed when a POST and GET request both exist in the Java application</td>
<td>

<span dir="">Using Postman as a substitute for a frontend sending requests, send a POST request to the appropriate localhost address with a JSON payload matching what the frontend would provide. Using Postman again, perform a GET request on the database, to see if the data entered in the POST is present in the DB</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a developer, the requests made of the software I am working on will likely change. As such I would like to be able to modify the contents of the database without having to restart the database, which would delete all data inside</span>
</td>
<td>This will be complete when a solution exists to manage database migration from the backend to the database</td>
<td>

<span dir="">Using Flyway, a DB migration tool, we can alter the fields in the DB without losing the data. The test would be to add an additional field after adding data to the DB, and checking if the data still exists</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a developer I would like to be able to quickly create additional backend microservices from existing patterns.</span>
</td>
<td>This will be completed when I am able to duplicate the entire spring boot backend framework, modifying only the input and output fields, and it is functional after the fact.</td>
<td>

<span dir="">When constructing microservices which require their own backends, such as ethics, use the file structure of the regform backend, modifying the fields to a different use case. This would pass the test if the implementation required minimal other work</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a developer I would like the developed frontends and backend applications to communicate.</span>
</td>
<td>This will be partially completed when I am able to submit a file on the frontend of the registration form, and it can be read by the backend and added to the database. This will be fully completed when I am able to make GET requests on the frontend registration form.</td>
<td>

<span dir="">Data entered in the registration form frontend should be visible in the database. This can be tested by either using Postman to do a GET request of the spring app’s address, to determine the data is present, or by adding functionality to do this on the frontend.</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a developer I would like to have an automated framework for applying tests, checking builds and creating images from the code I’ve developed.</span>
</td>
<td>This will be complete when I am able to push code to a remote branch on gitlab, and the code is checked before it updates to the container repository.</td>
<td>

<span dir="">When a push is made to a master / main branch gitlab the relevant container should be sent to a separate VM which runs the dockerfile to build the container in question. If it builds successfully, the container should be saved as an image to be pulled from the gitlab container registry</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a developer I would like my automatically tested and built CI/CD pipeline to automatically deploy what I’ve created.</span>
</td>
<td>As well as adding a ‘deploy’ field to the gitlab-ci.yml file, this requires installation of a gitlab agent on the k8s cluster. Doing so creates a namespace called gitlab-agent, from which all deployments would occur.</td>
<td>

<span dir="">This will be completed when I am able to tag a pushed piece of code as ‘deployment ready’ which would trigger the automated CI/CD system to deploy the changes made to kubernetes.</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a student registering for a project which requires ethical checks, I would like to do minimal administration aside from answering the checklist.</span>
</td>
<td>This will be completed when the relevant ethical bodies (based on which checkboxes were ticked) are sent emails containing automatically generated PDF documents of the necessary information for a student’s ethics application.</td>
<td>

<span dir="">Tick one or more of each of the fields which would denote sending to each ethical body, as well as a combination of both. Use placeholder email addresses for the addresses of the ethics boards, ensure that the right email addresses are sent to depending on different combination of ticked boxes</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a supervisor of a student registering for a project which requires ethical consideration, I would like to see the ethics form before it gets sent for review.</span>
</td>
<td>This will be completed when the supervisor of an ethically considered project is able to see on their ‘supervised projects’ page the ethical status of a project. If an ethics form has been submitted, they are able to view it from here, return it to the student to ask for corrections, or if the form is satisfactory, ‘approve’ the form, sending it to the relevant body</td>
<td>

<span dir="">Submit an ethics request, ensure the supervisor is able to see the details of the submission, and is able to comment on them, send them back for review or forward the ethics form on to the relevant body.</span>
</td>
</tr>
<tr>
<td>

<span dir="">As a student registering for a project which requires ethical checks, I would like to be able to view the state of my application.</span>
</td>
<td>This will be completed when a field exists within the database for the ‘ethics status’ of a project, which is visible on the registration form upon logging back in.</td>
<td>

<span dir="">Submit an ethics request, and / or a project registration form. Ensure when either situation is fulfilled, the student is able to see an indication of ethics status. This should only be visible to students who require ethics checks.</span>
</td>
</tr>
</table>