<script lang="ts">
  import Vibrant from 'node-vibrant'
  import { Header } from '../src/components'
  import { Footer } from '../src/components'

  let inputFileElement, uploadedImageSource, uploadedImageElement, gradient

  const onClickButton = () => inputFileElement !== null && inputFileElement.click()

  const onFileSelected = async (e) => {
    const image = e.target.files[0]
    const reader = new FileReader()
    await reader.readAsDataURL(image)
    reader.onload = async (e) => (uploadedImageSource = await e.target.result)
  }

  const getColorsOfImage = async () => {
    const colors = await Vibrant.from(uploadedImageSource).getPalette()
    const colorHexes = Object.keys(colors).map((key) => colors[key].hex)
    gradient = colorHexes.sort().join(',')
  }

  const getVibrantColors = (node: HTMLElement, parameters: any) => {
    return {
      update(parameters) {
        getColorsOfImage()
      },
    }
  }
</script>

<Header />
<main style="--gradient: {gradient}">
  <div class="image-area">
    <div>
      {#if uploadedImageSource}
        <img
          class="uploadedImage"
          src={uploadedImageSource}
          alt="d"
          bind:this={uploadedImageElement}
          use:getVibrantColors={uploadedImageElement || uploadedImageSource}
        />
      {/if}
    </div>
    <label for="upload-local-image">
      <input
        type="file"
        name="upload-local-image"
        accept="image/jpeg, image/png"
        bind:this={inputFileElement}
        on:change={onFileSelected}
        style="display: none;"
      />
    </label>
  </div>
</main>
<Footer {onClickButton} />

<style lang="scss">
  :root {
    font-family: 'Helvetica Neue', 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
  }

  main {
    text-align: center;
    margin: 0 auto;
    background: linear-gradient(var(--gradient));

    .image-area {
      backdrop-filter: blur(100px);
    }
  }

  img {
    height: 16rem;
    width: 16rem;
  }
</style>
