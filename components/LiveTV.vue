
<template>

  <div id="Live-TV-box" class="d-flex flex-column">
    <div class="video-container mb-3">
        <!-- video-cover -->
        <div class="video-cover" id="video-cover">
          <img src="/images/LiveTV.png" alt="Video Cover Image" class="img-fluid" style="cursor: pointer;" />
        </div>
        <!-- video-cover -->

        
        <!-- video -->
        <video id="video" controls autoplay muted @click="redirectToLiveTV" >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        </video>
        <!-- video -->

        
        <!-- audio-icon -->
        <div class="audio-icon" id="audioToggle">
            <i
              :id="audioPlaying ? 'audioIcon' : 'audioIconMute'" 
              :class="audioPlaying ? 'audio-icon-volume-low' : 'audio-icon-volume-mute2'" 
              :alt="audioPlaying ? 'Audio Icon - Volume Low' : 'Audio Icon - Muted'" 
              @click="toggleAudio" 
            />
        </div>
        <!-- audio-icon -->
    
    </div>

    <p class="text-wrapper-6" @click="redirectToLiveTV" style="cursor: pointer;">Live TV VICTORY – Faith Teaching 24/7</p>

 
  
  </div>

</template>

<script setup>

import {onMounted,ref } from 'vue';



let audioPlaying = ref(false)


function redirectToLiveTV() {
  window.location.href = 'https://www.kcm.org/watch/tv-broadcast';
}



function toggleAudio() {
  const video = document.getElementById("video");
  

  video.muted = !video.muted;

  audioPlaying.value = video.muted
}

onMounted(() => {
  const video = document.getElementById("video");
  const cover = document.getElementById("video-cover");
  cover.style.display = "none";  
  video.style.display = "block"; 
  audioPlaying.value = false;
 
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


.video-cover {
  position: relative;
  cursor: pointer;
}

#video {
  display: none;
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
  right: 4.8px;
  background-color:  #212529;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
}



.audio-icon i {
  color: white;
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


