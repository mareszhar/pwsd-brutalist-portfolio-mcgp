<template lang="pug">
TheTopBar
TheHeroArea

.home-page-sections
  AboutSection
  ProjectsSection
  ClientsSection
  SocialsSection

TheFooter
</template>

<script lang="ts" setup></script>

<style lang="sass">
@use '../shared/styles/Main'

#app
  margin: 0 auto
  max-width: calc(var(--size-1) * 460)

.home-page-sections
  @include Reusables.useFlexLayout(column, flex-start, flex-start)
  gap: var(--size-22)
</style>

