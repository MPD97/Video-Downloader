document.addEventListener('DOMContentLoaded', function(){

    const bg = chrome.extension.getBackgroundPage()
    
    const h1 = document.createElement('h1')
    h1.textContent = 'Json saved. Now use second part of utility'
    document.body.appendChild(h1);

    const link = document.createElement('a')
    link.textContent = 'Download utility from github'
    link.href = 'https://github.com/MPD97/Video-Downloader-Part-Two'
    document.body.appendChild(link);

    function download(content, fileName, contentType) {
        var a = document.createElement("a")
        var file = new Blob([content], {type: contentType})
        a.href = URL.createObjectURL(file)
        a.download = fileName
        a.click()
    }

    const json = JSON.stringify(bg.elements)
    download(json, 'json.txt', 'text/plain')

}, false);