<template>
  <div id="app">
    <!-- <baidu-map class="bm-view" center="南京">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    </baidu-map>-->
    <button @click="openEn">切英文</button>
    <button @click="openZh">切中文</button>
    <ul>
      <router-link to="/home">
        <li>{{$t('home')}}</li>
      </router-link>
      <router-link to="/music">
        <li>{{$t('music')}}</li>
      </router-link>
      <router-link to="/findMusic">
        <li>{{$t('findMusic')}}</li>
      </router-link>
      <router-link to="/myMusic">
        <li>{{$t('myMusic')}}</li>
      </router-link>
      <router-link to="/friend">
        <li>{{$t('friend')}}</li>
      </router-link>
      <router-link to="/musician">
        <li>{{$t('musician')}}</li>
      </router-link>
      <router-link to="/download">
        <li>{{$t('download')}}</li>
      </router-link>
    </ul>

    <!-- <p v-for="(operate) in navTo.operate" class="nav" :key="operate.id">
      <router-link :to="{ path: operate.path }">{{operate.name}}</router-link>
    </p>-->

    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      // navTo: {
      //   operate: [
      //     { id: 1, name: this.$t("music"), path: "/music" },
      //     { id: 2, name: this.$t("findMusic"), path: "/findMusic" },
      //     { id: 3, name: this.$t("myMusic"), path: "/myMusic" },
      //     { id: 4, name: this.$t("friend"), path: "/friend" },
      //     { id: 5, name: this.$t("download"), path: "/download" }
      //   ]
      // }
    };
  },
  watch: {
    $route(to, from) {
      document.documentElement.scrollTop = 0;
    }
  },
  computed: {},
  methods: {
    openEn() {
      this.lang = "en-US";
      this.$i18n.locale = this.lang;
    },
    openZh() {
      this.lang = "zh-CN";
      this.$i18n.locale = this.lang;
    }
  },
  created() {}
};
</script>

<style>
#app {
  text-align: center;
  height: 100%;
}

.bm-view {
  width: 100%;
  height: 300px;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black;
}
.router-link-active {
  color: blue;
}
</style>
