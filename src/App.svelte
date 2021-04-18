<script lang="ts">
    import WalContainer from './WalContainer.svelte'
    import Header from './Header.svelte'
    import Info from './Info.svelte'
</script>

<div class="main">
  <Header/>
  <WalContainer/>
  <Info/>
</div>

<style>
  .main {
    height: 100%;
    display: grid;
    grid-template-rows: 150px 1fr 1fr;
  }
</style>
