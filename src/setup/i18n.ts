import { createI18n } from 'vue-i18n';
import { LANG_VALUE } from '@/common/enum';
import { useStore } from "@/store"
import {storeToRefs} from "pinia";
import axios from 'axios'

// 載入語言
import tw from '@/lang/zh-tw.json';
import en from '@/lang/en.json';

export function getLanguage() {
  // 自動選擇語系
  const language = navigator.language.toLowerCase()
  const locales = [LANG_VALUE.En, LANG_VALUE.Tw]
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return LANG_VALUE.En
}


const i18n = createI18n({
  legacy: false,
  locale: getLanguage(),
  messages: {
    [LANG_VALUE.Tw]: tw,
    [LANG_VALUE.En]: en
  }
})
export default i18n

//build
export async function setLocale(lang: LANG_VALUE) {
    const store = useStore()
    store.setLang(lang) // 修改 pinia
    i18n.global.locale.value = lang

}

