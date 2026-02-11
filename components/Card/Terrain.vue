<template>
  <div>
    <section class="terrains-section" id="terrain">
      <div class="container">
        <h2
          :class="
            filteredTerrains.length === 0
              ? 'section-title text-center mb-5'
              : 'section-title text-center'
          "
        >
          Nos Terrains Disponibles
        </h2>
        <div v-if="filteredTerrains.length === 0" class="empty-state text-center">
          <div class="empty-icon">
            <SearchOutlined />
          </div>

          <h4 class="empty-title">Aucune correspondance trouvée.</h4>

          <p class="empty-subtitle">
            Essayez de modifier vos filtres ou votre recherche.
          </p>

          <a-button size="large" class="outline-slide-team" @click="resetFilters"
            ><PlaySquareOutlined class="fix-icon-whatsapp fs-5" /> Réinitialiser les filtres</a-button
          >
        </div>

        <div class="row g-4">
          <div
            v-for="terrain in filteredTerrains"
            :key="terrain.id"
            class="col-lg-4 col-md-6"
          >
            <CardTerrainCard :terrain="terrain" @click="showTerrainDetails(terrain)" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { filteredTerrains, showTerrainDetails, resetFilters } = useFunctions();
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

.empty-state {
  background: white;
  border-radius: 16px;
  margin: 60px 0;
}

.empty-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  animation: float 3s ease-in-out infinite;
}

.empty-title {
  font-weight: 700;
  margin-bottom: 10px;
  color: black;
}

.empty-subtitle {
  color: #718096;
  margin-bottom: 25px;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748;
    position: relative;
    padding-bottom: 1rem;
  }
}
</style>
