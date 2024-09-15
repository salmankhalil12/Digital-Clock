// alert("hell")
const hourEle = document.getElementById("hour")
const minutesEle = document.getElementById("minutes")
const secondEle = document.getElementById("second")
const ampmEle = document.getElementById("ampm")

update()

function update() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm  = "AM" 

    if (h > 12 ) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;
    

    hourEle.innerText = h
    minutesEle.innerText = m
    secondEle.innerText = s
    ampmEle.innerText=ampm;
setTimeout(() => {
    update()
}, 1000);
}