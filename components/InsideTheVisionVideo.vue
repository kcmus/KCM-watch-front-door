
<template>
    <div id="Inside-the-vision-video" class="d-flex flex-column">
        <a 
           class="mb-3"  
           @click="openITVHomePage"
           style="cursor: pointer;"
        >
            <img 
                :src="latestEpisodeImageUrl" 
                alt="Inside the vision" 
                class="img-fluid"     
            >
        </a>

        <h5 
           class="text-wrapper-7" 
           @click="openITVHomePage" 
           style="cursor: pointer;" 
        >
         Inside the Vision - {{ latestEpisodeTitle }}
        </h5>
    </div>
</template>


<script setup lang="ts">

// import type { ITV_Data } from '~/server/api/InsideTheVisionVideo';


// const {data: itv_current_week} = useFetch<ITV_Data>("/api/InsideTheVisionVideo");

// const title = computed(() => itv_current_week.value?.title);
// const image_url = computed(() => itv_current_week.value?.image_url);
// const episode_url = computed(()=> itv_current_week.value?.episode_url);


// function openITVPage() {
//   window.open(episode_url.value, '_blank');
// }

import type { ITVData} from '~/server/api/InsideTheVision';


//Fetch the ITV data from the API 
const{data: ITV_Data} = useFetch<ITVData>('/api/InsideTheVision');

//Compute the lastest episode title and image url 
const latestEpisodeTitle = computed(() => {
  const fullTitle = ITV_Data.value?.currentWeekEpisode.episodeTitle ?? '';
  const titleParts = fullTitle.split(' ');
  return titleParts.slice(2).join(' ');
});
 const latestEpisodeImageUrl = computed(() => ITV_Data.value?.currentWeekEpisode.imageUrl ?? '');
 const ITVHomepage = computed(() => ITV_Data.value?.url ?? '')


function openITVHomePage() {
  window.open(ITVHomepage.value, '_blank');
}

</script>


<style scoped>

#Inside-the-vision-video{
    align-items: center;
}
   
.text-wrapper-7{
    color: #000000;
    font-family: var(--heading-h5-font-family);
    font-size: var(--heading-h5-font-size);
    font-style: var(--heading-h5-font-style);
    font-weight: var(--heading-h5-font-weight);  
    letter-spacing: var(--heading-h5-letter-spacing);
    line-height: var(--heading-h5-line-height);   
} 


img {
  max-width: 100%;
  height: auto;
}
 
@media (min-width: 992px) and (max-width: 1120px) {
    .text-wrapper-7{
        font-size: 16px;
    }

    img{
        width: 580px;
    }
}

 @media (min-width: 992px){

    #Inside-the-vision-video{
     
       align-items: normal;
    
    }

}

</style>