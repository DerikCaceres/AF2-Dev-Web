<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      v-bind:src="cardInfo.url"
      height="200px"
    ></v-img>

    <v-card-title>
      {{cardInfo.name}}
    </v-card-title>

    <v-card-subtitle>
     {{cardInfo.price}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

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