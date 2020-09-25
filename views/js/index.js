


const path = require('path');
const os = require('os');
const btnBrowse = document.getElementById('btn_fileReader');
const btnSubmit = document.getElementById('btn_submit');
const outputPath = document.getElementById('outputPath');
const slider = document.getElementById('slider');
const imgName = document.getElementById('file_name');
const fileDestination = path.join(os.homedir())

const{ipcRenderer} = require('electron');

//Adding event listener to btnSubmit
btnBrowse.addEventListener("input", (e)=>{


    let fileName = btnBrowse.value;
    imgName.innerText = fileName ;
})
btnSubmit.addEventListener("click", (e)=>{

    if(btnBrowse.value === ''){
        ipcRenderer.send("generateErrorMessage","Please select a file first")
    }

    console.log(`1.  ${fileDestination}`)

    e.preventDefault();

    const imgPath = btnBrowse.files[0].path;
    const imgName = btnBrowse.files[0].name;
    const sliderValue = slider.value;

    imgName.innerText = imgName;

    ipcRenderer.send('reduceImage',{
        imgPath,
        sliderValue,
    })
})


//Setting Default app path to home directory
outputPath.innerText = fileDestination;