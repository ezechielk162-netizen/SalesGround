<template>
  <HeroImageSection :image_url="randomImage.URL" />

  <PersoDiv>
    cdzkjezkj
  </PersoDiv>

</template>

<script lan="ts" setup>
import { randomImage } from "~/core/constant";

const { t } = useI18n();

</script>

<style scoped>
.pad-section {
  padding-top: 30px;
}

@media (max-width: 768px) {
  .pad-section {
    padding-top: 10px;
  }
}
</style>
