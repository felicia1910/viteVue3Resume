<template>
  <div v-if="getData.data" :key="componentsKey">
    <div class="upBox" @click="goBack">
      <i class="fas fa-chevron-left"></i>
      <p class="upText">{{ $t("Profile.Datail.Previous") }}</p>
    </div>

    <div class="pigPic">
      <img
        :src="store.imgUrl+ getData.data.detail.titlePic"
        :alt="$t('PicAlt')"
      />
    </div>

    <div class="textBox">
      <div class="smallTextBox">
        <div class="titleText">{{ getData.data.name }}</div>
        <a
          :href="getData.data.detail.url"
          class="btn"
          target="_blank"
          v-if="getData.data.detail.url"
        >
          <div class="watchBtn">{{ $t("Profile.Datail.Click") }}</div>
        </a>
      </div>

      <div class="detailText">
        <div class="textIn">{{ getData.data.detail.introduce }}</div>

        <div v-if="getData.data.detail.color">
          <div class="useTitle">{{ $t("Profile.Datail.Color") }}</div>
          <div
            class="use useColor"
            v-if="getData.data.detail.color.pic.length > 0"
          >
            <div
              v-for="(v, k) in getData.data.detail.color.pic"
              :key="k"
              :style="v.style"
            ></div>
          </div>
          <div
            :class="[
              'use useText',
              getData.data.detail.color.pic.length == 0 && 'useText-no-color',
            ]"
          >
            {{ getData.data.detail.color.text }}
          </div>
        </div>

        <div class="useTitle">{{ $t("Profile.Datail.Technology") }}</div>
        <div class="use">
          <ul>
            <li v-for="(v, k) in getData.data.detail.used" :key="k">
              <a :href="v.a" target="_blank" v-if="v.a"
                >{{ v.name }} &nbsp;:&nbsp;<span> {{ v.work }}</span></a
              >
              <div v-else>{{ v.name }}&nbsp;:&nbsp;{{ v.work }}</div>
            </li>

            <li v-if="getData.data.detail.gitHub">
              <a :href="getData.data.detail.gitHub" target="_blank"
                >github: <span>{{ $t("Profile.Datail.Click") }}</span></a
              >
            </li>
          </ul>
        </div>

        <div v-if="getData.data.detail.team">
          <div class="useTitle">{{ $t("Profile.Datail.Team") }}</div>
          <div class="use">
            <ul>
              <li v-for="(v, k) in getData.data.detail.team.li" :key="k">
                {{ v.name }}{{ v.work }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="detailPicBox" v-if="getData.data.detail.pics">
        <div
          class="detailPicBox-box"
          v-for="(v, k) in getData.data.detail.pics"
          :key="k"
        >
          <img
            class="pic-small"
            :src="store.imgUrl+ v.name"
            :alt="$t('PicAlt')"
            @click="openBigPic(v, k)"
          />
          <div class="picBoxForDetail" v-show="v.check">
            <div class="del" @click="openBigPic(v, k)">X</div>
            <img :src="store.imgUrl + v.big" :alt="$t('PicAlt')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { Profiless } from "@/composition-api";
import { useStore } from "@/store/index";
import { reactive, onMounted, ref,watch } from "vue";
import { useI18n } from "vue-i18n";
import { Profiles } from "@/common/typeInterface";
//+++++++++++++++++++++++++++++++++++++
//宣告
//+++++++++++++++++++++++++++++++++++++
const { t } = useI18n();
const { origProfilesData } = Profiless();
const store = useStore();
const getData: {
  data: null | Profiles;
} = reactive({ data: null });
const componentsKey = ref(0);

//+++++++++++++++++++++++++++++++++++++
//watch
//+++++++++++++++++++++++++++++++++++++
watch(()=>store.language,()=>{
  start()
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//function
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
const start = () => {
  //router router 4.1.4拔除了params，官方推薦使用這種
  let id = window.history.state.id;
  if (id) {
    let detail = origProfilesData.value.filter((e: Profiles) => {
      return e.id == id;
    });
    console.log("detail:", detail[0], id);
    if (detail[0]) {
      if (detail[0].detail && detail[0].detail.pics) {
        detail[0].detail.pics = detail[0].detail.pics.map((e) => {
          return {
            ...e,
            check: false,
          };
        });
      }
      getData.data = detail[0];
      componentsKey.value += 1;
      console.log("getData.data:", getData.data);
    } else {
      goBack();
    }
  } else {
    goBack();
  }
};

const openBigPic = (val: any, key: number) => {
  if (getData.data && getData.data.detail && getData.data.detail.pics) {
    getData.data.detail.pics[key].check= getData.data.detail.pics[key].check ? false : true;
  }
};

const goBack = () => {
  router.push({ name: "Profile" });
};

//++++++++++++++++++++++++
//start
//++++++++++++++++++++++++
onMounted(async () => {
  start();
});
</script>

