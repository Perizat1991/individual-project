<template>
    <header class="header container-fluid">
        <a href="#foo" class="logo"><img src="https://img.icons8.com/ultraviolet/40/000000/hanger.png">quickLook.kg</a>
        <Menu v-for="(item, key) in menu" v-bind:key="key" v-bind:item="item"/>
    </header>
</template>

<script>

import Menu from './Menu'
    export default {
        name: 'Header',
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
                    {title: 'Магазины-партнеры', className: 'shops', items: []},
                    {title: 'Регистрация', className: 'sign', link: '/_sign'},
                    {title: 'Войти', className: 'admin', link: '/_admin'}
                ]
            }
        }
    }
    
</script>

<style lang="scss">
 .header {
     background: black;
     height: 100px;
     width: 100%;
     display: flex;
     justify-content: flex-start;
     align-items: center;
 }

 .logo {
    margin-right: 50px;
    margin-left: 100px;
    font-family: Risque;
    color: white;
    font-size: 25px;
    display: flex;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
 }


</style>