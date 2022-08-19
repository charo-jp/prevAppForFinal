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
//******Controlling what students can see****** */
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

    logingArray = [];
    for( i =0; i < data.length; i++) {
        //if requested login is the same as the cookie login
        if(loginCookieToObj.login == data[i].student_id) {
            logingArray.push(data[i].student_id);
        }else if(loginCookieToObj.login == data[i].supervisor_1_email ) {
            logingArray.push(data[i].supervisor_1_email);
        }
    }
    // console.log(data[0].student_id);
    // console.log(logingArray[0]);
    console.log(data[0].supervisor_1_email);
    const dataLogin = logingArray[0];

    if(logingArray.length >= 1 && data[0].student_id == dataLogin){
        //handling elements not for students
        $('#fileUpload').css('display', 'none');
        $('#excelButton').css('display', 'none');
        //welcome message
        let welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent += ' ' + data[0].student_name + '{student}';
    } else if(logingArray.length >= 1 && data[0].supervisor_1_email == dataLogin) {
        //handling elements for supervisor
        $('.form-group').css('display', 'none');
        $('#tickText').css('display', 'none');
        //welcome message
        let welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent += ' ' + data[0].supervisor_1_name + ', {supervisor}';
        console.log('Hi supervisor');
    }
}



//********** */
//*****END of Student Control***** */
//********** */


async function sendJSON(){
    //storing input variables
    var studentId = document.getElementById("loginInput").value;
    var studentName = document.getElementById("nameInput").value;
    var degreeTitle = document.getElementById("courseTitle").value;
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









//Excel parsing WIP
let selectedFile;
console.log(window.XLSX);
document.getElementById('fileUpload').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let excelData=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]


document.getElementById('excelButton').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(excelData, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let excelData = event.target.result;
         let workbook = XLSX.read(excelData,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log(rowObject);
              document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
         });
        }
    }
});

function myFunction(){
    if (!document.getElementById("nameInput").value || !document.getElementById("loginInput").value || !document.getElementById("courseTitle").value
        || !document.getElementById("projectName").value || !document.getElementById("supervisorName").value) {
            alert("Please fill in all required fields");
        }};
