
//++++++++++++++++++++++++++++++++++
//共用類型規則
//++++++++++++++++++++++++++++++++++

export type RouterData = {
  ch: string;
  en: string;
  name: string,
}

export type DropItems = {
  [x: string]: any;
  id: number | string;
  name: any;
  text?: string;
};

export type Profiles = {
  [x: string]: any;
  name: string,
  summary: string,
  key: string,
  show: boolean,
  id?: string,
  detail: {
    introduce: string,
    titlePic: any,
    url: string,
    gitHub: null | string,
    used: { name: string, work: string, a?: string }[],
    pics: null | { name: any, big: any, check?: boolean }[],
    team: null | {
      title: string,
      li: { name: string, work: string }[]
    },
    color: null | {
      pic: { style: string }[],
      text: string
    },
  }
}



