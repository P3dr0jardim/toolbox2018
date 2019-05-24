<template>
  <v-app style="background #E3E3EE">

    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="tittle">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>


      <v-list>
        <v-list-tile v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>



    <v-toolbar fixed color="primary" dark>
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor:pointer">
        VueShare
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" simple-line-hide-details></v-text-field>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>



    <main>
      <v-container class="mt-4">
        <router-view/>
      </v-container>
    </main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      sideNav:false
    }
  },
  computed:{
    horizontalNavItems(){
      return[
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'SignIn', link: '/signin'},
        {icon: 'create', title: 'SignUp', link: '/signup'},
      ]
    },
    sideNavItems(){
      return[
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'SignIn', link: '/signin'},
        {icon: 'create', title: 'SignUp', link: '/signup'},
      ];
    }
  },
  methods:{
    toggleSideNav(){
      this.sideNav=!this.sideNav;
    }
  }
};
</script>

