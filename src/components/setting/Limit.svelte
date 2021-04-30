<script>
    import {config} from '../../services/store';
    import Tooltip from '../shared/Tooltip.svelte';

    let appConfig;
    config.subscribe((data) => {
        appConfig = data;
    });

    function handleUpdateConfig() {
        config.persistent(appConfig);
    }

    function handleSubmit() {
        handleUpdateConfig();
    }
</script>
<form on:submit={handleSubmit}>
    <Tooltip text="Set the time-box for the meeting in minutes (default: 15 minutes)">
        <input
            type="number"
            class="timer_limit"
            max="120"
            min="15"
            on:change={handleUpdateConfig}
            bind:value={appConfig.timerLimit}
        />
    </Tooltip>
    {''}
</form>

<style>
  input {
    font-size: 45px;
    text-align: center;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffffa6;
    padding: 0;
  }
</style>
