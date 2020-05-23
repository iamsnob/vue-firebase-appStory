<template>
    <div>
        <v-container>
            <v-card max-width="400" class="mx-auto my-auto pb-3">
                <v-toolbar flat color="teal" dark>
                    <v-layout justify-center="">
                        <v-toolbar-title class="headline">Password Reset</v-toolbar-title>
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
                            </v-layout>
                            <v-layout justify-center> 
                                <v-flex xs12 md10>
                                    <v-btn @click="passReset" block :disabled="!valid">Submit</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-form>
                    </v-card-text>
            </v-card>
            <v-layout justify-center="">
                <blockquote  class="mt-2 blockqoute" v-if="isSubmit">Email sent. Check your email and reset your password...</blockquote >
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        data(){
            return{
                email:'',
                isSubmit:false,
                valid:false
            }
        },
        methods:{
            passReset(){
                let auth = firebase.auth();
                auth.sendPasswordResetEmail(this.email).then(()=> {
                    this.isSubmit=true
                }).catch(function(error) {
                 throw error
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>