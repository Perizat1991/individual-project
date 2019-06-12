<template>
    <header  class="header container-fluid">
        <router-link to="/" class="logo"><img src="https://img.icons8.com/ultraviolet/40/000000/hanger.png">QuickLook.kg</router-link>
        <Menu v-for="(item, key) in menu" v-bind:key="key" v-bind:item="item"/>

         <router-link class="sign" to="/shops" v-b-tooltip.hover title="Чьи луки вы здесь найдете"><i class="fas fa-shopping-bag"></i>
            Магазины-партнеры
        </router-link>

        <router-link class="sign" to="/profile"><i class="fas fa-registered"></i>
            Мой профиль
        </router-link>

        <router-link class="sign" to="/" ><i class="fas fa-user-circle"></i>
            Выйти
        </router-link>
        
    </header>
</template>

<script>
import Menu from './Menu'
    export default {
        name: 'ProfileHeader',
        components: {
            Menu
        },
        data(){
            return {
                menu: [
                    {title: 'Женские луки', className: 'girls', items: [
                        { title: 'Вечерние луки', link: '/_look' },
                        { title: 'Офисные луки', link: '/_look' },
                        { title: 'Спортивные луки', link: '/_look' },
                        { title: 'Street style луки', link: '/_look' },
                        { title: 'Сезонные луки', link: '/_look', nested: [
                            {name: 'весна-лето', link: '/_look/_summer', color: '#3FD227'},
                            {name: 'осень-зима', link: '/_look/_winter', color: '#21F5DC'}
                        ]},
                    ]},
                    {title: 'Мужские луки', className: 'boys', items: [
                        { title: 'Вечерние луки', link: '/_look' },
                        { title: 'Офисные луки', link: '/_look' },
                        { title: 'Спортивные луки', link: '/_look' },
                        { title: 'Street style луки', link: '/_look' },
                        { title: 'Сезонные луки', link: '/_look', nested: [
                            {name: 'весна-лето', link: '/_look/_summer', color: '#3FD227'},     
                            {name: 'осень-зима', link: '/_look/_winter', color: '#21F5DC'}
                        ]},
                    ]},
                    
                ]
            }
        }
    }
    
</script>

<style>

</style>
