<template>
  <v-app v-bind:style="{background: $vuetify.theme.themes['dark'].background}">
    <v-navigation-drawer
      v-bind:color="$vuetify.theme.themes['dark'].drawer"
      app
    >
      <Drawer />
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer'

export default {
  name: 'App',
  components: { Drawer },
  data: () => ({
    //
  }),
}
</script>
