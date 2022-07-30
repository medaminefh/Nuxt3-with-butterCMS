<script setup lang="ts">
const butter = await useButterCMS();

const samplePage = await butter.getLandingPage();

const sections = {
  "lp-hero": resolveComponent("LpHero"),
  "lp-features": resolveComponent("LpFeatures"),
  "lp-two_column_with_image": resolveComponent("LpAbout"),
  "lp-testimonials": resolveComponent("LpTestimonials"),
};

useHead({
  title: samplePage.value.fields.seo.title,
  meta: [
    { name: "description", content: samplePage.value.fields.seo.description },
  ],
});
</script>
<template>
  <div>
    <TheNavBar />
    <component
      v-for="field in samplePage.fields.body"
      :is="sections[`lp-${field.type}`]"
      v-bind="field.fields"
    ></component>
    <TheFooter />
  </div>
</template>
