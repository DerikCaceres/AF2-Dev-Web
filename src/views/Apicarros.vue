<template>
 <div>
   
   <h1>{{tittle}}</h1>
  <v-row >

      <v-col
        v-for="(data,i) in events"
        :key="i"
        cols="5"
        lg="5"
        md ="4"
      >
      <Cardapi :cardid="i" :cardInfo="data"></Cardapi>

      </v-col>

    </v-row>


</div>
</template>

<script>
  import Cardapi from '../components/Cardapi'

  export default {
    name:'Carros',
    computed:{
      cards(){
        return this.$store.state.cards
      },title(){
      return this.$store.getters.bigTitle
    },
    events(){
      
      return this.$store.state.events
    },
  
    },
    async created(){
       this.$store.dispatch("fetchEvents")
      },


    components: {
      Cardapi,    },
      data () { 
      return {
       titleView:this.$store.state.cards,

      }
  }
  }
</script>