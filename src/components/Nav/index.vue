<template>
  <div>
    <div class="nav-head" v-show="!forNavWidth && !menuOpen">
      <i class="fas fa-bars" @click="handleMenu(true)"></i>
    </div>

    <div :class="['leftBox']" v-show="forNavWidth || menuOpen">
      <div class="fa-times-box">
        <i
          class="fas fa-times"
          v-show="!forNavWidth"
          @click="handleMenu(false)"
        ></i>
      </div>

      <div class="pic">
        <img :src="store.imgUrl + mePic" :alt="$t('PicAlt')" />
      </div>

      <div class="myNameBox">
        <div class="name">
          {{ name.ch }}&nbsp;&nbsp;<span>{{ name.en }}</span>
        </div>
        <div :class="['name-detail', v.css]" v-for="(v, k) in profile" :key="k">
          {{ v.text }}
        </div>
      </div>

      <div class="linkBigBox">
        <function-link
          v-for="(i, key) in navItems"
          :key="key"
          :router-value="i"
          :last="key == navItems.length - 1"
          @handleMenu="handleMenu(false)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FunctionLink from "./FunctionLink.vue";
import { reactive, ref, onMounted, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { commons } from "@/composition-api";
import { useStore } from "@/store/index";

const { forNavWidth } = commons();
const { t } = useI18n();
const store = useStore();
const menuOpen = ref(false);
const mePic = ref("ico.png");
const navItems = reactive([
  { ch: "關於我", en: "About me", name: "About" },
  { ch: "作品集", en: "Portfolio", name: "Profile" },
]);

const content = reactive([
  { icon: "far fa-envelope", text: "flinder410010@gmail.com" },
  { icon: "fas fa-mobile-alt", text: "0925-752-586" },
]);

//++++++++++++++++++++++++
//computed
//++++++++++++++++++++++++
const name = computed(() => {
  return { ch: t("Me.name"), en: "Shin Shri Chen" };
});
const profile = computed(() => {
  return [
    { css: "t-red", text: t("Me.degree") },
    { css: "", text: `1993/03/19 ${t("Me.position")}` },
    {
      css: "",
      text: t("Me.text"),
    },
  ];
});

//++++++++++++++++++++++++
//function
//++++++++++++++++++++++++
const handleMenu = (val: boolean) => {
  menuOpen.value = val;
};
</script>


