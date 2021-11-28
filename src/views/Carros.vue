<template>
 <div>
<v-row >

      <v-col
        v-for="n in 1"
        :key="n"
        cols="5"
        lg="5"
      >
      <Mycard></Mycard>

      </v-col>

    </v-row>
    <v-col
        v-for="n in 1"
        :key="n"
        cols="5"
        lg="5"
      >
      <Mycard2></Mycard2>

      </v-col>

 </div>
</template>

<script>
  import Mycard from '../components/Mycard'
  import Mycard2 from '../components/Mycard2'

  export default {
    name: 'Home',

    components: {
      Mycard,
      Mycard2
    },
  }
</script>
