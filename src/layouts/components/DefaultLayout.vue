<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

// Components
import newFooter from '@/layouts/components/NavFooter.vue';
import NavbarSearch from '@/layouts/components/NavbarSearch.vue';
import ChainProfile from '@/layouts/components/ChainProfile.vue';

import { useDashboard } from '@/stores/useDashboard';
import { useBlockchain } from '@/stores';

import NavBarI18n from './NavBarI18n.vue';
import NavBarWallet from './NavBarWallet.vue';
import type { NavGroup, NavLink, NavSectionTitle, VerticalNavItems } from '../types';

const dashboard = useDashboard();
dashboard.initial();
const blockchain = useBlockchain();

const current = ref('');
blockchain.$subscribe((m, s) => {
  if (current.value != s.chainName) {
    current.value = s.chainName;
    blockchain.initial();
  }
});

const sidebarShow = ref(false);
const sidebarOpen = ref(true);

const changeOpen = (index: Number) => {
  if (index === 0) {
    sidebarOpen.value = !sidebarOpen.value;
  }
};

function isNavGroup(nav: VerticalNavItems | any): nav is NavGroup {
   return (<NavGroup>nav).children !== undefined;
}
function isNavLink(nav: VerticalNavItems | any): nav is NavLink {
   return (<NavLink>nav).to !== undefined;
}
function isNavTitle(nav: VerticalNavItems | any): nav is NavSectionTitle {
   return (<NavSectionTitle>nav).heading !== undefined;
}
function selected(route: any, nav: NavLink) {
  const b = route.path === nav.to?.path || route.path.startsWith(nav.to?.path) && nav.title.indexOf('dashboard') === -1
  return b
}
</script>

<template>
  <div class="bg-primary text-primary-content">
    <!-- sidebar -->
    <div
      class="w-64 fixed z-50 left-0 top-0 bottom-0 overflow-auto bg-primary"
      :class="{ block: sidebarShow, 'hidden xl:!block': !sidebarShow }"
    >
      <div class="flex justify-between mt-1 pl-4 py-4 mb-1">
        <RouterLink to="/" class="flex items-center">
          <Icon icon="pajamas:eye" class="w-10 h-10" />
          <h1 class="flex-1 ml-3 text-2xl font-semibold dark:text-white">
            핀샤의눈
          </h1>
        </RouterLink>
        <div
          class="pr-4 cursor-pointer xl:!hidden"
          @click="sidebarShow = false"
        >
          <Icon icon="mdi-close" class="text-2xl" />
        </div>
      </div>
      <div
        v-for="(item, index) of blockchain.computedChainMenu"
        :key="index"
        class="px-2"
      >
        <div
          v-if="isNavGroup(item)"
          :tabindex="index"
          class="collapse"
          :class="{
            'collapse-arrow': item?.children?.length > 0,
            'collapse-open': index === 0 && sidebarOpen,
            'collapse-close': index === 0 && !sidebarOpen,
          }"
        >
          <div class="collapse-content">
            <div v-for="(el, key) of item?.children" class="menu w-full !p-0">
              <RouterLink
                v-if="isNavLink(el)"
                @click="sidebarShow = false"
                class="hover:bg-gray-100 hover:text-primary rounded cursor-pointer px-3 py-2 flex items-center"
                :class="{
                  '!bg-primary': selected($route, el),
                }"
                :to="el.to"
              >
                <Icon
                  v-if="!el?.icon?.image"
                  icon="mdi:chevron-right"
                  class="mr-2 ml-3"
                  :class="{
                    'text-white':
                      $route.path === el?.to?.path &&
                      item?.title !== 'Favorite',
                  }"
                />
                <div
                  class="text-base capitalize text-white-500"
                  :class="{
                    '!text-white': selected($route, el),
                  }"
                >
                  {{ item?.title === 'Favorite' ? el?.title : $t(el?.title) }}
                </div>
              </RouterLink>
            </div>
          </div>
        </div>

        <RouterLink
          v-if="isNavLink(item)"
          :to="item?.to"
          @click="sidebarShow = false"
          class="cursor-pointer rounded-lg px-4 flex items-center py-2 hover:bg-gray-100"
        >
          <img
            v-if="item?.icon?.image"
            :src="item?.icon?.image"
            class="w-6 h-6 rounded-full mr-3 border border-blue-100"
          />
          <div
            class="text-base capitalize flex-1 text-gray-700 dark:text-gray-200 whitespace-nowrap"
          >
            {{ item?.title }}
          </div>
          <div
            v-if="item?.badgeContent"
            class="badge badge-sm text-white border-none" 
            :class="item?.badgeClass"
          >
            {{ item?.badgeContent }}
          </div>
        </RouterLink>
        <div
          v-if="isNavTitle(item)"
          class="px-4 text-sm text-gray-400 pb-2 uppercase"
        >
          {{ item?.heading }}
        </div>
      </div>
      <div class="px-2">
        <!-- <div class="px-4 text-sm pt-2 text-gray-400 pb-2 uppercase">
          {{ $t('module.sponsors') }}
        </div>

        <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2280493260042583"
     data-ad-slot="8761326962"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins> -->

        <div class="px-4 text-sm pt-2 pb-2 uppercase">{{ $t('module.links') }}</div>
        <a
          href="https://twitter.com/9riousen"
          target="_blank"
          class="py-2 px-4 flex items-center cursor-pointer rounded-lg hover:bg-gray-100 hover:text-primary"
        >
          <Icon icon="mdi:twitter" class="text-xl mr-2" />
          <div class="text-base capitalize flex-1">X (김택배)</div>
        </a>
        <a
          href="https://twitter.com/finschia"
          target="_blank"
          class="py-2 px-4 flex items-center cursor-pointer rounded-lg hover:bg-gray-100 hover:text-primary"
        >
          <Icon icon="mdi:twitter" class="text-xl mr-2" />
          <div class="text-base capitalize flex-1">X (핀시아)</div>
        </a>

        <a
          href="https://discord.gg/finschia"
          target="_blank"
          class="py-2 px-4 flex items-center rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary"
        >
          <Icon icon="mdi:discord" class="text-xl mr-2" />
          <div class="text-base capitalize flex-1">Discord</div>
        </a>
        <a
          href="https://github.com/ping-pub/explorer/discussions"
          target="_blank"
          class="py-2 px-4 flex items-center rounded-lg cursor-pointer hover:bg-gray-100 hover:text-primary"
        >
          <Icon icon="mdi:frequently-asked-questions" class="text-xl mr-2" />
          <div class="text-base capitalize flex-1">FAQ</div>
        </a>
      </div>
    </div>
    <div class="xl:!ml-64 px-3 pt-4">
      <!-- header -->
      <div
        class="flex items-center py-3 bg-base-100 mb-4 rounded px-4 sticky top-0 z-10"
      >
        <div
          class="text-2xl pr-3 cursor-pointer xl:!hidden"
          @click="sidebarShow = true"
        >
          <Icon icon="mdi-menu" class="text-primary"/>
        </div>

        <ChainProfile />

        <div class="flex-1 w-0"></div>

        <!-- <NavSearchBar />-->
        <NavBarI18n class="hidden md:!inline-block" />
        <NavbarSearch class="!inline-block" />
        <NavBarWallet />
      </div>

      <!-- 👉 Pages -->
      <div style="min-height: calc(100vh - 180px);" class="text-primary">
        <RouterView v-slot="{ Component }">
          <Transition mode="out-in">
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </div>

      <newFooter />
    </div>
  </div>
</template>
