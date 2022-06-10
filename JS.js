const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop =true;
let alarmTime = null;
let alarmTimeout = null;
var alarm_time = null;
var list_item = null;

// to make the clock work in sync to pc clock
function startTime(){
    const today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();

    q = checkState(h)
    h = convertHour(h);
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('main_clock').innerHTML = h + ":" + m + ":" + s + " " + q;
    setTimeout(startTime, 1000);
}

function checkTime(i){
    if(i<10){
        i = "0" + i;
        return i;
    }else{
        return i;
    }
}

function convertHour(hour){
    if(hour > 12){
        hour = hour - 12;
    }
    return hour;
}

function checkState(j){
    if(j<12){
        state = "A.M";
        return state;
    }else{
        state = "P.M";
        return state;
    }
}

// to add the new alarm in the list 

var list = document.getElementById('set_btn');
list.addEventListener('click', 
() => { 
    // this is taking time from user for alarm to set
    alarm_time = document.getElementById('time').value;

    // this is to set alarm when selected time hit
    if(alarm_time){
        const current_time = new Date();
        const timeToAlarm = new Date(alarm_time);

        if(timeToAlarm > current_time){
            const time_difference = timeToAlarm.getTime() - current_time.getTime();
            alarmTimeout = setTimeout( () => {audio.play()}, time_difference);
            window.alert("Alarm set at given time");
        }
    }

    alarm_time = alarm_time.substring(11,21);
    console.log(alarm_time);

    // this is to add alarm list in a div
    $('#items').append(`<li class="list"> ${alarm_time} PM  <button id='delete' onclick="clearAlarm()">Delete</button></li>`);  
    
    list_item = document.querySelectorAll('.list');
    console.log(list_item);
    listDelete();
});



// to clear alarm set by user
function clearAlarm(){
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        window.alert("Alarm cleared");
    }
}

// sirisha deployment  ruby mitsha

function listDelete(){
    
    for( var index = 0; index < list_item.length; index++){
        list_item[index].addEventListener("click", function(){
            this.classList.toggle("active");
        });
        list_item[index].querySelector("button").addEventListener("click", function(){
            this.closest(".list").remove();
        });
    }
}


let x = 42;
if (true) {
console.log(x);
let x = 1337;
}

//anjalishuklaballia@gmail.com





