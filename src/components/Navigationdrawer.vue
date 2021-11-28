<template>
    <v-navigation-drawer clipped permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
           Derik Caceres 
          </v-list-item-title>
          <v-list-item-subtitle>
           RA - 190695
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<style  scoped>
    .mx-auto {
        flex: 1;
    }
</style>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Carros', icon: 'mdi-car', to:'/carros' },
          { title: 'Conta', icon: 'mdi-account', to:'/conta' },
          { title: 'Meus carros', icon: 'mdi-garage',to:'/meuscarros' },
          { title: 'Locais', icon: 'mdi-map-marker',to:'/locais' }
        ],
        right: null,
      }
    },
  }
</script>