<template>
  <div class="nav">
    <Logo class="nav-item nav__logo" />
    <span class="nav__desktop">
      <nuxt-link to="/writing" class="nav__menu-item nav__menu-item1">
        Writing
      </nuxt-link>
      <nuxt-link to="/contact" class="nav__menu-item nav__menu-item2">
        Contact
      </nuxt-link>
      <nuxt-link to="/projects" class="nav__menu-item nav__menu-item3">
        Projects
      </nuxt-link>
      <a
        class="nav__menu-item nav__menu-item4"
        href="resume.pdf"
        target="_blank"
      >
        Resume
      </a>
    </span>
    <img
      class="nav__mobile"
      src="@/assets/menuIcon.svg"
      alt="menu"
      @click="$emit('drawToggle')"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  display: grid;
  height: 100px;
  align-content: center;
  &__desktop {
    display: contents;
    @media (max-width: 600px) {
      display: none;
    }
  }
  &__mobile {
    display: grid;
    justify-self: end;
    grid-column: 10/11;
    @media (min-width: 600px) {
      display: none;
    }
  }
  &__logo {
    grid-column: 1/2;
    align-self: center;
  }
  &__menu-item {
    grid-column: 3/4;
    align-self: center;
    font-family: 'Poppins';
    font-weight: bold;
    cursor: pointer;
  }
  &__menu-item1 {
    grid-column: 3/4;
  }
  &__menu-item2 {
    grid-column: 4/5;
  }
  &__menu-item3 {
    grid-column: 5/6;
  }
  &__menu-item4 {
    grid-column: 6/11;
  }
  & a {
    color: rgba(0, 0, 0, 0.65);
  }
  & a:hover {
    color: #ea7b02;
  }
}
</style>
