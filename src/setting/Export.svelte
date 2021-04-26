<script>
    let fileInputRef;
    import {KEY_CONFIG, KEY_MEMBERS} from '../services/store'

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

<div on:click={downloadFile}>
    <span class="iconify" data-icon="entypo:download" width="50"></span>
</div>
