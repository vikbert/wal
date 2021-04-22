<script>
    export let callback = () => null;
</script>

<div on:click={callback} class="dock opacity-50">
    <slot></slot>
</div>

<style>
  .dock {
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    padding: 8px;
  }
</style>
