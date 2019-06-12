<template>
    <div>
        <Header />
        <Slider />
        <Icons />
        <Products />
    </div>
</template>

<script>
import Header from "../components/header/Header"
import Slider from "../components/Slider"
import Products from "../components/Products"
import Icons from "../components/Icons"

export default {
    name: 'Main',
    components: {
        Header,
        Slider,
        Products,
        Icons
    }
}
</script>

<style>

</style>
