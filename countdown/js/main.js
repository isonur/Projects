const countdown = document.querySelector('.countdown');

//set launch date
const launchDate = new Date('January 28, 2024 12:00:00').getTime();

//Update every second

const intvL = setInterval(() => {

    //Get todays date and time (ms)
    const now = new Date().getTime();

    //Distance from now to the launch date
    
    const distance = launchDate - now;

    //Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    //Display the result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    
    `;

    //If countdown stopped
    if(distance < 0){

        //stop countdown
        clearInterval(intvL);
        
        //Style and output text
        countdown.style.color = `#17a2b8`;
        countdown.innerHTML = `Launched!`;
    }

}, 1000);