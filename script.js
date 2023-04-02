let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let hoursElement = document.querySelector("#hours");
        let minutesElement = document.querySelector("#minutes");
        let secondsElement = document.querySelector("#seconds");
        let timer;
        function stopwatch() {
          seconds++;
          if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
              minutes = 0;
              hours++;
            }
          }
          // used conditional operator to move digits as soon as they become 10
          let h = hours < 10 ? "0" + hours : hours;
          let m = minutes < 10 ? "0" + minutes : minutes;
          let s = seconds < 10 ? "0" + seconds : seconds;
      
          hoursElement.innerHTML = h;
          minutesElement.innerHTML = m;
          secondsElement.innerHTML = s;
        }
        function start() {
          timer = setInterval(stopwatch, 700);
        }
        function pause() {
          clearInterval(timer);
        }
        function reset() {
          clearInterval(timer);
          seconds = 0;
          minutes = 0;
          hours = 0;
          hoursElement.innerHTML = "00";
          minutesElement.innerHTML = "00";
          secondsElement.innerHTML = "00";
        }