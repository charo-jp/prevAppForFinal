
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


//https://www.geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/
function sendJSON(){
    //storing input variables
    let result = document.querySelector('.result');
    let name = document.querySelector('#nameInput');
    let courseTitle = document.querySelector('#courseTitle');
    let projectName = document.querySelector('#projectName');
    let supervisorName = document.querySelector('#supervisorName');
    let cyberSec = $('#cybersecProject'); //checkbox
    let specialRes = $('#specialResourcesCheck'); //checkbox
    let specialResInput = document.querySelector('#specialResInput');

    let ethics = $('#ethicsReviewCheck'); //checkbox
    let ethicsReviewInput = document.querySelector('#ethicsReviewInput');

    //dealing with getting checkbox vlaues
    let ethicsReviewCheck = ethics.prop('checked');
    let specialResourcesCheck = specialRes.prop('checked');
    let cybersecProject = cyberSec.prop('checked');
      
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = 'submit.php'; //Possibly need to change this to localhost location?
    let localhost8081 = 'localhost:8081/registerUser';
    // open a connection
    // xhr.open("POST", url, true);
    xhr.open("POST", localhost8081, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Accept", "application/json"); // telling the server we are expecting a json obj
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // // Print received data from server
            // result.innerHTML = this.responseText;
            
            console.log('Data sent');

        }
    };

    // Converting JSON data to string 
    var data = JSON.stringify(
        { 
            "name": name.value,
             "courseTitle": courseTitle.value,
             "projectName": projectName.value,
             "supervisorName": supervisorName.value,
             "cybersecProject": cybersecProject, //checkbox
             "specialResourcesCheck": specialResourcesCheck,//checkbox
             "specialResInput": specialResInput.value,

             "ethicsReviewCheck": ethicsReviewCheck, //checkbox
             "ethicsReviewInput": ethicsReviewInput.value,
             "ethicsReviewInput": ethicsReviewInput.value,
             'groupProject': 0,
        }
    );

    // Sending data with the request
    xhr.send(data);
}









// Excel parsing WIP
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


document.getElementById('button').addEventListener("click", () => {
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