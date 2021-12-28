<header class={`${$$props.class} flex flex-col bg-gray`}>
  <h1 class="text-ibory">IMAGE COLOR PICKER</h1>
  <p class="m-auto text-ibory">画像の色を取得します。</p>
</header>

<style lang="postcss" module>
  :root {
    font-family: 'Helvetica Neue', 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
  }

  h1 {
    font-size: 4rem;
    font-weight: 300;
    margin: 1rem 2rem auto;
    text-align: center;
    line-height: 1.25;
  }

  p {
    margin: 1rem auto;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
