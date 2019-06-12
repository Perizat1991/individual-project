<template>
    <div>
        <input type="file" @change="onFileChanged">
        <button @click="onUpload">Upload!</button>
    </div>
</template>

<script>
export default {
    name: 'imageLoad',
    data() {
        return {
        selectedFile: null
        }
    },
    methods: {
    onFileChanged (event) {
        this.selectedFile = event.target.files[0]
        },
    onUpload() {
        const formData = new FormData()
        formData.append('myFile', this.selectedFile, this.selectedFile.name)
        axios.post('https://jsonplaceholder.typicode.com/photos', formData)
        }, 
    }
}
</script>

<style>

</style>
