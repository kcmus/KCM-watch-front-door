<template>
  <div class="container">
    <section id="BVOV">
      <!-- <BVOV /> -->
      <BVOVWithStatic />
    </section>

    <section id="Live-TV">
      <LiveTV />
    </section>

    <section id="ITV-Video">
      <InsideTheVisionVideo />
    </section>

    <section id="Free-TV">
      <FreeTVOffer />
      <Box
        box-title="Free TV Offer"
        button-text="Order Today"
        :start="true"
        :end="true"
        :sections="{
          title: TVOffer?.subtitle,
          body: TVOffer.body,
          link: TVOffer.link,
        }"
      >
        <template v-slot:start>
          <picture>
            <source
              media="(max-width: 799px)"
              :srcset="TVOffer.image.small.src"
            />
            <source
              media="(min-width: 800px)"
              :srcset="TVOffer.image?.large.src"
            />
            <img :src="TVOffer.image?.large.src" :alt="TVOffer.image.alt" />
          </picture>
        </template>
        <template v-slot:end>
          <a class="button" :href="TVOffer.link">Order Today</a>
        </template>
      </Box>
      <pre class="kcm-debug">{{ TVOffer }}</pre>
    </section>

    <!-- <section id="Recent-Videos">
      <RecentVideos />
    </section>

      <section id="Popular-Videos">
        <PopularVideos />
      </section>

      <section id="Faith-Foundations">
        <FaithFoundations />
      </section>-->

    <section id="Sow-Seeds">
      <SowSeedsOfChange />
      <pre class="kcm-debug">{{ SeedsOfChange }}</pre>
    </section>

    <!-- <section id="Events-On-Demand">
        <EventsOnDemand />
      </section>

      <section id="Inside-the-Vision">
        <InsideTheVision />
      </section>

      <section id="Search-Programs">
        <SearchPrograms />
      </section>

      <section id="Ways-to-Watch">
        <WaysToWatch />
      </section>

      <section id="Give-Prayer-Partner">
        <CTA />
      </section> -->
  </div>
</template>

<script setup lang="ts">
const { data: TVOffer } = useTVOffer();
const { data: SeedsOfChange } = useSeedsOfChange();
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
  height: 1575px;
  margin-bottom: 36px;
}

#Inside-the-Vision {
  height: 975px;
  margin-bottom: 36px;
}

#Search-Programs {
  height: 98px;
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
    height: 263px;
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

    height: 718px;
    margin-bottom: 84px;
  }

  #Inside-the-Vision {
    grid-column: 1 / -1;
    height: 563px;
    margin-bottom: 60px;
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
import type SeedsOfChange from '~/server/api/SeedsOfChange';
