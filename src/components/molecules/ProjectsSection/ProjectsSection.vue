<template lang="pug">
HomePageSection.section--projects(:title="'Photography'" :orderInSequence="2")
  ul.projects-list
    li.project(v-for="(projectTitle, index) in projects")
      h3.project-title / {{ projectTitle }}
      img.photo(:src="`/images/model-${index + 1}.jpeg`" alt="human face")
      .marquee(aria-hidden="true")
        .text-stream #[span.word(v-for="_n in wordsPerTextStream") {{ projectTitle }}]
</template>

<script lang="ts" setup>
const projects = [
  'Ancestral',
  'Carnation',
  'Blue Profusion',
  'Jungle Zephyr',
  'Stark Abyss'
]

const wordsPerTextStream = 4
</script>

<style lang="sass" scoped>
@use './styles/ProjectTitle'
@use './styles/Project'
@use './styles/Marquee'
@use './styles/Photo'

.projects-list
  margin-top: var(--size-8)

.project
  @include Project.useSectionStyles()
  .photo
    @include Photo.useElementStyles()
  .project-title
    @include ProjectTitle.useElementStyles()

  .marquee
    @include Marquee.useSectionStyles()
    .text-stream
      --single-word-width: calc(100% / v-bind(wordsPerTextStream))
      //...there's more styles for text-stream in the marquee section styles file
</style>

