<template>
 <div>
   
<v-row >

      <v-col
        v-for="(data,i) in cards"
        :key="i"
        cols="5"
        lg="5"
      >
      <Mycard :cardid="i" :cardInfo="data"></Mycard>

      </v-col>

    </v-row>


 </div>
</template>

<script>
  import Mycard from '../components/Mycard'

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
      Mycard,    },
      data () { 
      return {
       titleView:this.$store.state.cards,

      }
  }
  }
</script>