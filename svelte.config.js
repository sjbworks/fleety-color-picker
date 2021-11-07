import sveltePreprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import { asMarkupPreprocessor } from 'svelte-as-markup-preprocessor'
import cssModules from 'svelte-preprocess-cssmodules'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [asMarkupPreprocessor([sveltePreprocess(), cssModules()])],
}
