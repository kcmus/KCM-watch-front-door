<template>
    <div id="Live-TV-box" class="d-flex flex-column">
      <div class="video-container mb-3">
        <!-- video -->
        <video
          ref="videoElement" 
          :poster="poster_url"
          autoplay
          controls
          :muted="isMuted"
          @click="redirectToLiveTV"
          @volumechange="handleVolumeChange"
        />
        <!-- video -->
  
        <!-- audio-icon -->
        <div class="audio-icon" @click="toggleAudio">
          <img :src="audioIconSrc" alt="Audio Icon" />
        </div>
        <!-- audio-icon -->
      </div>
  
      <p class="text-wrapper-6" @click="redirectToLiveTV" style="cursor: pointer;">
        {{ title }}
      </p>
    </div>
  </template>
  
  <script setup lang="ts">

  import Hls from 'hls.js';
  import type { LiveTV_Data } from '~/server/api/LiveTV.js';
  
  // Fetch LiveTV data from the API
  const { data: LiveTV } = useFetch<LiveTV_Data>('/api/LiveTV');
  
  // Reactive properties to access LiveTV data
  const title = computed(() => LiveTV.value?.title || '');
  const video_url = computed(() => LiveTV.value?.video_url || '');
  const poster_url = computed(() => LiveTV.value?.poster_url || '');
  const redirect_url = computed(() => LiveTV.value?.redirect_url || '');
  
  // Ref to the video element
  const videoElement = ref<HTMLVideoElement | null>(null);
  
  // Reactive property to manage audio state
  const isMuted = ref(true);
  
  // Computed property for audio icon source
  const audioIconSrc = computed(() =>
    isMuted.value
      ? '/images/mute.png'
      : '/images/speaker.png'
  );
  
  // Function to redirect to the live TV URL
  function redirectToLiveTV() {
    if (redirect_url.value) {
      window.location.href = redirect_url.value;
    }
  }
  
  // Function to toggle audio mute/unmute
  function toggleAudio() {
    if (videoElement.value) {
      isMuted.value = !isMuted.value;
      videoElement.value.muted = isMuted.value;
    }
  }
  
  // Function to handle volume change
  function handleVolumeChange() {
    if (videoElement.value) {
      isMuted.value = videoElement.value.muted;
    }
  }
  
  onMounted(() => {
  if (videoElement.value && video_url.value) {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(video_url.value);
      hls.attachMedia(videoElement.value);
    } else if (videoElement.value.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.value.src = video_url.value;
    }
    isMuted.value = videoElement.value.muted;
  }
});



  </script>
  
  <style scoped>

  #Live-TV-box {
    align-items: center;
  }
  
  .video-container {
    position: relative;
    width: 100%;
    max-width: 640px;
    margin: auto;
  }
  
  video {
    display: block;
    width: 100%;
    cursor: pointer;
  }
  
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
  