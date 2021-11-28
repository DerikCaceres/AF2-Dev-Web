<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      src="https://3.bp.blogspot.com/-n6CLT0mp0Jk/WyFDdPBfUsI/AAAAAAABFF0/53AIZPwimOsz4Eo9AD4FDsieBjM_Z-pfwCLcBGAs/s1600/VW-Golf-2019%2B%25287%2529.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Golg GTI - 2020
    </v-card-title>

    <v-card-subtitle>
      R$ 180.000,00 
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
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
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