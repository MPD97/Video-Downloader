document.addEventListener('DOMContentLoaded', function(){

    const bg = chrome.extension.getBackgroundPage()

    Object.keys(bg.elements).forEach(function(title){
        const div = document.createElement('div')
        div.textContent = `${title}: ${bg.elements[title]}`
        document.body.appendChild(div);
   })

   const json = JSON.stringify(bg.elements)
   console.log(json)


function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(json, 'json.txt', 'text/plain');


}, false);