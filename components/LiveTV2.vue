<template>
    <div id="Live-TV-box" class="d-flex flex-column">
      <div class="video-container mb-3">
        <!-- video-cover -->
        <div class="video-cover" id="video-cover">
          <img src="/images/LiveTV.png" alt="Video Cover Image" class="img-fluid" style="cursor: pointer;" />
        </div>
        <!-- video-cover -->
  
        <!-- video -->
        <video id="video" autoplay controls muted @click="redirectToLiveTV" >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        </video>
        <!-- video -->
  
        <!-- audio-icon -->
        <div class="audio-icon" id="audioToggle">
          <img id="audioIcon" src="https://img.icons8.com/ios-filled/50/ffffff/mute.png" alt="Audio Icon" @click="toggleAudio" />
        </div>
        <!-- audio-icon -->
      </div>
  
      <p class="text-wrapper-6" @click="redirectToLiveTV" style="cursor: pointer;">Live TV VICTORY – Faith Teaching 24/7</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  function redirectToLiveTV() {
    window.location.href = 'https://www.kcm.org/watch/tv-broadcast';
  }
  

  function toggleAudio() {

    const video = document.getElementById("video");
    const audioIcon = document.getElementById("audioIcon");
  
    video.muted = !video.muted;
  
    audioIcon.src = video.muted
      ? "https://img.icons8.com/ios-filled/50/ffffff/mute.png"
      : "https://img.icons8.com/ios-filled/50/ffffff/speaker.png";
  }
  
  
  
  onMounted(() => {
    const video = document.getElementById("video");
    const cover = document.getElementById("video-cover");
  
    cover.style.display = "none";  
    video.style.display = "block";  

    video.play();  
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
    display: none;
    width: 100%;
    cursor: pointer;
  }
  
  .video-cover {
    position: relative;
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
    background-color:  #212529;
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
  