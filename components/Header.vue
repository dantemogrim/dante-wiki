<template>
  <header class="min-w-full h-16 sticky inset-0">
    <nav class="flex flex-row justify-between items-center h-full">
      <div class="headerMenu1 mx-4">
        <nuxt-link to="/">
          <svg
            class=""
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M223.9944,127.41159a95.69791,95.69791,0,0,1-28.17312,68.53158c-36.94566,36.88079-97.30608,37.29538-134.72958.89956a95.99643,95.99643,0,0,1,67.48515-164.8372,8.01374,8.01374,0,0,1,7.80464,9.7612,31.99345,31.99345,0,0,0,30.85987,39.031,8.02776,8.02776,0,0,1,7.96088,7.96088,31.99346,31.99346,0,0,0,39.03035,30.86A8.01158,8.01158,0,0,1,223.9944,127.41159Z"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></path>
            <circle fill="#000000" cx="156" cy="172" r="16"></circle>
            <circle fill="#000000" cx="92" cy="164" r="16"></circle>
            <circle fill="#000000" cx="84" cy="108" r="16"></circle>
            <circle fill="#000000" cx="136" cy="124" r="16"></circle>
          </svg>
        </nuxt-link>
      </div>
      <div class="headerMenu2">
        <form class="flex flex-row items-center justify-center" action="#">
          <input
            class="rounded-md w-44 h-8 pl-2 bg-gray-600"
            type="text"
            placeholder="#topic or title."
            name="search"
          />
          <button
            class="
              w-8
              h-8
              bg-gray-600
              m-2
              rounded-md
              flex
              items-center
              justify-center
            "
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <circle
                cx="115.99707"
                cy="116"
                r="84"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></circle>
              <line
                x1="175.39063"
                y1="175.40039"
                x2="223.99121"
                y2="224.00098"
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
            </svg>
          </button>
        </form>
      </div>
      <div class="headerMenu3 mx-4">
        <span>{{ selectedOption }}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="#000000"
          viewBox="0 0 256 256"
          :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
          @click="isOptionsExpanded = !isOptionsExpanded"
          @blur="isOptionsExpanded = false"
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
        <transition
          enter-active-class="transform transition duration-500 ease-custom"
          enter-class="-translate-y-1/2 scale-y-0 opacity-0"
          enter-to-class="translate-y-0 scale-y-100 opacity-100"
          leave-active-class="transform transition duration-300 ease-custom"
          leave-class="translate-y-0 scale-y-100 opacity-100"
          leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
        >
          <ul
            v-show="isOptionsExpanded"
            class="
              absolute
              left-0
              right-0
              mt-3.5
              mb-4
              bg-white
              divide-y
              rounded-lg
              shadow-lg
              overflow-hidden
            "
          >
            <nuxt-link to="/about">
              <li
                class="
                  px-3
                  py-2
                  transition-colors
                  duration-300
                  hover:bg-gray-200
                "
                @mousedown.prevent="setOption(option)"
              >
                About
              </li>
            </nuxt-link>
            <nuxt-link to="/articles">
              <li
                class="
                  px-3
                  py-2
                  transition-colors
                  duration-300
                  hover:bg-gray-200
                "
                @mousedown.prevent="setOption(option)"
              >
                Articles
              </li>
            </nuxt-link>
            <nuxt-link to="/topics">
              <li
                class="
                  px-3
                  py-2
                  transition-colors
                  duration-300
                  hover:bg-gray-200
                "
                @mousedown.prevent="setOption(option)"
              >
                Topics
              </li>
            </nuxt-link>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isOptionsExpanded: false,
      selectedOption: '',
    };
  },
  methods: {
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    },
  },
});
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
