<!-- <template>
  <div class="container">


    <section id="Page-Header" class="component">
      <PageHeader />
    </section>
    
    <section id="BVOV" class="component large">
      <BVOV />
    </section>

    <section id="Live-TV" class="component small">
      <LiveTV />
    </section>

    <section id="ITV-Video" class="component small">
      <InsideTheVisionVideo />
    </section>

    <section id="Free-TV" class="component">
      <FreeTVOffer />
    </section>

    <section id="Recent-Videos" class="component">
      <RecentVideos />
    </section>

    <section id="Popular-Videos" class="component">
      <PopularVideos />
    </section>

    <section id="Faith-Foundations" class="component">
      <FaithFoundations />
    </section>

    <section id="Sow-Seeds" class="component">
      <SowSeedsOfChange />
    </section>

    <section id="Events-On-Demand" class="component">
      <EventsOnDemand />
    </section>

    <section id="Inside-the-Vision" class="component">
      <InsideTheVision />
    </section>

    <section id="Search-Programs" class="component">
      <SearchPrograms />
    </section>

    <section id="Ways-to-Watch" class="component">
      <WaysToWatch />
    </section>

    <section id="Give-Prayer-Partner" class="component">
      <CTA />
    </section>

    <section id="Page-Footer" class="component">
      <PageFooter />
    </section>
  </div>
</template>

<script setup>

</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.component {
  border: 2px solid #800080;
  min-height: 100px;
}

.large {
  min-height: 300px;
}

.small {
  min-height: 150px;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #BVOV, #Free-TV, #Recent-Videos, #Popular-Videos, #Faith-Foundations, #Sow-Seeds, #Events-On-Demand, #Inside-the-Vision, #Search-Programs, #Ways-to-Watch, #Give-Prayer-Partner, #Page-Footer {
    flex: 1 1 100%;
  }

  #Live-TV, #ITV-Video {
    flex: 1 1 50%;
  }
}

@media (min-width: 1024px) {
  #BVOV {
    flex: 2 1 60%;
  }

  #Live-TV, #ITV-Video {
    flex: 1 1 20%;
  }
}
</style> -->

<template>
  <div class="container">
    <section id="Page-Header" class="component">
      <PageHeader />
    </section>
    
    <section id="BVOV" class="component">
      <BVOV />
    </section>

    <section id="Live-TV" class="component">
      <LiveTV />
    </section>

    <section id="ITV-Video" class="component">
      <InsideTheVisionVideo />
    </section>

    <section id="Free-TV" class="component">
      <FreeTVOffer />
    </section>

    <section id="Recent-Videos" class="component">
      <RecentVideos />
    </section>

    <section id="Popular-Videos" class="component">
      <PopularVideos />
    </section>

    <section id="Faith-Foundations" class="component">
      <FaithFoundations />
    </section>

    <section id="Sow-Seeds" class="component">
      <SowSeedsOfChange />
    </section>

    <section id="Events-On-Demand" class="component">
      <EventsOnDemand />
    </section>

    <section id="Inside-the-Vision" class="component">
      <InsideTheVision />
    </section>

    <section id="Search-Programs" class="component">
      <SearchPrograms />
    </section>

    <section id="Ways-to-Watch" class="component">
      <WaysToWatch />
    </section>

    <section id="Give-Prayer-Partner" class="component">
      <CTA />
    </section>

    <section id="Page-Footer" class="component">
      <PageFooter />
    </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.component {
  border: 2px solid #800080;
  min-height: 100px;
}

@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 10px;
  }

  #Page-Header {
    grid-column: 1 / -1;
  }

  #BVOV {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }

  #Live-TV, #ITV-Video {
    grid-column: 2 / 3;
  }

  #Live-TV {
    grid-row: 2 / 3;
  }

  #ITV-Video {
    grid-row: 3 / 4;
  }

  #Free-TV, #Recent-Videos, #Popular-Videos, #Faith-Foundations, #Sow-Seeds, #Events-On-Demand, #Inside-the-Vision, #Search-Programs, #Ways-to-Watch, #Give-Prayer-Partner, #Page-Footer {
    grid-column: 1 / -1;
  }
}
</style>
