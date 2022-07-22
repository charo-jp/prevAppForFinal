[[_TOC_]]

## Prerequisites

The following are required for this application to run locally:
 - Java SE 17
 - Docker
 - psql (postgres command line tool)

### Running the Application Locally

This project uses docker-compose to spin up database and java application containers
locally, for local development and local running only. 

Running the java application with a persistent postgres database will come in a later development.

### Commands List

To spin up 2 local containers for the database and web applications, run: 

`docker-compose up`

To run a postgres container locally, with the correct user, pw, and DB

`docker run -it --rm -e POSTGRES_PASSWORD=apptest123  -e POSTGRES_USER=appuser -e POSTGRES_DB=example -p 5432:5432 postgres:12.3-alpine `

To generate a build of the application using the Gradle wrapper and then run it, run:

`./gradlew clean build bootRun`

To connect to the database container (databse container must already be running)

`psql -h localhost -p 5432 -d "example" -U appuser -W` - password is apptest123

To check that the tables are created by flyway (or you can do a select * from ;)

`\dt example_schema.*`

To test the api (mac/linux only):

`curl --request GET 'http://localhost:8080/getusers' --header 'Content-Type: text/plain'`

Powershell equlivalent (in testing)
`Invoke-WebRequest - Uri 'http://localhost:8080/getusers' --header 'Content-Type: text/plain'`



# Contacts
| Name | Email |
|------|-------|
| James Brunkow | [jwb50@kent.ac.uk](mailto:jwb50@kent.ac.uk) |
| Jordan Duong | [jd647@kent.ac.uk](mailto:jd647@kent.ac.uk) |
| John Hayford | [jbkh2@kent.ac.uk](mailto:jbkh2@kent.ac.uk) |
| Rogerio de Lemos (Supervisor) | [r.delemos@kent.ac.uk](mailto:r.delemos@kent.ac.uk) |

# Background Research

Document on microservices and how they came about, what problems they solve, how they differ from virtual machines

Info on Kubernetes and Docker

# Planning

#### Meeting Minutes

<details>
<summary>Click to expand</summary>

<table>
<tr>
<th>Date</th>
<th>Discussed</th>
<th>Actions for next meeting</th>
</tr>
<tr>
<td>20/06/22</td>
<td>

* Discussed documentation layout
* User stories and UML diagrams for each microservice
* Agile methodology
* Test Driven development
* Simple front end for service
</td>
<td>

James

* Set up GitLab
* Work on local Kubernetes and docker

John and Jordan

* Refamiliarize with software engineering
* Look into Web Development module
</td>
</tr>
<tr>
<td>24/06/22</td>
<td>

Supervisor meeting (Rogerio)

* Look into daily scrum meetings
* Explanation of early deliverables
* JB experimented with local Kubernetes cluster
</td>
<td>

* Develop first draft for user stories
* Request access to Kent Cloud Computing to link with Kubernetes cluster
</td>
</tr>
<tr>
<td>25/06/22</td>
<td>

* Discussed and broke down previous meeting
* Scrum-like meetings Monday to Friday
* Risk assessment done by James
</td>
<td>

* Develop user stories for microservices including all shareholders (students, academic staff and professional services)
* John to research frontend and software packages that can be used
* Jordan to created initial UML diagram for project registration microservice
</td>
</tr>
<tr>
<td>27/06/22</td>
<td>

* User stories need to be redrafted and condensed
* Look at Gantt chart
* Lucid suggested to help with UML diagrams
</td>
<td>

* Jordan to condense an rework user stories
* Look into additions to risk assessment
* Work on a UML document
* John to further look into UI for frontend and ways to manage inputted data
</td>
</tr>
<tr>
<td>30/06/22</td>
<td>

* Plans for timeline of development phase of project
* Simple HTML/CSS decided for front end to keep things simple
* James made amendments to Jordan's class diagram and started on a sequence diagram
* Shared access to GitLab
* Feedback made on user stories -- merge discuss, select and publish microservices
* Discussions on ethical review aspect of project registration microservice
</td>
<td>

* Jordan to continue work on user stories and a use case diagram
* John to continue with frontend design
* James continuing with Kubernetes cluster
</td>
</tr>
<tr>
<td>01/07/22</td>
<td>

Supervisor meeting (Rogerio)

* Jordan and John should look into developing their own Kubernetes clusters
* Further feedback on user stories -- further simplification
* Additional user stories suggested for implementation
* Insight into the roles of different shareholders (Supervisors, professional services, module convenors and director role)
</td>
<td>

* Further polishing of user stories
* Jordan and John look further into Docker and Kubernetes
* James working on implementing a database into Kubernetes cluster
* Look into Springboot to containerise Java applications
</td>
</tr>
<tr>
<td>04/07/22</td>
<td>

* John shows beginnings for front end, discussed additional features
* Discussed early deliverable and what to include
* James discussed progress into Springboot
* Jordan discussing progress in Kubernetes and Docker
* Aim to start development next week
</td>
<td>

* Jordan to begin documentation and building up of GitLab
* James working on getting Java application to communicate with database in cluster
</td>
</tr>
<tr>
<td>05/07/22</td>
<td>

* James succeeded in communication between Java and database in cluster
* John showed progress on fronted implementation -- showed ability to add and remove group members from registration form
* Jordan showed work on GitLab -- user stories added under issues and started work on wiki
* James gave suggestions on building the wiki
</td>
<td>

* James to continue progress on Springboot
* John to work out some bugs on frontend when removing group members on registration form
* Jordan to further work on GitLab wiki and research into auto devops from GitLab
</td>
</tr>
<tr>
<td>07/07/22</td>
<td>

* Discussed state of each component of the project thus far, and what tools are being used.
* John discussed overcoming roadblocks on JS work and plans for the Ethics form. As much business logic as possible to be in the java instead of having to use out-of-context JS. 
* Jordan showed developments with the Gitlab, discussing implementations for CI and K8s, as well as the work done on the wiki for documentation. 
* James explained how the recently committed code works, and how to run it in its current state. Looking to continue this development over the weekend. 
</td>
<td>
* Jordan to pull GitLab Java folder and look into how best to implement business logic, as well as becoming more familiar with the structure of the project thus far.
* James to Containerise second microservice, having another readme file of how to containerise applications, and how to run them together from an image. Build a single node instance of K8s on university VM, attempt to run some code on it.
* John to finish registration form, containerise, upload to Gitlab in whatever fashion works best. Develop ideas for how best to implement the ethics form, with hopes of beginning the development of this next week.
* All members of the team are to make code pull and commits, however small, to ensure they are set up for the rest of the development.
</td>
</tr>
<tr>
<td>08/07/22</td>
<td>
Supervisor meeting

* Rogerio ‘not happy’ John can’t attend
* Team updated Rogerio on status of project
* Discussed how Rogerio would like the K8s implementation configured, single node (current config) vs full scale cluster. 
* Stated a full cluster was necessary for the development. 
* Discussed additional features and user stories
</td>
<td>
* Jordan and John to have run something on k8s, and be able to provide evidence of this (maybe using minikube, for space concerns?)
* James to add Rogerio to GitLab as developer
* James to continue to develop cluster
* Jordan to add user story for developer interface (6th stakeholder in project). Should have the functionality to add and remove qs from any form on frontend, database should see this and respond accordingly.
* Jordan to have a full list of user stories available for Friday.
* John to consider how to implement different frontends based on users with different privileges.

</td>
</tr>
<tr>
<td>12/07/22</td>
<td>
* Discussed containerising js, sub-moduling it to main repo, look into outputting frontend data in json.
* Team discussed additional components to be added to json fields to be logged. 
* Discussed next steps with the java code, how to operationalise the controller
* Discussed the state of openstack, that 1) the group only has one instance each and 2) the group does not share access to a project. James has emailed the cs-syshelp email address monday regarding this, waiting for response
</td>
<td>
*Jordan and James to do pair programming on some elements of the java controller
* James to add group members as array in json and java stuff, as well as whether the person’s degree is cybersec focused or not. 
* James to research reporting 3rd party solutions, prometheus and grafana
* John to look at submoduling his code to the main repo, as well as how to output json in the same format as the java takes it in. 
</td>
</tr>
<tr>
<td>14/07</td>
<td>

* John working on converting data into a JSON - needs more research into php
* Jordan working on running through Java and converting JSON into java to send to database
</td>
<td>

* Continue working on given work
* Question Rogerio in meeting about if we need multiple instances for clusters and how to request access to more instances on OpenStack
</td>
</tr>
<tr>
<td>15/07</td>
<td>

* Meeting with Rogerio
* Issues with formatting of user stories
* Documentation should be on the repository and not on the wiki
* John struggling with converting group project members into JSON
* (After meeting with Rogerio)
* Jordan suggested John focus on accepting individual projects for now
</td>
<td>

* Move documentation to repository
* Add conversations into user stories and better testing conditions
* John to change code to accept only individual projects for now
* Jordan to work on a parallel Java demo that might be a better solution to current Java - Need to ask James' opinion after his break
</td>
</tr>
<tr>
<td>18/07</td>
<td>

* Helped John set up VM on OpenStack
* John succeeded in converting data to JSON
* John working on containerising php
* Jordan managed to fix OpenStack console not opening for instances
* Jordan continuing work on java
* Showed used variables for JSON file to ensure consistency between front and back end
</td>
<td>

* Containerise php
* Continue working on Java
</td>
</tr>
<tr>
<td>20/07</td>
<td>

* John successfully containerised but has trouble with getting submission to work on containerised instance
* Jordan nearly finished with Java app demo
* Jordan struggling with setting up k8s cluster
</td>
<td>

* Set up k8s cluster on OpenStack
* Work on containerised php and research into ways to fix it
* Finish off Java
</td>
</tr>
<tr>
<td>21/07</td>
<td>

* John still struggling with containerised version of php not working as intended - sent off email to Rogerio
* Jordan got an app deployed onto OpenStack
* Jordan helped John with setting up OpenStack to accept containers once he has figured out the problem
* Jordan moved documentation to repository
* Jordan fixed user stories
</td>
<td>

* John to fully set up cluster to be ready to deploy his image
* Show Rogerio user stories in next meeting
* John will not be able to attend the meeting with Rogerio
* Jordan to finished off java demo
* John to continue working on php and having it work with the submission form
</td>
</tr>
</table>

</details>

#### User Stories (Currently only project registration)

<details>
<summary>Click to expand</summary>

| User Stories | Details | Tests |
|--------------|---------|-------|
| As a student I want to be able to provide my student information when registering for projects | Details will include student id, name and course details | Input name, student id and course details into provided boxes. The boxes should be required and not allow submission if they are not filled out |
| As a student I want to be able to specify if my course is in cyber security and if my project is in cyber security | Check boxes will be given to specify | Check boxes to confirm that they are in cyber security. Leave boxes empty. Both scenarios should still allow students to submit the form |
| When registering projects, students should be able to specify whether it is a group or individual project | Registering as a group should open a section to input the information of group members | Tick checkbox when in a group project. Fill out provided section to open up when it is selected to input the details of group members |
| When registering a group project, notifications should be sent confirming each group member of their registration | The notifications would be sent in emails and have a section to confirm their place in the group | Register as a group. Emails sent will have a section to confirm or deny a user's place on the project. Accept and deny the registration |
| Students should be able to register supervisor details for their project | There can either be 1 or 2 supervisors | Register with 1 supervisor. Register with 2 supervisors. Fill out their information in the provided sections. Boxes should be required for submission |
| Students should be able to specify whether there are ethical considerations | When students confirm there are ethical considerations, provide a link to a checklist to be filled out for the ethical review. Also provide a text box to give a description of the project | Tick a box whether there are ethical concerns. Fill out the text box provided to explain the concerns. Click on the provided link to be directed to an ethical review checklist form to be filled out |
| Students should be able to check the status of their registration to see which group members still need to confirm the form | Students may be given a button to send reminders to group members to confirm their place on the project | Access form and check if all group members have accepted and registered their details to the project |
| Academics should be sent details of projects they are supervising to check that the topic is appropriate for the course of the student | Cyber security students should only be able to register to projects listed as cyber security | When students register, send the details to supervisors to check. There should be a confirmation that the students are registering for appropriate projects related to their course |
| Supervisors should be notified when they have been registered for a project by a student | Notifications will be sent by email to the relevant supervisor given by the student | Send notification to supervisor that they have been registered with a project. Check that email correctly provides project and student details |
| Supervisors should be able to OK or reject projects they are given by students | This could be provided in the email sent to notify supervisors of their registration to a project by a student | Accept project proposed by students. Reject project using the notification email sent |
| PS should be able to send reminders to both students and academic staff if they have not registered with a project | The reminders should be sent by email and could be sent all at once with a provided button | Send reminder email to students not registered. Send reminders to academic staff not registered with projects |
| PS should be able to generate a spreadsheet report of the statuses of all students and staff related to project registration | Students and staff might be separated into their own sections to allow for easy viewing | Query database and generate spreadsheet containing relevant information on project registration status, course details etc. |
| PS should be able to check if there are any students registered to a project not appropriate for their course | The spreadsheet will specifically search for cyber security students to check if their project is a cyber security one | Query database and check students that are registered with inappropriate projects for their course. E.g. Cyber security student not registered with a cyber security project |
| As a module convenor I would like to generate reports on how many of my students have registered for a project | Reports might also show if the student is in cyber security and if their project is in cyber security | Query database to check students that are in the module convenor’s course have registered a project |
| As a director of graduate studies I would like to be able to access a list of students and see their registration status as well as the statuses of supervisors | This would be similar to reports generated by PS and module convenors | Query for a spreadsheet detailing the information of students and academic staff |
| All users will have the ability to declare what type of user they are to be granted more access to the microservice | User types will be student, academic staff, PS, modules convenor or director of graduate studies. Each will provide varying levels of access to information | Tick box announcing user is a student, academic staff, PS, module convenor or director of graduate studies. Check that appropriate access has been provided for each user type |
| Superusers will need access to all parts of the microservice for development | Superusers should be able to change parts of the form such as adding or taking away required inputs | Register as superuser. Add or take away an input of the registration form. Submission of project should still be allowed after changing the form |

</details>

#### Gantt Chart (Needs revision)

<details>
<summary>Click to expand</summary>

![image](uploads/7a48d891e8315861f90baa86cda2bbdd/image.png)

</details>

#### Use case diagrams (Currently only project registration)

<details>
<summary>Click to expand</summary>

<span dir="">![](https://lh6.googleusercontent.com/ID3Mev38gskCWp0HHqSNWtSOaVvUh95E-BwDjTyoi4H8GkjAtkWH-4D4VtRQnSszk9XM4JKUUKg9hdVVnaGNoYtsGEomFWlsBCaLWUGjtCB3amL6GjMDopvZAp0L91S0a7SQaSJ1hnvBERz02w)</span>

</details>

#### Class diagrams (Currently only project registration)

<details>
<summary>Click to expand</summary>

<span dir="">![](https://lh3.googleusercontent.com/kyjiTcQUYyktu2G-MahXcCOD30g-PkAVNZUaM1E2qQIZjnJVWsnIl1AIRwfCwKRuQt_f70Dok8ID1T57fAJUcBYQ7eAz6EnLog4acNbLLcOQ2rV2zy_8SoWyhQqzKopQD6TcrNXx34Bss5davRk)</span>

</details>

#### Risk assessment

<details>
<summary>Click to expand</summary>

<div>

<table>
<tr>
<td>

Risk<span dir=""> </span>
</td>
<td>

Further Description<span dir=""> </span>
</td>
<td>

Risk Type (Somerville)<span dir=""> </span>
</td>
<td>

Likelihood P(e)<span dir=""> </span>
</td>
<td>

Severity L(e)<span dir=""> </span>
</td>
<td>

RE(e)<span dir=""> </span>
</td>
<td>

Minimization strategy<span dir=""> </span>
</td>
<td>

Contingency Strategy<span dir=""> </span>
</td>
</tr>
<tr>
<td>Software cannot integrate correctly</td>
<td>Elements of the software solutions implemented are non-compatible, either in what has been developed, or what third-party software is implemented. This would require lengthy workarounds, which may impact the performance and replicability of the code, or it may prevent features communicating with one another at all. </td>
<td>

Tools<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

25<span dir=""> </span>
</td>
<td>The team are using software solutions that are standardized throughout the industry - meaning the compatibility between solutions is likely very high. Before development reaches the coding phase, an understanding of each software solution being used, and how to integrate them will be developed by the team.</td>
<td>

If one software solution employed is incompatible with another, other software options will be explored<span dir=""> </span>
</td>
</tr>
<tr>
<td>

Personnel Shortfalls<span dir=""> </span>
</td>
<td>

Either through forced absence (illness) or through group attrition, the team lacks the required staffing to complete the project's goals in a reasonable time. More, if individuals in the group are unable to dedicate sufficient time to the project, or to engage in learning the core concepts of the project (such as Kubernetes) in sufficient detail, they will be significantly less effective in delivering a sufficient final product<span dir=""> </span>
</td>
<td>

People<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

25<span dir=""> </span>
</td>
<td>

Working remotely minimizes the chance of contracting illnesses which spread across the entire team. Helpful resources about elements of the project (such as web resources, online tutorials, and example code) will be vital in building a shared understanding of the task, and the considerable time and learning requirements of the project. <span dir=""> </span>
</td>
<td>

All documentation and plans about each ms visible to all team members, if someone is taken ill/leaves the project, the blueprints for how to build what they are building should still exist. Also, the structure of the project, in not being monolithic pieces of code, and the fact that the microservices developed are to function independently of one another mean if an ms must be dropped due to staffing issues, it should not impact the functionality of other ms's. Using issue tracking via GitLab will also allow the team to reallocate core issues if a member of the team is unable to complete a task or withdraws from the project for any length of time. <span dir=""> </span>
</td>
</tr>
<tr>
<td>

Inadequate preparation<span dir=""> </span>
</td>
<td>

Research into proposed code functions inadequate, end product ends up being unfit for purpose. Applies to both front-end and main body of code.<span dir=""> </span>
</td>
<td>

People<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

15<span dir=""> </span>
</td>
<td>

Before any coding begins, the team is collectively drawing up plans to build shared understanding of goals. Dedicating an entire sprint to preparing for each element of the project. <span dir=""> </span>
</td>
<td>

Utilize daily meetings with the team at the early stage to get up to speed on what each team member is working on.<span dir=""> </span>
</td>
</tr>
<tr>
<td>

Poor Code Quality<span dir=""> </span>
</td>
<td>

Inconsistent / unclear naming of variables, unnecessary loops, making multiple calls when one is appropriate, poor indenting and code spacing. Impacts code readability for those who pick up project later, also impacts performance of code. Even if it is functional, the unnecessary calls / loops may impact scalability of the code<span dir=""> </span>
</td>
<td>

Technology<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

15<span dir=""> </span>
</td>
<td>

Pair programming / code reviews at least once per week, more if required. We will aim to use programming languages that we are all familiar with.<span dir=""> </span>
</td>
<td>

Final sprint used to tidy code, refactoring any poor-quality code identified at the beginning of that sprint<span dir=""> </span>
</td>
</tr>
<tr>
<td>

Feature Drift<span dir=""> </span>
</td>
<td>

During the development of a microservice, secondary functionality may become possible to implement. This will take time away from the main functionality attempting to be developed, and lead to impaired functionality of the microservice, as well as impeding the development of the project. Moreover, it defeats the point of microservices, to provide a single modular function to a larger system.<span dir=""> </span>
</td>
<td>

Requirements<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

15<span dir=""> </span>
</td>
<td>

Daily team meetings to discuss specifics of what work will be done that day. Using user stories to build concise set of issues, listed on Kanban board on Gitlab to keep track of what everyone is working on. Detailed documentation and issue tracking listing exactly what features are to be developed and when. If additional features are identified through exploration of solutions to other issues, team is to leave these as user stories in the Gitlab, in the event we have additional time spare to revisit after development, or for the next set of developers to have a starting point. <span dir=""> </span>
</td>
<td>

If feature drift does occur and additional functionality is developed that is not core to the project, this should be commented out and eventually (time permitting) split off into its own microservice after the main body of the development is completed. <span dir=""> </span>
</td>
</tr>
<tr>
<td>

Overestimating project scope<span dir=""> </span>
</td>
<td>

The fact that the project is a prototype means some features should be built to be functional, instead of being fully deployment ready. Spending too much time perfecting one microservice / element of the project takes time away from other elements which can be more crucial to function.<span dir=""> </span>
</td>
<td>

Estimation<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

15<span dir=""> </span>
</td>
<td>

UML diagrams are created to illustrate the approximate functionality of features / microservices, and how they interact. Team to adhere to these as a means of minimizing the chance of going beyond the scope of the project. While other features may be identified as possibilities during development, the team are to note these as future developments for the project in the final writeup.<span dir=""> </span>
</td>
<td>

In the event that a ms takes far too long to develop due to it being improperly scoped beforehand, some ms's later in development may have to be missed out, and instead left fully documented and planned, for future developers to work on. <span dir=""> </span>
</td>
</tr>
<tr>
<td>

Poor Quality Documentation<span dir=""> </span>
</td>
<td>

As this project is both a prototype and something that will be developed further by other parties later, poor quality documentation may mean that elements of the code are not understandable so should not be carried forward into their developments. Moreover, if the method used to achieve functionality is not documented, then future developers may not be able to recreate the scenario that your code worked in, leading to it being useless<span dir=""> </span>
</td>
<td>

Requirements<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

9<span dir=""> </span>
</td>
<td>

Regular code reviews between members of team, to build shared understanding of expectations of code/documentation quality and to catch any instances of poor documentation. Any operations required to run code listed in a readme on GitLab<span dir=""> </span>
</td>
<td>

Goal to have most planning documentation done for early deliverable, which can receive feedback from the project supervisor. We will have wiki available on GitLab which everyone in the team can contribute to, as a central documentation repository, as well as having examples listed of how to comment on what code does<span dir=""> </span>
</td>
</tr>
<tr>
<td>

Poor security<span dir=""> </span>
</td>
<td>

Having the ability for one user to see another user's files, or to access the administrative components of the software meant for academics and professional services could lead to issues with data protection.<span dir=""> </span>
</td>
<td>

Technology<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

1<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

Basic validation protocols will be implemented during the development of the project with emphasis on attempting to view user 1's data as user 2, or similar scenarios. <span dir=""> </span>
</td>
<td>

The goal of this development is not to have a deployment ready solution, so if issues of security arise from our development, we can specify where we found the issues, how we would correct them given time, and present this as a known issue on the GitLab, for the next developer team to engage with this project to be aware of. <span dir=""> </span>
</td>
</tr>
<tr>
<td>

Poor Time Management<span dir=""> </span>
</td>
<td>

The required time to develop a feature is underestimated, or the amount of time being able to be given to the project by members of the team is underestimated. In the event that this results in incompletion of an integral feature to the overall function (such as the project registration ms) then this can have a significant impact on what is able to be developed later in the project. <span dir=""> </span>
</td>
<td>

Estimation<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

1<span dir=""> </span>
</td>
<td>

5<span dir=""> </span>
</td>
<td>

A project timetable Gantt chart has been developed, whereby the team will have ample time to focus on developments both collaboratively and individually. This should give each member of the team a time frame with which to complete specific developments. Daily meetings keep the rest of the team aware of the state of each component of the development, and if a part of the development is progressing slower than it should, the team can use pair programming to attempt development from a slightly different approach, possibly giving a breakthrough.<span dir=""> </span>
</td>
<td>

As well as having ample time to work on each component, the team has a window of roughly 2 weeks at the end of the project to troubleshoot any issues or to use as a buffer to make sure key features can be developed. If a ms is unable to be finished, the independent functionality of all other ms's should allow the software to still function without the unfinished component. Documentation for these components will also still exist, so the development can continue later. <span dir=""> </span>
</td>
</tr>
<tr>
<td>

Poor quality Interface<span dir=""> </span>
</td>
<td>

Despite all functionalities being present in the code, if the end user cannot interface with the software in an intuitive way, the software may end up being mistakenly misused<span dir=""> </span>
</td>
<td>

Technology<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

1<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

Due to time constraints of this project, a deployment-ready UI for the software will not be possible to develop, while maintaining goals for the rest of the project. Instead, the use of 3rd party solutions and a minimal but functional approach should minimize the development time for this component while maintaining usability<span dir=""> </span>
</td>
<td>

During the planning phase, the team are to develop idealized images of what the UI would look like for each feature. These are to be derived from researching comparable products and their implementations, as well as from examining user stories about necessary functionality. From this, future developments will be able to complete the UI to a high standard, in the process of making the project deployment ready.<span dir=""> </span>
</td>
</tr>
<tr>
<td>

Inflexibility with Project Development<span dir=""> </span>
</td>
<td>

Gold plating' documentation is a phenomenon derived from more traditional software development methodologies, which focuses on completing a software project to a spec and not worrying about further development or upkeep. With the present development, gold-plating our plans would prevent us exploring other ways of achieving the same goal with the software and would mean that the implementation would be based on the knowledge pool at the start of the development, which does not account for knowledge gained while doing the project. This can lead to limited implementations, or the inability for future developers to easily expand the scope of the project later in the software's life cycle. <span dir=""> </span>
</td>
<td>

Requirements<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

3<span dir=""> </span>
</td>
<td>

9<span dir=""> </span>
</td>
<td>

Beginning development earlier and focusing less on having each component highly specified before beginning gives developers time to explore the best way of tackling an issue. <span dir=""> </span>
</td>
<td> </td>
</tr>
</table>

</div>
</details>

#### 

#### 





