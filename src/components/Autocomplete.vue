<template>
    <div class="autocomplete">
        <div class="input" @click="toggleVisible"></div>
        <div class="popover" v-show="visible"></div>
            <input type="text"
            v-model = "query"
            placeholder="Start Typping...">
            <div class="option">
                <ul>
                    <li v-for="(match, index) in matches" 
                    :key="match[filterby]"
                    @click="itemClicked(index)"
                    v-text="item[filterby]"></li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
    
    props: ['items','filterby'],
    date(){
        return {
            visible: false
        };
    },
    methods:{
        toggleVisible(){
            this.visible = !this.visible;
        },
        itemClicked(index){

            console.log(this.matches[index]);
        }
    },
    computed: {
       matches(){
           if(this.query == ''){
               return [];
           }
           return this.items.filter((item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()))
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
