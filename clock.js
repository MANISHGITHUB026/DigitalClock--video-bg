let DAYS = document.querySelector("#DAYS");
let weeks = new Date();
DAYS.innerText = weeks.toDateString()


setInterval (() =>{
  const time1 = document.querySelector(".hours")
  let AM_pm =document.querySelector(".days_night")
  let date1 = new Date();
  let hr = date1.getHours();
  let day_night = "AM"
  if(hr > 12){
    day_night = "PM"
    hr = hr -12;
  }
  time1.innerText = hr
  AM_pm.innerText = day_night
})

setInterval (() =>{
  const time2 = document.querySelector(".minutes")
  let date2 = new Date();
  let min = date2.getMinutes();
  if(min < 10){
   min ="0" + min;
  }
  time2.innerText = min
})

setInterval (() =>{
  const time3 = document.querySelector(".seconds")
  let date3 = new Date();
  let sec = date3.getSeconds();
  if(sec < 10){
    sec = "0" + sec
  }
  time3.innerText = sec
})
