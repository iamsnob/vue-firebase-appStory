<template>
    <div>
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
            ></v-data-table>
        </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                search: '',
                headers: [
                    { text: 'Title', value: 'Title' },
                    { text: 'Description', value: 'Description' },
                    { text: 'Author', value: 'Author' },
                    { text: 'User', value: 'User' },
                ]
            
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>