<script>
  import HowTo from './HowTo.svelte';
  import Timer from './Timer.svelte';
  let audio;
  function timerStarts(){
    audio.play();
  }
</script>

<h1>HandwashingApp</h1>
<Timer on:start={timerStarts}/>
<HowTo />

<style>
  h1 {
    text-align: center;
  }
</style>

<audio bind:this={audio}>
  <source src="Xylophone Tip Toe Scale Up.mp3"/>
  <track kind="captions">
</audio>