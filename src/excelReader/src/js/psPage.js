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