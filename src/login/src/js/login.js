//get request
async function getLogin() {
    let login = $('#loginInput').val();
    let url = 'http://localhost:8080/getusers';

    try {
        let response = await fetch(url);
        var data = await response.json();
        // console.log(data);
    } catch (error) {
        console.log(error);
    }

    console.log(data);

    //loop through array of object from response, if student id matches with login
    //then add that login to an array.
    studentsArray = [];
    for( i =0; i < data.length; i++) {
        if(login == data[i].student_id) {
            console.log('is student');
            studentsArray.push(data[i].student_id);
        }
    }
    
    // if login exist then take them to register project url
    if(studentsArray.length >= 1 ){
        console.log(studentsArray);
        // window.location.href = "http://localhost:8081"; //remove later
        // Cookies.set('student', 'true');
    } else {
        $('#noStudentIdWarning').show();
    }

    let studentCookie = studentsArray[0];
    studentCookieToString = "login="+studentCookie;
    console.log(studentCookieToString);
    document.cookie = studentCookieToString;
    console.log(document.cookie);
}