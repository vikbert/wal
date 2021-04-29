<script lang="ts">
    import Info from './Info.svelte'
    import InfoOverly from './InfoOverly.svelte';
    import Logo from './Logo.svelte';
    import Setting from './setting/Setting.svelte';
    import TimerWidget from './TimerWidget.svelte';
    import WalWidget from './WalWidget.svelte'
</script>

<div class="main">
    <Setting/>
    <div class="logo-container">
        <Logo/>
    </div>
    <TimerWidget/>
    <WalWidget/>
    <Info/>
    <InfoOverly/>
</div>

<style>
  .main {
    height: 100%;
  }

  .logo-container {
    position: absolute;
    top: 0px;
    left: 10px;
  }
</style>
