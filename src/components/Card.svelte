<script lang="ts">
  import { Card, CardText } from 'svelte-materialify'
  export let uploadedImageSource: any
  export let uploadedImageElement: any
  export let getVibrantColors: any
  export let className: string
</script>

<Card class={`${className} pa-10 justify-center grey darken-4 white-text`} style="max-width:300px;" flat>
  <div class="img-container">
    <img
      src={uploadedImageSource}
      alt="d"
      bind:this={uploadedImageElement}
      use:getVibrantColors={uploadedImageElement || uploadedImageSource}
    />
  </div>
  <CardText
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </CardText>
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
