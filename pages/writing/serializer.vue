<template>
  <client-only>
    <Code :language="language">
      <pre>
      <code>{{ code }}</code>
    </pre>
    </Code>
  </client-only>
</template>

<script>
import { component as Code } from 'vue-code-highlight'
import 'vue-code-highlight/themes/duotone-sea.css'
import 'vue-code-highlight/themes/window.css'

export default {
  components: {
    Code,
  },
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
