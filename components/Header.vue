<template>
  <header class="min-w-full h-16 bg-gray-700">
    <nav class="flex flex-row justify-between items-center h-full">
      <div class="headerMenu1">
        <nuxt-link to="/">
          <svg
            class="mx-4"
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
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></path>
            <circle fill="#ffffff" cx="156" cy="172" r="16"></circle>
            <circle fill="#ffffff" cx="92" cy="164" r="16"></circle>
            <circle fill="#ffffff" cx="84" cy="108" r="16"></circle>
            <circle fill="#ffffff" cx="136" cy="124" r="16"></circle>
          </svg>
        </nuxt-link>
      </div>
      <div class="headerMenu2">
        <form class="flex flex-row items-center justify-center" action="#">
          <input
            class="text-sm rounded-md w-44 h-7 pl-2"
            type="text"
            placeholder="Search #topic or title."
            name="search"
          />
          <button
            class="
              w-8
              h-8
              bg-gray-200
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
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <circle
                cx="115.99707"
                cy="116"
                r="84"
                fill="none"
                stroke="#000000"
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
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
            </svg>
          </button>
        </form>
      </div>
      <div class="headerMenu3">
        <svg
          class="hamburgerIcon mx-4"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            points="96 184 32 200 32 56 96 40"
            fill="none"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></polyline>
          <polygon
            points="160 216 96 184 96 40 160 72 160 216"
            fill="none"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></polygon>
          <polyline
            points="160 72 224 56 224 200 160 216"
            fill="none"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></polyline>
        </svg>

        <div class="pageLinks hidden">
          <a>About</a>
          <a>Archive</a>
          <a>Topics</a>
        </div>
      </div>
    </nav>
  </header>
</template>
