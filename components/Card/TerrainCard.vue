<template>
  <div class="terrain-card" @click="$emit('click')">
    <div class="card-image-wrapper">
      <img :src="terrain.image" :alt="terrain.title" class="card-image" />
      <div class="status-badge" :class="statusClass">
        {{ statusLabel }}
      </div>
      <div class="hover-overlay">
        <i class="bi bi-eye"></i>
        <p>Voir les détails</p>
      </div>
    </div>
    <div class="card-body">
      <div class="card-location">
        <EnvironmentFilled class="fix-icon" />
        {{ terrain.location }}
      </div>
      <h3 class="card-title">{{ terrain.title }}</h3>
      <p class="card-description">{{ terrain.description }}</p>

      <div class="card-features">
        <div class="feature-item">
          <img src="/assets/img/rulers.svg" class="svg-width fix-icon-terrain" alt="" />
          <span class="terrain-price-size">{{ terrain.surface }} m²</span>
        </div>
        <div class="feature-item">
          <img src="/assets/img/money.svg" class="svg-width fix-icon" alt="" />
          <span class="terrain-price-size">{{ formatPrice(terrain.price) }}</span>
        </div>
      </div>

      <div class="card-tags">
        <a-tag
          v-for="(feature, index) in terrain.features.slice(0, 3)"
          :key="index"
          color="blue"
          class="p-2 fw-bold mobile"
        >
          {{ feature }}
        </a-tag>
      </div>

      <div class="card-footer">
        <div class="owner-info">
          <img src="/assets/img/user.svg" class="svg-width fix-icon" alt="" />
          <span>{{ terrain.owner.name }}</span>
        </div>
        <a-button type="primary" class="contact-btn" @click.stop="contactOwner">
          <WhatsAppOutlined class="fix-icon-contact"/>
          Contacter
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  terrain: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["click"]);

const statusClass = computed(() => {
  return props.terrain.status === "disponible" ? "status-available" : "status-reserved";
});

const statusLabel = computed(() => {
  return props.terrain.status === "disponible" ? "Disponible" : "Réservé";
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    minimumFractionDigits: 0,
  }).format(price);
};

const contactOwner = () => {
  const message = encodeURIComponent(
    `Bonjour, je suis intéressé par le terrain: ${props.terrain.title}`
  );
  const whatsappUrl = `https://wa.me/${props.terrain.owner.whatsapp}?text=${message}`;
  window.open(whatsappUrl, "_blank");
};
</script>

<style scoped>
.terrain-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.terrain-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.terrain-card:hover .card-image {
  transform: scale(1.1);
}

.terrain-card:hover .hover-overlay {
  opacity: 1;
}

/* Image */
.card-image-wrapper {
  position: relative;
  height: 260px;
  overflow: hidden;
  background: #f0f0f0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Status badge */
.status-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  z-index: 2;
}

.status-badge.status-available {
  background: rgba(76, 175, 80, 0.95);
  color: white;
}

.status-badge.status-reserved {
  background: rgba(255, 152, 0, 0.95);
  color: white;
}

/* Hover overlay */
.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
}

.hover-overlay i {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.hover-overlay p {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

/* Card body */
.card-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-location {
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.card-location i {
  font-size: 1rem;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.card-description {
  color: #718096;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex: 1;
}

/* Features */
.card-features {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a5568;
  font-weight: 600;
}

.feature-item i {
  color: #667eea;
  font-size: 1.2rem;
}

.feature-item span {
  font-size: 0.95rem;
}

/* Tags */
.card-tags {
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card-tags .ant-tag {
  margin: 0;
  border-radius: 6px;
  font-size: 0.8rem;
}

.svg-width {
  width: 24px;
}

/* Footer */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.owner-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a5568;
  font-size: 0.9rem;
}

.owner-info i {
  font-size: 1.5rem;
  color: #667eea;
}

/* Contact button */
.contact-btn {
  border-radius: 8px;
  font-weight: 600;
  height: 38px;
  padding: 0 20px;
  background: #25d366;
  border-color: #25d366;
}

.contact-btn i {
  margin-right: 0.3rem;
}

.contact-btn:hover {
  background: #1fb855;
  border-color: #1fb855;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .terrain-price-size {
    font-size: 17px !important;
  }

  .mobile {
    font-size: 15.5px !important;
  }
}
</style>
