<script lang="ts">
    import AudioSwitch from '../components/AudioSwitch.svelte';
    import {opened, config} from '../services/store'
    import Import from './Import.svelte';
    import Members from './Members.svelte';
    import PopupToggle from './PopupToggle.svelte';

    let appConfig;
    config.subscribe((data) => {
        appConfig = data
    })

    let show: boolean;
    opened.subscribe((value) => {
        show = value;
    });

    function togglePopup() {
        show = !show;
        opened.set(show)
    }

    function handleUpdateConfig() {
        config.persistent(appConfig)
    }

    function handleOnChangeCheckbox(checked: boolean): void {
        appConfig = {
            ...appConfig,
            timerAudio: checked,
        }

        handleUpdateConfig()
    }

    function handleSubmit() {
        handleUpdateConfig()
    }

</script>

<PopupToggle/>

{#if show}
    <div class={"setting scale-in-ver-center"}>
        <div class="right">
            <div class="options">
                <div class="option">
                    <h1>Time limit of the meeting: </h1>
                    <form on:submit={handleSubmit}>
                        <input
                            type="number"
                            class="timer_limit"
                            max="120"
                            min="15"
                            on:change={handleUpdateConfig}
                            bind:value={appConfig.timerLimit}
                        />
                        <span>mins</span>
                    </form>
                </div>
                <div class="option">
                    <h1>Timer Audio: {appConfig.timerAudio ? 'ON' : 'OFF'}</h1>
                    <AudioSwitch/>
                    <!--                    <Checkbox checked={appConfig.timerAudio} onChangeCallback={handleOnChangeCheckbox}/>-->
                </div>
                <div class="option">
                    <Import/>
                </div>
            </div>
        </div>

        <div class="left">
            <Members/>
        </div>
    </div>
{/if}

<style>
  .setting {
    z-index: 200;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
    background: linear-gradient(60deg, #420285, #08BDBD);
    opacity: 95%;
    transition: all 0.8s;
    padding: 3.5rem 0;
  }

  .left, .right {
    flex: 1 550px;
  }

  .right {
    border-right: 1px solid #5a7baf;
    text-align: center;
  }

  .options {
    color: white;
    opacity: 50%;
  }

  .option {
    padding-bottom: 2rem;
  }

  input.timer_limit {
    width: 8rem;
  }
</style>
