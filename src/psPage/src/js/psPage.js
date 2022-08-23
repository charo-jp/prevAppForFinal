//Method to read excel file and convert it into JSON and send to backend
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

// Method to generate excel spreadsheets from search parameters
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

  async function getAll() {
    let url = 'http://localhost:8080/getusers';
    let response = await fetch(url);
    var data = await response.json();
    jsonArray = [];

    for( i =0; i < data.length; i++) {
          jsonArray.push(data[i]);
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
    link.download = "data.csv";
    
    //Remove element after downloading the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }