<script>
let fileInputRef;
import memo from '../services/memo'

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
};


</script>

<div on:click={()=>{fileInputRef.click()}}>
    <span class="iconify" data-icon="entypo:upload" width="50"></span>
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

