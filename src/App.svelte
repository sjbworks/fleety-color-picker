<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
  
  // import nodeVibrant from 'https://cdn.skypack.dev/node-vibrant'
  import Vibrant from 'node-vibrant'

  let  avatar, fileinput;
	
	const onFileSelected =async(e)=>{
    e.preventDefault()
    e.stopPropagation()
    let image = e.target.files[0]
    // let reader = new FileReader()
    // reader.readAsDataURL(image)
    // reader.onload = e => {
    //   avatar = e.target.result
    // }
    const colors = await Vibrant.from(image).getPalette()
    await console.log(colors)
  }

  // const img = new Image()
  // img.src =　'https://i.picsum.photos/id/896/200/300.jpg?hmac=sgs51khfREKwE_t-0S7LpXpYz2CBlBAoeXTFuoHo-l4'
  // Vibrant.from(img).getPalette((err, palette) => console.log(palette))

  let count: number = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .App {
    text-align: center;
  }

  .App code {
    background: #0002;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .App p {
    margin: 0.4rem;
  }

  .App-header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }

  .App-link {
    color: #ff3e00;
  }

  .App-logo {
    height: 36vmin;
    pointer-events: none;
    margin-bottom: 3rem;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }

  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<div class="App">
  <header class="App-header">
    <img src="/logo.svg" class="App-logo" alt="logo"/>
    <label for="">
      <input type="file" name="example" accept="image/jpeg, image/png"  on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
    </label>
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <p>Page has been open for <code>{count}</code> seconds.</p>
    <p>
      <a class="App-link" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
        Learn Svelte
      </a>
    </p>
    
  </header>
</div>
