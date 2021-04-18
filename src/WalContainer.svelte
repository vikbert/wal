<script lang="ts">
  import Loading from './Loading.svelte'
  let names: string[] = ['Joe', 'Müller', 'Hans', ]
  let done: string[] = []
  let show: boolean = true;
  let current: string = 'Hello'
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
      show = false
      current = getRandomMember(names)
      setTimeout(() => {
        show = true
        names = names.filter((item, index) => item !== current)
      }, 1000);
  }

  const handleReset = () => {
    if (window.confirm("🐳 Do you really want to restart?")) {
      window.location.reload();
    }
  }
</script>

<div class="wrapper">
  <div class="carousel">
      <div class="carousel__item">
          <div class="carousel__item-head" on:click={handleRandom}>
            <span class="heartbeat">{'🐳'}</span>
          </div>
          <div class="carousel__item-body">
              {#if show}
                <span class="title tracking-in-expand">{current ?? 'Nobody there!'}</span>
              {:else}
                  <Loading/>
              {/if}
              <div on:click={handleReset} class="next-user">
                <span class="iconify" data-icon="carbon:power" width=40></span>
              </div>
          </div>
      </div>

      <div class={"carousel_items-pool"}>
        {#each names as item}
          <p>
              <span class="name">{item}</span>
          </p>
        {/each}
      </div>
  </div>
</div>

<style>
  .wrapper {
    position: inherit;
    margin-top: 80px;
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
    position: absolute;
    width: 320px;
    padding: 0 16px 0 32px;
    top: 62px;
    left: 112px;
    background-color: white;
    z-index: 5;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    opacity: 75%;
    color: #4a4c4c;
  }

  .carousel__item {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    padding: 0 12px;
  }

  .carousel__item-head {
    z-index: 100;
    cursor: pointer;
    border-radius: 50%;
    background-color: #d7f7fc;
    width: 90px;
    height: 90px;
    padding: 14px;
    position: relative;
    margin-right: -45px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transition: all 0.2s;
  }
  .carousel__item-head:hover {
    transform: scale(1.2);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .carousel__item-body {
    /* font-family: 'Coda Caption', sans-serif; */
    font-family: 'Lobster', cursive;
    z-index: 10;
    width: 100%;
    height: 125px;
    background-color: #fff;
    border-radius: 8px;
    padding: 16px 20px 16px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-box-shadow: -2px 9px 21px -8px rgba(13,114,146,0.73);
    -moz-box-shadow: -2px 9px 21px -8px rgba(13,114,146,0.73);
    box-shadow: -2px 9px 21px -8px rgba(13,114,146,0.73);
  }

  .title {
    font-size: 40px;
    margin: 0;
    padding: 10px 0 10px 15px;
    color: #4e4e50;
  }

  .next-user {
    position: absolute;
    right: 30px;
    cursor: pointer;
    opacity: 30%;
  }
  .next-user:hover {
    opacity: 100%;
  }
</style>
