<template>
    <div id="bvov-container">


      <!-- Titles -->
      <div class="row d-flex flex-column align-items-start title" style="gap: 12px;">
        <div class="text-wrapper-1">BVOV This Week</div>
        <p class="p">The Manifestations of the Holy Spirit and Prayer</p>
      </div>

      <!-- main-content -->
      <div class="row gutters">

        <!-- Left Side: Main Video -->
        <div class="col-12 col-md-6 mb-3">
          <div class="main-video">

            <a href="https://www.kcm.org/watch/tv-broadcast">
              <img
                :src="todayBVOV.image"
                alt="Today's BVOV Video"      
                class="img-fluid main-video-img " 
                height="263px"
              />
            </a>
         
            <div class="video-description mt-3">
              <p class="text-wrapper-2">Today: Prayer That Receives Answers from God</p>
              <p class="text-wrapper-3">
                You may have faith and hope, but do you have Love? Watch Believer's Voice of Victory as Kenneth Copeland reveals how Love is the requirement for manifestations of the Holy Spirit. Learn how to abide in Love, so God can use His power on your behalf through the Holy Spirit!
              </p> 
            </div>
            
          </div>
        </div>
  
        <!-- Right Side: Other BVOV Videos -->
        <div class="col-12 col-md-6" >

          <div class="other-videos ">

            <div class="row">              
              <div class="col-6 col-md-12 mb-3" v-for="(video, index) in  otherBVOVs " :key="index">
                <div class="row">
                    <div class="col-md-4">

                        <a href="https://www.kcm.org/watch/tv-broadcast">
                            <img
                                :src="video.image"
                                :alt="video.title"
                                class="img-fluid"
                            />
                        </a>
                    </div>

                    <div class="col-md-8" id="other-videos-description">                            
                        <p class="mb-1 text-wrapper-4">{{ video.title }}</p>
                        <div class="text-wrapper-5" style="margin-top: 14px;">{{ video.date }}</div>
                    </div>
                </div>              
              </div>
            </div>

            <div class="row" id="button-wrapper">
                <Button buttonText="Download Show Notes" @click="downloadShowNotes"/>
               
            </div>

          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import Button from './global/Button.vue';



const todayBVOV = {
  image: '/images/BVOV-today.png',
  title: 'Today: Prayer That Receives Answers from God',
  description: `You may have faith and hope, but do you have Love?
                Watch Believer’s Voice of Victory as Kenneth Copeland reveals how Love
                is the requirement for manifestations of the Holy Spirit. Learn how to abide in Love, so God
                can use His power on your behalf through the Holy Spirit.`,
  link: 'https://www.kcm.org/watch/tv-broadcast',
};


const otherBVOVs = [
  {
    image: '/images/BVOV-1.png',
    title: 'How to Access the Power of God Through Prayer',
    date: 'Monday March 18, 2024',
    link: 'https://www.kcm.org/watch/tv-broadcast',
  },
  {
    image: '/images/BVOV-1.png',
    title: 'How to Access the Power of God Through Prayer',
    date: 'Monday March 18, 2024',
    link: 'https://www.kcm.org/watch/tv-broadcast',
  },
  {
    image: '/images/BVOV-1.png',
    title: 'How to Access the Power of God Through Prayer',
    date: 'Monday March 18, 2024',
    link: 'https://www.kcm.org/watch/tv-broadcast',
  },
  {
    image: '/images/BVOV-1.png',
    title: 'How to Access the Power of God Through Prayer',
    date: 'Monday March 18, 2024',
    link: 'https://www.kcm.org/watch/tv-broadcast',
  }
];

function downloadShowNotes() {
  window.location.href = 'path-to-download-notes'; 
}

// function openBVOVVideo(link) {
//   window.open(link, '_blank');
// }

</script>


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


