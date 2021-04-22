<script>
    import {config} from '../services/store';
    export let size = 35;

    let appConfig;
    config.subscribe((value) => {
        appConfig = value;
    });

    function handleToggleAudioIcon() {
        const newConfig = {
            ...appConfig,
            timerAudio: !appConfig.timerAudio,
        };
        console.log(newConfig);

        config.persistent(newConfig);

    }
</script>

<div class="dock audio-dock" on:click={handleToggleAudioIcon} style="font-size: {size}px;">
    {#if appConfig.timerAudio}
        <div>
            <span class="iconify" data-icon="ant-design:audio-outlined"></span>
        </div>
    {:else}
        <div>
            <span class="iconify" data-icon="ant-design:audio-muted-outlined"></span>
        </div>
    {/if}
</div>

<style>
  .iconify {
    color: #545454;
    cursor: pointer;
  }
</style>
