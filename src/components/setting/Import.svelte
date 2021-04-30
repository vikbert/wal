<script>
    import Tooltip from '../shared/Tooltip.svelte';

    let fileInputRef;
    import memo from '../../services/memo';

    const handleOnChange = (event) => {
        const reader = new FileReader();
        reader.readAsText(event.target.files[0]);
        reader.onload = onReaderLoad;
    };

    const onReaderLoad = (event) => {
        const json = JSON.parse(event.target.result);
        Object.keys(json).map((key) => {
            memo.set(key, json[key]);
        });

        window.location.reload();
    };

</script>

<div on:click={()=>{fileInputRef.click()}}>
    <Tooltip text="Import the setting from a JSON file">
        <span class="iconify" data-icon="entypo:upload" width="50"></span>
    </Tooltip>
</div>
<input
    class="upload"
    type="file"
    accept=".json"
    on:change={handleOnChange} bind:this={fileInputRef}
/>

<style>
  .upload {
    display: none;
  }
</style>

