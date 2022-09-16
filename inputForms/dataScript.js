


function readInputData () {

    let inputBoxData = document.getElementById('input1').innerHTML;
    

    // write the input box data to a file
    let fs = require('fs');
    fs.writeFile("inputBoxData.txt",inputBoxData,() => {});

    return;
}



