<template lang="pug">
footer.footer
  span.site-creator created by Mares
  span.site-coordinates 55.386656, 11.764279
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.footer
  @include Reusables.useFlexLayout(row, space-between, center)
  flex-wrap: wrap
  padding: var(--size-4) 0
  text-transform: lowercase
</style>

