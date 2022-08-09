<template lang="pug">
.top-bar
  span.site-author by Mares
  span.site-title Folio
  span.year {{ currentYear }}
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<style lang="sass" scoped>
.top-bar
  @include Reusables.useFlexLayout(row, space-between, center)
  padding-bottom: var(--size-3)
  text-transform: lowercase
  @include Reusables.useLineDivider()

  span
    flex-grow: 1
    &:last-child
      flex-grow: 2
      text-align: right
</style>

