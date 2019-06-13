<template>
    <div>
      <h2 class="prodTitle">Мои луки:</h2>
     <div class="card_container">    
        <b-card
          title="Street Style лук"
          :img-src="street1"
          img-alt="Image"
          img-top
          tag="article"
          style="min-width: 20rem;"
          class="col-lg-3"
        >
          <b-card-text>
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
                  <a href="#" class="btn btn-danger">Удалить</a>
                  <a href="#" class="btn btn-success">Обновить</a>
            </div>
        </b-card>
        <b-card
          title="Мужской лук"
          :img-src="man1"
          img-alt="Image"
          img-top
          tag="article"
          style="min-width: 20rem; min-height: 20rem;"
          class="col-lg-3"
        >
          <b-card-text>
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
                  <a href="#" class="btn btn-danger">Удалить</a>
                  <a href="#" class="btn btn-success">Обновить</a>
            </div>
        </b-card>
        <b-card
          title="Вечерний женский лук"
          :img-src="night1"
          img-alt="Image"
          img-top
          tag="article"
          style="min-width: 20rem; min-height: 20rem;"
          class="col-lg-3"
        >
          <b-card-text>
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
                  <a href="#" class="btn btn-danger">Удалить</a>
                  <a href="#" class="btn btn-success">Обновить</a>
            </div>
        </b-card>
        <b-card
          title="Офисный лук"
          :img-src="office1"
          img-alt="Image"
          img-top
          tag="article"
          style="min-width: 20rem; min-height: 20rem;"
          class="col-lg-3"
        >
          <b-card-text>
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
                  <a href="#" class="btn btn-danger">Удалить</a>
                  <a href="#" class="btn btn-success">Обновить</a>
            </div>
        </b-card>
        <b-card
          title="Офисный лук"
          :img-src="office1"
          img-alt="Image"
          img-top
          tag="article"
          style="min-width: 20rem; min-height: 20rem;"
          class="col-lg-3"
        >
          <b-card-text>
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
                  <a href="#" class="btn btn-danger">Удалить</a>
                  <a href="#" class="btn btn-success">Обновить</a>
            </div>
        </b-card>
        <b-card
          title="Офисный лук"
          :img-src="office1"
          img-alt="Image"
          img-top
          tag="article"
          style="min-width: 20rem; min-height: 20rem;"
          class="col-lg-3"
        >
          <b-card-text>
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
                  <a href="#" class="btn btn-danger">Удалить</a>
                  <a href="#" class="btn btn-success">Обновить</a>
            </div>
        </b-card>
     </div>
    </div>
</template>

<script>
import street1 from '../pics/everyday-look/3-street.jpg'
import man1 from '../pics/man/2-man.jpg'
import night1 from '../pics/night-look/3-night.jpg'
import office1 from '../pics/office-look/8-office.jpg'
export default {
    name: 'goods',
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

  .card_container {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
    background: white;
  }
  /* .myTitle {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: blue
  } */
  .available {
    font-family: 'Montserrat', sans-serif;
    margin-top: -5px;
    font-weight: 900
  }
  .prices {
    display: flex;
    margin-top: -10px;
  }
  .oldPrice {
    text-decoration: line-through red;
    color: darkgrey;
    font-size: 18px
  }
  .size {
    margin-top: -10px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace
  }
  .newPrice {
    margin-left: 60px;
    font-size: 18px;
    font-weight: 900;
  }
  .buttons {
      display: flex;
      justify-content: center;
  }
  .btn {
    height: 40px;
    width: 100px
  }
  .col-lg-3 {
    color: blue;
  }

</style>
