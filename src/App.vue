<template>
  <v-app>
    <v-navigation-drawer color="blue" app>
      <Drawer></Drawer>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
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
