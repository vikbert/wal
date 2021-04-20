<script lang="ts">
import classNames from 'classnames'
import {shuffle} from './services/array'
import { opened } from "./services/store";
import { members } from "./services/store";

import Setting from "./Setting.svelte";

let done: string[] = []
let show: boolean = true;
let current: string = '⇡'

let names: string[];
members.subscribe((values) => {
  names = values.filter((item) => item.checked).map((item) => item.name);
})
  const getRandomMember = (items: string[]): string => {
      if (names.length === 0) {
          return;
      }

      const nextIndex = Math.floor(Math.random() * items.length);
      const nextName = names[nextIndex]
      done = [nextName, ...done]

      return nextName
  }

  const handleRandom = () => {
    if (0 === names.length) {
      handleReset();
    }

    show = false
    current = getRandomMember(names)
    setTimeout(() => {
      show = true
      names = shuffle(names.filter((item, index) => item !== current))
    }, 1000);
  }

  const handleReset = () => {
    if (window.confirm("🐳 Do you really want to restart?")) {
      window.location.reload();
    }
  }

  const openSetting = () => {
    opened.set(true);
  }
</script>

<div class="wrapper">
  <div class="carousel">
      <div class="carousel__item">
          <div class="carousel__item-head" on:click={handleRandom}>
            <span class="iconify" data-icon="carbon:study-next" width=40></span>
          </div>

          <div class="carousel__item-body">
              {#if show}
                <div class="title tracking-in-expand">
                  <div>{names.length === 0 ? '🎉 ' + current + ' 🎉' : current}</div>
                </div>
              {:else}
                {'... shuffling ...'}
              {/if}
          </div>
      </div>

      <div class={"carousel_items-pool"}>
        <img class={classNames({"carousel_items_clip": true, "rotate-in-center": !show})} src="images/clip-2.png" alt="clip">

        {#each names as item}
        <div class="carousel_items-pool_name">{item}</div>
        {/each}

      </div>
  </div>
</div>

<div on:click={openSetting} class="dock dock-setting opacity-25">
  <span class="iconify" data-icon="carbon:settings-adjust" width='40' />
</div>

<Setting/>

<style>
  .wrapper {
    position: inherit;
    margin-top: 30px;
  }
  .carousel {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .carousel_items-pool {
    position: relative;
    width: 380px;
    height: 380px;
    overflow: scroll;
    padding: 16px 16px 0 32px;
    margin-left: 57px;
    margin-bottom: 20px;
    z-index: 5;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    opacity: 75%;
    background-color: white;
    color: #4a4c4c;

  }
  .carousel_items-pool_name {
    border-bottom: 1px dotted #dedede;
    padding: 8px 0;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
  }
  .carousel_items_clip {
    position: absolute;
    width: 200px;
    right: -94px;
    bottom: 45px;
  }
  .carousel__item {
    display: flex;
    flex-direction: column;
    padding: 0 12px;
  }

  .carousel__item-head {
    z-index: 100;
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    width: 90px;
    height: 90px;
    padding: 10px 16px 16px 27px;
    margin: 0 auto;
    margin-bottom: -35px;
    font-size: 50px;
    transition: all 1.5s;
    color: #c0bcbcf1;
    box-shadow: 10px 1px 28px rgba(0,0,0,0.01), 0 10px 10px rgba(0,0,0,0.08);
  }
  .carousel__item-head:hover {
    color: #000;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .carousel__item-body {
    font-family: 'Lobster', cursive;
    font-size: 40px;
    color: #4e4e50;
    text-align: center;
    z-index: 10;
    height: 125px;
    background-color: #fff;
    border-radius: 8px;
    padding: 40px 20px 20px 20px;
    -webkit-box-shadow: -2px 9px 21px -8px rgba(13,114,146,0.73);
    -moz-box-shadow: -2px 9px 21px -8px rgba(13,114,146,0.73);
    box-shadow: -2px 9px 21px -8px rgba(13,114,146,0.73);
  }
  .dock-setting {
    top: 20px;
  }
</style>
