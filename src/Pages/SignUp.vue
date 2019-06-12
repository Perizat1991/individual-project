<template>
    <div>
        <Header />
        <SignupForm />
    </div>
</template>

<script>
import Header from '../components/header/Header'
import SignupForm from '../components/SignupForm'
export default {
    name: 'signup',
    components:{ 
        Header,
        SignupForm
    }
}
</script>

<style>

</style>
