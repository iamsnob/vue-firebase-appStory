<template>
    <div>
        <navigation />
        <v-container>
            <router-view></router-view>
        </v-container>
        <v-footer fixed>
            <v-layout justify-center>
                Copyright:May-2020 Developer:Daniel N
            </v-layout>
        </v-footer>
    </div>
</template>

<script>
    import navigation from '../components/navigation.vue'
    export default {
        components:{
            navigation
        },
        created(){
            this.$store.dispatch('loadStory')
        }
    }
</script>

<style lang="scss" scoped>

</style>