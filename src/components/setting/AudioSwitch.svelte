<script>
    import {config} from '../../services/store';
    import Tooltip from '../shared/Tooltip.svelte';

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

        config.persistent(newConfig);

    }
</script>

<div on:click={handleToggleAudioIcon} style="cursor: pointer;">
    <Tooltip text="turn the audio on/off">
    {#if appConfig.timerAudio}
        <div>
            <span class="iconify" data-icon="ant-design:audio-outlined" width={size}></span>
        </div>
    {:else}
        <div>
            <span class="iconify" data-icon="ant-design:audio-muted-outlined" width={size}></span>
        </div>
    {/if}
    </Tooltip>
</div>
