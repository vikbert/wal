<script lang="ts">
    import WalContainer from './WalContainer.svelte'
    import Header from './Header.svelte'
    import Info from './Info.svelte'
    import TimerWidget from './timer/TimerWidget.svelte';
</script>

<div class="main">
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
