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


    studentData = [
        {instance_id: null, student_id: 'aa111', student_name: 'Adam', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'bb222', student_name: 'Brandon', degree_title: 'MSc Computer Science'},
        {instance_id: null, student_id: 'cc333', student_name: 'Charlie', degree_title: 'MSc Cyber Security'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'nxa2', student_name: 'Nicolas Ah-Leung', degree_title: 'Cyber Security - MSc'},
        {instance_id: null, student_id: 'alpa2', student_name: 'Axel Ambert', degree_title: 'Advanced Computer Science - MSc'},
        {instance_id: null, student_id: 'lapa3', student_name: 'Louis Anelli', degree_title: 'Cyber Security - MSc'},
        {instance_id: null, student_id: 'lbca3', student_name: 'Luke Ashton', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'atsa2', student_name: 'Alexis Auriac', degree_title: 'Advanced Computer Science - MSc'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
        {instance_id: null, student_id: 'ka420', student_name: 'Khalid Aadan', degree_title: 'MSc Computer Science Conversion'},
    ];

    for( i =0; i < data.length; i++) {
        studentData.push(data[i]);
    }
    console.log(studentData);

    supervisorData = [
        {supervisor_1_email: 'dd444@kent.ac.uk', supervisor_1_name: 'Darren'},
        {supervisor_1_email: 'ee555@kent.ac.uk', supervisor_1_name: 'Eric'}
    ]
    //loop through array of object from response, if student id matches with login
    //then add that login to an array.
    loginArr = [];
    // supervisorArray = [];
    for( i =0; i < data.length; i++) {
        if(login == data[i].student_id) {//add the student login to the array
            loginArr.push(data[i].student_id);
        }else if(login == data[i].supervisor_1_email) {//add supervisor email to arry
            loginArr.push(data[i].supervisor_1_email); 
        }else if(login == data[i].supervisor_1_name) {
            loginArr.push(data[i].supervisor_1_name);
        }
    }
    
    if(login == 'cemsugandpgt@kent.ac.uk') {
        window.location.href = "http://localhost:8083";
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