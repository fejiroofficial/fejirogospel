<template>
  <div class="container">
    <img class="container__orange-feji" src="@/assets/fejiorange.svg" alt="" />
    <div class="container__bio-feji">
      <div class="container__title">Fejiro Gospel</div>
      <p>
        I’m a frontend developer and user interface designer from Lagos,
        Nigeria.
      </p>
      <p>
        I’m the Cofounder, COO, and VP Engineering of BuyCoins (YC S18), a
        cryptocurrency exchange for Africa. We also built Sendcash, a
        cryptocurrency-powered remittance platform to easily send money to
        countries in Africa from around the world.
      </p>
    </div>
    <div class="container__socials">
      <a href="https://twitter.com/fejiroofficial" target="_blank">
        <img
          src="@/assets/twitter.svg"
          alt="https://twitter.com/fejiroofficial"
        />
      </a>
      <a href="https://www.instagram.com/fejiroofficial/" target="_blank">
        <img
          src="@/assets/instagram.svg"
          alt="https://www.instagram.com/fejiroofficial/"
        />
      </a>
      <a href="https://www.linkedin.com/in/fejiroofficial/" target="_blank">
        <img
          src="@/assets/linkedin.svg"
          alt="https://www.linkedin.com/in/fejiroofficial/"
        />
      </a>
      <a href="https://github.com/fejiroofficial" target="_blank">
        <img
          src="@/assets/github.svg"
          alt="https://github.com/fejiroofficial"
        />
      </a>
      <a href="https://dribbble.com/fejiroofficial" target="_blank">
        <img
          src="@/assets/dribbble.svg"
          alt="https://dribbble.com/fejiroofficial"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Sail&display=swap');

.container {
  display: grid;
  height: 88vh;
  &__bio-feji {
    max-width: 505px;
    grid-column: 5/11;
    grid-row: 5/10;
    @media (max-width: 600px) {
      grid-column: 1/3;
      grid-row: 5/6;
    }
    @media (max-width: 590px) {
      grid-column: 1/2;
    }
    @media (max-width: 440px) {
      width: fit-content;
      grid-column: 1;
      grid-row: 10/14;
    }
  }
  &__orange-feji {
    grid-column: 1/4;
    grid-row: 3/6;
    @media (max-width: 590px) {
      grid-column: 1/2;
    }
    @media (max-width: 440px) {
      grid-column: 1/2;
    }
  }
  &__title {
    font-family: Sail;
    font-style: normal;
    font-weight: normal;
    font-size: 55px;
    line-height: 63px;
    color: #000000;
    @media (max-width: 440px) {
      font-size: 40px;
    }
  }
  &__socials {
    display: grid;
    grid-column: 1/4;
    grid-row: 7;
    & img {
      margin-bottom: 22px;
      cursor: pointer;
    }
    @media (max-width: 600px) {
      display: grid;
      grid-column: 3/4;
      grid-row: 3/4;
      justify-self: end;
    }
    @media (max-width: 440px) {
      grid-column: 2/3;
      display: grid;
      justify-self: end;
    }
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
