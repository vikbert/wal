<script>
    import Dock from './Dock.svelte'
    export let enabled = true;
</script>


{#if enabled}
<Dock>
    <span class="iconify" data-icon="ant-design:audio-outlined" data-inline="false"/>
</Dock>
{:else}
<Dock>
    <span class="iconify" data-icon="ant-design:audio-muted-outlined" data-inline="false"></span>
</Dock>
{/if}

<style>
    .iconify {
        color: blue;
        font-size: 40px;
    }
</style>
