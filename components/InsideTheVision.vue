<template>
    <div class="inside-the-vision container-fluid">
      <div class="container py-5">
        

        <div class="row">
          <div class="col-12">
            <h3 class="text-white mb-4" id="text-wrapper-1">Inside the Vision</h3>
          </div>
        </div>
        
        <div class="row">
          <!-- latest-episode -->
          <div class="col-lg-4 mb-4">
            <div class="latest-episode">

              <a 
                class="mb-3 d-lg-none w-100"
                @click="openITVCurrentWeek"
              >

                <img 
                  :src="latestEpisodeImageUrl"
                  alt="Latest Episode" 
                  class="img-fluid "
              >
              </a>


              <a
                class="mb-3 d-none d-lg-block"
                @click="openITVCurrentWeek"
              
              >
                <img 
                  :src="latestEpisodeImageUrl" 
                  alt="Latest Episode" 
                  class="img-fluid"
              >
              </a>
         
              
              <h5 
                 class="text-white text-lg-start" 
                 id="text-wrapper-2"
                 @click="openITVCurrentWeek"
                 
              >
                Latest Episode<br>
                {{ latestEpisodeTitle }}
              </h5>

            </div>

          </div>
          <!-- latest-episode -->

          <div class="col-lg-8 mb-4">
            <!-- season-selector -->
            <div class="season-selector mb-2 mt-n2">
              <span
                    v-for = "season in reversedSeasons"
                    :key = "season.seasonNumber" 
                    class="season-tab"
                    :class="{ 'active': currentSeason === season.seasonNumber }"
                    @click="currentSeason = season.seasonNumber"
              >
                Season {{ season.seasonNumber }}
              </span>
          
            </div>
            <!-- season-selector -->
  
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="episode-list">
                  <ul class="list-unstyled text-white">
                    <li 
                       v-for="episode in firstHalfEpisodes" 
                       :key="episode.id" 
                       class="mb-4" 
                       id="episode-title"
                       @click="navigateToEpisode(episode.link)"
                    >
                      EP {{ episode.episodeNumber }} &nbsp;&nbsp; {{episode.title }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="episode-list second-half">
                  <ul class="list-unstyled text-white mt-lg-0 mt-3">
                    <li 
                       v-for="episode in secondHalfEpisodes" 
                       :key="episode.id" 
                       class="mb-4" 
                       id="episode-title"
                      @click="navigateToEpisode(episode.link)"
                    > 
                      EP {{ episode.episodeNumber }} &nbsp;&nbsp; {{ episode.title }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-12 text-center text-lg-start">
            <button class="btn btn-outline-light" @click="openITVHomePage"  >Visit Inside the Vision</button>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';

  import type { ITVData} from '~/server/api/InsideTheVision';


  //Fetch the ITV data from the API 
  const{data: ITV_Data} = useFetch<ITVData>('/api/InsideTheVision');
  

  //Compute the lastest episode title, image url and current week episode
  const latestEpisodeTitle = computed(() => ITV_Data.value?.currentWeekEpisode.episodeTitle ?? '');
  const latestEpisodeImageUrl = computed(() => ITV_Data.value?.currentWeekEpisode.imageUrl ?? '');
  const currentWeekEpisode = computed(() => ITV_Data.value?.currentWeekEpisode.link ?? '')
   

  //Compute the ITV homapge 
  const ITVHomepage = computed(() => ITV_Data.value?.url ?? '')


  //Compute the available seasons and default the current season
  const seasons  = computed(() => ITV_Data.value?.seasons ?? []);

  // Reverse the seasons array
  const reversedSeasons = computed(() => [...seasons.value].reverse());

  const currentSeason = ref<number | string | null>(null);

  onMounted(() => {
    if (seasons.value.length > 0 && currentSeason.value === null) {
      currentSeason.value = seasons.value[seasons.value.length - 1].seasonNumber; 
    }
  });


  // Compute the episodes for the selected season
  const currentSeasonData = computed(() => seasons.value.find(season => season.seasonNumber === currentSeason.value)?.episodes ?? []);
  const firstHalfEpisodes = computed(() => currentSeasonData.value.slice(0, Math.ceil(currentSeasonData.value.length / 2)));
  const secondHalfEpisodes = computed(() => currentSeasonData.value.slice(Math.ceil(currentSeasonData.value.length / 2)));

  
  // Define the method to navigate to an episode link
  const navigateToEpisode = (link: string) => {
      window.open(link, '_blank');
  };


  function openITVCurrentWeek() {
      window.open(currentWeekEpisode.value, '_blank');
  }


  function openITVHomePage() {
    window.open(ITVHomepage.value, '_blank');
  }


  </script>
  
  <style scoped>
  
  .inside-the-vision {
    background-image: url('/images/ITV-brand.png');
    background-size: cover;
    background-position: 98% 2%;
    position: relative;
  }
  
  .inside-the-vision::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 15, 77, 0.8);
  }
  
  .inside-the-vision > * {
    position: relative;
    z-index: 1;
  }

  #text-wrapper-1{

    font-family: var(--heading-h3-font-family);

  }


  #text-wrapper-2{

    font-family: var(--heading-h5-font-family);
    cursor: pointer;

 }
  
  .latest-episode img {
    /* object-fit: cover;
    width: 100%; */
    cursor: pointer;
  }
  
  .season-selector {
    gap: 1rem;
    margin-left: -15px;
  }
  
  .season-tab {
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: #ffffff99;
    font-family: var(--body-bold-font-family);


  }
  
  .season-tab.active {
    color: white;
  }
  
  .episode-list {
    position: relative;
    padding-top: 20px;
  }
  
  .episode-list::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.7);
  }

  #episode-title{

    font-family: var(--body-regular-font-family);
    cursor: pointer;
 
  }

 

  .btn-outline-light {
    border-radius: 4.8px;
    padding: 10px 20px;
    font-size: 1.25rem;
  }


  
  @media (max-width: 991px) {

    .inside-the-vision {
      background-image: none;
      background: linear-gradient(180deg, rgba(0, 15, 77, 0.4624) 0%, rgba(0, 15, 77, 0.68) 44.02%);
    }
  
    .inside-the-vision::before {
      display: none;
    }
  
    .episode-list.second-half::before {
      display: none;
    }
  
    .episode-list.second-half {
      margin-top: -40px;
    }

    #text-wrapper-2{

      margin-top: 10px;


    }
  
   
  }
  </style>