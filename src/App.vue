<template>
  <div id="app">
  <div class="content"><router-view /></div>
  <Footer />
  </div>
</template>

<script>


import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
  
    Footer
  }
}

</script>

<style lang="sass">
  .content 
    height: fit-content
</style>
