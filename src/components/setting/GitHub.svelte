<script lang="ts">
    import Tooltip from "../shared/Tooltip.svelte";

    export let repository: string = "Tooltip";
</script>

<a href={`http://github.com/${repository}`} target="_blank">
    <Tooltip text="Open the repository page on GitHub">
        <span class="iconify" data-icon="bytesize:github" width="50"></span>
    </Tooltip>
</a>

<style>
  a {
    color: inherit;
  }
</style>
