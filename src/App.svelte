<script lang="ts">
  import Vibrant from 'node-vibrant'
  import { Header } from '../src/components'
  import { Footer } from '../src/components'
  import { Card } from '../src/components'

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
    console.log(colorHexes.sort())
    gradient = colorHexes.sort().join(',')
  }

  const getVibrantColors = () => {
    return {
      update() {
        getColorsOfImage()
      },
    }
  }
</script>

<Header />
<main style="--gradient: {gradient}">
  <div class="image-area">
    {#if uploadedImageSource}
      <Card {uploadedImageSource} {uploadedImageElement} {getVibrantColors} class="mt-4 p-10 text-ibory bg-gray" />
    {/if}
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

<style lang="postcss" global>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  :root {
    font-family: 'Helvetica Neue', 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
  }

  main {
    text-align: center;
    margin: 0 auto;
    background: linear-gradient(var(--gradient));
  }

  .image-area {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 77vh;
    backdrop-filter: blur(100px);
  }

  .card {
    margin-top: 16px;
    padding: 40px;
    color: white;
    background-color: #212121;
  }
</style>
