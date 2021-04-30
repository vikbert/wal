<script>
    import Logo from './Logo.svelte';
    import {config} from '../services/store';

    let appConfig;
    config.subscribe((value) => {
        appConfig = value;
    });

    function closeInfoPopup() {
        appConfig = {
            ...appConfig,
            showInfo: false,
        };

        config.persistent(appConfig);
    }
</script>

{#if appConfig.showInfo}
    <div class="overlay">
        <div class="main">
            <div class="header">
                <div on:click={closeInfoPopup}>
                    <span class="iconify" data-icon="bytesize:close"></span>
                </div>
            </div>
            <div class="content">
                <div class="wal">🐳</div>
                <h1>🤹🏻 Randomize the participant</h1>
                <h1>‍⏱ 15" Timer with alerting </h1>

                <p class="opacity-75">Daily meeting is normally timeboxed to a maximum duration of 15 minutes.
                    To keep the meeting short, any topic that starts a discussion is cut short,
                    added to a “parking lot” list, and discussed in greater depth after the meeting,
                    between the people affected by the issue.</p>

                <strong style="float: right">agilealliance.org</strong>
            </div>
        </div>
    </div>
{/if}

<style>
  .wal {
    width: 100%;
    text-align: center;
    font-size: 5rem;
  }
  .overlay {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    background: #181818a3;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }

  .main {
    margin-top: 13rem;
    width: 800px;
    height: 570px;
    border-radius: 16px;
    -webkit-box-shadow: -2px 9px 21px -8px rgba(13, 114, 146, 0.73);
    -moz-box-shadow: -2px 9px 21px -8px rgba(13, 114, 146, 0.73);
    box-shadow: -2px 9px 21px -8px rgba(13, 114, 146, 0.73);
    background: linear-gradient(60deg, #420285, #08BDBD);
    opacity: 100%;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    height: 3rem;
  }

  .iconify {
    font-size: 3rem;
    cursor: pointer;
    color: white;
    padding: 18px 15px 8px 0;
  }

  .content {
    padding: 2rem;
    color: white;
    font-size: 1.2rem;
  }

  .lobster {
    font-family: 'Lobster', cursive;
  }

</style>
