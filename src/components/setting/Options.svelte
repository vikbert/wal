<script>
import AudioSwitch from "./AudioSwitch.svelte";

import Export from "./Export.svelte";
import GitHub from "./GitHub.svelte";
import Import from "./Import.svelte";
import Limit from "./Limit.svelte";
</script>

<div class="option-container">
    <div class="option">
        <AudioSwitch size={48}/>
        <div class="option-title">Audio</div>
    </div>
    <div class="option">
        <Export/>
        <div class="option-title">Export</div>
    </div>
    <div class="option">
        <Import/>
        <div class="option-title">Import</div>
    </div>
    <div class="option">
        <Limit/>
        <div class="option-title">Timer</div>
    </div>
    <div class="option">
        <GitHub repository='vikbert/wal'/>
        <div class="option-title">Code</div>
    </div>
</div>
<style>
    .option-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        padding: 20px;
    }
    .option {
        height: 150px;
        display: grid;
        place-items: center;
        border-radius: 30px;
        border: 1px solid #dedede26;
        color: #ffffffa6;
    }
    .option:hover {
        color: white;
    }
</style>
