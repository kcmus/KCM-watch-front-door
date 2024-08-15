
<template>

    <div id="Live-TV-box" class="d-flex flex-column">
      <div class="video-container mb-3 w-100">
        <video controls autoplay class="w-100" @click="redirectToLiveTV">
            <source src="" type="video/mp4">
        </video>
      </div>
      <p class="text-wrapper-6" @click="redirectToLiveTV">Live TV VICTORY – Faith Teaching 24/7</p>
        
    </div>

</template>



<script setup>

function redirectToLiveTV() {
  window.location.href = 'https://www.kcm.org/watch/tv-broadcast';
}

</script>

<style>

#Live-TV-box{

    align-items: center;
}


.video-container {
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-wrapper-6{

  color: #000000;
  font-family: var(--heading-h5-font-family);
  font-size: var(--heading-h5-font-size);
  font-style: var(--heading-h5-font-style);
  font-weight: var(--heading-h5-font-weight);
  letter-spacing: var(--heading-h5-letter-spacing);
  line-height: var(--heading-h5-line-height);


}


@media (min-width: 992px) and (max-width: 1120px) {

  .text-wrapper-6{
        font-size: 16px;

  }

}



@media (min-width: 992px){

    #Live-TV-box{
     
    align-items: normal;
   
    }

   

}

</style>