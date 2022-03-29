Dtime = document.querySelector(".time");
Ddate = document.querySelector(".date");
hourEl = document.querySelector(".hour")
minuteEl = document.querySelector(".min")
secondEl = document.querySelector(".sec")
button = document.querySelector(".theme-changer")

function setTime() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var time = new Date();
    var day = time.getDay();
    var month = time.getMonth();
    var date = time.getDate();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var hours = time.getHours() % 12;
    var ampm;
    if (hours >= 12) {
        ampm = "AM"
    }
    else {
        ampm = "PM"
    }
   
    if (min < 10) {
        min = "0" + min;
    }
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0, 59, 0, 360)}deg)`


    Dtime.innerHTML = hours + ":" + min + " " + ampm;
    Ddate.innerHTML = days[day]+", "+months[month]+" "+date;

}
const scale = (num, in_min, in_max, out_min, out_max) => {
    // if()
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
setTime();
setInterval(setTime,1000);

button.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        // e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        // e.target.innerHTML = 'Light mode'
    }
})