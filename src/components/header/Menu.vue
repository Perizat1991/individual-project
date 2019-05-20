<template>
    <div v-bind:class="headerClass" @click="toggleMenu">
        {{item.title}}

        <ul v-bind:class="{ 'hidden-menu': !submenuOpen }">
            <li v-for="(section, key) in item.items" v-bind:key="key">{{section.title}}</li>
        </ul>
    </div>
</template>

<script>
 export default {
        name: 'Menu',
        props: {
            item: Object
        },
         data(){
            return {
                submenuOpen: false
            }
        },
        computed: {
            headerClass() {
                return `menu ${this.item.className} d-flex justify-content-center align-items-center`
            }
        },
        methods: {
            toggleMenu() {
                return this.submenuOpen = !this.submenuOpen;
            }
        }
    }
</script>

<style lang="sass">

    .hidden-menu
        opacity: 0
        height: 0

    .menu
        width: 200px
        height: 100%
        color: white
        margin: 0 5px
        position: relative
        list-style-type: none
    .menu:hover
        cursor: pointer

 
    .girls 
        background-color: #93238E 
        
    .boys 
        background-color: #234993 

    .shops 
         background-color: #E7EB1E 
         color: black

    ul
        width: 100%   
        position: absolute
        top: 100%
        left: 0
        color: inherit
        background-color: inherit
        min-height: 144px
        transition: all .3s ease
        list-style-type: none

    ul:hover 
        cursor: pointer
    li
        margin-top: 3px 
    
    li:hover
        text-shadow: 0px 4px 10px rgba(0, 0, 0, 1)
    .sign
        font-family: 'Pattaya', sans-serif
    

    .admin
        font-family: 'Pattaya', sans-serif

   






</style>
