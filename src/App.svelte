<script lang="ts">
  import Vibrant from 'node-vibrant'
  import { Header } from '../src/components'
  import { Footer } from '../src/components'
  import { Card } from '../src/components'
  import Gradient from 'javascript-color-gradient'

  const colorGradient = new Gradient()

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
    colorHexes.sort()
    colorGradient.setGradient(colorHexes[0], colorHexes[colorHexes.length - 1])
    gradient = colorGradient.getArray().join(',')
  }

  const getVibrantColors = () => {
    return {
      update() {
        getColorsOfImage()
      },
    }
  }
</script>

<div class="flex flex-col h-screen">
  <Header class="flex-grow" />
  <main style="--gradient: {gradient}" class="h-full">
    <div class="h-full flex items-center justify-center align-middle">
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
  <Footer class="flex-shrink-0" {onClickButton} />
</div>

<style lang="postcss" global>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';

  :root {
    font-family: 'Helvetica Neue', 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
  }

  main {
    text-align: center;
    background: linear-gradient(var(--gradient));
    flex-grow: 3;
  }
</style>
