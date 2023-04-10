<template>
  <router-link
    :class="[isActive && 'nav-active']"
    :to="{ name: routerValue.name }"
  >
    <div :class="['linkBox', last && 'border-none']">
      {{ routerValue.ch }}<br /><span>{{ routerValue.en }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { RouterData } from "@/common/typeInterface";

const props = defineProps<{
  routerValue: RouterData;
  last:boolean
}>();

const emit = defineEmits(["handleMenu"]);
//++++++++++++++++++++++++
//宣告值
//++++++++++++++++++++++++
const router = useRouter();
const isActive = ref<boolean>(false);

//++++++++++++++++++++++++
//watch
//++++++++++++++++++++++++
watch(
  () => router.currentRoute.value.name,
  (to, from) => {
    console.log("to:", to);
    isActive.value = props.routerValue.name == to;
    emit("handleMenu");
  }
);

//++++++++++++++++++++++++
//function
//++++++++++++++++++++++++
const start = () => {
  isActive.value = props.routerValue.name == router.currentRoute.value.name;
};

//++++++++++++++++++++++++
//start
//++++++++++++++++++++++++
onMounted(() => {
  start();
});
</script>


