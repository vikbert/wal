<script>
    import {opened} from '../../services/store';
    import AudioSwitch from './AudioSwitch.svelte';

    let isOpen = false;
    opened.subscribe((value) => {
        isOpen = value;
    });

    function togglePopup() {
        isOpen = !isOpen;
        opened.set(isOpen);
    }
</script>

<div class="dock popup_toggle_icon opacity-50" on:click={togglePopup}>
    {#if isOpen}
        <div>
            <span class="iconify" data-icon="codicon:chrome-close"></span>
        </div>
    {:else}
        <div>
            <span class="iconify" data-icon="grommet-icons:menu" width={17}></span>
        </div>
    {/if}
</div>

{#if !isOpen}
    <div class="audio_toggle_icon">
        <div class="dock">
            <AudioSwitch size={17}/>
        </div>
    </div>
{/if}

<style>
  .popup_toggle_icon {
    position: absolute;
    right: 10px;
    z-index: 9999;
    top: 10px;
  }
  .audio_toggle_icon {
    position: absolute;
    top: 10px;
    right: 50px;
    opacity: 50%;
  }
</style>
