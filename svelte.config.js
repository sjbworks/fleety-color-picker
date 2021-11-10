import sveltePreprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import cssModules from 'svelte-preprocess-cssmodules'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      scss: {
        includePaths: ['theme'],
        plugin: [autoprefixer()],
      },
    }),
    // cssModules(),
  ],
}
