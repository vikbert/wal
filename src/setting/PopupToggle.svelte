<script>
    import {opened} from '../services/store';
    import AudioSwitch from '../components/AudioSwitch.svelte';

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
            <span class="iconify" data-icon="gridicons:menu"></span>
        </div>
    {/if}
</div>

<div class="audio_toggle_icon">
    <AudioSwitch size={20}/>
</div>

<style>
  .iconify {
    width: 20px;
  }
  .popup_toggle_icon {
    position: absolute;
    right: 10px;
    z-index: 9999;
    top: 10px;
  }
  .audio_toggle_icon {
    position: absolute;
    top: 50px;
    right: 10px;
    opacity: 50%;
  }
</style>
