<script>
    import {opened} from '../services/store';

    let isOpen = false;
    opened.subscribe((value) => {
        isOpen = value;
    });

    function togglePopup() {
        isOpen = !isOpen;
        opened.set(isOpen);
    }
</script>

<div class="dock dock-close opacity-50" on:click={togglePopup}>
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

<style>
  .dock-close {
    z-index: 9999;
    top: 10px;
  }

  .iconify {
    width: 20px;
  }
</style>
