<script lang="ts">
    import Logo from './Logo.svelte';
    import Info from './Info.svelte'
    import Setting from './setting/Setting.svelte';
    import TimerWidget from './TimerWidget.svelte';
    import WalWidget from './WalWidget.svelte'
</script>

<div class="main">
    <Setting/>
    <Logo/>
    <TimerWidget/>
    <WalWidget/>
    <Info/>
</div>

<style>
  .main {
    height: 100%;
  }
</style>
