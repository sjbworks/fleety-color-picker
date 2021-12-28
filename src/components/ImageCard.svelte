<script lang="ts">
  export let uploadedImageSource: string | undefined =
    'https://res.cloudinary.com/dmfts7twt/image/upload/v1640594781/no-image_wcjrkj.png'
  export let uploadedImageElement: HTMLImageElement
  export let getVibrantColors: any
</script>

<div class={`${$$props.class} p-10 rounded-lg img-container`}>
  <img
    src={uploadedImageSource}
    alt="d"
    class="image-area"
    bind:this={uploadedImageElement}
    use:getVibrantColors={uploadedImageElement || uploadedImageSource}
  />
</div>

<style lang="postcss">
  .img-container {
    border-radius: 0.5rem;
    max-width: 400px;
    max-height: 400px;
    aspect-ratio: 1/1;
  }

  .image-area {
    object-fit: cover;
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 0.5rem;
  }

  @media (max-width: 640px) {
    .img-container {
      border-radius: 0.5rem;
      max-width: 400px;
      max-height: 400px;
    }
  }
</style>
