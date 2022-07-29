
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


function sendJSON(){
              console.log(here);
    let rawName = $('#nameInput');
    
    // let name = document.querySelector('#name');
    // let email = document.querySelector('#email');

    let name = rawName.val();


    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "form.php";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header of type json
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({ "name": name.val() });
    console.log(data);

    // Sending data with the request
    xhr.send(data);
}



