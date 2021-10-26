<template>
  <div class="mt-4">
    <section>
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold">Articles</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          <ArticleCard
            v-for="article in articles"
            :key="article.content.title"
            :slug="`/${article.slug}`"
            :title="article.content.title"
            :description="article.content.description"
            :author="article.content.author"
            :date="article.content.date.toLocaleDateString()"
          />
        </div>
      </div>
    </section>
  </div>
</template>
