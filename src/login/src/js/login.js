//get request
async function getLogin() {
    let login = $('#loginInput').val();
    let url = 'http://localhost:8080/getusers';

    try {
        let response = await fetch(url);
        var data = await response.json();
    } catch (error) {
        console.log(error);
    }

    //loop through array of object from response, if student id matches with login
    //then add that login to an array.
    loginArr = [];
    // supervisorArray = [];
    for( i =0; i < data.length; i++) {
        if(login == data[i].student_id) {//add the student login to the array
            loginArr.push(data[i].student_id);
        }else if(login == data[i].supervisor_1_email) {//add supervisor email to arry
            loginArr.push(data[i].supervisor_1_email); 
        }
    }
    
    
    // if login exist then take them to register project url
    if(loginArr.length >= 1 ){//if student login array is not empty
        window.location.href = "http://localhost:8081"; //remove later
    } else if(loginArr.length >=1 ) {//if supervisor login array is not empty
        console.log('is supervisor');
    }else {
        $('#noStudentIdWarning').show();
    }

    //dealing with cookies
    let loginCookie = loginArr[0];
    loginCookieToString = "login="+loginCookie;
    document.cookie = loginCookieToString;
}