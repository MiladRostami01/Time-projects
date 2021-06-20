window.addEventListener('load' , () => {
  
  let tens= 00 
  let seconds= 00
  let minutes= 00
  let interval
  const appendTens = document.querySelector('#tens')
  const appendSeconds = document.querySelector('#seconds')
  const appendMinutes = document.querySelector('#minutes')
  const startBtn = document.querySelector('#start')
  const stopBtn = document.querySelector('#stop')
  const resetBtn = document.querySelector('#reset')

  startBtn.addEventListener('click' , () => {
    clearInterval(interval)
    interval = setInterval(startTimer , 10)
  })

  stopBtn.addEventListener('click' , () => {
    clearInterval(interval)
  })

  resetBtn.addEventListener('click' , () => {
    tens= 00
    seconds = 00
    minutes = 00 
    appendTens.innerHTML = '00'
    appendSeconds.innerHTML = '00'
    appendMinutes.innerHTML = '00'
    clearInterval(interval)
  })

  const startTimer = () => {
    tens++

    if(tens <=9) {
      appendTens.innerHTML = '0' + tens
    }

    if(tens > 9) {
      appendTens.innerHTML = tens
    }

    if(tens > 99) {
      tens=0
      seconds++
      appendTens.innerHTML= '00'
      appendSeconds.innerHTML='0'+ seconds
    }
    
    if(seconds > 9) {
      appendSeconds.innerHTML= seconds
    }
    
    if(seconds > 59) {
      seconds = 0
      minutes++
      appendSeconds.innerHTML= '00'
      appendMinutes.innerHTML = '0' + minutes
    }

    if(minutes > 9) {
      appendMinutes.innerHTML = minutes
    }
  }


  // JavaScript clock

  // Method 1 
  //   const clock = document.querySelector('.clock')
  //   let clockInterval = setInterval(()=>{
  //     let date = new Date()
  //     clock.innerHTML = date.toLocaleTimeString()
  //   } ,1000)


  // Method 2
  const clock = document.querySelector('.clock')
  
  let clockInterval = setInterval(()=> {
    let date ={
      seconds : new Date().getSeconds(),
      minutes : new Date().getMinutes(),
      hours : new Date().getHours(),
      session : 'AM'
    }

    if( date.hours == 0){
      date.hours = 12 
    }

    if ( date.hours > 12 ) {
      date.hours = date.hours - 12 
      date.session = 'PM'
    }
    
    for (const key in date) {
      date[key] = (date[key] <= 9) ? '0' + date[key] : date[key]
    }

    clock.innerHTML = `${date.hours}:${date.minutes}:${date.seconds} ${date.session}`
  },1000)



// Countdown Timer 

  const userTime = document.querySelector('.countdown-content input[type = date]')
  let d = document.querySelector('#day')
  let h = document.querySelector('#hour')
  let m = document.querySelector('#minute')
  let s = document.querySelector('#second')

  userTime.addEventListener('change' , (e)=>{
    const sI = setInterval(() => {
      let userIput = e.target.value
      const userTime = new Date(`${userIput}`)

      const date = new Date().getTime()

      let distance = userTime - date

      if(distance <= 0) {
        d.innerHTML = 'The'
        h.innerHTML = 'Time'
        m.innerHTML = 'Is'
        s.innerHTML = 'Over !'
        clearInterval(sI)
      }else{

        let countdownDays = Math.floor(distance / (1000 * 60 * 60 * 24 ))
        let countdownHours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
        let countdownMinuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let countdownSeconds = Math.floor((distance % (1000 * 60 )) / (1000))

        d.innerHTML = countdownDays
        h.innerHTML = countdownHours
        m.innerHTML = countdownMinuts
        s.innerHTML = countdownSeconds
      }
    } , 1000)
  })
})