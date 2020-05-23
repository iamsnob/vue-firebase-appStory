<template>
    <div>
        <v-card max-width="900" class="mx-auto">
            <v-toolbar color='teal' dark>
                <v-layout justify-center=""><h3>Create your Story</h3></v-layout>
             </v-toolbar>
                <v-card-text>
                    <v-form v-model="valid">
                        <v-layout row wrap justify-center>
                            <v-flex xs12 md10>
                                <v-text-field
                                    label="Title"
                                    v-model="value.Title"
                                    :rules="[() => !!value.Title || 'This field is required']"
                                >
                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 md10>
                                <v-text-field
                                    label="Author"
                                    v-model="value.Author"
                                    :rules="[() => !!value.Author || 'This field is required']"
                                >
                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 md10>
                                <v-text-field
                                    label="Description"
                                    v-model="value.Description"
                                    :rules="[() => !!value.Description || 'This field is required']"    
                                >
                                </v-text-field>
                            </v-flex>
                            <v-flex xs12 md10>
                                <div v-if="err" class="red--text">{{errorValue}}</div>
                                <vue-editor v-model="value.Content" :editor-toolbar="customToolbar"  
                                />
                            </v-flex>
                            <v-flex xs12 md10>
                                <v-btn @click="SaveStory" color='teal' class="mt-3" dark :disabled="!valid">
                                    <v-icon class="mr-1">fas fa-save</v-icon> Save
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-form>
                </v-card-text>   
        </v-card>
    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";
    import firebase from 'firebase'
    export default {
        components: { VueEditor },
        data(){
            return{
                valid:false,
                value:{},
                customToolbar: [
                                [{ 'header': [false, 1, 2, 3, 4, 5, 6, ] }],
                                ['bold', 'italic', 'underline'],
                                [{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
                                ['blockquote', 'code-block'],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                [{ 'align': ''},{ 'align': 'justify'}, { 'align': 'right' }],
                                ],
                errorValue:'',
                err:false
            }
        },
        methods:{
            async SaveStory(){
                this.value.Created=new Date()
                this.value.User = firebase.auth().currentUser.email
                console.log(typeof this.value.Content)
                if(this.value.Content === undefined){
                    this.errorValue = 'Content is required!!!'
                    this.err = true
                }
                if(this.value.Content.length < 20){
                    this.errorValue = 'Content must at least 20 Character!!!'
                    this.err = true
                }
                else{
                    const res = await this.$store.dispatch('AddStory',this.value);
                        if(res){
                            this.$router.push('/listStory/dashBoard')
                        }
                } 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>