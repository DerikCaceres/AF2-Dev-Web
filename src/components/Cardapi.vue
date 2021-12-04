<template>
  <v-card 
    class="mx-auto my-12"
    max-width="300"
  >
    <v-img
    src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-car-icon-png-image_515736.jpg"
      height="200px"
    ></v-img>

    <v-card-title >
      {{cardInfo.model}}
    </v-card-title>

    <v-card-subtitle >
     {{cardInfo.year}}
    </v-card-subtitle>

    <v-card-subtitle >
     {{cardInfo.make}}
    </v-card-subtitle>

    <v-card-subtitle >
     {{cardInfo.type}}
    </v-card-subtitle>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{cardInfo.tipo}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    
    props:['cardid','cardInfo']
  }
</script>