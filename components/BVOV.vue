<template>
  <div id="bvov-container">
    <!-- Titles -->
    <div class="row d-flex flex-column align-items-start title" style="gap: 12px;">
      <div class="text-wrapper-1">BVOV This Week</div>
      <p class="p">{{ }}</p>
    </div>
    <!-- Titles -->

    <!-- main-content -->
    <div class="row gutters">

      <!-- Left Side: Main Video -->
      <div class="col-12 col-md-6 mb-3" v-if="todayVideo">
        <div class="main-video">
          <a href="https://www.kcm.org/watch/tv-broadcast">
            <img
              :src="todayVideo.video.video_preview"
              alt="Today's BVOV Video" 
              class="img-fluid main-video-img"
              height="263px"
            />
          </a>
          <div class="video-description mt-3">
            <p class="text-wrapper-2">Today: {{todayVideo.title}}</p>
            <p class="text-wrapper-3">{{todayVideo.summary }}</p>
          </div>
        </div>
      </div>
       <!-- Left Side: Main Video -->

      <!-- Right Side: Other BVOV Videos -->
      <div class="col-12 col-md-6">
        <div class="other-videos">
          <div class="row">
            <div
              class="col-6 col-md-12 mb-3"
              v-for="(video, index) in otherVideos"
              :key="index"
            >
              <div class="row">
                <div class="col-md-4">
                  <a href="https://www.kcm.org/watch/tv-broadcast">
                    <img
                      :src="video.video.video_preview"
                      :alt="video.title"
                      class="img-fluid"
                    />
                  </a>
                </div>
                <div class="col-md-8" id="other-videos-description">
                  <p class="mb-1 text-wrapper-4">{{ video.title }}</p>
                  <div class="text-wrapper-5" style="margin-top: 14px;">
                    {{ formatDate(video.air_date) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" id="button-wrapper">
            <Button buttonText="Download Show Notes" @click="downloadShowNotes" />
          </div>
        </div>
      </div>
      <!-- Right Side: Other BVOV Videos -->

    </div>
    <!-- main-content -->

  </div>
</template>

<script setup  lang = "ts">
import { ref, watchEffect } from 'vue';
import Button from './global/Button.vue';
import formatDate from '~/utils/formatDateUtils';
import type { BVOV_Results, BVOVItem, OtherVideos, TodayVideo } from '~/server/api/BVOV';


// Fetch the BVOV data from the API
const { data: BVOV_Data } = useFetch<BVOV_Results>("/api/BVOV");

// Function to parse date strings to Date objects in UTC
const parseDateUTC = (date: string) : Date => {
  return new Date(date);  // Date constructor handles UTC automatically if the string ends with "Z" or contains a timezone offset.
};


// Function to get today's video and other videos based on the user's local time zone
const getVideoSeries = (BVOVData:BVOV_Results) => {

  const currentDate = new Date(); 
  const currentDay = currentDate.getDay(); 

  let todayVideo : TodayVideo = null;
  let otherVideos : OtherVideos = [];

  BVOVData?.items?.forEach((video : BVOVItem) => {

    const videoDate = parseDateUTC(video.air_date);  
    const isFridayVideo = videoDate.getUTCDay() === 5; 

   
    if ((currentDay === 6 || currentDay === 0) && isFridayVideo) {
      todayVideo = { ...video };
    } else if (currentDay !== 6 && currentDay !== 0 && currentDate.toDateString() === videoDate.toDateString()) {
      todayVideo = { ...video };
    } else {
      otherVideos.push({ ...video });
    }
  });

  return {
    todayVideo,
    otherVideos,
  };
};


let todayVideo = ref<TodayVideo>(null);
const otherVideos = ref<OtherVideos>([]);

// Watch for changes in BVOV_Data and update todayVideo and otherVideos accordingly
watchEffect(() => {
  if (BVOV_Data.value) {
    const { todayVideo: tv, otherVideos: ov } = getVideoSeries(BVOV_Data.value);
    todayVideo.value = tv;
    otherVideos.value = ov;
  }
});

// Function to download show notes
function downloadShowNotes() {
  if (BVOV_Data.value?.downloadsNotesUrl) {
    window.location.href = BVOV_Data.value.downloadsNotesUrl;
  }
}


</script>


<style scoped>

.video-description{
  padding-left: 5px;
}

.title .text-wrapper-1 {
  color: #000000;
  font-family: var(--heading-h1-font-family);
  font-size: clamp(28px, 4vw + 12px, 40px);;
  font-style: var(--heading-h1-font-style);
  font-weight: var(--heading-h1-font-weight);
  letter-spacing: var(--heading-h1-letter-spacing);
  line-height: clamp(33px, 4vw + 17px, 48px);

}

.title .p {
  
  color: #000000;
  font-family: var(--heading-h2-font-family);
  font-size: clamp(20px, 3vw + 10px, 32px);
  line-height: clamp(24px, 3vw + 14px, 38.4px);
  font-style: var(--heading-h2-font-style);
  font-weight: var(--heading-h2-font-weight);
  letter-spacing: var(--heading-h2-letter-spacing);
 
       
}

.text-wrapper-2{
  color: #000000;
  font-family: var(--heading-h5-font-family);
  font-size: clamp(16px, 1.5vw + 12px, 20px);
  line-height: clamp(19.2px, 1.5vw + 14.4px, 24px);
  font-style: var(--heading-h5-font-style);
  font-weight: var(--heading-h5-font-weight);
  letter-spacing: var(--heading-h5-letter-spacing);
}


.text-wrapper-3{

  color: #000000;
  font-family: var(--body-small-font-family);
  font-size: var(--body-small-font-size);
  font-style: var(--body-small-font-style);
  font-weight: var(--body-small-font-weight);
  letter-spacing: var(--body-small-letter-spacing);
  line-height: 21px;
}


.text-wrapper-4{

  color: #000000;
  font-family: var(--heading-h6-font-family);
  font-size: var(--heading-h6-font-size);
  font-style: var(--heading-h6-font-style);
  font-weight: var(--heading-h6-font-weight);
  letter-spacing: var(--heading-h6-letter-spacing);
  line-height: var(--heading-h6-line-height);
  margin-bottom: 4px;

}

.text-wrapper-5{

  color: #000000;
  font-family: var(--body-small-font-family);
  font-size: var(--body-small-font-size);
  font-style: var(--body-small-font-style);
  font-weight: var(--body-small-font-weight);
  letter-spacing: var(--body-small-letter-spacing);
  line-height: var(--body-small-line-height);

}



#button-wrapper{

  margin-top: 20px;
  margin-left: 0px;
}



@media (max-width: 768px){

  #button-wrapper{ 
    width:65%;
    margin: 15px auto;
  }

  #other-videos-description{
    margin-top: 14px;
  }

 
}


@media (min-width:768px){

  #other-videos-description{
    margin-left: -5px; 
    margin-top: -3px;

  }

  #button-wrapper{

    max-width: fit-content;

}


}

</style>


