// if checkbox for special resources is checked then show input if not hide
$('#specialResourcesCheck').click(function() {
    let isChecked = $('#specialResourcesCheck').is(':checked');
    if(isChecked) {
        $('#specialResInput').show();
    }else{
        $('#specialResInput').hide();
    }
});

// if checkbox for ethics review is checked then show input if not hide
$('#ethicsReviewCheck').click(function() {
    let isChecked = $('#ethicsReviewCheck').is(':checked');
    if(isChecked) {
        $('#ethicsReviewInput').show();
        $('#checkList').show();
    }else{
        $('#ethicsReviewInput').hide();
        $('#checkList').hide();
    }

});

//********************
//*Permission control
//********************

  //getting id student loged in with from cookie
  var loginCookieToObj = document.cookie.split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) =>
      ({ ... accumulator, [key.trim()]: decodeURIComponent(value) }),
        {});

//geting logged in user's detail
async function getUser() {
    let login = $('#loginInput').val();
    let url = 'http://localhost:8080/getusers';
    try {
        let response = await fetch(url);
        var data = await response.json();
        
    } catch (error) {
        console.log(error);
    }
    console.log(data);


    studentData = [
      {instance_id: null, student_id: 'aa111', student_name: 'Adam', degree_title: 'Computer Science Conversion MSc', project_name: '', supervisor_1_name: '', supervisor_1_email: ''},
      {instance_id: null, student_id: 'bb222', student_name: 'Brandon', degree_title: 'Computer Science - MSc', project_name: '', supervisor_1_name: '', supervisor_1_email: ''},
      {instance_id: null, student_id: 'cc333', student_name: 'Charlie', degree_title: 'Cyber Security - MSc', project_name: '', supervisor_1_name: '', supervisor_1_email: ''},
      {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion', project_name: 'Understanding Money Mules: What, Who, Where, How and Why', supervisor_1_name: 'Shujun Li', supervisor_1_email: 'S.J.Li@kent.ac.uk'},
      {instance_id: null, student_id: 'nxa2', student_name: 'Nicolas Ah-Leung', degree_title: 'Cyber Security - MSc', project_name: 'When Radio Signal Strength Indicator (RSSI) meets Privacy', supervisor_1_name: 'Shujun Li', supervisor_1_email: 'S.J.Li@kent.ac.uk'},
      {instance_id: null, student_id: 'alpa2', student_name: 'Axel Ambert', degree_title: 'Advanced Computer Science - MSc', project_name: 'Using Computational Intelligence Methods to Produce Art', supervisor_1_name: 'Dominique Chu', supervisor_1_email: 'D.F.Chu@kent.ac.uk'},
      {instance_id: null, student_id: 'lapa3', student_name: 'Louis Anelli', degree_title: 'Cyber Security - MSc', project_name: 'Hiding in the Dark Web: Designing, Developing and Testing a Dark Web Sensing Toolkit', supervisor_1_name: 'Shujun Li', supervisor_1_email: 'S.J.Li@kent.ac.uk'},
      {instance_id: null, student_id: 'lbca3', student_name: 'Luke Ashton', degree_title: 'MSc Computer Science Conversion', project_name: 'Data Visualisation of Financial Data in Python', supervisor_1_name: 'Marek Grzes', supervisor_1_email: 'M.Grzes@kent.ac.uk'},
      {instance_id: null, student_id: 'atsa2', student_name: 'Alexis Auriac', degree_title: 'Advanced Computer Science - MSc', project_name: 'Educational Videos for Novice programmers', supervisor_1_name: 'David Barnes', supervisor_1_email: 'D.J.Barnes@kent.ac.uk'},
      {instance_id: null, student_id: 'ma2011', student_name: 'Mahnoor Aziz', degree_title: 'Advanced Computer Science - MSc', project_name: 'Ethics Generator', supervisor_1_name: 'Ozgur Kafali', supervisor_1_email: 'R.O.Kafali@kent.ac.uk'},
      {instance_id: null, student_id: 'rb756', student_name: 'Rosa Baker', degree_title: 'Advanced Computer Science - MSc', project_name: 'Educational Twitter Bots', supervisor_1_name: 'Stefan Marr', supervisor_1_email: 'S.Marr@kent.ac.uk'},
      {instance_id: null, student_id: 'amsb2', student_name: 'Abdullah Bakhashwain', degree_title: 'Networks and Security - MSc', project_name: 'Understanding Money Mules: What, Who, Where, How and Why - A Quantitative Analysis', supervisor_1_name: 'Shujun Li', supervisor_1_email: 'S.J.Li@kent.ac.uk'},
      {instance_id: null, student_id: 'mjb240', student_name: 'Michael Bateman', degree_title: 'Computer Science - MSc', project_name: 'AI to Produce Novel Images & Reverse Engineer Embroidery Formats', supervisor_1_name: 'Dominique Chu', supervisor_1_email: 'D.F.Chu@kent.ac.uk'},
      {instance_id: null, student_id: 'ovyb2', student_name: 'Olivier Belan', degree_title: 'Advanced Computer Science - MSc', project_name: 'The "Best" Mobile Messaging Service: Whatsapp/Signal/Telegram/Wire/Others', supervisor_1_name: 'Sanjay Bhattacherjee', supervisor_1_email: 'S.Bhattacherjee@kent.ac.uk'},
      {instance_id: null, student_id: 'spab2', student_name: 'Sebastien Bernard', degree_title: 'Networks and Security - MSc', project_name: 'Cyber Security Educational Games Using VR and/or Eye-Tracking', supervisor_1_name: 'Shujun Li', supervisor_1_email: 'S.J.Li@kent.ac.uk'},
      {instance_id: null, student_id: 'evb9', student_name: 'Etienne Bertrand', degree_title: 'Advanced Computer Science - MSc', project_name: 'Why Should Anyone Buy Antivirus Software? A Socio-technical Study', supervisor_1_name: 'Jason Nurse', supervisor_1_email: 'J.R.C.Nurse@kent.ac.uk'},
      {instance_id: null, student_id: 'nsb26', student_name: 'Nathan Bonnot', degree_title: 'Networks and Security - MSc', project_name: 'Seeing is Believing: Visualising Leaked Passwords', supervisor_1_name: 'Shujun Li', supervisor_1_email: 'S.J.Li@kent.ac.uk'},
      {instance_id: null, student_id: 'maeb3', student_name: 'Mael Brocher', degree_title: 'Networks and Security - MSc', project_name: 'Ethics Generator', supervisor_1_name: 'Ozgur Kafali', supervisor_1_email: 'R.O.Kafali@kent.ac.uk'},
      {instance_id: null, student_id: 'otb3', student_name: 'Owen Buckley', degree_title: 'MSc Computer Science Conversion', project_name: 'Data-Exploration Using R', supervisor_1_name: 'Dominique Chu', supervisor_1_email: 'D.F.Chu@kent.ac.uk'},
      {instance_id: null, student_id: 'djc70', student_name: 'Daniel Chapman', degree_title: 'MSc Computer Science Conversion', project_name: 'Interpreting Classifiers in Bioinformatics', supervisor_1_name: 'Alex Freitas', supervisor_1_email: 'A.A.Freitas@kent.ac.uk'},
      {instance_id: null, student_id: 'tc503', student_name: 'Tristan Choy', degree_title: 'MSc Computer Science Conversion', project_name: '', supervisor_1_name: '', supervisor_1_email: ''},
      {instance_id: null, student_id: 'dmc36', student_name: 'Daniel Constant', degree_title: 'Advanced Computer Science - MSc', project_name: 'IoT in the Midst of Fog', supervisor_1_name: 'Rogerio de Lemos', supervisor_1_email: 'R.Delemos@kent.ac.uk'},
      {instance_id: null, student_id: 'ka420', student_name: 'Joshua Cooper', degree_title: 'MSc Computer Science Conversion', project_name: 'Applying Machine Learning in Stock Trading', supervisor_1_name: 'Dominique Chu', supervisor_1_email: 'D.F.Chu@kent.ac.uk'},
  ];

  for( i =0; i < studentData.length; i++) {
        data.push(studentData[i]);
    }
  console.log(data);


    logingArray = [];
    loginName = [];
    studentLoginId = [];
    supervisor1EmailLogin = [];
    studentDegreeTitleArr = [];
    var studentCheck = 1;
    for( i = 0; i < data.length; i++) {
        //if requested login is the same as the cookie login
        if(loginCookieToObj.login == data[i].student_id) {
            logingArray.push(data[i].student_id);
            loginName.push(data[i].student_name);
            studentLoginId.push(data[i].student_id);
            studentDegreeTitleArr.push(data[i].degree_title);
            studentCheck = 2;
        }else if(loginCookieToObj.login == data[i].supervisor_1_email || loginCookieToObj.login == data[i].supervisor_1_name) {
            logingArray.push(data[i].supervisor_1_email);
            loginName.push(data[i].supervisor_1_name);
            studentCheck = 3;
        }else if(loginCookieToObj.login == 'jbkh2' || loginCookieToObj.login == 'bb222' || loginCookieToObj.login == 'cc333'){
            studentCheck = 4;
        }
        else{
            console.log('User does not exist');
        }
    }
    //storing student registered to project of supervisor
    studentRegisteredArr = [];
    for( i = 0; i < data.length; i++) {
        if(loginCookieToObj.login == data[i].supervisor_1_email || loginCookieToObj.login == data[i].supervisor_1_name) {
            studentRegisteredObj = {
                registeredStudentName: data[i].student_name,
                registeredStudentLogin: data[i].student_id,
                registeredStudentProjectName: data[i].project_name,
            };
            studentRegisteredArr.push(studentRegisteredObj);
        }
    }
    console.log(studentRegisteredArr);
    //list of students registered list in array
    registeredStudentListMessage = [];
    for( i = 0; i < studentRegisteredArr.length; i++) {
        let message = studentRegisteredArr[i].registeredStudentName + " is registered to " + studentRegisteredArr[i].registeredStudentProjectName;
        registeredStudentListMessage.push(message);
    }
    
    //add li element to table
    for( i = 0; i < registeredStudentListMessage.length; i++) {
        let createLiElement = '<li class="list-group-item" >' + registeredStudentListMessage[i] + '</li>';
        $('#registeredStudentsList').append(createLiElement);
    }


    //********************
    //*Registered Student
    //********************
    console.log(data[i].project_name.length);
    // Storing the data we want to show if they are registered
    registeredProject = [];
    projectSupervisor = [];
    console.log(studentLoginId);
    for( i = 0; i < data.length; i++) {
        //if student is registered
        if(((data[i].project_name.length >=1) && ((loginCookieToObj.login == data[i].student_id)))) {
            console.log('registered');
            registeredProject.push(data[i].project_name);
            projectSupervisor.push(data[i].supervisor_1_name);
        } //else if((data[i].project_name.length == 0) && (loginCookieToObj.login == data[i].student_id)) {
        //     console.log('not registered');
        // }
    }

    //***************************
    //*End of Registered Student
    //***************************
      





    //*************************************
    //* UnRegistered Student AutoFill Form
    //*************************************

    let degreeTitleSelect = [
      'Advanced Computer Science - MSc',
      'Computer Science - MSc',
      'Computer Science Conversion MSc',
      'Cyber Security - MSc',
      'Artificial Intelligence - MSc',
      'Computer Science (Artificial Intelligence) - MSc',
      'Networks and Security - MSc',
    ];

    for( i = 0; i < data.length; i++) {
      if((data[i].project_name.length == 0) && (loginCookieToObj.login == data[i].student_id)){
        $('#nameInput').val(data[i].student_name); //auto fills student name
        $('#loginInput').val(data[i].student_id); //auto fills student login
        
        //for Degree tittle, if  data degree title contains vale of dropdown list
        // then select that one
         for (i = 0; i < degreeTitleSelect.length; i++) {
          let studentDegreeTitle = studentDegreeTitleArr[0];
          let isDegree = degreeTitleSelect[i].includes(studentDegreeTitle);
          //auto selects degree title if degree title matches auto select the corresponding value
          if (isDegree) {
            $('#courseTitle').val(i + 1);
          }
         }
      }
    }
    
    //********************************************
    //*End of UnRegistered Student AutoFill Form
    //*********************************************



    const dataLogin = logingArray[0];
    // if(logingArray.length >= 1 && studentLoginId[0] == dataLogin){
      if(registeredProject.length == 0 ) {
        $('#registeredMessage').hide();
    }
      if(studentCheck==2){
        //handling elements not for students
        $('#file_upload').hide();
        $('#excel_upload').hide();
        $('#RegisteredStudents').hide();
        $('#generate_report').hide();
        //handling registered student
        if (registeredProject.length >=1 ) {
            $('.form-group').hide();
            $('#tickText').hide();
            $('#submitForm').hide();
            $('#registeredMessage').show();
            let registeredMessage = ' ' + registeredProject[0] + ' ' + 'your supervisor is ' + projectSupervisor[0] ;
            console.log(registeredMessage);
            let registeredMessageElement = document.getElementById('registeredMessage');
            registeredMessageElement.textContent += registeredMessage
        }
        //welcome message
        let welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent += ' ' + loginName[0] + ' { student }';
    // } else if(logingArray.length >= 1 && logingArray[0] == dataLogin) {
        } else if(studentCheck==3){
        //handling elements for supervisor
        $('#project_registration').hide();
        //welcome message
        let welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent += ' ' + loginName[0];
        console.log('Hi supervisor');
        } else if(studentCheck==4){
          $('#file_upload').hide();
          $('#excel_upload').hide();
          $('#RegisteredStudents').hide();
          $('#generate_report').hide();
        }

}



//****************************
//*END of Persmission Control
//****************************


async function sendJSON(){
    //storing input variables
    var studentId = document.getElementById("loginInput").value;
    var studentName = document.getElementById("nameInput").value;
    var degreeTitle = $("#courseTitle").find(":selected").text();
    var projectName = document.getElementById("projectName").value;
    var supervisor1Name = document.getElementById("supervisor1Name").value;
    var supervisor1Email = document.getElementById("supervisor1Email").value;
    var supervisor2Name = document.getElementById("supervisor2Name").value;
    var supervisor2Email = document.getElementById("supervisor2Email").value;
    var specialResourcesCheckPreNull = document.getElementById("specialResourcesCheck").value;
    var specialResourcesText = document.getElementById("specialResInput").value;
    var ethicsReviewCheckPreNull = document.getElementById("ethicsReviewCheck").value;
    var ethicsReviewText = document.getElementById("ethicsReviewInput").value;
    var cybersecProjectPreNull = document.getElementById("cybersecProject").value;
    var groupProject = 0;

    var ethicsStatus = "1";
    var projectStatus = "1";

    if (ethicsReviewCheckPreNull = 'on'){
       var ethicsReviewCheck = false
    } else {
        var ethicsReviewCheck = true
    }

    if (specialResourcesCheckPreNull = 'on'){
        var specialResourcesCheck = false
     } else {
        var specialResourcesCheck = true
     }
      
     if (cybersecProjectPreNull = 'on'){
        var cybersecProject = false
     } else {
        var cybersecProject = true
        }

    const data = { 
        "student_id":studentId,
        "student_name":studentName,
        "degree_title":degreeTitle,
        "project_name":projectName,
        "supervisor_1_name":supervisor1Name,
        "supervisor_1_email":supervisor1Email,
        "supervisor_2_name":supervisor2Name,
        "supervisor_2_email":supervisor2Email,
        "special_resources_check":specialResourcesCheck,
        "special_resources_text":specialResourcesText,
        "ethics_review_text":ethicsReviewText,
        "ethics_review_check":ethicsReviewCheck,
        "cybersec_project":cybersecProject,
        "group_project":groupProject,
        "project_status":projectStatus,    //1 for in progress, 2 for accepted, 3 for rejected
        "ethics_status":ethicsStatus      //1 for awaiting review, 2 for accepted, 3 for rejected
    };
    
    fetch('http://http://129.12.44.231:80/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    console.log(data);
}

  async function getName() {
    let url = 'http://129.12.44.231:80/getusers';
    let response = await fetch(url);
    var data = await response.json();
    jsonArray = [];


    for( i =0; i < data.length; i++) {
      if(loginCookieToObj.login == data[i].supervisor_1_email || loginCookieToObj.login == data[i].supervisor_1_name) {
          jsonArray.push(data[i]);
      }
    }

    if (jsonArray.length == 0) {
      alert("Data does not exist");
      return;
    }

    var excel = 'sep=,' + '\r\n\n';
    var value = "";
    for (var index in jsonArray[0]) {
        value += index + ',';
    }
    value = value.slice(0, -1);
    excel += value + '\r\n';
    
    //Double for loop to extract specific values
    for (var i = 0; i < jsonArray.length; i++) {
        var value = "";
        for (var index in jsonArray[i]) {
            value += '"' + jsonArray[i][index] + '",';
        }
        value.slice(0, value.length - 1);
        excel += value + '\r\n';
    }
    
    //Create element to link file to
    var link = document.createElement("a");    
    // Convert excel into excel file and link to element
    link.href = 'data:text/csv;charset=utf-8,' + escape(excel);
    
    //Hide element and use to download file automatically
    link.style = "visibility:hidden";
    link.download = loginCookieToObj.login + ".csv";
    
    //Remove element after downloading the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
  }
