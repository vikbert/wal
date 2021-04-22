<script lang="ts">
    import classNames from 'classnames'
    import {members, opened} from '../services/store'

    let items = [];
    let newName = '';
    members.subscribe((memberList) => {
        items = memberList;
    });

    function handleSubmit(event) {
        event.preventDefault()
        members.persistent([{name: newName, checked: true}, ...items])

        newName = ''
    }

    function toggleItem(target) {
        const updatedItems = items.map((item) => {
            return target.name === item.name ? {...item, checked: !item.checked} : item;
        });

        members.persistent(updatedItems)
    }

    function startChecked() {
        opened.set(false);
    }

    function removeChecked() {
        const itemsNotChecked = items.filter((item) => {
            return !item.checked;
        });

        members.persistent(itemsNotChecked);
    }
</script>

<div class="list-form">
    <form on:submit={handleSubmit}>
        <input
            bind:value={newName}
            class="new-name"
            type="text"
            placeholder="Add a new one"
            maxLength="20">
    </form>
</div>
{#if items.length > 0}
    <div class="list-control">
        <h1>manage the participants</h1>
        <div class="tasks">
            <div class="task" on:click={startChecked}>
                <span class="iconify" data-icon="carbon:study-next" width="20"></span>
                <span>Start selected</span>
            </div>
            <div class="task" on:click={removeChecked}>
                <span class="iconify" data-icon="ant-design:delete-outlined" width="20"></span>
                <span>Delete Selected</span>
            </div>
        </div>
    </div>
    <div class="list-content">
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
{:else }
    <div class="list-empty">
        <div style="text-align: center">
            <h1>no meeting participant</h1>
            <img src="svg/team-0.svg" alt="team" class="svg team">
        </div>
    </div>
{/if}

<style>
  .list-form, .list-control {
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
    color: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 0, 0.18);
    background-color: rgb(139 150 79);
  }

  .task:hover {
    background-color: rgba(224, 224, 215, 0.345);
  }

  .list-content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 99rem;
    margin: 0 auto;
    height: 1px;
  }

  .item {
    cursor: pointer;
    position: relative;
    display: grid;
    place-items: center;
    width: 200px;
    height: 60px;
    margin: 8px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.598);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 0, 0.18);
  }

  .item.active {
    color: white;
    background-color: #ffffff42;
  }

  .item:hover {
    /* color: #0f2735; */
    background-color: rgba(224, 224, 215, 0.125);
  }

  .item-checkmark {
    position: absolute;
    right: 10px;
    top: 10px;
    display: block;
    font-size: 30px;
    color: rgba(224, 224, 215, 0.468);
    opacity: 10%;
  }

  .item-checkmark.active {
    color: rgb(9, 247, 9);
    opacity: unset;
  }

  .list-empty {
    color: white;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  h1 {
    font-size: 3rem;
    padding-bottom: 2rem;
    opacity: 15%;
    color: white;
  }

  .svg {
    width: 250px;
  }
</style>
