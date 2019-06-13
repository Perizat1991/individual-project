<template>
    <footer class="footer container-fluid">
    
      <div class="top">
        <div class="info">
          <a href="#foo" class="logo"><img src="https://img.icons8.com/ultraviolet/40/000000/hanger.png">QuickLook.kg</a>
          <small class="small">Найди подходящий лук не выходя из дома!</small>
          <div class="social"> 
            <a href="#"><img src="../pics/icons/facebook.png" alt=""></a>
            <a href="#"><img src="../pics/icons/insta.png" alt=""></a>
            <a href="#"><img src="../pics/icons/whatsapp.png" alt=""></a>
          </div>

        </div>
        <div class="widjets">

            <div><a href="info.html" class="info-link">Контакты</a></div>
            <div><a href="info.html" class="info-link">Безопасность</a> </div>
            <div><a href="rules.html" class="info-link">Правила пользование</a></div>            

        </div>
        
      </div>
      <div class="bottom">
        <p class="text">Copyright 2019</p>
      </div>
  
    </footer>
</template>

<script>

export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        height: 300px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        background-color: black;
        padding: 50px 0 0 0;
        color: white;
       
    }

    .footer section {
    width: 100%;
   
    }

.bottom {
  border-top: 1px solid white;
  font-size: 20px;
  font-family: Philosopher-Bold;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 50px;
  text-align: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.small {
    margin-left: 100px;
   font-family: 'Montserrat', sans-serif;
}

.top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  color: white;
}

.widjets {
  list-style: none;
  display: block
}

.info-link {
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
}

.info-link:hover {
  color: palevioletred;
  text-decoration: none;
}

.navbar-brand {
  color: white;
 font-family: 'Montserrat', sans-serif;
  font-size: 24px;
}

.navbar-brand:hover {
  color: plum;
}

.social {
  margin: 10px 0;
  margin-left: 90px;  
  width: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

html {
  height: 100%;
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #F8F8FF;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
