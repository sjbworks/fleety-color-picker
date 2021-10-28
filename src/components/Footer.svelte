<script lang="ts">
  import { Button } from 'svelte-materialify'
  export let onClickButton: () => void
</script>

<footer class="d-flex justify-center grey darken-4">
  <Button depressed class="deep-orange lighten-3 ma-4" on:click={onClickButton} variant="unelevated">
    Upload Image
  </Button>
</footer>

<style lang="scss">
  footer {
    bottom: 0;
    width: 100%;
  }
</style>
