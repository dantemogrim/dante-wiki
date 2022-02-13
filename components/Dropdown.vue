<template>
  <div>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="none"
        viewBox="0 0 256 256"
        class="transition duration-500 ease-in-out transform bg-blue-200 rounded-lg shadow-md cursor-pointer hover:rotate-45"
        @click="menuIsOpen = !menuIsOpen"
      >
        <rect width="256" height="256" fill="none"></rect>
        <path
          d="M180,48h.00006A27.99994,27.99994,0,0,1,208,75.99994V76a28,28,0,0,1-28,28H152a0,0,0,0,1,0,0V76a28,28,0,0,1,28-28Z"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></path>
        <path
          d="M48,48H76a28,28,0,0,1,28,28v.00006A27.99994,27.99994,0,0,1,76.00006,104H76A28,28,0,0,1,48,76V48A0,0,0,0,1,48,48Z"
          transform="translate(152 152) rotate(180)"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></path>
        <path
          d="M152,152h28a28,28,0,0,1,28,28v.00006A27.99994,27.99994,0,0,1,180.00006,208H180a28,28,0,0,1-28-28V152A0,0,0,0,1,152,152Z"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></path>
        <path
          d="M76,152h.00006A27.99994,27.99994,0,0,1,104,179.99994V180a28,28,0,0,1-28,28H48a0,0,0,0,1,0,0V180A28,28,0,0,1,76,152Z"
          transform="translate(152 360) rotate(-180)"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></path>
        <rect
          x="104"
          y="104"
          width="48"
          height="48"
          stroke-width="24"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        ></rect>
      </svg>
    </button>
    <transition
      enter-active-class="transition duration-500 transform ease-custom"
      enter-class="scale-y-0 -translate-y-1/2 opacity-0"
      enter-to-class="scale-y-100 translate-y-0 opacity-100"
      leave-active-class="transition duration-300 transform ease-custom"
      leave-class="scale-y-100 translate-y-0 opacity-100"
      leave-to-class="scale-y-0 -translate-y-1/2 opacity-0"
    >
      <ul
        v-if="menuIsOpen"
        @click="menuIsOpen = false"
        class="absolute inset-x-0 mt-2.5 overflow-hidden divide-y rounded-lg shadow-lg bg-gray-50"
      >
        <nuxt-link to="/about">
          <li
            class="px-3 py-2 transition-colors duration-300 hover:bg-skunkblue hover:text-white"
          >
            About
          </li>
        </nuxt-link>
        <nuxt-link to="/posts">
          <li
            class="px-3 py-2 transition-colors duration-300 hover:bg-skunkblue hover:text-white"
          >
            Posts
          </li>
        </nuxt-link>
        <nuxt-link to="/tags">
          <li
            class="px-3 py-2 transition-colors duration-300 hover:bg-skunkblue hover:text-white"
          >
            Tags
          </li>
        </nuxt-link>
      </ul>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {},
});
</script>

<style scoped>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
