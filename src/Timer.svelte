<script>
  import ProgressBar from './ProgressBar.svelte';
  const totalSeconds = 20;
  let secondsLeft = totalSeconds;
  let isRunning = false;
  $: progress = ((totalSeconds - secondsLeft)/totalSeconds) * 100;
  function startTimer(){
    isRunning = true;
    let timer = setInterval(() => {
      secondsLeft -= 1;
      if (secondsLeft == 0){
        clearInterval(timer);
        isRunning = false;
        secondsLeft = totalSeconds;
      };
    }, 1000);
  }

</script>

<div bp="grid">
  <h2 bp="offset-5@md 4@md 12@sm">Seconds left: {secondsLeft}</h2>
</div>

<ProgressBar {progress} />

<div bp="grid">
<button 
  disabled={isRunning}
  bp="offset-5@md 4@md 12@sm" 
  class="start"
  on:click={startTimer}>
    Start
</button>
</div>

<style>
  h2 {
    margin: 0;
  }
  .start {
    width: 100%;
    margin: 10px 0;
    border-radius: 10px;
  }
  .start[disabled]{
    background-color: gray;
    border-color: black;
    cursor: not-allowed;
  }
</style>
