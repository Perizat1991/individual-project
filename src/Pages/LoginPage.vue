<template>
    <div>
        <Header />
        <LoginForm />
    </div>
</template>

<script>
import Header from '../components/header/Header'
import LoginForm from '../components/LoginForm'
export default {
    name: 'login',
    components: {
        Header,
        LoginForm
    }
}
</script>

<style>

</style>
