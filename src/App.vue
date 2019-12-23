<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      
    };
  },
  watch: {
    $route(to, from) {
    }
  },
  computed: {},
  methods: {
  },
  created() {}
};
</script>

<style>
#app {
  height: 100%;
}
</style>
