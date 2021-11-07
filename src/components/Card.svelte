<script lang="ts">
  import Card, { Content } from '@smui/card'
  export let uploadedImageSource: any
  export let uploadedImageElement: any
  export let getVibrantColors: any
  export let className = ''
  export { className as class }
</script>

<Card class={className} style="max-width:300px;" flat>
  <div class="img-container">
    <img
      src={uploadedImageSource}
      alt="d"
      bind:this={uploadedImageElement}
      use:getVibrantColors={uploadedImageElement || uploadedImageSource}
    />
  </div>
  <Content
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </Content>
</Card>

<style lang="scss">
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-container {
    width: 220px;
    height: 220px;
    background-color: gray;
  }
</style>
