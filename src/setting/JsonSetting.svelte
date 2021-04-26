<script>
    let avatar, fileInputRef;
    import memo from '../services/memo'
    import {KEY_CONFIG, KEY_MEMBERS} from '../services/store'

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

    const downloadFile = async () => {
        const walConfigData = {
        [KEY_CONFIG]: JSON.parse(localStorage.getItem(KEY_CONFIG)),
        [KEY_MEMBERS]: JSON.parse(localStorage.getItem(KEY_MEMBERS)),
        };

        const current = new Date();
        const fileName = `wal_export_${current.toLocaleDateString()}_${current.toLocaleTimeString()}`;
        const json = JSON.stringify(walConfigData);
        const blob = new Blob([json], { type: 'application/json' });
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + '.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  };

</script>

<div id="app">
    <div on:click={()=>{fileInputRef.click()}}>
        <span class="iconify" data-icon="fe:upload" width="50"></span>
    </div>
    <input
        class="upload"
        type="file"
        accept=".json"
        on:change={handleOnChange} bind:this={fileInputRef}
    />

    <div on:click={downloadFile}>
        <span class="iconify" data-icon="fe:download" width="50"></span>
    </div>
</div>

<style>
  .upload {
    display: none;
  }
</style>

