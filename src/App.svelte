<script lang="ts">
  import Vibrant from 'node-vibrant'
  import { Header } from '../src/components'
  import { Footer } from '../src/components'
  import { ImageCard } from '../src/components'
  import Gradient from 'javascript-color-gradient'

  const colorGradient = new Gradient()

  let inputFileElement, uploadedImageSource, uploadedImageElement, gradient, colorButton

  const onClickButton = () => inputFileElement !== null && inputFileElement.click()

  const onFileSelected = async (e) => {
    const image = e.target.files[0]
    const reader = new FileReader()
    await reader.readAsDataURL(image)
    reader.onload = async (e) => (uploadedImageSource = await e.target.result)
  }

  const getColorsOfImage = async () => {
    if (!uploadedImageSource) return
    const colors = await Vibrant.from(uploadedImageSource).getPalette()
    const colorHexes = Object.keys(colors).map((key) => colors[key].hex)
    colorHexes.sort()
    colorGradient.setGradient(colorHexes[0], colorHexes[colorHexes.length - 1])
    gradient = colorGradient.getArray().join(',')
    colorButton = colorGradient.setGradient(...colorHexes).getArray()
  }

  const getVibrantColors = () => {
    return {
      update() {
        getColorsOfImage()
      },
    }
  }
</script>

<div class="min-h-screen flex flex-col ">
  <Header />
  <main
    style="--gradient: {gradient}"
    class="flex-1 h-full w-full flex lg:flex-col items-center justify-center align-middle"
  >
    <ImageCard
      {uploadedImageSource}
      {uploadedImageElement}
      {getVibrantColors}
      class="text-ibory bg-gray mr-10 lg:m-10"
    />
    <div class="picked-color-box grid place-items-center grid-cols-5 sm:grid-cols-2 lg:m-10 xs:m-0 xs:rounded-none">
      {#if colorButton}
        {#each colorButton as color}
          <span style="background-color: {color}" class="color-button" />
        {/each}
      {/if}
    </div>
  </main>
  <label for="upload-local-image">
    <input
      type="file"
      name="upload-local-image"
      accept="image/jpeg, image/png"
      bind:this={inputFileElement}
      on:change={onFileSelected}
      style="display: none;"
      aria-label="Please upload image"
    />
  </label>
  <Footer class="flex-shrink-0 justify-items-end" {onClickButton} />
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

  .picked-color-box {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 0.5rem;
    padding: 2.5rem;
    width: 400px;
    height: 400px;
  }

  .color-button {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  @media (max-width: 640px) {
    .picked-color-box {
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      max-width: 400px;
      max-height: 400px;
    }
  }

  @media (max-width: 372px) {
    .color-button {
      width: 40px;
      height: 40px;
    }
  }
</style>
