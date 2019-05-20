<template>
  <div id="app">
   <Header />
    <router-view />
  </div>
</template>

<script>

import Header from './components/header/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}

</script>

<style lang="sass">

</style>
