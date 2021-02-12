<template>
  <div class="writing">
    <NuxtLink
      v-for="post in posts"
      :key="post._id"
      :to="slug(post.slug.current)"
      class="writing__post"
    >
      <div class="writing__summary-content">
        <h2>{{ post.title }}</h2>
        <div v-if="post.body.length" class="summary">
          {{ post.body[0].children[0].text.slice(0, 100) }}...
        </div>
      </div>
      <div class="writing__summary-img">
        <block-content
          v-if="post.mainImage && Object.keys(post.mainImage).length"
          :blocks="post.mainImage"
          project-id="d1dl1gbc"
          dataset="production"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  async asyncData({ $sanity }) {
    try {
      const query = groq`*[_type == "post"]`
      const posts = await $sanity.fetch(query)
      return { posts }
    } catch (err) {
      console.log('error found', err)
    }
  },
  methods: {
    slug(slug) {
      return `writing/${slug}`
    },
  },
}
</script>

<style lang="scss" scoped>
.writing {
  margin-top: 2em;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  a {
    color: rgba(0, 0, 0, 0.65);
  }
  figure {
    height: 100%;
  }
  img {
    height: inherit;
    width: 200px;
    object-fit: contain;
  }
  &__summary-content {
    padding: 4em 2em 4em 2em;
  }
  &__summary-img {
    @media (max-width: '600px') {
      display: none;
    }
  }
  &__post {
    display: flex;
    min-height: 200px;
    width: 50em;
    border: 1px solid #e6e6e6;
    margin-bottom: 5em;
    justify-self: center;
    border-radius: 9px;
    text-align: justify;
    cursor: pointer;
    @media (max-width: '768px') {
      width: 100%;
    }
    &:hover {
      border: none;
      box-shadow: 1px 1px 21px -1px #aaa;
    }
    h2 {
      color: #ea7b02;
      font-weight: bold;
      font-family: 'Poppins';
    }
  }
}
</style>
