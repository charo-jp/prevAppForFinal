async function getUser() {
    let login = $('#loginInput').val();
    let url = 'http://localhost:8080/getusers';

    try {
        let response = await fetch(url);
        var data = await response.json();
        
    } catch (error) {
        console.log(error);
    }
    console.log(data);
    logingArray = [];
    loginName = [];
    studentLoginId = [];
    supervisor1EmailLogin = [];
    var studentCheck = 1;
    for( i = 0; i < data.length; i++) {
        //if requested login is the same as the cookie login
        if(loginCookieToObj.login == data[i].student_id) {
            logingArray.push(data[i].student_id);
            loginName.push(data[i].student_name);
            studentLoginId.push(data[i].student_id);
            studentCheck = 2;
        }
        else{
            console.log('User does not exist');
        }
    }

    //storing student registered to project
    studentRegisteredArr = [];
    for( i = 0; i < data.length; i++) {
        if(loginCookieToObj.login == data[i].supervisor_1_email || loginCookieToObj.login == data[i].supervisor_1_name) {
            studentRegisteredObj = {
                registeredStudentName: data[i].student_name,
                registeredStudentLogin: data[i].student_id,
                registeredStudentProjectName: data[i].project_name,
            };
            studentRegisteredArr.push(studentRegisteredObj);
        }
    }
    console.log(studentRegisteredArr);
    // //list of students registered list in array
    // registeredStudentListMessage = [];
    // for( i = 0; i < studentRegisteredArr.length; i++) {
    //     let message = studentRegisteredArr[i].registeredStudentName + " is registered to " + studentRegisteredArr[i].registeredStudentProjectName;
    //     registeredStudentListMessage.push(message);
    // }
    
    // //add li element to table
    // for( i = 0; i < registeredStudentListMessage.length; i++) {
    //     let createLiElement = '<li class="list-group-item" >' + registeredStudentListMessage[i] + '</li>';
    //     $('#registeredStudentsList').append(createLiElement);
    // }

   
}