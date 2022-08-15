
// ****rules to login*****
//if studnet isRegistered ....


//get request
async function getLogin() {
    let login = $('#loginInput').val();

    fetch('http://localhost:8080/registerUser')
    .then(response=>response.json())
    .then(data=>{ console.log(data); })
    .catch((error) => {
        console.error('Error:', error)
    });

    //condition on if login is student
    if(data.studentID == login) {
        //this user is student
        //then send them to the http://localhost:8080/registerUser
    }
}