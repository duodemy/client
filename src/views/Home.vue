<template>
  <div class="page" :class="[theme]">
    <section class="banner" :class="[theme]">
      <h1 :class="[theme]">Duodemy</h1>
      <p :class="[theme]">This is a cool paragraph!</p>
      <button>Get Started</button>
      <img src="../assets/octoround.svg" id="octo">
      <span class="anim" id="pulse"></span>
    </section>
    <section class="alt">
      <div class="content">
        <span class="text">
          <h2>Hello World</h2>
          <p>
            The five boxing wizards jumped quickly. The five boxing wizards jumped quickly. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The jay, pig, fox, zebra and my wolves quack. The jay, pig, fox, zebra and my wolves quack.
          </p>
          <p>
            The five boxing wizards jumped quickly. The five boxing wizards jumped quickly. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The jay, pig, fox, zebra and my wolves quack. The jay, pig, fox, zebra and my wolves quack.
          </p>
        </span>
        <span class="graphic">
          
        </span>
      </div>
    </section>
    <section>
      <div class="content">
        <span class="text">
          <h2>Hello World</h2>
          <p>
            
          </p>
        </span>
        <span class="text">
          <h2>Google is Cool</h2>
          <p>
            The world has evolved dramatically over the past few years!
          </p>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
  import Note from "../components/Note.vue"
  export default {
    data() {
      const theme = localStorage.getItem('theme')
      return {
        theme: theme
      }
    },
    components: {
      'Note': Note,
    },
    methods: {
      
    },
    created() {
      
    },
    beforeUnmount() {
      
    },
  }
</script>

<style scoped>
  
</style>