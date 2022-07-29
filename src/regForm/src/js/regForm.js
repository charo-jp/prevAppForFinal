
// // if checkbox for special resources is checked then show input if not hide
// $('#specialResourcesCheck').click(function() {
//     let isChecked = $('#specialResourcesCheck').is(':checked');
//     if(isChecked) {
//         $('#specialResInput').show();
//     }else{
//         $('#specialResInput').hide();
//     }
// });

// // if checkbox for ethics review is checked then show input if not hide
// $('#ethicsReviewCheck').click(function() {
//     let isChecked = $('#ethicsReviewCheck').is(':checked');
//     if(isChecked) {
//         $('#ethicsReviewInput').show();
//         $('#checkList').show();
//     }else{
//         $('#ethicsReviewInput').hide();
//         $('#checkList').hide();
//     }

// });


// ///testing
// let rawName = $('#nameInput');
    
//     // let name = document.querySelector('#name');
//     // let email = document.querySelector('#email');

//     let name = rawName.val('john test');


//     // Creating a XHR object
    
//     let url = "form.php";

//     const toSend = {
//         studentName: rawName.val(),
//     };
//     console.log(toSend);
    

//     const data = JSON.stringify(toSend);
//     console.log(data);

//     let xhr = new XMLHttpRequest();

//     //open a connection
//     xhr.open("POST", 'form.php');

//     //Set the request header of type json
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(data);

// ///endTesting


// function sendJSON(){

//     // let rawName = $('#nameInput');
    
//     // // let name = document.querySelector('#name');
//     // // let email = document.querySelector('#email');

//     // let name = rawName.val();

//     const toSend = {
//         name:$('nameInput'),
//         login:$('loginInput')
//     }

//     // Converting JSON data to string
//     const data = JSON.stringify(toSend);

//     // Creating a XHR object
//     const xhr = new XMLHttpRequest();
//     // let url = "submit.php";

//     // Create a state change callback
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {

//             // Print received data from server
//             result.innerHTML = this.responseText;

//         }
//     };

//     // open a connection
//     xhr.open("POST", "submit.php");

//     // Set the request header of type json
//     xhr.setRequestHeader("Content-Type", "application/json");
//     // Sending data with the request
//     xhr.send(data);
// }

//https://www.geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/
function sendJSON(){
    let result = document.querySelector('.result');
    let name = document.querySelector('#name');
    let login = document.querySelector('#login');
      
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = 'submit.php'; //Possibly need to change this to localhost location?

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({ "name": name.value, "login": login.value });

    // Sending data with the request
    xhr.send(data);
}

