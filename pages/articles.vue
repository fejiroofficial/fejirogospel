<template>
  <div>
    <div v-for="post in posts" :key="post._id">
      <h2><a :href="post.slug.current" v-text="post.title" /></h2>
      <p>{{ post.body[0].children[post.body[0].children.length - 1].text }}</p>
      <div>{{ post._createdAt }}</div>
      <div>{{ post }}</div>
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
