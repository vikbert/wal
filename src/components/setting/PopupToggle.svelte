<script>
    import {opened} from '../../services/store';

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

<style>
  .popup_toggle_icon {
    position: absolute;
    right: 10px;
    z-index: 9999;
    top: 10px;
  }
</style>
