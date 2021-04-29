<script>
    function newLoad() {
        window.location.reload();
    }
</script>

<a href="/#" on:click={newLoad}>
    <div class="logo">
        <span>W<span>{'🐳'}</span><span class="opacity-50">h</span><span>l</span>
        <div class="version">v1.1.0</div>
    </div>
</a>
<style>
  .logo {
    font-size: 45px;
    font-family: 'Bowlby One', cursive;
    position: relative;
  }

  .version {
    font-size: .8rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    position: absolute;
    right: -50px;
    top: 10px;
  }

  a {
    color: white;
    text-decoration: none;
  }
</style>
