<template>
  <div class="terrain-marketplace">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1 class="hero-title">Trouvez Votre Terrain Idéal</h1>
        <p class="hero-subtitle">
          Des opportunités exceptionnelles pour construire votre rêve
        </p>
        <div class="search-bar">
          <a-input-search
            v-model:value="searchQuery"
            placeholder="Rechercher par localisation, superficie..."
            size="large"
            class="custom-search"
            @search="handleSearch"
          >
            <template #enterButton>
              <a-button type="primary" size="large">
                <SearchOutlined class="fix-icon-whatsapp"/>
                Rechercher
              </a-button>
            </template>
          </a-input-search>
        </div>
      </div>
    </section>

    <!-- Filtres -->
    <section class="filters-section">
      <div class="container">
        <div class="row g-3">
          <div class="col-md-3">
            <a-select
              v-model:value="filters.city"
              placeholder="Ville"
              size="large"
              style="width: 100%"
              @change="applyFilters"
            >
              <a-select-option value="">Toutes les villes</a-select-option>
              <a-select-option value="abidjan">Abidjan</a-select-option>
              <a-select-option value="yamoussoukro">Yamoussoukro</a-select-option>
              <a-select-option value="bouake">Bouaké</a-select-option>
            </a-select>
          </div>
          <div class="col-md-3">
            <a-select
              v-model:value="filters.priceRange"
              placeholder="Prix"
              size="large"
              style="width: 100%"
              @change="applyFilters"
            >
              <a-select-option value="">Tous les prix</a-select-option>
              <a-select-option value="0-5000000">0 - 5M FCFA</a-select-option>
              <a-select-option value="5000000-10000000">5M - 10M FCFA</a-select-option>
              <a-select-option value="10000000+">10M+ FCFA</a-select-option>
            </a-select>
          </div>
          <div class="col-md-3">
            <a-select
              v-model:value="filters.surface"
              placeholder="Superficie"
              size="large"
              style="width: 100%"
              @change="applyFilters"
            >
              <a-select-option value="">Toutes superficies</a-select-option>
              <a-select-option value="0-500">0 - 500 m²</a-select-option>
              <a-select-option value="500-1000">500 - 1000 m²</a-select-option>
              <a-select-option value="1000+">1000+ m²</a-select-option>
            </a-select>
          </div>
          <div class="col-md-3">
            <a-select
              v-model:value="filters.status"
              placeholder="Statut"
              size="large"
              style="width: 100%"
              @change="applyFilters"
            >
              <a-select-option value="">Tous</a-select-option>
              <a-select-option value="disponible">Disponible</a-select-option>
              <a-select-option value="reserve">Réservé</a-select-option>
            </a-select>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { terrains } from "~/core/constant";

const { searchQuery, filters } = useFunctions();
// État

// Méthodes
const handleSearch = (value: string) => {
  searchQuery.value = value;
};

const applyFilters = () => {};
// Lifecycle
onMounted(() => {});
</script>

<style scoped>
.terrain-marketplace {
  background: #f8f9fa;
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-image: url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-section .hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.9) 0%,
    rgba(118, 75, 162, 0.9) 100%
  );
}

.hero-section .hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.hero-section .hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .hero-section .hero-title {
    font-size: 2.5rem;
  }
}

.hero-section .hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.hero-section .search-bar {
  max-width: 700px;
  margin: 0 auto;
}

/* Ant Design deep selector */
.hero-section .search-bar :deep(.ant-input-search) .ant-input-wrapper {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  overflow: hidden;
}

.hero-section .search-bar :deep(.ant-input-search) .ant-input-wrapper .ant-input {
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
}

.hero-section .search-bar :deep(.ant-input-search) .ant-input-wrapper .ant-input:focus {
  box-shadow: none;
}

.hero-section
  .search-bar
  :deep(.ant-input-search)
  .ant-input-wrapper
  .ant-input-group-addon
  .ant-btn {
  border: none;
  background: #ff6b6b;
  color: white;
  height: 50px;
  padding: 0 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.hero-section
  .search-bar
  :deep(.ant-input-search)
  .ant-input-wrapper
  .ant-input-group-addon
  .ant-btn:hover {
  background: #ee5a52;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

/* Filters Section */
.filters-section {
  background: white;
  padding: 2rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
