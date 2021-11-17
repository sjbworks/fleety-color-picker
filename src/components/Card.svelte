<script lang="ts">
  export let uploadedImageSource: string
  export let uploadedImageElement: HTMLImageElement
  export let getVibrantColors: any
  export let className = ''
  export { className as class }
</script>

<div class={className} style="max-width:300px;">
  <div class="img-container">
    <img
      src={uploadedImageSource}
      alt="d"
      class="object-cover w-full h-full"
      bind:this={uploadedImageElement}
      use:getVibrantColors={uploadedImageElement || uploadedImageSource}
    />
  </div>
  <!-- <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div> -->
</div>

<style lang="postcss">
  .img-container {
    width: 220px;
    height: 220px;
    background-color: gray;
  }
</style>
