<template>
  

  
  <div class="container">


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

 

</div>

</template>

<script setup>
</script>

<style scoped>



.container {
  display: flex;
  flex-direction: column;
 
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
  width: 100vw; 
  position: relative;
  left: 50%; 
  right: 50%; 
  margin-left: -50vw; 
  margin-right: -50vw; 
  background-color: #212529;
  


}





@media (min-width: 768px) {


  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
   
    grid-auto-rows: minmax(100px, auto); 
  }


  #Free-TV, #Recent-Videos, #Popular-Videos, #Faith-Foundations, #Sow-Seeds,  #Ways-to-Watch, #Give-Prayer-Partner, #Page-Footer {
    grid-column: 1 / -1;
  }

  


  #BVOV {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: 552px;
    margin-right: 24px ;
    margin-bottom: 19px;
    margin-top: 24px;

  }

  #Live-TV, #ITV-Video {
    grid-column: 2 / 3;


  }

  #Live-TV {
    grid-row: 1 / 2;
    height: 265px; 
    margin-bottom: 24px;
    margin-top: 24px;
    
  }

  #ITV-Video {
    grid-row: 2 / 3;
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

}


/* iPad Air, iPad Pro, and Surface Pro 7 */
@media only screen and (min-device-width: 820px) and (max-device-width: 1366px),
       only screen and (min-width: 912px) and (max-width: 1440px) {
    .container {
       padding-left: 1px;
       padding-right: 1px;
        max-width: 100%; 
        margin: 0 auto; 
    }
}





</style>
