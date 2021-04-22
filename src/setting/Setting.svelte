<script lang="ts">
    import classNames from 'classnames'
    import Dock from '../components/Dock.svelte';
    import AudioSwitch from '../components/AudioSwitch.svelte';
    import Checkbox from '../components/Checkbox.svelte';
    import {opened, members, config} from '../services/store'

    let items = [];
    let appConfig;
    config.subscribe((data) => {
        appConfig = data
    })

    let newName = '';
    members.subscribe((memberList) => {
        items = memberList;
    });

    let show: boolean;
    opened.subscribe((value) => {
        show = value;
    });

    function togglePopup() {
        show = !show;
        opened.set(show);
    }

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

    function handleUpdateConfig() {
        config.persistent(appConfig);
    }

    function handleOnChangeCheckbox(checked: boolean): void {
        appConfig = {
            ...appConfig,
            timerAudio: checked,
        }

        handleUpdateConfig();
    }

</script>
{#if show}
    <div class="dock dock-close opacity-50" on:click={togglePopup}>
        <span
            class="iconify"
            data-icon="codicon:chrome-close"
            width="20"/>
    </div>
{:else}
    <div class="dock dock-close opacity-50" on:click={togglePopup}>
        <span
            class="iconify"
            data-icon="gridicons:menu"
            width="20"/>
    </div>
{/if}

{#if show}
    <div class={"setting scale-in-ver-center"}>
        <div class="right">
            <div class="options">
                <h1>Time limit of the meeting: </h1>
                <input
                    type="number"
                    class="timer_limit"
                    placeholder="15"
                    max="120"
                    on:change={handleUpdateConfig}
                    bind:value={appConfig.timerLimit}>
                <span>mins</span>

                <h1>Timer Audio:</h1>
<!--                <AudioSwitch enabled={true}/>-->
                <Checkbox checked={appConfig.timerAudio} onChangeCallback={handleOnChangeCheckbox}/>
            </div>
        </div>

        <div class="left">
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
            <div class="list-control">
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
        </div>
    </div>
{/if}

<style>
  .setting {
    z-index: 200;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(60deg, #420285, #08BDBD);
    opacity: 95%;
    transition: all 0.8s;
    padding: 3.5rem 0;
  }

  .left, .right {
    flex: 1 550px;
  }

  .right {
    border-right: 1px solid #5a7baf;
    text-align: center;
  }

  .options {
    color: white;
    opacity: 50%;
  }

  .dock-close {
    z-index: 9999;
    top: 10px;
  }

  .list-form, .list-control {
    display: grid;
    place-items: center;
  }
  .list-control {
    padding: 5rem 0 0 0;
  }

  input {
    font-size: 30px;
    background: transparent;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 0.829);
    padding: 0 10px;
    border-bottom: 1px dotted rgba(255, 255, 255, 0.829);
  }

  input.timer_limit {
    width: 5rem;
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
    border: 1px solid rgba(255, 255, 0, 0.18);
    background-color: rgba(224, 224, 215, 0.125);
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
    width: 340px;
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
    right: 20px;
    top: 15px;
    display: block;
    font-size: 30px;
    color: rgba(224, 224, 215, 0.468);
    opacity: 10%;
  }

  .item-checkmark.active {
    color: rgb(9, 247, 9);
    opacity: unset;
  }
</style>
