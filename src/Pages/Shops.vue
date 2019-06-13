<template>
    <div>
        <Header />
        <div id="show_shops">
       
            <h1 class="prodTitle">Магазины-партнеры</h1>
            <div class="container-fluid">
                <div v-for="(shop, index) in shops" v-bind:key="index" class="col-lg-3 card">
                    <img :src="shop.image">
                   <h1>{{ shop.name}}</h1>
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
            shops: []
        }
    },
    created() {
        this.$http.get('http://192.168.0.110:8080/api/shops').then(data => {
            console.log(data);
            this.shops = data.data;
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
    justify-content: center;
    flex-wrap: wrap
    }
</style>
