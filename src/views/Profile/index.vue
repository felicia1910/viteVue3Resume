<template>
  <div>
    <SelectPlugin
      :items="filterItems"
      :value="filterValue"
      :css="'pro-select'"
      @change="changeOption"
    />

    <!-- 被顯示 -->
    <div class="allItemBox" v-if="profilesData.length > 0">
      <div
        class="ItemBox"
        v-for="(v, k) in profilesData"
        :key="k"
        v-show="v.show"
      >
        <div class="itemPic" @click="seeDetail(v)">
          <img :src="store.imgUrl + v.detail.titlePic" :alt="$t('PicAlt')" />
        </div>
        <div class="itemTitle">{{ v.name }}</div>
        <div class="itemText">{{ v.summary }}</div>
      </div>
    </div>
    <!-- 頁數 -->
    <el-pagination
      layout="prev, pager, next"
      :total="hadShowProfiles.length"
      @current-change="changPage"
    />
  </div>
</template>

<script setup lang="ts">
import SelectPlugin from "@/components/SelectPlugin/index.vue";
import { computed, reactive, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { Profiless } from "@/composition-api";
import { useStore } from "@/store/index";
import { Profiles } from "@/common/typeInterface";
import router from "@/router";

//+++++++++++++++++++++++++++++++++++++
//宣告
//+++++++++++++++++++++++++++++++++++++
const store = useStore();
const { filterItems, hadShowProfiles,origProfilesData, profilesData, filterValue, page } =
  Profiless();

//+++++++++++++++++++++++++++++++++++++
//computed
//+++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++++++++++
//function
//+++++++++++++++++++++++++++++++++++++

const seeDetail = (val: Profiles) => {
  router.push({
    name: "ProfileDetail", // 要事先在 router 那邊命名你的元件
    state: { id: val.id },
  });
};

const changeOption = (val: string) => {
  filterValue.value = val;
  console.log('filterValue.value:',filterValue.value)
};

const changPage = (val: number) => {
  console.log("page:", val);
  page.nowPage = val;
  page.first=(val-1) * page.perPage;
};
//++++++++++++++++++++++++
//start
//++++++++++++++++++++++++
onMounted(async () => {
});
</script>
