<template>
  <div class="wrapper">

  
  <div class="container">
    <section id="Page-Header">
      <PageHeader />
    </section>

    <section id="BVOV" >
      <BVOV />
    </section>

    <section id="Live-TV">
      <LiveTV />
    </section>

    <section id="ITV-Video" >
      <InsideTheVisionVideo />
    </section>

    <section id="Free-TV" >
      <FreeTVOffer />
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
      <SowSeedsOfChange />
    </section>

    <section id="Events-On-Demand">
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
    </section>

    <section id="Page-Footer">
      <PageFooter />
    </section>
  </div>

</div>

</template>

<script setup>
</script>

<style scoped>

/* .wrapper{
  max-width: 390px;
  margin: 0 auto;
 
} */

.container {
  display: flex;
  flex-direction: column;
  /* gap: 40px; */
}




#Page-Header{
  height: 92px;
  margin-bottom: 24px;
}


#BVOV{

  height: 1027px;
  margin-bottom: 36px;


}

#Live-TV{

  height: 232px;
  margin-bottom: 36px;
  
}

#ITV-Video{
  height: 259px;
  margin-bottom: 36px;

}

#Free-TV{

  height: 324px;
  margin-bottom: 36px;
}


#Recent-Videos{

  height: 291px;
  margin-bottom: 36px;
}

#Popular-Videos{
  height: 291px;
  margin-bottom: 60px;
}


#Faith-Foundations{
  height: 305px;
  margin-bottom: 36px;
}


#Sow-Seeds{
  height: 304px;
  margin-bottom: 60px;
}

#Events-On-Demand{


  height: 1575px;
  margin-bottom: 36px;
  
}



#Inside-the-Vision{
 
  height: 975px;
  margin-bottom: 36px;
}

#Search-Programs{

  height: 98px;
  margin-bottom: 36px;

}

#Ways-to-Watch{
  height: 1104px;
  margin-bottom: 61.34px;
}

#Give-Prayer-Partner{

  height: 903px;
  margin-bottom: -150px;


}






#Page-Footer{
  height: 1287px;
}




/* 3 rows * 100px + 2 gaps */
/* #Events-On-Demand {
  height: calc(5 * 100px + 20px); 
}

#Inside-the-Vision {
  height: calc(4 * 100px + 10px); 
}

#Ways-to-Watch {
  height: calc(7 * 100px + 30px);
}

#Page-Footer {
  height: calc(2 * 100px + 10px); 
} */

/* #BVOV {
  height: calc(4 * 100px + 10px); 
} */



@media (min-width: 768px) {

  .wrapper{
    max-width: 1280px;
    margin: 0 auto;
    
  }

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* gap: 40px; */
    grid-auto-rows: minmax(100px, auto); /* Ensure rows can expand as needed */
  }


  #Free-TV, #Recent-Videos, #Popular-Videos, #Faith-Foundations, #Sow-Seeds,  #Ways-to-Watch, #Give-Prayer-Partner, #Page-Footer {
    grid-column: 1 / -1;
  }

  
  #Page-Header{

    height: 163px;
    margin-bottom: 60px;
    grid-column: 1 / -1;
  
  }


  #BVOV {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    height: 552px;
    margin-right: 24px ;
    margin-bottom: 19px;

  }

  #Live-TV, #ITV-Video {
    grid-column: 2 / 3;

  }

  #Live-TV {
    grid-row: 2 / 3;
    height: 265px; 
    margin-bottom: 24px;
    
  }

  #ITV-Video {
    grid-row: 3 / 4;
    height: 263px;
    margin-bottom: 19px;
  }



  #Free-TV{
    height: 187px;
    margin-bottom: 60px;
  }

  #Recent-Videos{

    height: 272px;
    margin-bottom: 84px;
  }

  #Popular-Videos{
    height: 272px;
    margin-bottom: 84px;
   
  }


  #Faith-Foundations{
    height: 282px;
    margin-bottom: 60px;
  }

  #Sow-Seeds{

    height: 166px;
    margin-bottom: 84px;
  }


#Events-On-Demand{

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

  #Give-Prayer-Partner{

    height: 325px;
    margin-bottom: -120px;
   

  }

  #Page-Footer {
    grid-column: 1 / -1;
    height: 653px;
   
  }

}
</style>
