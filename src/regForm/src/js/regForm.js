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









// Excel parsing WIP
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
          var workbook = XLSX.read(data, {
              type : 'binary'
          });
          var result = {};
          workbook.SheetNames.forEach(function(sheetName) {
          var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          if (roa.length > 0) {
              result[sheetName] = roa;
              console.log(Object.values(result[sheetName][5]));
              for (i=0; i< result[sheetName].length; ++i){
              fetch('http://localhost:8080/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(result[sheetName][i]),
                })
            }
          }
        });
          //displaying the json result
          var resultEle=document.getElementById("json-result");
          resultEle.value=JSON.stringify(result, null, 4);
          var eData = JSON.stringify(result, null, 4);
          resultEle.style.display='block';
          console.log(Object.values(eData[10]));
        //   console.log(Object.keys(roa [0]));
          }
      }catch(e){
          console.error(e);
      }
    }

    function getName() {
      fetch('http://localhost:8080/getusers')
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
