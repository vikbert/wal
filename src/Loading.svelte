<script>
  let content = '🐳';
</script>

<div id="pot">
  {content}
</div>
<style>
  #pot{
    position:absolute;
    left: 14px;
    font-size: 30px;
    -webkit-animation:linear infinite alternate;
    -webkit-animation-name: run;
    -webkit-animation-duration: 5s;
    -webkit-transform:rotateY(180deg);
    -moz-transform:rotateY(180deg);
    -o-transform:rotateY(180deg);
    -ms-transform:rotateY(180deg);
  }
  @-webkit-keyframes run {
    0% { left: 20%;}
    50%{ left : 80%;}
    100%{ left: 10%;}
  }
</style>
