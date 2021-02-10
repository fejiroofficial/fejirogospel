<template>
  <div class="container">
    <div v-if="post" class="blog-body">
      <!-- <h4><a href="/articles">← Go back</a></h4> -->
      <h1 class="title" v-text="post.title" />
      <div class="content">
        <block-content
          v-for="child in post.body"
          :key="child._id"
          project-id="d1dl1gbc"
          dataset="production"
          :blocks="child"
          :serializers="serializers"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Code from './serializer'

export default {
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"][0]`
    const post = await $sanity.fetch(query)
    return { post }
  },
  data() {
    return {
      serializers: {
        types: {
          code: Code,
        },
      },
    }
  },
}
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
}

.blog-body {
  width: 50em;
  margin: 0 auto;
  // max-width: 50%;
  @media (max-width: '768px') {
    width: -webkit-fill-available;
    width: -moz-fill-available;
  }
  p {
    font-size: 16px;
    font-family: 'Poppins';
    text-align: justify;
  }
  img {
    width: 100%;
  }
  pre[class*='language-'] {
    display: inline-block;
    padding-right: 1em;
    width: -webkit-fill-available;
    width: -moz-fill-available;
  }
}

p {
  margin: 1rem 0;
}
</style>
