<template>
  <v-app style="background: #001935;">
   <v-main>
    <Navbar/>
    <router-view/>
   </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{Navbar},
  data: () => ({
    //
  }),
  created() {
  if (this.$workbox) {
    this.$workbox.addEventListener("waiting", () => {
      this.showUpdateUI = true;
    });
  }
}
};
</script>
