<script lang="ts">
  import ColorThief from 'colorthief'

  let  uploadedImageSource, uploadedImageElement, gradient

  const onFileSelected = async(e) => {
    const image = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = (e) => uploadedImageSource = e.target.result
  }

  const getColorsOfImage = async() => {
    const colorThief = new ColorThief()
    const colors = colorThief.getPalette(uploadedImageElement)
    const colorRgb = colors.map((e)=>`rgba(${e.join(',')})`)
    gradient = colorRgb.join(',')
    console.log(gradient)
  }

  $: uploadedImageElement && uploadedImageSource && getColorsOfImage()

</script>

<main style="--gradient: {gradient}">
  <div class="image-area">
    <div>
      {#if uploadedImageSource}
        <img class="uploadedImage" src="{uploadedImageSource}" alt="d" bind:this={uploadedImageElement} />
      {/if}
    </div>
    <label for="">
      <input type="file" name="example" accept="image/jpeg, image/png"  on:change={(e)=>onFileSelected(e)} >
    </label>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    margin: 0 auto;
    background: linear-gradient(var(--gradient));
  }

  .image-area {
    backdrop-filter: blur(100px);
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
