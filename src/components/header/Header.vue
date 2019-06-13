<template>
    <nav  id="cssmenu" class="navbar navbar-expand-lg">
        <router-link to="/" class="logo"><img src="https://img.icons8.com/ultraviolet/40/000000/hanger.png">QuickLook.kg</router-link>

                <div class="collapse navbar-collapse" id="navbar1">
                    <li class='active has-sub '><router-link to='/woman' class="links"><span>Женские луки</span></router-link>
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

                <router-link class="sign " to="/shops" v-b-tooltip.hover title="Чьи луки вы здесь найдете"><i class="fas fa-shopping-bag"></i>
                Магазины-партнеры
                </router-link>

                <router-link class="sign" to="/signup" v-b-tooltip.hover title="Только для магазинов"><i class="fas fa-registered"></i>
                    Регистрация
                </router-link>

                <router-link class="sign " to="/login" v-b-tooltip.hover title="Только для магазинов"><i class="fas fa-user-circle"></i>
                    Войти
                </router-link>
         </div>
    </nav>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'Header',


    }

</script>

<style lang="scss">


 .logo {
    margin-right: 50px;
    margin-left: 100px;
    font-family: Abril Fatface;
    color: white;
    font-size: 25px;
    display: flex;
    text-decoration: none;
    font-weight: 600;
    color: pink;
    &:hover {
        text-decoration: none;
        color: palevioletred;
    }
 }
 .sign {
     color: white;
     margin-left: 40px;
     font-family: 'Montserrat', sans-serif;
     font-size: 16px;
    &:hover {
        text-decoration: none;
        color: palevioletred;
    }
 }
    #cssmenu {
    height: 80px;
    background-color:black;
     width: 100%;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     position: fixed;
     top: 0;
     z-index: 100;
     opacity: 0.8;
     font-size: 40px;
    padding: 0;
    margin: 0;
    border: 0;
    
    }
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }
    ul {
    position: relative;
    z-index: 20;
    float: left;
    }
    li {
    list-style: none;
    float: left;
    min-height: 1px;
    line-height: 1em;
    vertical-align: middle;
    }
    li:hover {
    position: relative;
    z-index: 25;
    cursor: default;
    }
    ul {
    visibility: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 25;
    width: 100%;
    }
     li {
    float: none;
    }
    ul {
    top: 1px;
    left: 99%;
    }
     li:hover > ul {
    visibility: visible;
    }
    ul {
    top: 1px;
    left: 99%;
    }
     li {
    float: none;
    }
   ul {
    margin-top: 3px;
    }
     li {
    font-weight: normal;
    }
    /* Custom CSS Styles */
    #cssmenu:after,
    #cssmenu ul:after {
    content: '';
    display: block;
    clear: both;
    }
  .links {
    color: white;
    }
    .myLooks .links {
    color: white;
    }
    .links {
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    padding: 0 20px;
    text-align: center;
    text-decoration: none;
    }
     .links:hover {
    background: black;
    border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    -webkit-border-radius: 4px 4px 0 0;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 0;
    color: palevioletred;
    }
    ul {
    background: black;
    border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    list-style: none;
    }
   ul {
    
    background: -moz-linear-gradient(top, #e5e5e5 0%, #dddddd 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e5e5e5), color-stop(100%,black));
    background: -webkit-linear-gradient(top, #e5e5e5 0%, #dddddd 100%);
    background: -o-linear-gradient(top, #e5e5e5 0%, #dddddd 100%);
    background: -ms-linear-gradient(top, #e5e5e5 0%, #dddddd 100%);
    background: linear-gradient(#e5e5e5 0%, #dddddd 100%);
    box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.3);
    padding-top: 5px;
    width: 100%;
    }
    #cssmenu > ul > li {
    float: left;
    padding: 0 10px;
    position: relative;
    }
    #cssmenu > ul > li:hover > .links {
    background: black;
    border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    -webkit-border-radius: 4px 4px 0 0;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    position: relative;
    color: palevioletred;
    }
    #cssmenu > ul > li .links {
    line-height: 35px;
    }
    #cssmenu > ul > li .links:hover {
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    }
    .has-sub:hover ul {
    display: block;
    color: palevioletred;
    }
    .has-sub .links {
    display: block;
    position: relative;
    }
     .has-sub > .links:after {
    content: '';
    display: block;
    width: 10px;
    height: 9px;
    position: absolute;
    right: 5px;
    top: 50%;
    margin-top: -5px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRCQjdBNUNENDkzMTExRTI4NENBRkFDOUM5MUY0QzI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRCQjdBNUNFNDkzMTExRTI4NENBRkFDOUM5MUY0QzI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEJCN0E1Q0I0OTMxMTFFMjg0Q0FGQUM5QzkxRjRDMjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEJCN0E1Q0M0OTMxMTFFMjg0Q0FGQUM5QzkxRjRDMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qSqkdAAAAtUlEQVR42nyOPQ6DMAyF3bSIKXeplGP0IL1EpU5dkZiQeoDegBt0ZO4BOjORABL5oX4RZCniDZbl99nPh6ZpjkR0pn19TlxclmW7lHOOANZSykue55uQtZbatiXBfdV1Hc3zvAnCY12FUqrm02Xf93/QOI40TdOLmadYZoUxhkIICUKC1hpthRJB3viy8ViMKCR470v23glcdB+GIT7PACEBSauZQN70eBrP4zIn3JC0+j8BBgCxDV02ZQEC4wAAAABJRU5ErkJggg==);
    -webkit-transform: rotate(360deg);
    }
    .has-sub ul {
    background:black;
    border: 1px solid #dddddd;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    display: none;
    padding: 10px 0;
    position: absolute;
    left: 50%;
    top: 34px;
    margin-left: -70px;
    width: 140px;
    z-index: 1;
    }
     .has-sub ul li:hover > .links {
    background: black;
    color: palevioletred;
    border-color: black transparent transparent transparent;
    }
     .has-sub ul .links {
    line-height: 160%;
    padding: 8px 0;
    }
    .has-sub .has-sub .links:after {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgwRkJGQzk4NDkzMTExRTI4M0U0QzE5NjJFN0U3RjNFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgwRkJGQzk5NDkzMTExRTI4M0U0QzE5NjJFN0U3RjNFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODBGQkZDOTY0OTMxMTFFMjgzRTRDMTk2MkU3RTdGM0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODBGQkZDOTc0OTMxMTFFMjgzRTRDMTk2MkU3RTdGM0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6DuTwoAAAAtUlEQVR42nyOsQ3CMBBFj4CVyktkAvZgEJZAoqKNoMoEjMAGzEDnhtKyGztxYzvmznIsIUX5kq2T/rv7fyeE2APAEbb1OeAXGGObVAgBCHxxzk9t265C3ntQSkGD82CMgZTSKkge6pwB7HmXUibn3N/TWif0nsQ0ZbEfxxHmea6XyLTW0jjQl8Gu675o3IqRNU0TxBgf6L0rWHTFuFweAaAESlrMCuJmpNJUni5jwoWSFv8nwAA0tXChxwneNwAAAABJRU5ErkJggg==);
    -webkit-transform: rotate(360deg);
    }
     .has-sub .has-sub ul {
    background: black;
    left: 100%;
    top: 0;
    margin-left: 0;
    }
    .has-sub .has-sub ul .links {
    background: none;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    }
    .has-sub .has-sub ul .links:after {
    background-image: none;
    }
   .has-sub .has-sub ul .links:hover {
    background: black;
    }


</style>