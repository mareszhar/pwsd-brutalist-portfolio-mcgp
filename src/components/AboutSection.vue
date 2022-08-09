<template lang="pug">
HomePageSection.section--about(:title="'About'" :orderInSequence="1")
  .content
    //- cSpell:disable
    p.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
      quasi sapiente nisi minus neque non explicabo, magni cumque enim
      aut!
    p.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
      eaque nobis. Quidem sint ratione quos veniam!
    p.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //- cSpell:enable
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.section--about .content
  @include Reusables.useFlexLayout(column, flex-start, flex-start)
  gap: var(--size-8)
  padding: var(--size-12) 0
  font-size: var(--font-size-medium)

  @media screen and (min-width: Reusables.useScreenWidth(desktopSmall))
    padding-left: 32vw
</style>

