<script lang="ts">
  import {opened} from './services/store'
  import {members} from './services/store'

  let items= [];

  let newName = '';
  members.subscribe((values) => {
    items = values;
  });

  let show: boolean;
  opened.subscribe((value) => {
    show = value;
  });

  function closeSetting () {
    opened.set(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedItems = [{name: newName, checked: true}, ...items]
    members.set(updatedItems)
    members.persistent(updatedItems)
    newName = '';
  }

  function toggleItem () {

  }

</script>

{#if show}
<div class={show ? "setting scale-in-ver-center" : "setting scale-out-hor-right"}>
  <div class="dock dock-close opacity-50" on:click={closeSetting}>
    <span
      class="iconify"
      data-icon="codicon:chrome-close"
      width='40'/>
  </div>
  <div class="header">
    <form on:submit={handleSubmit}>
      <input
        bind:value={newName}
        class="new-name"
        type="text"
        placeholder="Enter a new name" maxLength=20>
    </form>
  </div>
  <div class="content">
    {#each items as item}
      <div class="item" on:click={toggleItem}>
        <div class="item-text">
          <span>{item && item.name}</span>
        </div>
        <div class="item-checkmark">
          <span class="iconify" data-icon="carbon:checkmark" data-inline="false"></span>
        </div>
      </div>
    {/each}
  </div>
</div>
{/if}

<style>
  .setting {
    z-index: 200;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(60deg, #420285, #08BDBD);
    display: grid;
    grid-template-rows: 80px 1fr;
    opacity:95%;
    transition: all 0.8s;
  }
  .dock-close {
    top: 20px;
  }
  .header {
    display: grid;
    place-items: center;
  }
  input {
    line-height: 50px;
    font-size: 30px;
    width: 340px;
    background: transparent;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 0.829);
    padding: 0 10px;
    border-bottom: 1px dotted rgba(255, 255, 255, 0.829);
  }
  input:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.829);;
  }
  ::-webkit-input-placeholder { /* Edge */
    color: rgba(255, 255, 255, 0.166);
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.365);
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.365);
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 99rem;
    margin: 0 auto;
    padding-top: 20px;
    height: 1px;
  }
  .item {
    cursor: pointer;
    position: relative;
    display: grid;
    place-items: center;
    width: 340px;
    height: 80px;
    margin: 8px;
    font-size: 30px;
    color: white;
    border-radius: 16px;
    border: 1px solid  rgba(255, 255, 0, 0.18);
  }
  .item:hover {
    color: #0f2735;
    background-color:rgba(224, 224, 215, 0.865);
    opacity: 50%;
  }
  .item:hover > .item-checkmark {
    display: block;
    color: #237bad;
  }
  .item-checkmark {
    position: absolute;
    right: 20px;
    top: 20px;
    display: block;
    font-size: 30px;
  }
</style>
