<script lang="ts" setup>
import MdEditor from 'md-editor-v3';
import PriceMarketChart from '@/components/charts/PriceMarketChart.vue';

import { Icon } from '@iconify/vue';
import {
  useBlockchain,
  useFormatter,
  useStakingStore,
  useParamStore,
} from '@/stores';
import { onMounted, ref } from 'vue';
import { useIndexModule, colorMap } from './indexStore';
import { computed } from '@vue/reactivity';

import CardStatisticsVertical from '@/components/CardStatisticsVertical.vue';
import ProposalListItem from '@/components/ProposalListItem.vue';
import ArrayObjectElement from '@/components/dynamic/ArrayObjectElement.vue'

const props = defineProps(['chain']);

const blockchain = useBlockchain();
const store = useIndexModule();
const format = useFormatter();
const stakingStore = useStakingStore();
const paramStore = useParamStore()
const coinInfo = computed(() => {
  return store.coinInfo;
});
const fnsaDesc = `
FNSA는 글로벌 생태계 확장을 위해 핀시아 재단에서 발행되고 핀시아 생태계에서 사용되는 베이스 코인입니다.
2억명 이상이 사용하는 글로벌 메신저 플랫폼 LINE에서 제공하는 LINE Blockchain의 기조를 이어 글로벌 No.1 Web3 프로젝트로서 블록체인 대중화를 실현합니다.
투자자 중심의 불균형적인 토큰 이코노미가 사용자 중심이 될 수 있도록 보완하여 누구나 참여할 수 있는 서비스 지향적 생태계를 구축합니다.
FNSA는 FNSA를 예치하고 블록 생성/검증에 참여한 밸리데이터와 사용자들에게 분배되는 네트워크 기여 보상, FNSA 결제/사용을 촉진시키는 서비스 기여 보상, 생태계 활성화를 위한 리저브로 사용됩니다
`;

onMounted(() => {
  store.loadDashboard();
  paramStore.handleAbciInfo()
  // if(!(coinInfo.value && coinInfo.value.name)) {
  // }
});
const ticker = computed(() => store.coinInfo.tickers[store.tickerIndex]);

const currName = ref("")
blockchain.$subscribe((m, s) => {
  if (s.chainName !== currName.value) {
    currName.value = s.chainName
    store.loadDashboard();
    paramStore.handleAbciInfo()
  }
});
function shortName(name: string, id: string) {
  return name.toLowerCase().startsWith('ibc/') ||
    name.toLowerCase().startsWith('0x')
    ? id
    : name;
}

const comLinks = [
  {
    name: '웹페이지',
    icon: 'mdi-web',
    href: 'https://www.finschia.network',
  },
  {
    name: 'X',
    icon: 'mdi-twitter',
    href: 'https://twitter.com/finschia',
  },
  {
    name: '미디움',
    icon: 'mdi-medium',
    href: 'https://finschia.medium.com',
  },
  {
    name: 'Github',
    icon: 'mdi-github',
    href: 'https://github.com/Finschia',
  },
];

// wallet box

function trustColor(v: string) {
  return `text-${colorMap(v)}`
}

const quantity = ref(100)
const qty = computed({
  get: () => {
    return parseFloat(quantity.value.toFixed(6))
  },
  set: val => {
    quantity.value = val
  }
})
const amount = computed({
  get: () => {
    return quantity.value * ticker.value.converted_last.usd || 0
  },
  set: val => {
    quantity.value = val / ticker.value.converted_last.usd || 0
  }
})

</script>

<template>
  <div>
    <div v-if="coinInfo && coinInfo.name" class="bg-base-100 rounded shadow mb-4">
      <div class="grid grid-cols-2 md:grid-cols-3 p-4">
        <div class="col-span-2 md:col-span-1">
          <div class="text-xl font-semibold text-main">
            {{ coinInfo.name }} (<span class="uppercase">{{
              coinInfo.symbol
            }}</span>)
            <a href="https://coingecko.com/en/coins/fnsa">
              <div class="badge bg-primary text-white">#{{ coinInfo.market_cap_rank }}</div>
            </a>
          </div>

          <div class="my-4 flex flex-wrap items-center">
            <a v-for="(item, index) of comLinks" :key="index" :href="item.href"
              class="link link-primary px-2 py-1 rounded-sm no-underline hover:text-primary hover:bg-gray-100 flex items-center">
              <Icon :icon="item?.icon" />
              <span class="ml-1 text-sm uppercase">{{ item?.name }}</span>
            </a>
          </div>

          <div>
            <div class="dropdown dropdown-hover w-full">
              <label>
                <div
                  class="bg-gray-100 flex items-center justify-between px-4 py-2 cursor-pointer rounded">
                  <div>
                    <div class="font-semibold text-xl">
                      {{ ticker?.market?.name || '' }}
                    </div>
                    <div class="text-info text-sm">
                      {{ shortName(ticker?.base, ticker.coin_id) }}/{{
                        shortName(ticker?.target, ticker.target_coin_id)
                      }}
                    </div>
                  </div>

                  <div class="text-right">
                    <div class="text-xl font-semibold text-[#666]">
                      ${{ ticker.converted_last.usd }}
                    </div>
                    <div class="text-sm" :class="store.priceColor">
                      {{ store.priceChange }}%
                    </div>
                  </div>
                </div>
              </label>
              <div class="dropdown-content pt-1">
                <div class="h-64 overflow-auto w-full shadow rounded">
                  <ul class="menu w-full bg-gray-100 rounded">
                    <li v-for="(item, index) in store.coinInfo.tickers" :key="index" @click="store.selectTicker(index)">
                      <div class="flex items-center justify-between hover:bg-base-100">
                        <div class="flex-1">
                          <div class="text-main text-sm" :class="trustColor(item.trust_score)">
                            {{ item?.market?.name }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ shortName(item?.base, item.coin_id) }}/{{
                              shortName(item?.target, item.target_coin_id)
                            }}
                          </div>
                        </div>

                        <div class="text-base text-main">
                           ${{ item.converted_last.usd }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="flex">
              <label class="btn btn-primary !px-1 my-5 mr-2" for="calculator">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="4" y="2" width="16" height="20" rx="2"></rect> <line x1="8" x2="16" y1="6" y2="6"></line> <line x1="16" x2="16" y1="14" y2="18"></line> <path d="M16 10h.01"></path> <path d="M12 10h.01"></path> <path d="M8 10h.01"></path> <path d="M12 14h.01"></path> <path d="M8 14h.01"></path> <path d="M12 18h.01"></path> <path d="M8 18h.01"></path> </g></svg>
              </label>
              <!-- Put this part before </body> tag -->
              <input type="checkbox" id="calculator" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box">
                  <h3 class="text-lg font-bold">{{ $t('index.price_calculator') }}</h3>
                  <div class="flex flex-col w-full mt-5">
                    <div class="grid h-20 flex-grow card rounded-box place-items-center">
                      <div class="join w-full">
                        <label class="join-item btn">
                          <span class="uppercase">{{ coinInfo.symbol }}</span>
                        </label>
                        <input type="number" v-model="qty" min="0" placeholder="Input a number" class="input grow input-bordered join-item" />
                      </div>
                    </div>
                    <div class="divider">=</div>
                    <div class="grid h-20 flex-grow card rounded-box place-items-center">
                      <div class="join w-full">
                        <label class="join-item btn">
                          <span>USD</span>
                        </label>
                        <input type="number" v-model="amount" min="0" placeholder="Input amount" class="join-item grow input input-bordered" />
                      </div>
                    </div>
                  </div>
                </div>
                <label class="modal-backdrop" for="calculator">{{ $t('index.close') }}</label>
              </div>
              <a class="my-5 !text-white btn grow" :class="{'!btn-success': store.trustColor === 'green', '!btn-warning': store.trustColor === 'yellow'}" :href="ticker.trade_url"
                target="_blank">
                {{ $t('index.buy') }} {{ coinInfo.symbol || '' }}
              </a>
            </div>
          </div>
        </div>

        <div class="col-span-2">
          <PriceMarketChart />
        </div>
      </div>
      <div class="h-[1px] w-full bg-gray-100"></div>
      <div class="max-h-[250px] overflow-auto p-4 text-sm">
        <MdEditor :model-value="fnsaDesc" previewOnly></MdEditor>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:!grid-cols-3 lg:!grid-cols-6">
      <div v-for="(item, key) in store.stats" :key="key">
        <CardStatisticsVertical v-bind="item" />
      </div>
    </div>
  </div>
</template>
