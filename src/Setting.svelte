<script>
  export let show = false;
  export let close = () => null;
  const items = [
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
    {name: 'Thomas Müller'},
  ];

</script>

<div class="setting">
  <div class="dock dock-close opacity-50">
    <span class="iconify" data-icon="codicon:chrome-close" width=35></span>
  </div>
  <div class="header">
    <input class="new-name" type="text" placeholder="Enter a new name" maxLength=20>
  </div>
  <div class="content">
    {#each items as item}
      <div class="item">
        <div class="item-text">
          <span>{item.name}</span>
        </div>
        <div class="item-checkmark">
          <span class="iconify" data-icon="carbon:checkmark" data-inline="false"></span>
        </div>
      </div>
    {/each}
  </div>
</div>
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
  }
  .dock-close {
    margin: 10px 10px 0 0;
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
    font-family: 'Lobster', cursive;
    border-radius: 16px;
    border: 1px solid  rgba(255, 255, 0, 0.18);
  }
  .item:hover {
    color: #0f2735;
    background-color:rgba(231, 231, 173, 0.865);
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
