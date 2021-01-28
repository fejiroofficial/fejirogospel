<template>
  <div class="side-nav">
    <img
      class="side-nav__cancel-icon"
      src="@/assets/cancel.svg"
      alt="cancel"
      @click="$emit('drawToggle')"
    />
    <div class="side-nav__menu-items">
      <div class="side-nav__menu-item">Blog</div>
      <div class="side-nav__menu-item">Contact</div>
      <a class="side-nav__menu-item" href="resume.pdf" target="_blank">
        Resume
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.side-nav {
  display: grid;
  padding: 20% 5%;
  min-height: 100vh;
  position: fixed;
  width: 80%;
  left: 0px;
  top: 0px;
  background: rgba(81, 81, 81, 0.9);
  bottom: 0px;
  &__cancel-icon {
    justify-self: end;
  }
  &__menu-items {
    display: grid;
    justify-content: center;
    font-family: 'Poppins';
    font-size: 18px;
  }
  &__menu-item {
    justify-self: center;
    color: #ffffff;
  }
}
</style>
