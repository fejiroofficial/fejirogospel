<template>
  <div class="layout">
    <SideDraw v-if="showDraw" @drawToggle="drawToggle" />
    <NavBar @drawToggle="drawToggle" />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/Nav'
import SideDraw from '~/components/SideDraw'

export default {
  components: {
    NavBar,
    SideDraw,
  },
  data() {
    return {
      showDraw: false,
    }
  },
  methods: {
    drawToggle() {
      this.showDraw = !this.showDraw
    },
  },
}
</script>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.layout {
  // background-image: url('~assets/noisex.jpg');
  min-height: 100vh;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 5%;
  @media (max-width: 1042px) {
    background-size: auto;
    background-repeat: repeat;
  }
  // @media (max-width: 414px) {
  //   background-image: url('~assets/noisexmini.jpg');
  // }
}
</style>
