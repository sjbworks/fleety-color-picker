<script lang="ts">
  export let onClickButton: () => void
</script>

<footer class="flex w-full bottom-0 fixed bg-gray justify-center">
  <button on:click={onClickButton} class="bg-orange text-ibory p-4">Upload Image</button>
</footer>

<style lang="postcss">
</style>
