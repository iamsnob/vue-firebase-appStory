<template>
    <div>
        <v-container>
            <v-layout justify-center="">
                <h2>Your Story</h2>
            </v-layout>
        </v-container>
        <v-card max-width="700" class="mx-auto mb-3" v-for="story in stories" :key="story.id">
            <v-toolbar  class="teal" flat>
                <v-toolbar-title class="title">{{story.Title}}</v-toolbar-title> 
                <v-spacer></v-spacer>
                {{user}}
            </v-toolbar>
            <v-card-subtitle class="caption">
                <div>Author:{{story.Author}}</div>
                <div>Date: {{new Date(story.Created.seconds * 1000)}}</div>
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text class="body-2">
                <p v-html="story.Content.slice(start,end)" class="blockquote"></p>
                <router-link :to="{path:'/listStory/storyViews',query:{id:story.id}}" class="ml-5">read more..</router-link>
            </v-card-text>
            <v-card-actions>
                <v-btn class="mb-1" :to="{path:'/listStory/updateStory',query:{id:story.id}}" style="position:relative; right:0" dark color='teal'>
                   <v-icon class="mr-1">fas fa-edit</v-icon> Edit
                </v-btn>
                <v-btn dark color='teal' @click="deleteStory(story.id)" class="mb-1"><v-icon class="mr-1">fas fa-trash-alt</v-icon> Delete</v-btn>
            </v-card-actions>
        </v-card>
        <v-btn
            color="teal"
            fab
            dark
            fixed
            bottom
            right
            class="mb-7 mr-10"
            to="/listStory/addStory"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        data(){
            return{
                user:firebase.auth().currentUser.email,
                start:0,
                end:300,
            }
        },
        computed:{
            stories(){
                return this.$store.state.stories.filter(data=>data.User == firebase.auth().currentUser.email)
            }
        },
        methods:{
            deleteStory(id){
                if(confirm('Are you sure you want to delete this?')){
                this.$store.dispatch('DeleteStory',id)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>