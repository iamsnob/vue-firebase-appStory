<template>
  <v-container
    fluid 
    class="fill-height">
    <v-layout justify-center align-center>
      <v-card outline width="700" class="pa-7">
        <v-container>
          <v-layout justify-center  row wrap>
                <v-flex xs12 md7>
                <div class="text-center display-1">
                  This website is intended for portfolio purpose only...
                </div>
                <div class="text-center blockquote">
                  You can make your own story by creating your own credentials...
                </div>
                <div class="text-center blockquote">
                  Also you can CREATE, READ, UPDATE, and DELETE your story here... 
                </div>
                </v-flex>
                <v-flex xs12 md7>
                  <v-layout justify-center>
                    <v-btn @click="getStarted" color="teal" class="mt-4" rounded large outlined>Get Started</v-btn>
                  </v-layout> 
                </v-flex>
          </v-layout>
          </v-container>
        
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  methods:{
    getStarted(){
      this.$router.push('/listStory/listviews')
    }
  }
}
</script>
