let Counter = document.getElementById('counter')
let count = 0

setTimeout(()=>{
    setInterval(()=>{
        count ++ 
        Counter.innerHTML = `${count}`
    },1000)

})