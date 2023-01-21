export function timer () { 
    const deadline = '2023-01-22';

    function getTimeRemaining (deadline) {
        let t = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        return {
            'total': t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
         };
    };

    function setClock (id, endtime) { 
        const timer = document.getElementById(id);
        const hours = timer.querySelector('.hours');
        const minutes = timer.querySelector('.minutes');
        const seconds = timer.querySelector('.seconds');
        const timeInterval = setInterval(updateClock, 1000)

        function updateClock(){
            let t = getTimeRemaining(endtime)
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if (t.total < 1){
                clearInterval(timeInterval);
                hours.textContent = '00'
                minutes.textContent = '00'
                seconds.textContent = '00'
            }
        };
    };
    
    setClock('timer', deadline);
}