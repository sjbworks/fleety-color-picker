<header class="d-flex">
  <h1>Fleety Color Picker</h1>
  <p>fleetのようなレイアウトを作成します。</p>
</header>

<style lang="scss">
  :root {
    font-family: 'Helvetica Neue', 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
  }

  h1 {
    color: #ff4b00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    color: #16232b;
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
