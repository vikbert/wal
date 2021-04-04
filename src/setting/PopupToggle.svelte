<script>
    import {opened} from '../services/store'

    let popupOpened = false;
    opened.subscribe((value) => {
        popupOpened = value
    })

    function togglePopup () {
        popupOpened = !popupOpened
        opened.set(popupOpened)
    }
</script>

{#if popupOpened}
    <div class="dock dock-close opacity-50" on:click={togglePopup}>
        <span
            class="iconify"
            data-icon="codicon:chrome-close"
            width="20"/>
    </div>
{:else}
    <div class="dock dock-close opacity-50" on:click={togglePopup}>
        <span
            class="iconify"
            data-icon="gridicons:menu"
            width="20"/>
    </div>
{/if}

<style>
  .dock-close {
    z-index: 9999;
    top: 10px;
  }

</style>
