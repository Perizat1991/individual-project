<template>
    <div>
        <ProfileHead />
        <Profile />
        <Goods />
    </div>
</template>

<script>
import ProfileHead from '../components/header/ProfileHead'
import Profile from '../components/Profile'
import Goods from '../components/Goods'
export default {
    name: 'admin',
    components: {
        ProfileHead,
        Profile,
        Goods
    }
}
</script>

<style>

</style>
