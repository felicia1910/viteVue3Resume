import { DropItems } from './../common/typeInterface';
import { reactive, computed } from "vue";
import { useStore } from "@/store";
import { useWindowSize } from '@vueuse/core';

//這支要call通行證
export function common() {
  const store = useStore();
  const { width, height } = useWindowSize();//視窗大小

  const mobileWidth = computed(() => {
    return width.value < 768;
  });

  const forRewardWidth = computed(() => {
    return width.value > 950;
  });

  const forNavWidth = computed(() => {
    return width.value > 1280;
  });

  const bigWidth = computed(() => {
    return width.value > 1600;
  });

  //++++++++++++++++++++++++++++
  //         Function
  //++++++++++++++++++++++++++++

  //後端轉語言
  const turnLang = (val: any) => {
    if (val && val.en !== undefined && val.tc !== undefined) {
      return store.language == "en" ? val.en : val.tc;
    } else {
      return val;
    }
  };

  return { mobileWidth,  forNavWidth, bigWidth, forRewardWidth,turnLang};
}