<template>
  <div id="bvov-container">
    <!-- Titles -->
    <div class="row d-flex flex-column align-items-start title" style="gap: 12px;">
      <div class="text-wrapper-1">BVOV This Week</div>
      <p class="p">{{ BVOV_Series.value?.content.title }}</p>
    </div>

    <!-- main-content -->
    <div class="row gutters">
      <!-- Left Side: Main Video -->
      <div class="col-12 col-md-6 mb-3">
        <div class="main-video" v-if="todayVideo">
          <a href="https://www.kcm.org/watch/tv-broadcast">
            <img
              src="/images/BVOV-today.png"
              alt="Today's BVOV Video"
              class="img-fluid main-video-img"
              height="263px"
            />
          </a>
          <div class="video-description mt-3">
            <p class="text-wrapper-2">Today: {{ todayVideo.title }}</p>
            <p class="text-wrapper-3">{{ todayVideo.summary }}</p>
          </div>
        </div>
      </div>

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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Button from './global/Button.vue';
import formatDate from '~/utils/formatDateUtils';

// Fetch the BVOV series data from the API
const { data: BVOV_Series } = useFetch("/api/BVOV2");

// Function to parse date strings to Date objects in UTC
const parseDateUTC = (date: string): Date => {
  return new Date(date);  // Date constructor handles UTC automatically if the string ends with "Z" or contains a timezone offset.
};

// Function to get today's video and other videos based on the user's local time zone
const getVideoSeries = (BVOVData: BVOV_Series["bvov_current_week"]["content"]) => {
  const currentDate = new Date();  // the user's local time zone
  const currentDay = currentDate.getDay();

  let todayVideo: TodayVideo = null;
  const otherVideos: OtherVideos = [];

  BVOVData?.items?.forEach((video) => {
    const videoDate = parseDateUTC(video.air_date);  // Parse the UTC date
    const isFridayVideo = videoDate.getUTCDay() === 5;  // Compare in UTC

    // Adjust for user's local time zone
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

const todayVideo = ref<TodayVideo | null>(null);
const otherVideos = ref<OtherVideos>([]);

watchEffect(() => {
  if (BVOV_Series.value?.content?.items) {
    const { todayVideo: tv, otherVideos: ov } = getVideoSeries(BVOV_Series.value.content);
    todayVideo.value = tv;
    otherVideos.value = ov;
  }
});

function downloadShowNotes() {
  window.location.href = BVOV_Series.value?.content?.downloads[0].url; 
}
</script>



  <!-- <script setup>
import Button from './global/Button.vue';
import formatDate from '~/utils/formatDateUtils';


const {data: BVOV_Series} =  useFetch("/api/BVOV");


const todayVideo = computed(() => BVOV_Series.value?.todayVideo);
const otherVideos = computed(() => BVOV_Series.value?.otherVideos);
const downloadsUrl = computed(() => BVOV_Series.value?.downloadsNotesUrl);




function downloadShowNotes() {
  window.location.href = downloadsUrl.value; 
}

</script>
 -->



<style scoped>

.video-description{
  padding-left: 5px;
}



.title .text-wrapper-1 {
  color: #000000;
  font-family: var(--heading-h1-font-family);
  /* font-size: var(--heading-h1-font-size); */
  font-size: clamp(28px, 4vw + 12px, 40px);;
  font-style: var(--heading-h1-font-style);
  font-weight: var(--heading-h1-font-weight);
  letter-spacing: var(--heading-h1-letter-spacing);
  /* line-height: var(--heading-h1-line-height); */
  line-height: clamp(33px, 4vw + 17px, 48px);



}

.title .p {
  color: #000000;
  font-family: var(--heading-h2-font-family);
  /* font-size: var(--heading-h2-font-size); */
  /* line-height: var(--heading-h2-line-height); */
  font-size: clamp(20px, 3vw + 10px, 32px);
  line-height: clamp(24px, 3vw + 14px, 38.4px);

  font-style: var(--heading-h2-font-style);
  font-weight: var(--heading-h2-font-weight);
  letter-spacing: var(--heading-h2-letter-spacing);
 
       
}

.text-wrapper-2{
  color: #000000;
  font-family: var(--heading-h5-font-family);
  /* font-size: var(--heading-h5-font-size);
  line-height: var(--heading-h5-line-height); */

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
  line-height: var(--body-small-line-height);


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


