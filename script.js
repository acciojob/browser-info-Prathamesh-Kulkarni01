//your JS code here. If required.
let div=document.createElement("div")
div.setAttribute('id','browser-info')
div.innerHTML=`You are using+ ${navigator.appName} ${navigator.appVersion} version`
document.body.appendChild(div)
