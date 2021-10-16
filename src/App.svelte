<script lang="ts">
  import Vibrant from 'node-vibrant'
  import Button, { Label,Icon } from '@smui/button'

  let  inputFileElement, uploadedImageSource, uploadedImageElement, gradient

  const onClickButton = () => inputFileElement !== null && inputFileElement.click()

  const onFileSelected = async(e) => {
    const image = e.target.files[0]
    const reader = new FileReader()
    await reader.readAsDataURL(image)
    reader.onload = async(e) => uploadedImageSource = await e.target.result
  }

  const getColorsOfImage = async() => {
    const colors = await Vibrant.from(uploadedImageSource).getPalette()
    const colorHexes = Object.keys(colors).map((key)=>colors[key].hex)
    gradient = colorHexes.sort().join(',')
  }

  const getVibrantColors = (node: HTMLElement, parameters: any) => {
    return {
			update(parameters) {
        getColorsOfImage()
			}
    }
  }

</script>
<svelte:head>
  <!-- Fonts -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />
  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@11.0.0/dist/mdc.typography.css"
  />
  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>
<main style="--gradient: {gradient}">
  <div class="image-area">
    <h1>Fleety Color Picker</h1>
    <p>fleetのようなレイアウトを作成します。</p>
    <div>
      {#if uploadedImageSource}
        <img class="uploadedImage" src="{uploadedImageSource}" alt="d" bind:this={uploadedImageElement} use:getVibrantColors={uploadedImageElement || uploadedImageSource} />
      {/if}
    </div>
    <Button color="primary" on:click={onClickButton} variant="unelevated">
      <Label>Upload Image</Label>
    </Button>
    <label for="upload-local-image">
      <input type="file" name="upload-local-image" accept="image/jpeg, image/png" bind:this={inputFileElement} on:change={onFileSelected} style="display: none;" >
    </label>
  </div>
</main>

<style>
  :root {
    font-family: "Helvetica Neue",
    "Segoe UI",
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
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
    color: #ff4b00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p, .fcp-sentence-font {
    color: #16232b;
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
 