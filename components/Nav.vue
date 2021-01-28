<template>
  <div class="nav">
    <Logo class="nav-item nav__logo" />
    <span v-show="loaded && !isMobile">
      <div class="nav__menu-item nav__menu-item1">Blog</div>
      <nuxt-link to="/contact" class="nav__menu-item nav__menu-item2">
        Contact
      </nuxt-link>
      <a
        class="nav__menu-item nav__menu-item3"
        href="resume.pdf"
        target="_blank"
      >
        Resume
      </a>
    </span>
    <img
      v-show="loaded && isMobile"
      src="@/assets/menuIcon.svg"
      alt="menu"
      @click="$emit('drawToggle')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler, { passive: true })
  },
  destroyed() {
    this.loaded = false
    window.removeEventListener('resize', this.resizeHandler, { passive: true })
  },
  methods: {
    resizeHandler() {
      this.isMobile = window.innerWidth <= 600
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  display: grid;
  height: 100px;
  align-content: center;
  &__logo {
    grid-column: 1/2;
    align-self: center;
  }
  & span {
    display: contents;
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
    grid-column: 5/11;
  }
  & a {
    color: rgba(0, 0, 0, 0.65);
  }
  & a:hover {
    color: #ea7b02;
  }
  & img {
    display: grid;
    justify-self: end;
    // align-self: center;
    grid-column: 10/11;
  }
}
</style>
