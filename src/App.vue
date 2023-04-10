
<template>
  <el-config-provider :locale="locale">
    <div class="body">
      <!-- 自我介紹 -->
      <NavBar />

      <!-- 語言 -->
      <div class="label-box">
          <label
            :class="[k == langItems.length - 1 && 'border-none']"
            v-for="(v, k) in langItems"
            :key="k"
            @click="clickLang(v.value)"
          >
          {{ v.name }}
          </label>
        </div>

      <!-- 右邊 -->
      <div class="rightBox">
        <div class="whiteBox">
          <router-view></router-view>
        </div>
        <div class="p pDown">
          建議使用 Chrome 瀏覽器 1450 x 720以上 ，以確保最佳瀏覽效果
        </div>
      </div>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, reactive } from "vue";
import { useStore } from "@/store";
import zhCn from "@/lang/el-tw";
import en from "@/lang/el-en";
import NavBar from "@/components/Nav/index.vue";
import { LANG_VALUE } from "@/common/enum";
import { useI18n } from "vue-i18n";
import { setLocale } from "@/setup/i18n";
//+++++++++++++++++++++++++++++++++++++
//宣告
//+++++++++++++++++++++++++++++++++++++
const store = useStore();
const { t } = useI18n();
const lang=ref('zh-tw');

watch(()=>store.language,(val)=>{
  console.log('store.language:',val)
})
//++++++++++++++++++++++++
//computed
//++++++++++++++++++++++++
const locale = computed(() => (store.language === "zh-tw" ? zhCn : en));
const langItems = computed(() => {
  return [
    {
      id: 1,
      name: t("lang.en"),
      value: LANG_VALUE.En,
    },
    {
      id: 2,
      name: t("lang.tw"),
      value: LANG_VALUE.Tw,
    },
  ];
});

//+++++++++++++++++++++++++++++++++++++
//function
//+++++++++++++++++++++++++++++++++++++
const start = () => {};

const clickLang=(val: LANG_VALUE)=>{
  lang.value=val;
  store.setLang(val);
  setLocale(val);
  console.log('lang.value:',lang.value)
}
//++++++++++++++++++++++++
//start
//++++++++++++++++++++++++
onMounted(() => {
  start();
});
</script>

<style lang="scss" scoped>
</style>

