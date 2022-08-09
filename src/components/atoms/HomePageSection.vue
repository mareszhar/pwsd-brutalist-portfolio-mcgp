<template lang="pug">
section.home-page-section
  header.section-header #[h2 {{ title }}] #[span.section-number /{{ formattedOrderInSequence }}]
  slot
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  orderInSequence: number
}>()

const formattedOrderInSequence = computed(() => {
  let formattedOrder = String(props.orderInSequence)
  while (formattedOrder.length < 3) {
    formattedOrder = `0${formattedOrder}` // prepend with zeros
  }
  return formattedOrder
})
</script>

<style lang="sass" scoped>
.home-page-section
  width: 100%
  .section-header
    @include Reusables.useFlexLayout(row, space-between, center)
    padding-bottom: var(--size-3)
    text-transform: lowercase
    @include Reusables.useLineDivider()
</style>

