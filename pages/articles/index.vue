<template>
  <div>
    <div v-for="post in posts" :key="post._id">
      <h2><a :href="slug(post.slug.current)" v-text="post.title" /></h2>
      <div class="summary">
        <block-content
          v-if="post.body.length"
          :key="post.body[0]._id"
          :blocks="post.body[0]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  async asyncData({ $sanity }) {
    const query = groq`*[_type == "post"]`
    const posts = await $sanity.fetch(query)
    return { posts }
  },
  methods: {
    slug(slug) {
      return `articles/${slug}`
    },
  },
}
</script>

<style lang="scss" scoped>
.blog {
  height: 80vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
