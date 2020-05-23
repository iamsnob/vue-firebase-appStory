<template>
        <v-app-bar
            dark
            dense
            app
            flat
            hide-on-scroll
            color="grey darken-3"
        >
            <v-toolbar-title class="ml-10"  style="cursor: pointer" @click="$router.push('/listStory/listviews')">STORY App</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text dark v-if="isLoggedIn"> {{currentUser}}</v-btn>
            <v-btn color="grey darken-3" to="/listStory/Admin" v-if="admin">Admin</v-btn>
            <v-btn color="grey darken-3" to="/listStory/dashboard" v-if="isLoggedIn">DashBoard</v-btn>
            <v-btn color="grey darken-3" to="/listStory/login" v-if="!isLoggedIn">Log In</v-btn>
            <v-btn color="grey darken-3" to="/listStory/register" v-if="!isLoggedIn">Sign Up</v-btn>
            <v-btn color="grey darken-3" @click="logout" v-if="isLoggedIn">Logout</v-btn>
        </v-app-bar>
    
</template>

<script>
import firebase from 'firebase'
    export default {
        name:'navigation',
         data() {
            return {
            isLoggedIn: false,
            currentUser: false,
            admin:false
            };
        },
        created() {
            if (firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
            }
            if(this.currentUser == 'mrsnobdecoder@gmail.com'){
                this.admin = true
            }
        },
        methods:{
           logout(){
               firebase.auth().signOut().then(()=>{
                   this.$router.go({ path: this.$router.path });
                })
           }
        } 
    }
    
</script>

<style lang="scss" scoped>

</style>