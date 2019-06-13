<template>
    <div>
        <Header />
        <div class="page-info-section page-info-big">
            <div class="container">
                <h2>Женские луки</h2>
                <div class="site-breadcrumb">
                    <router-link to="/">Главная</router-link> / 
                    <span>Женские луки</span>
                </div>
                <img src="../pics/icons/woman.png" alt="" class="cata-top-pic">
                <div class="look_container">    
                    <b-card
                    :img-src="street1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="min-width: 20rem;"
                    class="col-lg-3"
                    >
                    <b-card-text>
                        <h3>Street Style лук</h3>
                        <p class="available">Размеры в наличии:</p> 
                        <p class="size">XS/S/M/L</p>
                        <p class="available">Размеры обуви в наличии:</p> 
                        <p class="size">37/39/40/41</p>
                        <div class="prices">
                        <h6 class="oldPrice">6000 сом</h6>
                        <h6 class="newPrice">5600 сом</h6>
                        </div>
                    </b-card-text>
                        <div style="display: flex; justify-content:space-between">
                            <router-link to="/admin" class="btn btn-danger">В магазин</router-link>
                        </div>
                    </b-card>
                    <b-card
                         :img-src="man1"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="min-width: 20rem; min-height: 20rem;"
                        class="col-lg-3"
                        >
                        <b-card-text>
                            <h3>Офисный лук</h3>
                        <p class="available">Размеры в наличии:</p> 
                        <p class="size">XS/S/M/L</p>
                        <p class="available">Размеры обуви в наличии:</p> 
                        <p class="size">37/39/40/41</p>
                        <div class="prices">
                        <h6 class="oldPrice">8000 сом</h6>
                        <h6 class="newPrice">7600 сом</h6>
                        </div>
                    </b-card-text>
                        <div style="display: flex; justify-content:space-between">
                           <router-link to="/admin" class="btn btn-danger">В магазин</router-link>
                        </div>
                    </b-card>
                    <b-card
                    :img-src="night1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="min-width: 20rem; min-height: 20rem;"
                    class="col-lg-3"
                    >
                    <b-card-text>
                        <h3>Вечерний лук</h3>
                        <p class="available">Размеры в наличии:</p> 
                        <p class="size">XS/S/M/L</p>
                        <p class="available">Размеры обуви в наличии:</p> 
                        <p class="size">37/39/40/41</p>
                        <div class="prices">
                        <h6 class="oldPrice">15000 сом</h6>
                        <h6 class="newPrice">14400 сом</h6>
                        </div>
                    </b-card-text>
                        <div style="display: flex; justify-content:space-between">
                            <router-link to="/admin" class="btn btn-danger">В магазин</router-link>
                        </div>
                    </b-card>
                    <b-card
                     :img-src="office1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="min-width: 20rem; min-height: 20rem;"
                    class="col-lg-3"
                    >
                    <b-card-text>
                        <h3>Офисный лук</h3>
                        <p class="available">Размеры в наличии:</p> 
                        <p class="size">XS/S/M/L</p>
                        <p class="available">Размеры обуви в наличии:</p> 
                        <p class="size">37/39/40/41</p>
                        <div class="prices">
                        <h6 class="oldPrice">30000 сом</h6>
                        <h6 class="newPrice">28600 сом</h6>
                        </div>
                    </b-card-text>
                        <div style="display: flex; justify-content:space-between">
                            <router-link to="/admin" class="btn btn-danger">В магазин</router-link>
                        </div>
                    </b-card>
                    <b-card
                      :img-src="office1"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="min-width: 20rem; min-height: 20rem;"
                        class="col-lg-3"
                        >
                        <b-card-text>
                            <h3>Офисный лук</h3>
                        <p class="available">Размеры в наличии:</p> 
                        <p class="size">XS/S/M/L</p>
                        <p class="available">Размеры обуви в наличии:</p> 
                        <p class="size">37/39/40/41</p>
                        <div class="prices">
                        <h6 class="oldPrice">30000 сом</h6>
                        <h6 class="newPrice">28600 сом</h6>
                        </div>
                    </b-card-text>
                        <div style="display: flex; justify-content:space-between">
                            <router-link to="/admin" class="btn btn-danger">В магазин</router-link>
                        </div>
                    </b-card>
                    <b-card
                      :img-src="office1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="min-width: 20rem; min-height: 20rem;"
                    class="col-lg-3"
                    >
                    <b-card-text>
                        <h3>Офисный лук</h3>
                        <p class="available">Размеры в наличии:</p> 
                        <p class="size">XS/S/M/L</p>
                        <p class="available">Размеры обуви в наличии:</p> 
                        <p class="size">37/39/40/41</p>
                        <div class="prices">
                        <h6 class="oldPrice">30000 сом</h6>
                        <h6 class="newPrice">28600 сом</h6>
                        </div>
                    </b-card-text>
                        <div style="display: flex; justify-content:space-between">
                            <router-link to="/admin" class="btn btn-danger">В магазин</router-link>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/header/Header'
import street1 from '../pics/everyday-look/3-street.jpg'
import man1 from '../pics/man/2-man.jpg'
import night1 from '../pics/night-look/3-night.jpg'
import office1 from '../pics/office-look/8-office.jpg'
export default {
    name: 'woman',
    components: {
        Header
    },
    data() {
        return {
            street1,
            man1,
            night1,
            office1
        }
        
    }
}

</script>

<style>
body {
    margin: o auto;
    font-family: 'Montserrat', sans-serif;
}

.page-info-section {
	background: #ebebeb;
}
.page-info-section .container {
	position: relative;
}

.page-info-section.page-info-big {
	padding: 135px 0;
}
.site-breadcrumb {
	color: #909090;
}
.cata-top-pic {
    margin-left: 500px;
	z-index: 10;
	right: 40px;
    margin-bottom: 20px;

}
a {
    list-style: none;
}
.look_container {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
    background: #ebebeb;
}

</style>
