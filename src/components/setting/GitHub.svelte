<script lang="ts">
    export let repository: string = "";
</script>

<a href={`http://github.com/${repository}`} target="_blank">
    <div>
        <span class="iconify" data-icon="bytesize:github" width="50"></span>
    </div>
</a>

<style>
    a {
        color: inherit;
    }
</style>
