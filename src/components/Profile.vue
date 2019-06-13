<template>
    
        <div class="avaPage container-fluid">
            <div class="avaContainer">
                <div class="avatar-flip" style="box-shadow: 2px 2px 20px #17a2b8">
                    <img src="../pics/slider/three.jpg" height="500" width="500">
                    <img src="../pics/slider/street.jpg" height="200" width="200">
                </div>
                <h4>cosmobella.kg</h4>
                <h3 class="name">Cosmobella</h3>
                <h5 class="phoneNum">Тел: 0555179068</h5>
            <!--Facebook-->
                <a class="fb-ic mr-3" href="https://www.facebook.com/pmaatkurbanova" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
           
            <!--Instagram-->
                <a class="ins-ic mr-3" href="https://www.instagram.com/perismeris/?hl=ru" role="button"><i class="fab fa-lg fa-instagram"></i></a>
                    <div class="buttons">
                        <button class="btn btn-success btn-sm " type="submit" style="background: #139231">Обновить</button>
                        <button class="btn btn-danger btn-sm" type="submit" style="background: #dc3545">Удалить</button> 
                    </div>  
            </div>          
        </div>
   
</template>

<script>
import Profile from "./Profile"
export default {
  name: 'profile',
  
}
</script>

<style>
  .avaPage {
     background-image: url(../pics/slider/profback.jpg);
  }
  .container-fluid {
   
    background-size: 1500px;
    padding-top: 100px;
  }
    .avaContainer {
    width: 500px;
    margin: 50px auto 50px;
    background-color: pink;
    padding: 0 20px 20px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.075);
    -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
    -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
    text-align: center;
  }
  .avaContainer:hover .avatar-flip {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
  }
  .avaContainer:hover .avatar-flip img:first-child {
    opacity: 0;
  }
  .avaContainer:hover .avatar-flip img:last-child {
    opacity: 1;
  }
  .avatar-flip {
    border-radius: 120px;
    overflow: hidden;
    height: 200px;
    width: 200px;
    position: relative;
    margin: auto;
    top: -30px;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    box-shadow: 0 0 0 13px #f0f0f0;
    -webkit-box-shadow: 0 0 0 13px #f0f0f0;
    -moz-box-shadow: 0 0 0 13px #f0f0f0;
    
  }
  .avatar-flip img {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 200px;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
  }
  .avatar-flip img:first-child {
    z-index: 1;
  }
  .avatar-flip img:last-child {
    z-index: 0;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    opacity: 0;
  }
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
  }
  h4 {
    font-size: 13px;
    color: #00baff;
    letter-spacing: 1px;
    margin-bottom: 25px
  }
  .buttons {
      display: flex;
      justify-content: center;
  }
  .card {
    margin-bottom: 50px;
    margin-right: 20px
  }
  .card_container {
    display: flex
  }

</style>
