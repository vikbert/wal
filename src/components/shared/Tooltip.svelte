
<script lang="ts">
  export let text: string = 'tooltip text';

</script>

<div data-tooltip={text}>
  <slot></slot>
</div>

<style>
[data-tooltip] {
  position: relative;
  z-index: 2;
  display: block;
  opacity: 50%;
}

[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease-out;
  transform: translate(-50%, 5px);
}

[data-tooltip]:before {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-bottom: 5px;
  padding: 1rem;
  min-width: 250px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  background-color: rgba(62, 61, 61, 0.54);
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: left;
  font-size: 14px;
  line-height: 1.2;
  transition: 0.2s ease-out;
}

[data-tooltip]:after {
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 0;
  border-top: 5px solid #434242;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: ' ';
  font-size: 0;
  line-height: 0;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0);
}
[data-tooltip='false']:hover:before,
[data-tooltip='false']:hover:after {
  visibility: hidden;
  opacity: 0;
}
</style>
