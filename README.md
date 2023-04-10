# Vue 3 + TypeScript + Vite

1.須將NODE更新至1.15.0以上
2.typeScript/Yarn/Node需安裝在電腦環境

## Project setup
```
yarn

```

### Compiles and hot-reloads for development
```
yarn run dev

```
### db for development (前端測試假資料才需使用)
```
yarn run json

```

### 後端
https://ccgtmpauth.azurewebsites.net/swagger/index.html

# 開發規則

```
##store
1.store 的clientTest 控制是否接前端的假資料(yarn run json)。
3.store 的loading 為控制API傳遞中間的過程，使用API都需要使用


```

```
##composition-api

```
```
##style
1.style.scss記錄所有共用樣式"模組"。
2.common.scss記錄所有快速className。
3.1200NAV收起，768樣式開始轉換。

```

```
##services
1.SecurityService為設定oidc登錄

```

```
##其他
1.共同大小啟動大小除了在每一區的style之外，JS控制在compostion-api的common區
```

# 使用套件
1.uuid:生成亂數代碼
2.element-plus/@element-plus/icons-vue:頁數元件、部分ICON等使用
3.json-server:供前端在無後端API的狀況下可以先串本機的假資料

# 採雷筆記

1.元件內如果沒有要傳給子元件的內容，不要放空的defineProps，否則會出現類別錯誤訊息。
2.reactive中如果直接在([])，在指定陣列EKY會有類別錯誤的訊息，所以在此都會使用({arr:[]})去宣告大多數陣列

3.router的to path，要注意傳值需要'value',不可"value"



