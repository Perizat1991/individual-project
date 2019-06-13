<template>
<div class="login-page">
      <form @submit.prevent='signIn' class="login-form">
        <h1 class="log-name">Создайте профиль своего магазина у нас!</h1>
        <input name="login" placeholder="Логин" v-model="login" class="login-form-input">
        <input name="name" placeholder="Название магазина" v-model="name" class="login-form-input">
         <input type="tel" placeholder="Номер телефона вашего магазина" v-model="contact" class="login-form-input">
        <input name="password" type="password" placeholder="Пароль" class="login-form-input" v-model="password">
        <div class="flexcheckbox">
          <input type="checkbox" id="check">
          <label class="check-signedin" for="check">Сохранить пароль</label>
        </div>
          <button
            type="submit"
            class="login-form-btn"
            >Создать</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'signupForm',
  data: () => ({
    password: '',
    name: '',
    login: '',
    contact: ''
  }),
  computed: {
    isUserAuthenticated () {
      return this.$store.getters.isUserAuthenticated
    }
  },
  watch: {
    isUserAuthenticated (val) {
      if (val === true) {
        this.$router.push('../Pages/Goods.vue')
      }
    }
  },
  methods: {
    signup () {
      this.$store.dispatch('SIGNIN', {login: this.login, contact: this.contact, password: this.password, name: this.name})
    },
    signIn: function(event){
      
      axios
        .post('http://192.168.0.110:8080/api/shop_registration/', {
          name: '' + this.name,
          login: '' + this.login,
          contact: '' + this.contact,
          password: '' + this.password
        })
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
@import url(https://fonts.googleapis.com/css?family=Lato);

.login-page {
    height: 700px;
    background-image: url(../pics/slider/regPhoto.jpg);
    background-position-x: 30%;
    background-position-y: 60%
}
.login-form {
  
    width: 400px;
    padding-top: 200px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    font-family:'Montserrat', sans-serif;
    
  }
    .log-name {
    margin-bottom: 20px;
    font-size: 30px;
    color: white;
    padding-left: 11%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
     text-shadow: 0px 4px 10px rgba(0, 0, 0, 1)

  }

  .login-form-input {
    height: 45px;
    width: 350px;
    border:2px solid grey;
    border-radius: 20px;
    padding-left: 30px;
    font-size: 16px;
    outline: none;
    color: blue;
    box-shadow: 2px 8px 32px -1px rgba(0,0,0,0.75);
  }
  .login-form-input:hover {
    height: 50px;
    width: 355px
  }

  .error {
    display: none
  }

  .login-form-btn {
    height:45px;
    width: 350px;
    border:2px solid grey;
    border-radius: 20px;
    font-size: 20px;
    background: red;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    box-shadow: 2px 8px 32px -1px rgba(0,0,0,0.75);
    letter-spacing: 0.1cm;
  }

  .login-form-btn:hover {
    height: 50px;
    width: 355px
    /* outline: none; */
  }

  .flexcheckbox {
   padding-right: 150px
  
  }

  .check-signedin {
    color: black;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 900;
    margin-top: 10px;
  }

  .check-signedin:hover {
    color: white;
  }

  .forgotpassword {
    font-family: 'Montserrat', sans-serif;
    color:rgb(37, 36, 36);
    font-weight: 500;
    cursor: pointer;
  }

  @media only screen
  and (min-width : 150px)
  and (max-width : 670px) {
    .btnToLogin {
      width: 290px;
    }

    .login-form {
      width: 300px;
    }

    .login-form .logo-name {
      font-size: 30px;
    }

  }

</style>
