// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     const re = new RegExp('lekcja', 'gi')
//     const matches = document.documentElement.innerHTML.match(re)
   
//     sendResponse({count: matches.length})
// })

const element = document.querySelector('#content > div.contenter.content_lekcji > div')
if(element !== undefined && element !== undefined){
    
    const title = window.location.pathname;
    const attribute = JSON.parse(element.getAttribute('data-item')).sources[0].src

    if(attribute !== undefined)
    {
        console.log(title)
        console.log(attribute)

        chrome.runtime.sendMessage({
            title: title,
            src: attribute
        })
    }
}
