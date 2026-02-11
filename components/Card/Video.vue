<template>
    <div id="realisation">
        <h2 class="section-title text-center mb-5">Nos Réalisations</h2>
  <div class="video-grid container">
    <div
      v-for="(video, index) in videos"
      :key="index"
      class="video-card"
      @click="openVideo(video)"
    >
      <div class="video-thumbnail">
        <img :src="video.thumbnail" :alt="video.title" />

        <div class="overlay">
          <div class="play-btn">▶</div>
        </div>

        <div class="duration">
          {{ video.duration }}
        </div>
      </div>

      <div class="video-content">
        <h3 class="video-title">{{ video.title }}</h3>
        <p class="video-description">
          {{ video.description }}
        </p>
      </div>
    </div>

    <!-- Modal -->
    <a-modal
      v-model:open="videoModalVisible"
      :title="selectedVideo?.title"
      :footer="null"
      width="900px"
      centered
      @cancel="closeVideo"
    >
      <div class="video-container">
        <iframe
          v-if="videoModalVisible"
          :src="selectedVideo?.videoUrl"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="modal-description">
        {{ selectedVideo?.description }}
      </div>
    </a-modal>
  </div>
</div>

</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  videos: {
    type: Array,
    required: true,
  },
});

const videoModalVisible = ref(false);
const selectedVideo = ref(null);

const openVideo = (video) => {
  selectedVideo.value = video;
  videoModalVisible.value = true;
};

const closeVideo = () => {
  videoModalVisible.value = false;
};
</script>

<style scoped>
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

/* CARD */
.video-card {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

.video-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
}

/* THUMBNAIL */
.video-thumbnail {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.video-card:hover .video-thumbnail img {
  transform: scale(1.1);
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s ease;
}

.video-card:hover .overlay {
  opacity: 1;
}

/* PLAY BUTTON */
.play-btn {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #1677ff;
  transition: 0.3s ease;
}

.video-card:hover .play-btn {
  transform: scale(1.15);
  background: #ff4d4f;
  color: white;
}

/* DURATION */
.duration {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
}

/* CONTENT */
.video-content {
  padding: 20px;
  flex: 1;
}

.video-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #1f2937;
}

.video-description {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
}

/* MODAL VIDEO */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video-container iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.modal-description {
  margin-top: 20px;
  padding: 15px;
  background: #f5f7fa;
  border-radius: 10px;
  color: #374151;
}

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

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748;
    position: relative;
    padding-bottom: 1rem;
  }
}.section-title {
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
