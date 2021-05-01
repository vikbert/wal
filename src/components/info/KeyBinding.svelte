<div class="key-binding-container">
    <div class="key-binding">
        <div class="info">Randomize Name</div>
        <div class="key__button">R</div>
    </div>
    <div class="key-binding">
        <div class="info">Open Setting</div>
        <div class="key__button">S</div>
    </div>
    <div class="key-binding">
        <div class="info">Quit Settings</div>
        <div class="key__button">Q</div>
    </div>
</div>

<style>
  .key-binding-container {
    position: absolute;
    bottom: 40px;
    right: 30px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1280px) {
    .key-binding-container {
      display: none;
    }
  }

  .key-binding {
    display: grid;
    grid-template-columns: 1fr 50px;
    align-items: center;
    grid-gap: 20px;
    margin: 20px;
    color: white;
    text-align: right;
  }

  .info {
    font-size: 1.4rem;
    opacity: 40%;
  }

  .key__button {
    box-sizing: border-box;
    line-height: 80px;
    font-size: 22px;
    text-align: center;
    width: 80px;
    color: #555;
    cursor: pointer;
    margin: 0 8px;
    height: 80px;
    border-color: #f2f2f2;
    border-style: solid;
    text-shadow: 0 0.5px 1px #777, 0 2px 6px #f2f2f2;
    border-width: 1px;
    border-radius: 10px;
    background: -webkit-linear-gradient(top, #f9f9f9 0%, #D2D2D2 80%, #c0c0c0 100%);
    font-family: sans-serif;
    display: inline-block;
    transition: box-shadow 0.3s ease, transform 0.15s ease;
    box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 6px 0 #C0C0C0, 0 8px 17px rgba(68, 68, 68, 0.4), 2px 1px 4px rgba(68, 68, 68, 0.25), -2px 1px 4px rgba(68, 68, 68, 0.25), 0 9px 16px rgba(68, 68, 68, 0.1);
  }

  .key__button:hover, .key__button:focus {
    box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 4px 0 #C0C0C0, 0 2px 35px rgba(68, 68, 68, 0.3), 2px 2px 4px rgba(68, 68, 68, 0.25), -2px 2px 4px rgba(68, 68, 68, 0.25), 0 7px 4px rgba(68, 68, 68, 0.1);
    transform: translateY(2px);
  }

  .key__button:active {
    box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 0 0 #C0C0C0, 0 0px 30px rgba(68, 68, 68, 0.15), 2px 2px 4px rgba(68, 68, 68, 0.25), -2px 2px 4px rgba(68, 68, 68, 0.25), 0 0px 4px rgba(68, 68, 68, 0.25);
    transform: translateY(4px);
  }

</style>
