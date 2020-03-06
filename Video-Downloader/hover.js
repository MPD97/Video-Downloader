document.addEventListener('DOMContentLoaded', function(){
    const bg = chrome.extension.getBackgroundPage()

    const button = document.querySelector('button')
    const container = document.querySelector('#container')

    button.addEventListener('click', function(){
        chrome.tabs.create({url: 'popup.html'})  
    },false)

    Object.keys(bg.elements).forEach(function(title, index){
        const span = document.createElement('span')
        span.textContent = `${(index + 1)}: ${title}`
        document.body.appendChild(span)
    })

}, false);