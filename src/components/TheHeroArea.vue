<template lang="pug">
header.hero-area
  h1.hero-title Karol Mikoto #[br] Creative #[br] &nbsp;Photographer
  img.hero-image(
    data-scroll 
    data-scroll-speed="2"
    src="/images/designer-profile.jpeg"
    alt="woman posing"
  )
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
.hero-area
  @include Reusables.useFlexLayout(column, flex-start, stretch)
  .hero-title
    margin: var(--size-20) 0
    font-family: 'Bigilla', serif
    font-size: var(--font-size-huge)
    font-weight: 700

  .hero-image
    aspect-ratio: 0.8 // portrait aspect ratio
    margin: 0 0 var(--size-20)
    object-fit: cover
    object-position: center

  @media screen and (min-width: Reusables.useScreenWidth(desktopSmall))
    .hero-title
      z-index: 1
    .hero-image
      align-self: flex-end
      width: 40%
      margin-top: -40vh
</style>

