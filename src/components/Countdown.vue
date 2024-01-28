<script lang="ts" setup>
import Countdown from '@chenfengyuan/vue-countdown';
import { ref } from 'vue';

const props = defineProps({
  time: { type: Number },
  css: { type: String },
});

const s = ref(0)

</script>
<template>
  <Countdown v-if="time" :time="time > 0 ? time : 0" v-slot="{ days, hours, minutes, seconds }"
    class="countdown-container justify-items-center text-lg">
    잔여기간:
    <span class="text-primary font-bold" :class="css">{{ days }}</span>일
    <span class="text-primary font-bold" :class="css">{{ hours }}</span>시간
    <span class="text-primary font-bold" :class="css">{{ minutes }}</span>분
    <span class="text-primary font-bold" :class="css">{{ seconds }}</span>초
  </Countdown>
</template>

<style>
.countdown-container {
  display: inline-flexbox;
  position: relative;
}

.countdown {
  position: absolute;
  width: 45%;
  text-align: right;
  float: right;
}
</style>
