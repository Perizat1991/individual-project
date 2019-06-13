<template>
    <div>
        <Header />
        <div id="show_shops">
       
            <h1 class="prodTitle">Магазины-партнеры</h1>
            <div class="container-fluid">
                <div v-for="(photo, index) in photos" v-bind:key="index" class="card">
                    <img :src="photo.thumbnailUrl">
                    {{ photo.title}}
                </div>
            </div>   
        </div>
    </div>
     
    
    
</template>

<script>
import Header from '../components/header/Header'
export default {
    name: 'shops',
   components: {
       Header
   },

    data() {
        return {
            photos: []
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/photos').then(data => {
            console.log(data);
            this.photos = data.data;
        })
    }
}
</script>

<style>
#show_shops {
    padding-top: 100px;
}
      .container-fluid {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap
    }
</style>
