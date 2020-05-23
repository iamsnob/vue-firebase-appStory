<template>
    <div>
        <div v-if="admin">
            <v-card max-width='900' class="mx-auto">
                <v-card-title class="teal--text">
                    List of Stories
                    <v-spacer></v-spacer>
                    <v-layout justify-end>
                        <v-flex md7>
                            <v-text-field
                                label="Search"
                                v-model="search"
                                append-icon="mdi-magnify"
                                single-line
                                hide-details
                                
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="stories"
                :search="search"
                @click:row="gotopage"
                style="cursor: pointer"
                >
                    <template v-slot:item.actions="{ item }">
                        <td @click.stop>
                            <v-btn small @click="deleteStory(item)"><v-icon small class="red--text">fas fa-trash-alt</v-icon></v-btn>
                        </td>
                    </template>
                </v-data-table>
            </v-card>
        </div>
        <div v-if="!admin">
            <v-container>
                <v-layout justify-center="">
                    <span class="red--text headline blockquote">Your not allowed on this page</span>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        data(){
            return{
                admin:false,
                currentUser:firebase.auth().currentUser.email,
                search: '',
                headers: [
                    { text: 'Title', value: 'Title' },
                    { text: 'Description', value: 'Description' },
                    { text: 'Author', value: 'Author' },
                    { text: 'User', value: 'User' },
                    { text: 'Actions', sortable: false, value:'actions'}
                ]
            }
        },
        created(){
            if(this.currentUser.toLowerCase() == 'mrsnobdecoder@gmail.com'){
                this.admin = true
            }
        },
        computed:{
            stories(){
                return this.$store.state.stories
            }
        },
         methods:{
            gotopage(item){
                this.$router.push({path:'/listStory/storyViews',query:{id:item.id}})
            },
            deleteStory(item){
                if(confirm('Are you sure you want to delete this? make sure you must tell to user that this story was deleted by Admin')){
                this.$store.dispatch('DeleteStory',item.id)
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>