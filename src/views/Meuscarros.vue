<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      src="https://img0.icarros.com/dbimg/imgnoticia/4/27552_1"
      height="200px"
    ></v-img>

    <v-card-title>
      Polo Highline
    </v-card-title>

    <v-card-subtitle>
      Carro bem cuidado, unico dono.
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
         Carro espetacular, comprado em 2020, utilizado para o dia dia.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>

