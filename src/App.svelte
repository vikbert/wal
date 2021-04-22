<script lang="ts">
    import Header from './Header.svelte'
    import Info from './Info.svelte'
    import Setting from './Setting.svelte';
    import TimerWidget from './timer/TimerWidget.svelte';
    import WalContainer from './WalContainer.svelte'
</script>

<div class="main">
    <Setting/>
    <Header/>
    <TimerWidget/>
    <WalContainer/>
    <Info/>
</div>

<style>
  .main {
    height: 100%;
  }
</style>
