var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
var time = today.getHours() + ":" + padZero(today.getMinutes())

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

document.getElementById('currentDate').innerHTML = "Current Date: " + date + " @ " + time;

document.getElementById("browserInfo").innerHTML = "Browser Information: " + navigator.userAgent

function factorial() {
    var num = document.getElementById("value").value

    if (num < 0){
        alert("Number must be a positive integer")
    } else {

        result = num

        if (num == 0 || num == 1) {
            result = 1
        }

        while (num > 1){
            num--
            result = result * num
        }

        alert(result)
    }
}

document.addEventListener("click", (event) => {

    const image = document.getElementById("myface")
    image.style.transform = `translate(${event.clientX - window.innerWidth/2}px, ${event.clientY - document.querySelector("img").clientHeight/2 - window.innerHeight*0.23}px)`
})
