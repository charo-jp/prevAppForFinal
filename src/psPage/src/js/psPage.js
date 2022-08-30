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
  function redirect(){
    document.getElementById("redirect").onclick = function () {
      location.href = "http://localhost:8084";
  }
}