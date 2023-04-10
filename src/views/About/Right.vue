<template>
  <div class="smallRightBox">
    <div class="title titleLicense">
      <i class="fas fa-id-badge"></i>{{ $t("About.License.name") }}
    </div>
    <div class="myLicense">
      <ul>
        <li>Microsoft Professional Orientation : Front-End Web Developer</li>
        <li>Advanced CSS</li>
        <li>Asynchronous Programming with Javascript</li>
        <li>Building Functional Prototypes using Node.js</li>
        <li>Introduction to HTML and Javascript</li>
        <li>Building Interactive Prototypes using JavaScript</li>
      </ul>
    </div>

    <div class="title">
      <i class="fas fa-briefcase"></i>{{ $t("About.Experience.name") }}
    </div>
    <div class="myWorks">
      <div class="workBox" v-for="(v, k) in work" :key="k">
        <div :class="['colorBox', v.css]"></div>
        <div class="workBox-detail">
          <div class="company">
            {{ v.name }}
            <br />{{ v.time }}
          </div>
          <div class="work">{{ v.text }}</div>
        </div>
      </div>
    </div>

    <div class="title">
      <i class="fas fa-id-card-alt"></i>{{ $t("About.Contact.name") }}
    </div>
    <div class="myWorks">
      <div class="pingMe">
        <div class="work">flinder410010@gmail.com</div>
        <div class="work">09-257-525-86</div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive, ref, onMounted, computed, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const work = computed(() => {
  return [
    {
      name: t("About.Experience.fir.name"),
      text: t("About.Experience.fir.degree"),
      css: "",
      time: "2013/07-2013/09",
    },
    {
      name: t("About.Experience.sec.name"),
      text: t("About.Experience.sec.degree"),
      css: "colorBox2",
      time: "2015/12-2017/01",
    },
    {
      name: t("About.Experience.thir.name"),
      text: t("About.Experience.thir.degree"),
      css: "colorBox3",
      time: "2017/03-2018/07",
    },
    {
      name: t("About.Experience.four.name"),
      text: t("About.Experience.four.degree"),
      css: "colorBox3",
      time: "2018/12~",
    },
  ];
});
</script>