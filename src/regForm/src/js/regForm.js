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
          var excel = XLSX.read(data, {
              type : 'binary'
          });
          var result = {};
          excel.SheetNames.forEach(function(sheetName) {
          var row = XLSX.utils.sheet_to_row_object_array(excel.Sheets[sheetName]);
          if (row.length > 0) {
              result[sheetName] = row;
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
                alert("Invalid excel data. Student ID should contain letters and numbers e.g. 'abd123'");
                return;
              }
              if (/[a-zA-Z]/.test(result[sheetName][i].student_id) == false && result[sheetName][i].student_id != null){
                alert("Invalid excel data. Student ID should contain letters and numbers e.g. 'abd123'");
                return;
              }


              fetch('http://localhost:8080/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(result[sheetName][i]),
                })
            }

        }});
          // displaying the json result (TESTING ONLY)
          // var resultEle=document.getElementById("json-result");
          // resultEle.value=JSON.stringify(result, null, 4);
          // var eData = JSON.stringify(result, null, 4);
          // resultEle.style.display='block';
          // console.log(Object.values(eData[10]));
          // console.log(Object.keys(roa [0]));
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
    // console.log(jsonArray);

    var excel = 'sep=,' + '\r\n\n';

        var value = "";
        //This loop will extract the label from 1st index of on array
        for (var index in jsonArray[0]) {
            //Now convert each value to string and comma-seprated
            value += index + ',';
        }
        //Add values to excel variable
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
