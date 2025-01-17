<script lang="ts" setup>
import { computed, ref } from '@vue/reactivity';
import { useBaseStore, useFormatter } from '@/stores';

const tab = ref('blocks');

const base = useBaseStore()

const format = useFormatter();

const list = computed(() => {
    // const recents = base.recents
    // return recents.sort((a, b) => (Number(b.block.header.height) - Number(a.block.header.height)))
    return base.recents
})
</script>
<template>
    <div>
        <div class="tabs mb-4">
            <a class="tab tab-bordered" :class="{ 'tab-active': tab === 'blocks' }"
                @click="tab = 'blocks'">{{ $t('block.recent') }}</a>
            <a class="tab tab-bordered" :class="{ 'tab-active': tab === 'transactions' }"
                @click="tab = 'transactions'">{{ $t('account.transactions') }}</a>
        </div>

        <div v-show="tab === 'blocks'" class="grid xl:!grid-cols-6 md:!grid-cols-4 grid-cols-1 gap-3">

            <RouterLink v-for="item in list"
                class="flex flex-col justify-between rounded p-4 shadow bg-base-100"
                :to="`/block/${item.block.header.height}`">
                <div class="flex justify-between">
                    <h3 class="text-md font-bold sm:!text-lg">
                        {{ item.block.header.height }}
                    </h3>
                    <span class="rounded text-xs whitespace-nowrap font-medium">
                        {{ format.toDay(item.block?.header?.time, 'from') }}
                    </span>
                </div>
                <div class="flex justify-between tooltip" data-tip="Block Proposor">
                    <div class="mt-2 hidden text-sm sm:!block truncate">
                        <span>{{ format.validator(item.block?.header?.proposer_address) }}</span>
                    </div>
                    <span class="text-right mt-1 whitespace-nowrap"> {{ item.block?.data?.txs.length }} txs </span>
                </div>
            </RouterLink>
        </div>

        <div v-show="tab === 'transactions'" class="rounded overflow-x-auto bg-base-100">
            <table class="table w-full table-compact">
                <thead class="bg-base-200">
                    <tr>
                        <th style="position: relative; z-index: 2;">{{ $t('account.height') }}</th>
                        <th style="position: relative; z-index: 2;">{{ $t('account.hash') }}</th>
                        <th>{{ $t('account.messages') }}</th>
                        <th>{{ $t('block.fees') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in base.txsInRecents" :index="index" class="hover">
                        <td class="text-sm">
                            <RouterLink :to="`/block/${item.height}`">{{ item.height }}</RouterLink>
                        </td>
                        <td class="truncate" width="50%">
                            <RouterLink :to="`/tx/${item.hash}`">{{
                                item.hash
                            }}</RouterLink>
                        </td>
                        <td>{{ format.messages(item.tx.body.messages) }}</td>
                        <td>{{ format.formatTokens(item.tx.authInfo.fee?.amount) }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="p-4">
                <div class="alert relative bg-transparent">
                    <div class="alert absolute inset-x-0 inset-y-0 w-full h-full bg-info opacity-10"></div>
                    <div class="text-info flex gap-2">
                        <span>{{ $t('block.only_tx') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<route>
    {
      meta: {
        i18n: 'blocks',
        order: 5
      }
    }
  </route>
