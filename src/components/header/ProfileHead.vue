<template>
    <nav id="cssmenu" class="navbar navbar-expand-lg">
        <router-link to="/" class="logo"><img src="https://img.icons8.com/ultraviolet/40/000000/hanger.png">QuickLook.kg</router-link>      
        <li class='active has-sub'><router-link to='#' class="links"><span>Женские луки</span></router-link>
            <ul class="looks">
                <li class="myLooks"><router-link to='#' class="links"><span>Вечерние луки</span></router-link></li>
                <li class="myLooks"><router-link to='#' class="links"><span>Офисные луки</span></router-link></li>
                <li class="myLooks"><router-link to='#' class="links"><span>Спортивные луки</span></router-link></li>
                <li class='myLooks last'><router-link to='#' class="links"><span>Street style луки</span></router-link></li>
            </ul>
        </li>
        <li class='active has-sub'><router-link to='#' class="links"><span>Мужские луки</span></router-link>
            <ul class="looks">
                <li class="myLooks"><router-link to='#' class="links"><span>Вечерние луки</span></router-link></li>
                <li class='myLooks'><router-link to='#' class="links"><span>Офисные луки</span></router-link></li>
                <li class="myLooks"><router-link to='#' class="links"><span>Спортивные луки</span></router-link></li>
                <li class='myLooks last'><router-link to='#' class="links"><span>Street style луки</span></router-link></li>
            </ul>
        </li>
        <li class='active has-sub'><router-link to='#' class="links"><span>Сезонные луки</span></router-link>
            <ul class="looks">
                <li class="myLooks"><router-link to='#' class="links"><span>весна-лето</span></router-link></li>
                <li class='myLooks last'><router-link to='#' class="links"><span>осень-зима</span></router-link></li>
            </ul>
        </li>


         <router-link class="sign" to="/shops" v-b-tooltip.hover title="Чьи луки вы здесь найдете"><i class="fas fa-shopping-bag"></i>
            Магазины-партнеры
        </router-link>

        <router-link class="sign" to="/profile"><i class="fas fa-registered"></i>
            Мой профиль
        </router-link>

        <router-link class="sign" to="/" ><i class="fas fa-user-circle"></i>
            Выйти
        </router-link>
        
    </nav>
</template>

<script>
import Menu from './Menu'
    export default {
        name: 'ProfileHeader',
        
        
    }
    
</script>

<style>

</style>
