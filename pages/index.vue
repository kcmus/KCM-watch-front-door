<template>

  <div class="container">
    <section id="BVOV">
      <!-- <BVOV /> -->
      <BVOVWithStatic />

      <!-- <BVOVDrupal/> -->
    </section>

    <section id="Live-TV">
      <!-- <LiveTV /> -->
       <LiveTVDrupal/>
    </section>

    <section id="ITV-Video">
      <InsideTheVisionVideo />
    </section>

    <section id="Free-TV">
      <WFDBanner
        background-color="primary"
        buttonText="Order Today"
        box-title="Free TV Offer"
        title-alignment="end"
        :banner="TVOffer"
        :tokens="['align-self-end']"
      >
        <template #sectionStart>
          <picture>
            <source
              media="(max-width: 799px)"
              :srcset="TVOffer.image.small.src"
            />
            <source
              media="(min-width: 800px)"
              :srcset="TVOffer.image.large.src"
            />
            <img :src="TVOffer.image.large.src" :alt="TVOffer.image.alt" />
          </picture>
        </template>
      </WFDBanner>
    </section>

    <section id="Recent-Videos">
      <RecentVideos />
    </section>

    <section id="Popular-Videos">
      <PopularVideos />
    </section>

    <section id="Faith-Foundations">
      <FaithFoundations />
    </section>

    <section id="Sow-Seeds">
      <WFDBanner
        background-color="secondary"
        buttonText="Sow a Gift Today"
        :banner="SeedsOfChange"
        :tokens="['align-self-center']"
      >
        <template #sectionBody="SeedsOfChange">
          <h3 class="title">{{ SeedsOfChange.title }}</h3>
          <p>{{ SeedsOfChange.body }}</p>
        </template>
      </WFDBanner>
    </section>

    <section id="Events-On-Demand">

      <KCMEventsBox
        title = "Events OnDemand"
        :events1 = "events1"
        :events2 = "events2"
        :events3 = "events3" 
        buttonText = "All OnDemand Videos"     
      
      />
    </section>

  </div>

  <InsideTheVision id="Inside-the-Vision" />

  <div class="container">
    <section id="Search-Programs">
      <SearchPrograms />
    </section>
    <section id="Ways-to-Watch">
      <WaysToWatch />
    </section>
  </div>

  <CTA id="CTA"/>  
   
</template>

<script setup lang="ts">
const { data: TVOffer } = useTVOffer();
const { data: SeedsOfChange } = useSeedsOfChange();

const {data:EventsOnDemand} = useEventsOnDemand();

const eventsCategories = computed(() => EventsOnDemand.value?.categories ?? []);

const url = computed(() => EventsOnDemand.value?.url ?? '');

const events1 = computed(() => eventsCategories.value[0]);
const events2 = computed(() => eventsCategories.value[1]);
const events3 = computed(() => eventsCategories.value[2]);





</script>


<style scoped>

.container {
  display: flex;
  flex-direction: column;
}

#BVOV {
  margin-top: 24px;
}

#Live-TV {
  margin-bottom: 36px;
  margin-top: 24px;
}

#ITV-Video {
  margin-bottom: 36px;
}

#Free-TV {
  margin-bottom: 36px;
}

#Recent-Videos {
  height: 291px;
  margin-bottom: 36px;
}

#Popular-Videos {
  height: 291px;
  margin-bottom: 60px;
}

#Faith-Foundations {
  height: 305px;
  margin-bottom: 36px;
}

#Sow-Seeds {
  height: 304px;
  margin-bottom: 60px;
}

#Events-On-Demand {
  margin-bottom: 36px;
}

#Search-Programs {
  height: 98px;
  margin-bottom: 36px;
}

#Inside-the-Vision{
  margin-bottom: 36px;
}

#Ways-to-Watch {
  height: 1104px;
  margin-bottom: 61.34px;
}

#Give-Prayer-Partner {
  height: 903px;
  margin-bottom: 0px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #212529;
}

@media (min-width: 992px) {
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-auto-rows: minmax(100px, auto);
  }

  #Free-TV,
  #Recent-Videos,
  #Popular-Videos,
  #Faith-Foundations,
  #Sow-Seeds,
  #Ways-to-Watch,
  #Give-Prayer-Partner,
  #Page-Footer {
    grid-column: 1 / -1;
  }

  #BVOV {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    margin-right: 24px;
    margin-bottom: 19px;
  }

  #Live-TV,
  #ITV-Video {
    grid-column: 2 / 3;
  }

  #Live-TV {
    grid-row: 1 / 2;
    height: 265px;
    margin-bottom: 24px;
  }

  #ITV-Video {
    grid-row: 2 / 3;

    margin-bottom: 48px;
  }

  #Give-Prayer-Partner {
    height: 325px;
    margin-bottom: 120px;
  }
}

@media (min-width: 768px) {
  #Free-TV {
    margin-bottom: 60px;
  }

  #Recent-Videos {
    height: 272px;
    margin-bottom: 24px;
  }

  #Popular-Videos {
    height: 272px;
    margin-bottom: 24px;
  }

  #Faith-Foundations {
    height: 282px;
    margin-bottom: 60px;
  }

  #Sow-Seeds {
    height: 166px;
    margin-bottom: 84px;
  }

  #Events-On-Demand {
    grid-column: 1 / -1;
    padding-top: 24px;

    margin-bottom: 84px;
  }

  #Search-Programs {
    grid-column: 1 / -1;

    height: 98px;
    margin-bottom: 60px;
  }

  #Ways-to-Watch {
    grid-column: 1 / -1;
    height: 908px;
    margin-bottom: 60px;
  }

  #Give-Prayer-Partner {
    height: 325px;
    margin-bottom: 0px;
  }
}
</style>
