<template>
  <div>
    <div class="headline-card text-center p-3">
      <h1 class="">About</h1>
      <p v-if="$nuxt.isOffline">Oops! You are offline. 😱</p>
    </div>
    <article class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2">
      <p>
        Hi! My name is Dante Mogrim. I am a web developer student living in
        Gothenburg, Sweden. Welcome to my personal cyber nook where I’ll be
        sharing all kinds of development related knowledge as well as other fun
        things.
      </p>
    </article>

    <div class="w-full flex justify-center">
      <img
        src="https://media.giphy.com/media/dJHeg7s9WflUxV0x52/giphy-downsized-large.gif"
      />
    </div>

    <article class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2">
      <ul>
        <li>Here are a few random facts and about me:</li>
        <li>
          I am a cat guardian to two tortie sisters named Tosca and Våfflan.
        </li>
        <li>I was once a tram driver for four years.</li>
        <li>
          I was born in Monterey, California (American + Swedish parents) and
          came to Sweden when I was two.
        </li>
        <li>I have a master’s degree in motion sickness.</li>
        <li>
          I am working on coming up with the ultimate recipe for Pad Thai. If
          you have any pointers whatsoever, please share.
        </li>
        <li>
          I am a left handed, habitual note taker with an untamed love for
          lists.
        </li>
      </ul>
    </article>

    <article class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2">
      <h2>Connect</h2>
    </article>

    <article class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2">
      <h2>Tools</h2>
      <ul class="m-2">
        <li>Used for this particular website:</li>
        <li>- Nuxt.js</li>
        <li>- Tailwind CSS</li>
        <li>- nuxt/content</li>
      </ul>
      <ul>
        <li>My setup/hardware? I am currently using:</li>
        <li>- Macbook Pro 2019</li>
      </ul>
    </article>

    <article class="bg-gray-50 flex flex-col p-4 rounded-md shadow-lg m-2">
      <h2>Playlists</h2>
    </article>
  </div>
</template>

<style scoped>
.headline-card {
  background-color: #f8fad3;
  clip-path: polygon(4% 5%, 96% 8%, 97% 94%, 3% 94%);
}
</style>
