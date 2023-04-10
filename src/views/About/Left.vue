<template>
  <div class="smallLeftBox">
    <div class="title">
      <i class="fab fa-wpforms"></i>{{ $t("About.Skill.name") }}
    </div>
    <div class="about-box-grid2">
      <SkillBox v-for="(v, k) in skill" :key="k" :value="v" />
    </div>

    <div class="title">
      <i class="fas fa-globe"></i>{{ $t("About.LanguageAbility.name") }}
    </div>
    <div class="about-box-grid2">
      <SkillBox v-for="(v, k) in lang" :key="k" :value="v" />
    </div>

    <div class="title">
      <i class="fas fa-graduation-cap"></i>{{ $t("About.Education.name") }}
    </div>
    <div class="about-box">
      {{ $t("About.Education.school")
      }}<span>{{ $t("About.Education.major") }}</span
      ><span>( {{ $t("About.Education.degree") }} )</span
      ><span>2015/06/30</span>
      <div class="darkRed">{{ $t("About.Education.viceMajor") }}</div>
    </div>

    <div class="title">
      <i class="fas fa-book"></i>{{ $t("About.Introduce.name") }}
    </div>
    <div class="about-box">
      <p>
        {{ $t("About.Introduce.text.fir") }}<br /><br />
        {{ $t("About.Introduce.text.sec") }}<br /><br />
        {{ $t("About.Introduce.text.thir") }}<br /><br />
        {{ $t("About.Introduce.text.four") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import SkillBox from "@/components/SkillBox/index.vue";

const { t } = useI18n();
const skill = reactive([
  {
    name: t("About.Skill.ui.name"),
    text: t("About.Skill.ui.text"),
    css: "skillColor80",
  },
  {
    name: t("About.Skill.html.name"),
    text: t("About.Skill.html.text"),
    css: "skillColor90",
  },
  {
    name: t("About.Skill.dev.name"),
    text: t("About.Skill.dev.text"),
    css: "skillColor80",
  },
  {
    name: t("About.Skill.other.name"),
    text: t("About.Skill.other.text"),
    css: "skillColor50",
  },
]);

const lang = reactive([
  { name: t("About.LanguageAbility.ch"), text: "", css: "skillColor90" },
  { name: t("About.LanguageAbility.en"), text: "", css: "skillColor60" },
]);
</script>

