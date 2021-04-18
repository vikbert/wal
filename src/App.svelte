<script lang="ts">
  // https://www.minimamente.com/project/magic/
	let names: string[] = ['Joe', 'Müller', 'Hans']
  let done: string[] = []
  const getRandomMember = (items: string[]): string => {
    if (names.length === 0) {
      return;
    }

    const nextIndex = Math.floor(Math.random() * items.length);
    const nextName = names[nextIndex]
    done = [nextName, ...done]

    names = names.filter((item, index) => index !== nextIndex)

    return nextName
  }
  let current: string = 'Hello, World'

  const handleClick = () => {
    current = getRandomMember(names)
  }
</script>

<main>
	<h1>Ottol</h1>
	<button on:click={handleClick}>Next One</button>
  <p>{names.join(', ')}</p>

  <hr>

  <h1>{current ?? 'finished'}</h1>
  <p>{done.join(', ')}</p>

  <!-- <div class="container">
    <div class="carousel">
      <div class="carousel__face"><span>This is something</span></div>
      <div class="carousel__face"><span>Very special</span></div>
      <div class="carousel__face"><span>Special is the key</span></div>
      <div class="carousel__face"><span>For you</span></div>
      <div class="carousel__face"><span>Just give it</span></div>
      <div class="carousel__face"><span>A try</span></div>
      <div class="carousel__face"><span>And see</span></div>
      <div class="carousel__face"><span>How IT Works</span></div>
      <div class="carousel__face"><span>Woow</span></div>
    </div>
  </div> -->
</main>

<style>
	body {
  margin: 0;
  background: lightgray;
  text-align: center;
  font-family: sans-serif;
  color: #fefefe;
}
.container {
  position: relative;
  width: 320px;
  margin: 100px auto 0 auto;
  perspective: 1000px;
}

.carousel {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate360 30s infinite forwards linear;
}
.carousel__face {
  position: absolute;
  width: 300px;
  height: 187px;
  top: 20px;
  left: 10px;
  right: 10px;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0,0,0,0.5);
  display: flex;
}

span {
  margin: auto;
  font-size: 2rem;
  color: white;
}

.carousel__face:nth-child(1) {
  transform: rotateY(  0deg) translateZ(430px); }
.carousel__face:nth-child(2) {
    transform: rotateY( 40deg) translateZ(430px); }
.carousel__face:nth-child(3) {
  transform: rotateY( 80deg) translateZ(430px); }
.carousel__face:nth-child(4) {
  transform: rotateY(120deg) translateZ(430px); }
.carousel__face:nth-child(5) {
 transform: rotateY(160deg) translateZ(430px); }
.carousel__face:nth-child(6) {
 transform: rotateY(200deg) translateZ(430px); }
.carousel__face:nth-child(7) {
 transform: rotateY(240deg) translateZ(430px); }
.carousel__face:nth-child(8) {
  transform: rotateY(280deg) translateZ(430px); }
.carousel__face:nth-child(9) {
  transform: rotateY(320deg) translateZ(430px); }

@keyframes rotate360 {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}

</style>
