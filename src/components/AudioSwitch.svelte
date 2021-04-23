<script>
    import {config} from '../services/store';
    export let size = 30;

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

<div class="dock audio-dock" on:click={handleToggleAudioIcon}>
    {#if appConfig.timerAudio}
        <div>
            <span class="iconify" data-icon="ant-design:audio-outlined" width={size}></span>
        </div>
    {:else}
        <div>
            <span class="iconify" data-icon="ant-design:audio-muted-outlined" width={size}></span>
        </div>
    {/if}
</div>
