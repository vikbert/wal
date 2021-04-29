<script>
    import {config} from '../../services/store'

    let appConfig;
    config.subscribe((data) => {
        appConfig = data
    })

    function handleUpdateConfig() {
        config.persistent(appConfig)
    }

    function handleSubmit() {
        handleUpdateConfig()
    }
</script>
<form on:submit={handleSubmit}>
    <input
        type="number"
        class="timer_limit"
        max="120"
        min="15"
        on:change={handleUpdateConfig}
        bind:value={appConfig.timerLimit}
    />
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
