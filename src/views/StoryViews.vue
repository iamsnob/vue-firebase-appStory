<template>
    <div>
       <v-card max-width="800" class="mx-auto">
           <v-toolbar  class="teal" flat>
            <v-toolbar-title class="title">{{story.Title}}</v-toolbar-title> 
            <v-spacer></v-spacer>
                {{story.User}}
           </v-toolbar>
            <v-card-subtitle class="caption">
                <div>Author:{{story.Author}}</div>
                <div>Date: {{new Date(story.Created.seconds * 1000)}}</div>
            </v-card-subtitle>
            <v-divider></v-divider>
           <v-card-text class="body-2">
                <p v-html="story.Content.slice(start,end)" class="blockquote"></p>
                <v-btn class="mb-4" @click="prev" v-if="start>1">prev</v-btn>
                <v-btn class="mb-4" @click="conplus" >next</v-btn>
                
           </v-card-text>
       </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                start:0,
                end:3000,
                addpage:3000
            }
        },
       computed:{
          story(){
              return this.$store.state.stories.find(e=>e.id == this.$route.query.id)
          }
       },
       methods:{
           conplus(){
                this.start += this.addpage
                this.end +=this.addpage;
                this.$vuetify.goTo(0)
            },
            prev(){
                this.start -= this.addpage
                this.end -= this.addpage;
            }
       }
    }
</script>

<style lang="scss" scoped>

</style>