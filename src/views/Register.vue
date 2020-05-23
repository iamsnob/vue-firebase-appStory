<template>
    <div>
        <v-container>
            <v-card max-width="400" class="mx-auto my-auto pb-3">
                <v-toolbar flat color="teal" dark>
                    <v-layout justify-center="">
                        <v-toolbar-title class="headline">Sign Up</v-toolbar-title>
                    </v-layout>
                </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-layout row wrap justify-center>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                        prepend-icon="fas fa-envelope"
                                        label='Email Address'
                                        v-model="email"
                                        :rules="[() => !!email || 'This field is required']"
                                        hint="Please provide valid email address"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md10>  
                                        <v-text-field
                                        prepend-icon="fas fa-key"
                                        label='Password'
                                        v-model="password"
                                        :rules="[() => !!password || 'This field is required']"
                                        :append-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                                        :type="show1 ? 'text' : 'password'"
                                        @click:append="show1 = !show1"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md10>
                                        <v-btn @click="register" color="teal" dark block :disabled="!valid">Register</v-btn>
                                    </v-flex>
                            </v-layout>
                        </v-form>
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
                valid:false,
                show1: false,
            }
        },
        methods:{
            register(){
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user=>{
                    alert(`Account Created for ${user.user.email}`)
                    this.$router.push({ path:'/listStory/dashboard'})
                },
                err=>{
                    alert(err.message);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>