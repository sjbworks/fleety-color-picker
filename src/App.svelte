<script lang="ts">
  import Vibrant from 'node-vibrant'

  let  uploadedImageSource, uploadedImageElement

  const onFileSelected = async(e) => {
    const image = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = (e) => uploadedImageSource = e.target.result
  }

  const getColorsOfImage = async() => {
    const colors = await Vibrant.from(uploadedImageElement).getPalette()
    console.log(colors)
    console.log(colors.DarkMuted.getHex())
    console.log(colors.DarkVibrant.getHex())
    console.log(colors.LightMuted.getHex())
    console.log(colors.LightVibrant.getHex())
    console.log(colors.Muted.getHex())
    console.log(colors.Vibrant.getHex())
  }

  $: uploadedImageElement && getColorsOfImage()

</script>

<main>
  <div>
    {#if uploadedImageSource}
      <img class="uploadedImage" src="{uploadedImageSource}" alt="d" bind:this={uploadedImageElement} />
    {/if}
  </div>
  <label for="">
    <input type="file" name="example" accept="image/jpeg, image/png"  on:change={(e)=>onFileSelected(e)} >
  </label>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
