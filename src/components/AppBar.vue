<template>
  <div>
    <v-app-bar
      color="#1D4F91"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
          <v-img src="https://xapi.unapec.edu.do/logo/logo.png"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>fas fa-cog</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>fas fa-user</v-icon>
      </v-btn>
      <v-btn>
        Dawin Rafael Perez Batista
      </v-btn>      
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
    name:"AppBar"
}
</script>