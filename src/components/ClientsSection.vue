<template lang="pug">
HomePageSection(:title="'Clients'" :orderInSequence="3")
  //- cSpell:disable
  .client-names
    p.
      #[br] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nike, xbox, vans, jordan,
      puma, adidas, netflix, we work, kylie cosmetics,
      vogue, deutsche bank, under armor, la fashion week, dbs, ocbc,
      olympic comittee, spartan, allbirds #[br]
  //- cSpell:enable
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.client-names
  font-family: 'Bigilla'
  font-size: var(--font-size-large)
  line-height: 1.36em
  text-align: justify
</style>

