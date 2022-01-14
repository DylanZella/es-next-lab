import {zhCN, dateZhCN} from 'naive-ui';

export interface stateInterface {
  theme: any;
  locale: typeof zhCN;
  dateLocale: typeof dateZhCN;
}

const state: stateInterface = {
  theme: null,
  locale: zhCN,
  dateLocale: dateZhCN,
};

export default state;
