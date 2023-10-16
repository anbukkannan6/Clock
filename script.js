

let ampm =document.getElementById("ampm")
let showTime = function () {
    let newDate = new Date()
    let hr = newDate.getHours()
    let min = newDate.getMinutes()
    let sec = newDate.getSeconds()

    if(hr>12){
        hr = hr-12
        ampm.innerHTML = "PM"
    }
    document.getElementById("hr").innerHTML = hr
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec

}
function addZero(parm){
    if(pram<10){
        return parm = "0"+pram
    }else{
        return parm
    }
    
}
setInterval(showTime,1000)