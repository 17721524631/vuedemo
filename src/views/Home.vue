<template>
  <div class="home">
    <button @click="openEn">切英文</button>
    <button @click="openZh">切中文</button>
    <ul>
      <li>{{$t('m.music')}}</li>
      <li>{{$t('m.findMusic')}}</li>
      <li>{{$t('m.myMusic')}}</li>
      <li>{{$t('m.friend')}}</li>
      <li>{{$t('m.musician')}}</li>
      <li>{{$t('m.download')}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    openEn() {
      this.lang = "en-US";
      console.log(this.lang);
      this.$i18n.locale = this.lang;
    },
    openZh() {
      this.lang = "zh-CN";
      console.log(this.lang);
      this.$i18n.locale = this.lang;
    }
  }
};
</script>
