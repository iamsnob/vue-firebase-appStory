<template>
    <div>
        <v-container>
            <v-card max-width="400" class="mx-auto my-auto pb-3">
                <v-toolbar flat color="teal" dark>
                    <v-layout justify-center="">
                        <v-toolbar-title class="headline">Sign In</v-toolbar-title>
                    </v-layout>
                </v-toolbar>
                    <v-card-text>
                        <v-layout row wrap justify-center>
                            <v-flex xs12 md10>
                                <v-text-field
                                prepend-icon="fas fa-envelope"
                                label='Email Address'
                                v-model="email"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md10>
                                <v-text-field
                                prepend-icon="fas fa-lock"
                                label='Password'
                                v-model="password"
                                :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 md10 class="mb-2">
                                <v-btn @click="register" color="teal" dark block>
                                    Sign In 
                                    <v-icon small class="ml-1">fas fa-sign-in-alt</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout justify-center>
                            <v-flex xs12 md8>
                                <div class="mb-1 ml-3">Log In with your Credentials...</div>
                                <v-btn @click="facebooklogin" color="teal" dark outlined>
                                    Facebook
                                </v-btn>
                                <v-btn @click="googlelogin" color="teal" dark outlined class="ml-3">Google</v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout justify-center> 
                            <v-flex xs12 md8 class="mt-2">
                                Forgot yout password <router-link to='/listStory/passReset'>Reset here...</router-link>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        data(){
            return{
                email:'',
                password:'',
                show1: false,
            }
        },
        methods:{
            register(){
                firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user=>{
                    alert(`You are logged in as ${user.user.email}`)
                    this.$router.push({ path:'/listStory/dashboard'})
                },
                err=>{
                    alert(err.message);
                

                })
            },
            facebooklogin(){
            const provider = new firebase.auth.FacebookAuthProvider()
            firebase.auth().signInWithPopup(provider).then(result=>{
                console.log(result.user.email)
                this.$router.push({ path:'/listStory/dashboard'})
            },
            err=>{
                    alert(err.message);
                    console.log(err)
                })
            },
            googlelogin(){
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider).then(result=>{
                console.log(result.user.email)
                this.$router.push({ path:'/listStory/dashboard'})
            },
            err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>