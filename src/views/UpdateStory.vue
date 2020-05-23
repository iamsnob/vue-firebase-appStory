<template>
    <div>
         <v-card max-width="900" class="mx-auto">
            <v-toolbar color='teal' dark>
                <v-toolbar-title>
                    Add Story
                </v-toolbar-title>
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
                                <vue-editor v-model="value.Content" :editor-toolbar="customToolbar" />
                            </v-flex>
                            <v-flex xs12 md10>
                                <v-btn @click="SaveStory" class='mt-2' color='teal' dark :disabled="!valid">
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
    export default {
        components: { VueEditor },
        data(){
            return{
                valid:false,
                 customToolbar: [
                                [{ 'header': [false, 1, 2, 3, 4, 5, 6, ] }],
                                ['bold', 'italic', 'underline'],
                                [{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
                                ['blockquote', 'code-block'],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                [{ 'align': ''},{ 'align': 'justify'}, { 'align': 'right' }],
                                ]
            }
        },
        computed:{
          value(){
              return this.$store.state.stories.find(e=>e.id == this.$route.query.id)
          }
        },
        methods:{
            SaveStory(){
                this.$store.dispatch('UpdateStory',this.value)
                this.$router.push('/listStory/dashBoard')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>