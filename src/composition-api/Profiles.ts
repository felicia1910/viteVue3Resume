import { DropItems } from '../common/typeInterface';
import { ref, reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
import { Profiles } from "@/common/typeInterface";

//這支要call通行證
export function Profiles() {
  const { t } = useI18n();
  const filterValue = ref("all");
  const page = reactive({
    first: 0,
    nowPage: 1, // 現在第幾頁
    perPage: 10, // 一頁幾個
  });

  //+++++++++++++++++++++++++++++++++++++
  //computed
  //+++++++++++++++++++++++++++++++++++++
  const filterItems = computed(() => {
    return [
      { name: t("Profile.Catorge.All"), id: "all" },
      { name: t("Profile.Catorge.Web"), id: "web" },
      { name: t("Profile.Catorge.Imitate"), id: "cob" },
      { name: t("Profile.Catorge.Testing"), id: "test" },
      { name: t("Profile.Catorge.Design"), id: "ui" },
    ];
  });

  const origProfilesData = computed(() => {
    let items = [
      //
      {
        name: t("Profile.All.Automated.name"),
        summary: t("Profile.All.Automated.sum"),
        key: 'web',
        show: true,
        id: 'Automated',
        detail: {
          introduce: t("Profile.All.Automated.int"),
          titlePic: "pic10/titlePic1.png",
          url: 'https://felicia1910.github.io/flowCartViewPage/',
          gitHub: null,
          used: [
            { name: t("Profile.Datail.UI"), work: 'PhotoShop/Illustrator/XD' },
            { name: t("Profile.Datail.FrontEnd"), work: 'Vue/Vuex/SCSS' },
            { name: t("Profile.Datail.BackEnd"), work: '無' },
            { name: t("Profile.Datail.Plugin"), work: 'Bootstrap/diagram-js-minimap/jsplumb/vue-datetim' }],
          pics: [
            { name: 'pic10/smalllPic1-1.png', big: 'pic10/detailPic1-1.png' },
            { name: 'pic10/smalllPic1-2.png', big: 'pic10/detailPic1-2.png' },
            {
              name: 'pic10/smalllPic1-3.png', big: 'pic10/detailPic1-3.png'
            }],
          team: null,
          color: {
            pic: [{ style: 'background:#ffffff' }, { style: 'background:#084172' }, { style: 'background:#c9dbec' }],
            text: t("Profile.All.Automated.color")
          },
        }
      },
      //
      {
        name:  t("Profile.All.Form.name"), 
        summary:  t("Profile.All.Form.sum"), 
        key: 'test', show: true,
        id: "Form123",
        detail: {
          introduce:  t("Profile.All.Form.int"),
          titlePic: 'pic13.png',
          url: 'https://felicia1910.github.io/company-samll-demo-vue3/',
          gitHub: 'https://github.com/felicia1910/company-samll-demo-vue3/tree/gh-pages',
          used: [
            { name: t("Profile.Datail.UI"), work: 'XD' },
            { name: t("Profile.Datail.FrontEnd"), work: 'Vue3.0(cdn' },
            { name: t("Profile.Datail.BackEnd"), work: '無' },
            { name: t("Profile.Datail.Plugin"), work: '無' }],
          pics: [],
          team: null,
          color: null,
        }
      },
      //
      {
        name: t("Profile.All.Cloudnifier.name"), 
        summary: t("Profile.All.Cloudnifier.sum"), 
        key: 'web', show: true,
        id: "Cloudnifier",
        detail: {
          introduce: t("Profile.All.Cloudnifier.int"),
          titlePic: 'pic11/titlePic1.png',
          url: 'https://cnfofficialuat.azurewebsites.net/',
          gitHub: 'https://github.com/felicia1910/cloudCompanyDemo',
          used: [
            { name: t("Profile.Datail.UI"), work: 'PhotoShop/Illustrator/XD' },
            { name: t("Profile.Datail.FrontEnd"), work: 'Vue/Vuex/SCSS' },
            { name: t("Profile.Datail.BackEnd"), work: '無' },
            { name: t("Profile.Datail.Plugin"), work: 'Bootstrap/vue2-google-maps/vue-typer/vue-particles' }],
          pics: [
            { name: 'pic11/smalllPic1-1.png', big: 'pic11/detailPic1-1.png' },
            { name: 'pic11/smalllPic1-2.png', big: 'pic11/detailPic1-2.png' },
            {
              name: 'pic11/smalllPic1-3.png', big: 'pic11/detailPic1-3.png'
            }],
          team: null,
          color: {
            title: '顏色配置',
            pic: [{ style: 'background:#1f2bd3' }, { style: 'background:#efcf64' }, { style: 'background:#9c0' }],
            text: '以台灣創建雲端的logo的主色調去做顏色，所以選擇解放藍當整個網站的主色，並以logo本身的延伸色，挑選出差不多的彩度和亮度的相近色去做搭配，點綴整個網站的豐富感。'
          },
        }

      },
      //
      {
        name: t("Profile.All.Chatroom.name"), 
        summary: t("Profile.All.Chatroom.sum"), 
        key: 'test', show: true,
        id: "Chatroom",
        detail: {
          introduce: t("Profile.All.Chatroom.int"),
          titlePic: 'pic13/titlePic1.png',
          url: '',
          gitHub: '',
          used: [
            { name: t("Profile.Datail.UI"), work: 'XD' },
            { name: t("Profile.Datail.FrontEnd"), work: 'html/Css' },
            { name: t("Profile.Datail.BackEnd"), work: 'nodejs' },
            { name: t("Profile.Datail.Plugin"), work: 'socketIo' }],
          pics: [],
          team: null,
          color: null,
        }
      },
      //
      {
        name: t("Profile.All.liteOn.name"), 
        summary: t("Profile.All.liteOn.sum"), 
        key: 'web', show: true,
        id: "liteOn",
        detail: {
          introduce: t("Profile.All.liteOn.int"),
          titlePic: 'pic12/titlePic1.png',
          url: 'https://felicia1910.github.io/liteon-view/',
          gitHub: 'https://github.com/felicia1910/liteon-view',
          used: [
            { name: t("Profile.Datail.UI"), work: 'PhotoShop/Illustrator' },
            { name: t("Profile.Datail.FrontEnd"), work: 'Html5/Css3/JavaScript/SCSS' },
            { name: t("Profile.Datail.BackEnd"), work: '無' },
            { name: t("Profile.Datail.Plugin"), work: 'Bootstrap/Lightbox' }
          ],
          pics: [
            { name: 'pic12/smalllPic1-1.png', big: 'pic12/detailPic1-1.png' },
            { name: 'pic12/smalllPic1-2.png', big: 'pic12/detailPic1-2.png' },
            { name: 'pic12/smalllPic1-3.png', big: 'pic12/detailPic1-3.png' }
          ],
          team: null,//#0E6BA7
          color: null,
        }
      },
      //
      {
        name: t("Profile.All.AnimalSINGLE50.name"), summary: t("Profile.All.AnimalSINGLE50.sum"), key: 'web', show: true,
        id: "AnimalSINGLE50",
        detail: {
          introduce: t("Profile.All.AnimalSINGLE50.int"),
          titlePic: 'pic1/titlePic1.png',
          url: 'https://felicia1910.github.io/personal_practice/index.html',
          gitHub: 'https://github.com/felicia1910/personal_practice',
          used: [
            { name: t("Profile.Datail.UI"), work: 'PhotoShop/Illustrator' },
            { name: t("Profile.Datail.FrontEnd"), work: 'Html5/Css3/JavaScript' },
            { name: t("Profile.Datail.BackEnd"), work: '無' },
            { name: t("Profile.Datail.Plugin"), work: 'Bootstrap/Lightbox' }],
          pics: [
            { name: 'pic1/smalllPic1-1.png', big: 'pic1/detailPic1-1.png' },
            { name: 'pic1/smalllPic1-2.png', big: 'pic1/detailPic1-2.png' },
            { name: 'pic1/smalllPic1-3.png', big: 'pic1/detailPic1-3.png' }
          ],
          team: null,
          color: {
            pic: [{ style: 'background:#9c40ab' }, { style: 'background:#a2c0e8' }, { style: 'background:#ffffff' }],
            text: t("Profile.All.AnimalSINGLE50.color")
          },
        }
      },
      {
        name: t("Profile.All.WooderfulLife.name"), summary: t("Profile.All.WooderfulLife.sum"), key: 'web', show: true,
        id: "WooderfulLife",
        detail: {
          introduce: t("Profile.All.WooderfulLife.int"),
          titlePic: 'pic2/titlePic1.png',
          url: '',
          gitHub: '',
          used: [
            { name: t("Profile.Datail.UI"), work: 'PhotoShop/Illustrator/Zeplin' },
            { name: t("Profile.Datail.FrontEnd"), work: 'React/SCSS' },
            { name: t("Profile.Datail.BackEnd"), work: 'PHP/MySQL' },
          ],
          pics: [
            { name: 'pic2/smalllPic2-1.png', big: 'pic2/detailPic2-1.png' },
            { name: 'pic2/smalllPic2-2.png', big: 'pic2/detailPic2-2.png' },
            { name: 'pic2/smalllPic2-3.png', big: 'pic2/detailPic2-3.png' },
            { name: 'pic2/smalllPic2-4.png', big: 'pic2/detailPic2-4.png' },
            { name: 'pic2/smalllPic2-5.png', big: 'pic2/detailPic2-5.png' },
            { name: 'pic2/smalllPic2-6.png', big: 'pic2/detailPic2-6.png' },
          ],
          team: {
            title: '團隊負責事項',
            li: [
              { name: t("Profile.Datail.UI"), work: '首頁/關於知音/最新消息/玩玩知音/會員登入註冊頁面' },
              { name: t("Profile.Datail.FrontEnd"), work: ' 首頁/關於知音/玩玩知音-客製音樂鈴頁面與功能製作/銷售通路/聯絡我們' },
              { name: t("Profile.Datail.BackEnd"), work: '後端資料庫及API建置' },
            ]
          },
          color: {
            pic: [{ style: 'background:#eeeeee' }, { style: 'background:#e8aa67' }, { style: 'background:#88a044' }, { style: 'background:#606060' }],
            text: t("Profile.All.WooderfulLife.color")
          },

        }
      },
      {
        name: t("Profile.All.Manager.name"), summary: t("Profile.All.Manager.sum"), key: 'cob', show: true,
        id: "Manager",
        detail: {
          introduce: t("Profile.All.Manager.int"),
          titlePic: 'pic3/titlePic3.png',
          url: 'https://felicia1910.github.io/imitateSmallWeb',
          gitHub: null,
          used: [
            { name: '臨摹網站: ', work: '經理人商學院', a: 'https://edm.managertoday.com.tw/lead/?_ga=2.61159720.587748734.1544692507-1192771633.1532401977' },
            { name: t("Profile.Datail.FrontEnd"), work: 'Html5/Css3' },
            { name: t("Profile.Datail.BackEnd"), work: '無' }],
          pics: null,
          team: null,
          color: null,
        }
      },
      {
        name: t("Profile.All.GravityDaze.name"), summary: t("Profile.All.GravityDaze.sum"), key: 'cob', show: true,
        id: "GravityDaze",
        detail: {
          introduce: t("Profile.All.GravityDaze.int"),
          titlePic: 'pic4/titlePic4.png',
          url: 'https://felicia1910.github.io/ps4girl/',
          gitHub: null,
          used: [
            { name: '臨摹網站: ', work: 'GravityDaze', a: 'https://www.jp.playstation.com/scej/title/gravitydaze/' },
            { name: t("Profile.Datail.FrontEnd"), work: 'Html5/Css3' },
            { name: t("Profile.Datail.BackEnd"), work: '無' }],
          pics: null,
          team: null,
          color: null,
        }
      },
      {
        name: t("Profile.All.Livetools.name"), summary: t("Profile.All.Livetools.sum"), key: 'cob', show: true,
        id: "Livetools",
        detail: {
          introduce: t("Profile.All.Livetools.int"),
          titlePic: 'pic5.png',
          url: 'https://felicia1910.github.io/UISmall/',
          gitHub: null,
          used: [
            { name: '臨摹網站: ', work: 'livetools', a: 'http://livetools.uiparade.com/' },
            { name: t("Profile.Datail.FrontEnd"), work: 'Html5/Css3' },
            { name: t("Profile.Datail.BackEnd"), work: '無' }],
          pics: null,
          team: null,
          color: null,
        }
      },
      {
        name: t("Profile.All.WheatherBox.name"), summary: t("Profile.All.WheatherBox.sum"), key: 'test', show: true,
        id: "WheatherBox",
        detail: {
          introduce: t("Profile.All.WheatherBox.int"),
          titlePic: 'pic6.png',
          url: 'https://codepen.io/geladaa/full/NMEJbE',
          gitHub: null,
          used: [
            { name: t("Profile.Datail.FrontEnd"), work: 'Pug/Sass/Jquery' }
          ],
          pics: null,
          team: null,
          color: null,
        }
      },
      {
        name: t("Profile.All.Phone.name"), summary: t("Profile.All.Phone.name"), key: 'test', show: true,
        id: "Phone",
        detail: {
          introduce: t("Profile.All.Phone.int"),
          titlePic: 'pic7.png',
          url: 'https://codepen.io/geladaa/full/qKyqyv/',
          gitHub: null,
          used: [
            { name: t("Profile.Datail.FrontEnd"), work: 'Pug/Sass/Jquery' }
          ],
          pics: null,
          team: null,
          color: null,
        }
      },
      {
        name: t("Profile.All.AppDesign.name"), summary: t("Profile.All.AppDesign.name"), key: 'ui', show: true,
        id: "AppDesign",
        detail: {
          introduce: t("Profile.All.AppDesign.int"),
          titlePic: 'pic8/titlePic8.png',
          url: '',
          gitHub: null,
          used: [
            { name: t("Profile.Datail.UI"), work: ' PhotoShop/Illustrator/XD' },
          ],
          pics: [
            { name: 'pic8/page1.jpg', big: 'pic8/small/page1.jpg' },
            { name: 'pic8/page2.jpg', big: 'pic8/small/page2.jpg' },
            { name: 'pic8/page3.jpg', big: 'pic8/small/page3.jpg' },
            { name: 'pic8/page4.jpg', big: 'pic8/small/page4.jpg' },
            { name: 'pic8/page5.jpg', big: 'pic8/small/page5.jpg' },
            { name: 'pic8/page6.jpg', big: 'pic8/small/page6.jpg' },
          ],
          team: null,
          color: null,
        }
      },
      {
        name: t("Profile.All.Graphic.name"), summary: t("Profile.All.Graphic.sum"), key: 'ui', show: true,
        id: "Graphic",
        detail: {
          introduce: t("Profile.All.Graphic.int"),
          titlePic: 'pic9/titlePic9.png',
          url: 'https://docs.google.com/presentation/d/1-62LxyxFSpD3If6tsD1BajMoPI5L7cr3mgKqjzhrJV4/edit#slide=id.p',
          gitHub: null,
          used: [
            { name: t("Profile.Datail.UI"), work: 'PhotoShop/Illustrator/相機' },
          ],
          pics: [
            { name: 'pic9/pic9-1.jpg', big: 'pic9/pic9-1.jpg' },
            { name: 'pic9/pic9-2.jpg', big: 'pic9/pic9-2.jpg' },
            { name: 'pic9/pic9-3.jpg', big: 'pic9/pic9-3.jpg' },
            { name: 'pic9/pic9-4.jpg', big: 'pic9/pic9-4.jpg' },
            { name: 'pic9/pic9-5.jpg', big: 'pic9/pic9-5.jpg' },
            { name: 'pic9/pic9-6.jpg', big: 'pic9/pic9-6.jpg' },
          ],
          team: null,
          color: null,
        }
      }
    ];
    return items;
  })

  const profilesData = computed(() => {
    let items=hadShowProfiles.value;
    items = items.slice(page.first, page.first + page.perPage);

    return items;
  });

  //有SHOW出來的(但可能不在第一頁)
  const hadShowProfiles=computed(()=>{
    let items = origProfilesData.value;

    items = items.map((e: any) => {
      console.log('e.key:',filterValue.value==e.key)
      return {
        ...e,
        show: filterValue.value == "all" || filterValue.value == e.key,
      };
    });

    items =items.filter((e: any)=>{return e.show})

    return items;
  })

  //++++++++++++++++++++++++++++
  //         Function
  //++++++++++++++++++++++++++++


  return { filterItems,hadShowProfiles,origProfilesData, profilesData, filterValue, page };
}