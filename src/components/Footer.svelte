<script lang="ts">
  export let onClickButton: () => void
</script>

<footer class={`${$$props.class} flex w-full bg-gray justify-center h-20 items-center`}>
  <button on:click={onClickButton} class="bg-slate text-ibory h-11 p-4 flex items-center">Upload Image</button>
</footer>

<style lang="postcss" module>
</style>
