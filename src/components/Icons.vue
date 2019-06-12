<template>
    <section class="content-3">
    
        <h2 class="prodTitle">3 основные причины быть с нами</h2>
        <div class="reasons-box">
          <div class="box">
            <h4>Просто</h4>
            <img src="../pics/icons/easy.png">
            <p>Среди тысячи магазинов одежды вы можете легко найти образ, который не оставит вас равнодушным</p>
          </div>
          <div class="box">
              <h4>Быстро</h4>
              <img src="../pics/icons/time.png">
              <p>К чему эти долгие и утомительные походы по магазинам и изучение каждого магазина в инстаграмме в поисках нужного образа</p>
            </div>
          <div class="box">
            <h4>Выгодно</h4>
            <img src="../pics/icons/discount.png">
            <p>Приятные бонусы: при покупке полного лука, скидки от 10% до 50%</p>            
          </div>           
        </div>
    
  </section>
</template>

<script>
export default {
    name: 'Icons',

}
</script>

<style>
.content-3 {
 margin-top: 100px;
  height: 450px;
  display: -webkit-box;
  display: -ms-flexbox;

  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  color: #2F4F4F;
  text-align: center;
}

.reasons-box {
  color: #2F4F4F;
  display: flex;
  justify-content: center;
  margin-top: 50px
}
.box {
  width: 27%;
  text-align: center;
  margin-left: 5px
}

</style>
