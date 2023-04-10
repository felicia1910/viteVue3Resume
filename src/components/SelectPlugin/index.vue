<template>
  <el-select
    :class="[css]"
    v-model="selectValue"
    :filterable="props.filter"
    :disabled="disabled"
    @change="change"
  >
    <el-option
      v-for="item in ArrItems"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    />
  </el-select>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, Ref } from "vue";
import { DropItems } from "@/common/typeInterface";
import { useStore } from "@/store";
import { commons } from "@/composition-api";

const props = defineProps<{
  items: null | DropItems[];
  value: null | number | string;
  filter?: boolean;
  css?: string;
  disabled?: boolean;
}>();

const emit = defineEmits(["change"]);
//+++++++++++++++++++++++++++++++++++++
//宣告
//+++++++++++++++++++++++++++++++++++++
const store = useStore();
const selectValue: Ref<number | null |string> = ref(null);
const { turnLang } = commons();

//++++++++++++++++++++++++
//computed
//++++++++++++++++++++++++
//下拉的欄位名字是什麼會看後端給什麼(可能還會改)
const ArrItems = computed(() => {
  return !props.items
    ? []
    : props.items.map((e: any) => {
        return {
          ...e,
          name: turnLang(e.name),
        };
      });
});
//++++++++++++++++++++++++
//function
//++++++++++++++++++++++++
const change = () => {
  emit("change", selectValue.value);
};
//++++++++++++++++++++++++
//start
//++++++++++++++++++++++++
onMounted(() => {
  selectValue.value = props.value ? props.value : null;
});
</script>


