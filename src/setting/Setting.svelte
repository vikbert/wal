<script lang="ts">
    import {opened, config} from '../services/store'
    import Members from './Members.svelte';
    import Options from './Options.svelte';
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

    function handleSubmit() {
        handleUpdateConfig()
    }

    function handleOnChangeCheckbox(checked: boolean): void {
        appConfig = {
            ...appConfig,
            timerAudio: checked,
        }

        handleUpdateConfig()
    }
</script>

<PopupToggle/>

{#if show}
    <div class={"setting scale-in-ver-center"}>
        <div class="right">
            <Options/>
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
</style>
