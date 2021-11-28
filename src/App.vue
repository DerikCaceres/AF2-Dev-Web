<template>
  <v-app>
    <Systembar/>

    <Appbar/>
    <v-main >
      <HelloWorld/>
    </v-main>

    <Footer/>
    <Bottomnavigation/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import Systembar from './components/Systembar';
import Bottomnavigation from './components/Bottomnavigation';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Appbar,
    Footer,
    Systembar,
    Bottomnavigation
  },

  data: () => ({
    //
  }),
};
</script>
