import {InjectionKey} from 'vue';
import {createStore, useStore as baseUseStore, Store} from 'vuex';
import state, {stateInterface} from './state';

export const key: InjectionKey<Store<stateInterface>> = Symbol('VUEX_STORE_KEY');

export const store = createStore<stateInterface>({
  state: state,
});

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
