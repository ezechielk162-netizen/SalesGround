<template>
  <HeroImageSection />

  <PersoDiv>
    <CardTerrain />
  </PersoDiv>

  <PersoDiv>
    <CardVideo :videos="videos" />
  </PersoDiv>
</template>

<script lan="ts" setup>
const { t } = useI18n();

const videos = [
  {
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    title: "Présentation de notre plateforme",
    description:
      "Découvrez les fonctionnalités principales de notre plateforme et comment elle facilite la gestion immobilière.",
    duration: "05:32",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    title: "Comment publier une annonce",
    description:
      "Tutoriel étape par étape pour publier une annonce immobilière et optimiser sa visibilité.",
    duration: "08:47",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  },
  {
    thumbnail: "https://img.youtube.com/vi/l482T0yNkeo/maxresdefault.jpg",
    title: "Conseils pour vendre rapidement",
    description:
      "Nos experts partagent des conseils pratiques pour vendre votre bien immobilier plus rapidement.",
    duration: "06:15",
    videoUrl: "https://www.youtube.com/embed/l482T0yNkeo",
  },
];
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
