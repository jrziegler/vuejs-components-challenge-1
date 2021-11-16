<template>
  <v-app>
    <app-menu/>
    <app-toolbar/>
    <v-content>
      <app-carousel/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';
import Toolbar from './components/Toolbar.vue';
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue';

export default {
  components: {
    'app-menu': Menu,
    'app-toolbar': Toolbar,
    'app-carousel': Carousel,
    'app-footer': Footer
  }
}
</script>
