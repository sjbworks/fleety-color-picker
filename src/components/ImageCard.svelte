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
    class="object-cover w-full h-full rounded-lg"
    bind:this={uploadedImageElement}
    use:getVibrantColors={uploadedImageElement || uploadedImageSource}
  />
</div>

<style lang="postcss">
  .img-container {
    border-radius: 0.5rem;
    width: 400px;
    height: 400px;
  }

  @media (max-width: 640px) {
    .img-container {
      border-radius: 0.5rem;
      max-width: 300px;
      max-height: 300px;
    }
  }
</style>
