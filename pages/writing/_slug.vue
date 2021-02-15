<template>
  <div class="write-container">
    <div v-if="post" class="blog-body">
      <h1 class="title" v-text="post.title" />
      <block-content
        v-if="post.mainImage && Object.keys(post.mainImage).length"
        :blocks="post.mainImage"
        project-id="d1dl1gbc"
        dataset="production"
      />
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
import Code from '~/serializer/code'

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
.write-container {
  display: flex;
  justify-content: center;
}

.title {
  font-family: 'Poppins';
}

.blog-body {
  width: 50em;
  margin: 0 auto;
  margin: 2em 0 10em 0;
  @media (max-width: '768px') {
    width: 98%; // mozilla client
    width: -webkit-fill-available;
  }
  p {
    font-size: 18px;
    // font-family: 'Poppins';
    text-align: justify;
  }
  img {
    width: 100%;
  }
  pre[class*='language-'] {
    display: inline-block;
    padding-right: 1em;
    width: -webkit-fill-available;
    width: -moz-available;
  }
}

p {
  margin: 1rem 0;
}
</style>
