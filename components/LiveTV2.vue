<template>
  <div id="Live-TV-box" class="d-flex flex-column">
    <div class="video-container mb-3">
      <!-- video-cover -->
      <!-- <div class="video-cover" id="video-cover">
          <img src="/images/LiveTV.png" alt="Video Cover Image" class="img-fluid" style="cursor: pointer;" />
        </div> -->
      <!-- video-cover -->

      <!-- video -->
      <video id="video" autoplay controls muted @click="redirectToLiveTV">
        <source
          :src="LiveTV.video_url"
          :poster="LiveTV.poster_url"
          type="video/mp4"
        />
      </video>
      <!-- video -->

      <!-- audio-icon -->
      <div class="audio-icon" id="audioToggle">
        <img
          id="audioIcon"
          src="https://img.icons8.com/ios-filled/50/ffffff/mute.png"
          alt="Audio Icon"
          @click="toggleAudio"
        />
      </div>
      <!-- audio-icon -->
    </div>

    <p class="text-wrapper-6" @click="redirectToLiveTV" style="cursor: pointer">
      {{ LiveTV.title }}
    </p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const { data: LiveTV } = useFetch("/api/LiveTV");

function redirectToLiveTV() {
  window.location.href = LiveTV.redirect_url;
}

function toggleAudio() {
  const video = document.getElementById("video");
  const audioIcon = document.getElementById("audioIcon");

  video.muted = !video.muted;

  updateAudioIcon(video.muted, audioIcon);
}

function updateAudioIcon(isMuted, audioIcon) {
  audioIcon.src = isMuted
    ? "https://img.icons8.com/ios-filled/50/ffffff/mute.png"
    : "https://img.icons8.com/ios-filled/50/ffffff/speaker.png";
}

onMounted(() => {
  const video = document.getElementById("video");
  const cover = document.getElementById("video-cover");
  const audioIcon = document.getElementById("audioIcon");

  // cover.style.display = "none";
  // video.style.display = "block";

  video.play().then(() => {
    g;
    updateAudioIcon(video.muted, audioIcon);
  });

  // Handle case where the user manually unmutes the video via controls
  video.addEventListener("volumechange", () => {
    updateAudioIcon(video.muted, audioIcon);
  });
});
</script>

<style>
#Live-TV-box {
  align-items: center;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: auto;
}

#video {
  display: block;
  width: 100%;
  cursor: pointer;
}

/* .video-cover {
    position: relative;
    cursor: pointer;
  } */

.text-wrapper-6 {
  color: #000000;
  font-family: var(--heading-h5-font-family);
  font-size: var(--heading-h5-font-size);
  font-style: var(--heading-h5-font-style);
  font-weight: var(--heading-h5-font-weight);
  letter-spacing: var(--heading-h5-letter-spacing);
  line-height: var(--heading-h5-line-height);
}

.audio-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #212529;
  padding: 2px;
  border-radius: 10%;
  cursor: pointer;
}

.audio-icon img {
  width: 19.17px;
  height: 14.4px;
}

@media (min-width: 992px) and (max-width: 1120px) {
  .text-wrapper-6 {
    font-size: 16px;
  }
}

@media (min-width: 992px) {
  #Live-TV-box {
    align-items: normal;
  }
}
</style>
