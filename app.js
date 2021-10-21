
// this even listener role is to showpop when user reload the browser
window.addEventListener("load",function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".popup").style.display ="none";
        },
        10000
    )
});


// this is for pop up box closing
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";

});

// date and time update
function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var midday;

    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    var name = " Shashank";

    // if else condition
    midday = (hours >= 12) ? "PM" : "AM";
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + midday;

    var time = setTimeout(function(){
        clock();
    }, 1000);
// Good morning after noon evening condition
if(hours <12){
    var greeting = "Good Morning" + name;
}
if(hours >= 12 && hours <= 18){
    var greeting = "Good Afternoon" + name;
}
if(hours >=18 && hours <=24){
    var greeting = "Good Evening"
}
document.getElementById("greeting").innerHTML = greeting;
}


function updateTime(k){
    if(k<10){
        return "0" + k
    }else{
        return k;
    }
}
clock();

// hex code color changer theme 
const ip = document.getElementById("color-input");
ip.addEventListener("keyup", (e) => {
  const value = e.target.value;
  if (/^#([0-9A-F]{3}){1,2}$/i.test(value)) {
    console.log(" HAX ", value);
    document.body.style.backgroundColor = value;
  }
});

