<template>
  <div class="lineBox">
    <h4>{{ props.value.name }}</h4>
    <div class="skillLine">
      <div :class="['skillColor',props.value.css]"></div>
    </div>
    <p v-if="props.value.text">{{ props.value.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, Ref } from "vue";

const props = defineProps<{
  value: { name: string; css: string ;text?:string };
}>();

//+++++++++++++++++++++++++++++++++++++
//宣告
//+++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++
//computed
//++++++++++++++++++++++++

//++++++++++++++++++++++++
//function
//++++++++++++++++++++++++

//++++++++++++++++++++++++
//start
//++++++++++++++++++++++++
</script>


