<script lang="ts">
  import classNames from 'classnames'
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
    event.preventDefault()
    members.persistent([{name: newName, checked: true}, ...items])

    newName = ''
  }

  function toggleItem (target) {
    const updatedItems = items.map((item) => {
      return target.name === item.name ? {...item, checked: !item.checked} : item;
    });

    members.persistent(updatedItems)
  }

  function startChecked () {
    opened.set(false);
  }

  function removeChecked () {
    const itemsNotChecked = items.filter((item) => {
      return !item.checked;
    });

    members.persistent(itemsNotChecked);
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
        placeholder="Add a new one"
        maxLength=20>
    </form>
  </div>
  <div class="action">
    <div class="tasks">
      <div class="task" on:click={startChecked}>
        <span class="iconify" data-icon="carbon:study-next" width=20></span>
        <span>Start selected</span>
      </div>
      <div class="task" on:click={removeChecked}>
        <span class="iconify" data-icon="ant-design:delete-outlined" width=20></span>
        <span>Delete Selected</span>
      </div>
    </div>
  </div>
  <div class="content">
    {#each items as item}
      <div class={classNames({'item': true, 'active': item.checked})} on:click={() => toggleItem(item)}>
        <div class="item-text">
          <span>{item && item.name}</span>
        </div>
        <div class={classNames({'item-checkmark': true, 'active': item.checked})}>
          <span class="iconify" data-icon="carbon:checkmark"></span>
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
    grid-template-rows: 80px 80px 1fr;
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

    background: transparent;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 0.829);
    padding: 0 10px;
    border-bottom: 1px dotted rgba(255, 255, 255, 0.829);
    margin-top: 25px;
  }
  input:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.829);;
  }
  ::-webkit-input-placeholder { /* Edge */
    color: rgba(255, 255, 255, 0.166);
    font-size: 20px;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.365);
    font-size: 20px;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.365);
    font-size: 20px;
  }
  .action {
    display: grid;
    place-items: center;
  }
  .tasks {
    display: flex;
    justify-content: space-between;
  }
  .task {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 160px;
    height: 40px;
    padding: 8px;
    margin: 8px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.598);
    border-radius: 20px;
    border: 1px solid  rgba(255, 255, 0, 0.18);
    background-color:rgba(224, 224, 215, 0.125);
  }
  .task:hover {
    background-color:rgba(224, 224, 215, 0.345);
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 99rem;
    margin: 0 auto;
    padding-top: 70px;
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
    color: rgba(255, 255, 255, 0.598);
    border-radius: 16px;
    border: 1px solid  rgba(255, 255, 0, 0.18);
  }
  .item.active {
    color: white;
    background-color: #ffffff42;
  }
  .item:hover {
    /* color: #0f2735; */
    background-color:rgba(224, 224, 215, 0.125);
  }
  .item-checkmark {
    position: absolute;
    right: 20px;
    top: 20px;
    display: block;
    font-size: 30px;
    color:rgba(224, 224, 215, 0.468);
    opacity: 10%;
  }
  .item-checkmark.active {
    color: rgb(9, 247, 9);
    opacity: unset;
  }
</style>
