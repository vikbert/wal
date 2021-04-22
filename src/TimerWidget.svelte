<script>
    import classNames from 'classnames';
    import {config, paused} from './services/store';
    import speak from './services/voice';

    let time = 0;
    let timerMax = 15;
    let timerAnnounced = false;
    let timerAudio = true;
    config.subscribe((data) => {
        timerMax = data.timerLimit;
        timerAudio = data.timerAudio;
    });

    let timerMessage = 'Die Zeit ist um.';

    String.prototype.toHHMMSS = function() {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return `${minutes}:${seconds}`;
    };

    const id = window.setInterval(function() {
        if (!isPaused) {
            time++;
            if (false === timerAnnounced && time >= timerMax * 60 && true === timerAudio) {
                speak(timerMessage, timerAudio);
                timerAnnounced = true;
            }
        }
    }, 1000);

    let isPaused = true;
    paused.subscribe((value) => {
        isPaused = value;
    });

    function handlePause() {
        isPaused = true;
        paused.set(true);
    }

    function handleStart() {
        isPaused = false;
        paused.set(false);
    }

    $: minutes = Math.floor(time) + '';

</script>

<div class="timer_widget">
    <div class="widget">
        <div class={classNames("widget-body grid-container", {"exceeded": time >= timerMax * 60})}>
            <div class="item item_day">21</div>
            <div class="item item_week">Do</div>
            <div class="item_timer">
                {minutes.toHHMMSS()}
            </div>
            <div class={classNames({"item item_play": true, 'active': isPaused})} on:click={handleStart}>
                <span class="iconify" data-icon="ant-design:play-circle-outlined" width="40"></span>
            </div>
            <div class={classNames({"item item_pause": true, 'active': !isPaused})} on:click={handlePause}>
                <span class="iconify" data-icon="ant-design:pause-circle-outlined" width="40"></span>
            </div>
        </div>
    </div>
</div>

<style>
  .timer_widget {
    position: relative;
    margin: 0 auto;
    margin-top: 80px;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .widget {
    display: flex;
    flex-direction: column;
    padding: 0 12px;
  }

  .widget-body {
    font-size: 30px;
    color: white;
    background-color: #ffffff17;
    text-align: center;
    z-index: 10;
    height: 125px;
    border-radius: 8px;
    -webkit-box-shadow: -2px 9px 21px -8px rgba(13, 114, 146, 0.73);
    -moz-box-shadow: -2px 9px 21px -8px rgba(13, 114, 146, 0.73);
    box-shadow: -2px 9px 21px -8px rgba(13, 114, 146, 0.73);
  }

  .item {
    opacity: 40%;
  }

  .item_day {
    grid-area: date;
    font-size: 35px;
  }

  .item_week {
    grid-area: week;
  }

  .item_timer {
    grid-area: timer;
    font-size: 100px;
  }

  .item_play {
    grid-area: play;
  }

  .item_pause {
    grid-area: pause;
  }

  .grid-container {
    display: grid;
    align-items: center;
    grid-template-areas:
      'date timer timer play'
      'week timer timer pause';
  }

  .item_pause, .item_play {
    cursor: pointer;
  }

  .active {
    opacity: 100%;
    transition: all .8s;
  }

  .active:hover {
    opacity: unset;
  }

  .exceeded {
    background-color: red;
    color: white;
  }
</style>
