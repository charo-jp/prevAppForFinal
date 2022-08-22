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

//************ */
//******Permission control****** */
//************ */

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
    logingArray = [];
    loginName = [];
    studentLoginId = [];
    supervisor1EmailLogin = [];

    for( i = 0; i < data.length; i++) {
        //if requested login is the same as the cookie login
        if(loginCookieToObj.login == data[i].student_id) {
            logingArray.push(data[i].student_id);
            loginName.push(data[i].student_name);
            studentLoginId.push(data[i].student_id);
        }else if(loginCookieToObj.login == data[i].supervisor_1_email ) {
            logingArray.push(data[i].supervisor_1_email);
            loginName.push(data[i].supervisor_1_name);
        }else {
            console.log('User does not exist');
        }
    }

    //storing student registered to project of supervisor
    studentRegisteredArr = [];
    for( i = 0; i < data.length; i++) {
        if(loginCookieToObj.login == data[i].supervisor_1_email ) {
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

    const dataLogin = logingArray[0];
    if(logingArray.length >= 1 && studentLoginId[0] == dataLogin){
        //handling elements not for students
        $('#fileUpload').css('display', 'none');
        $('#excelButton').css('display', 'none');
        $('#RegisteredStudents').css('display', 'none');
        //welcome message
        let welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent += ' ' + loginName[0] + '{student}';
    } else if(logingArray.length >= 1 && logingArray[0] == dataLogin) {
        
        //handling elements for supervisor
        $('.form-group').css('display', 'none');
        $('#tickText').css('display', 'none');
        $('#submitForm').css('display', 'none');
        $('#fileUpload').css('display', 'none');
        $('#excelButton').css('display', 'none');
        //welcome message
        let welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent += ' ' + loginName[0];
        console.log('Hi supervisor');
    }
}



//********** */
//*****END of Persmission Control***** */
//********** */


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
        "group_project":groupProject
    };
    
    fetch('http://localhost:8080/registerUser', {
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
              fetch('http://localhost:8080/registerUser', {
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
    let repName = $('#nameReport').val();
    let url = 'http://localhost:8080/getusers';
    let response = await fetch(url);
    let searchType = document.getElementById("searchType").value;
    var data = await response.json();
    jsonArray = [];
    const searchArray = ["student_name", "supervisor_1_name", "student_id", "project_name", "degree_title"];
    var x = searchArray[searchType];


    for( i =0; i < data.length; i++) {
      if(repName == data[i][x]) {
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
    link.download = repName + ".csv";
    
    //Remove element after downloading the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
  }
