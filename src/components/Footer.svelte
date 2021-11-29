<script lang="ts">
  export let onClickButton: () => void
</script>

<footer class={`${$$props.class} flex w-full bottom-0 fixed bg-gray justify-center h-20 items-center`}>
  <button on:click={onClickButton} class="bg-orange text-ibory h-11 p-4 flex items-center">Upload Image</button>
</footer>

<style lang="postcss">
</style>
