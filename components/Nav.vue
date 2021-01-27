<template>
  <div class="nav">
    <Logo class="nav-item nav__logo" />
    <span v-if="!isMobile">
      <div class="nav__menu-item nav__menu-item1">Blog</div>
      <div class="nav__menu-item nav__menu-item2">Contact</div>
      <a
        class="nav__menu-item nav__menu-item3"
        href="resume.pdf"
        target="_blank"
      >
        Resume
      </a>
    </span>
    <img v-else src="@/assets/menuIcon.svg" alt="menu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    resizeHandler() {
      if (window.innerWidth <= 600) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
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
    color: #ea7b02;
    font-weight: bold;
  }
  & img {
    display: grid;
    justify-self: end;
    align-self: center;
    grid-column: 10/11;
  }
}
</style>
