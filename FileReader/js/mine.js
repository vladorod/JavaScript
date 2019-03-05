
"use scrict"

let rawFile = new XMLHttpRequest();

let file;

let fileOpen = '../bd.json'

rawFile.open("GET", fileOpen, false);

rawFile.onreadystatechange = () =>
{
    if(rawFile.readyState === 4)
    {
        if(rawFile.status === 200 || rawFile.status == 0)
        {
            var allText = rawFile.responseText;
            
        }
    }
}


console.log(file)