<template>
    <div class="autocomplete">
        <div class="input" @click="toggleVisible"></div>
    </div>
</template>

<script>
export default {
    date(){
        return {
            visible: false
        };
    },
    methods:{
        toggleVisible(){
            this.visible = !this.visible;
        }
    }
}
</script>

<style scoped>

.autocomplete{
    width: 100%;
    position: relative;
}

</style>
