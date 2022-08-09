<template lang="pug">
HomePageSection(:title="'Socials'" :orderInSequence="4")
  .socials-list
    a(href="https://dribbble.com/mareszhar" target="_blank") Dribbble
    a(href="https://www.linkedin.com/in/mareszhar/" target="_blank") LinkedIn
    a(href="https://twitter.com/mareszhar" target="_blank") Twitter
    a(href="https://github.com/mareszhar" target="_blank") GitHub
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.socials-list
  @include Reusables.useFlexLayout(row, space-between, center)
  flex-wrap: wrap
  padding: var(--size-4) 0
  font-family: 'Bigilla'
  font-size: var(--font-size-large)
  line-height: 1em
  text-transform: lowercase
  @include Reusables.useLineDivider()
</style>

