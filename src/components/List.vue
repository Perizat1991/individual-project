<template>
<div class="container">
    <div v-for="(item, key) in list" v-bind:key="key">
        <span @click="goToPage(item)">{{item.title}}</span>
    </div>
</div>
</template>

<script>
export default {
        name: 'list',
        data() {
            return {
                list: [
                    {title: 'first', subtitle: 'something'},
                    {title: 'second', subtitle: 'another'}
                ]
            }
        },
        methods: {
            goToPage(item) {
                this.$router.push({name: 'Item', params: {item: item.title}})
            }
        }

}
</script>

<style>

</style>
