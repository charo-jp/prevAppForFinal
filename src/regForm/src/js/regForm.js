
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


async function sendJSON(){
    //storing input variables
    var student_id = document.getElementById("loginInput").value;
    var student_name = document.getElementById("nameInput").value;
    var degree_title = document.getElementById("courseTitle").value;
    var project_name = document.getElementById("projectName").value;
    var supervisor_1_name = document.getElementById("supervisor1Name").value;
    var supervisor_1_email = document.getElementById("supervisor1Email").value;
    var supervisor_2_name = document.getElementById("supervisor2Name").value;
    var supervisor_2_email = document.getElementById("supervisor2Email").value;
    var specialResourcesCheckPreNull = document.getElementById("specialResourcesCheck").value;
    var special_resources_text = document.getElementById("specialResInput").value;
    var ethicsReviewCheckPreNull = document.getElementById("ethicsReviewCheck").value;
    var ethics_review_text = document.getElementById("ethicsReviewInput").value;
    var cybersecProjectPreNull = document.getElementById("cybersecProject").value;
    var group_project = 0;  

    if (ethicsReviewCheckPreNull = 'on'){
       var ethics_review_check = false 
    } else {
        var ethics_review_check = true
    }

    if (specialResourcesCheckPreNull = 'on'){
        var special_resources_check = false 
     } else {
        var special_resources_check = true
     }

     if (cybersecProjectPreNull = 'on'){
        var cybersec_project = false 
     } else {
        var cybersec_project = true
     }

    const data = { 
        student_id, 
        student_name, 
        degree_title,
        project_name,
        supervisor_1_name,
        supervisor_1_email,
        supervisor_2_name,
        supervisor_2_email, 
        special_resources_check,
        special_resources_text, 
        ethics_review_text,
        ethics_review_check,        
        cybersec_project, 
        group_project
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
}









// Excel parsing WIP
// let selectedFile;
// console.log(window.XLSX);
// document.getElementById('fileUpload').addEventListener("change", (event) => {
//     selectedFile = event.target.files[0];
// })

// let excelData=[{
//     "name":"jayanth",
//     "data":"scd",
//     "abc":"sdef"
// }]


// document.getElementById('excelButton').addEventListener("click", () => {
//     XLSX.utils.json_to_sheet(excelData, 'out.xlsx');
//     if(selectedFile){
//         let fileReader = new FileReader();
//         fileReader.readAsBinaryString(selectedFile);
//         fileReader.onload = (event)=>{
//          let excelData = event.target.result;
//          let workbook = XLSX.read(excelData,{type:"binary"});
//          console.log(workbook);
//          workbook.SheetNames.forEach(sheet => {
//               let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
//               console.log(rowObject);
//               document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
//          });
//         }
//     }
// });

// function myFunction(){
//     if (!document.getElementById("nameInput").value || !document.getElementById("loginInput").value || !document.getElementById("courseTitle").value
//         || !document.getElementById("projectName").value || !document.getElementById("supervisorName").value) {
//             alert("Please fill in all required fields");
//         }};