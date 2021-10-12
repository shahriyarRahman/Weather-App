<template>
  <div>
    <div class="flex flex-col justify-center border rounded-md w-full md:w-1/3 mx-4 md:mx-auto mt-20 p-3">
      <h2 class="text-center mb-4">Calculator</h2>
      <input type="number" v-model="val1" class="rounded-md w-full h-12 border px-3 py-1 mb-3" />
      <input type="number" v-model="val2" class="rounded-md w-full h-12 border px-3 py-1" />
      <button class="mt-4 bg-blue-600 px-4 py-2 rounded-md text-white" @click="calculate">
        Sum
      </button>
      <div class="w-full border-b px-3 py-1 mt-5">
        <span class="font-bold">Result:</span>
        {{ sum }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val1: 0,
      val2: 0,
      sum: null,
    };
  },
  methods: {
    calculate() {
      this.sum = +this.val1 + +this.val2;
    },
  },
};
</script>
<style></style>
