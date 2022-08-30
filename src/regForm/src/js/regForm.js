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
    let url = 'http://129.12.44.231:80/getusers';
    // let port = 8081; // attempt to specify so k8s can connect it to reverse proxy

    try {
        let response = await fetch(url);
        var data = await response.json();
        
    } catch (error) {
        console.log(error);
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
        if(((data[i].project_name.length >=1) && (loginCookieToObj.login == data[i].student_id))) {
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





 //Method to read excel file and convert it into JSON 
 function upload() {
    var files = document.getElementById('file_upload').files;
    excelFileToJSON(files[0]);
 }
 
 function excelFileToJSON(file){
    try {
      var reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = function(e) {

          var data = e.target.result;
          var excel = XLSX.read(data, {
              type : 'binary'
          });
          var result = {};
          excel.SheetNames.forEach(function(sheetName) {
          var row = XLSX.utils.sheet_to_row_object_array(excel.Sheets[sheetName]);
          if (row.length > 0) {
              result[sheetName] = row;
              //Test if headers are correctly formatted
              if (("student_id" in result[sheetName][1]) == false){
                alert("Invalid excel format. student_id must be a header for student ids");
                return;
              }
              if (("student_name" in result[sheetName][1]) == false){
                alert("Invalid excel format. student_name must be a header for student names");
                return;
              }
              if (("degree_title" in result[sheetName][1]) == false){
                alert("Invalid excel format. degree_title must be a header for degree titles");
                return;
              }
              if (("supervisor_1_name" in result[sheetName][1]) == false){
                alert("Invalid excel format. supervisor_1_name must be a header for supervisor names");
                return;
              }

        
              for (i=0; i< result[sheetName].length; ++i){
              // Test if student_id data is alphanumeric. If doesn't contain numbers and letters, throw alert warning of accepted format
              if (/\d/.test(result[sheetName][i].student_id) == false && result[sheetName][i].student_id != null){
                alert("Invalid excel data. Student ID should contain letters and numbers e.g. 'abd123'. Error at id: " + result[sheetName][i].student_id);
                return;
              }
              if (/[a-zA-Z]/.test(result[sheetName][i].student_id) == false && result[sheetName][i].student_id != null){
                alert("Invalid excel data. Student ID should contain letters and numbers e.g. 'abd123'. Error at id: " + result[sheetName][i].student_id);
                return;
              }

              // Test if student names are valid
              if (/\d/.test(result[sheetName][i].student_name) == true && result[sheetName][i].student_name != null){
                alert("Invalid excel data. Student names should not contain numbers. Error at student: " + result[sheetName][i].student_name);
                return;
              }
              if (/[a-zA-Z]/.test(result[sheetName][i].student_name) == false && result[sheetName][i].student_name != null){
                alert("Invalid excel data. Student names should contain letters. Error at student: " + result[sheetName][i].student_name);
                return;
              }

              if (/\d/.test(result[sheetName][i].supervisor_1_name) == true && result[sheetName][i].supervisor_1_name != null){
                alert("Invalid excel data. Supervisor names should not contain numbers. Error at supervisor: "+ result[sheetName][i].supervisor_1_name);
                return;
              }
              if (/[a-zA-Z]/.test(result[sheetName][i].supervisor_1_name) == false && result[sheetName][i].supervisor_1_name != null){
                alert("Invalid excel data. Supervisor names should contain letters. Error at supervisor: "+ result[sheetName][i].supervisor_1_name);
                return;
              }
            }
            
            for (i=0; i< result[sheetName].length; ++i){
              fetch('http://129.12.44.231:80/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(result[sheetName][i]),
                })
            }

        }});
          }
      }catch(e){
          console.error(e);
      }
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
