
 <template>
  <div class="wrapper">


      <!-- <PageHeader/> -->

      <HeaderPageHeader/>
      <HeaderOffcanvasMobile/>
     
    <main>

      <NuxtPage/>
    </main>

    <div class="footer-wrapper">
      <PageFooter/>
      <!-- <FooterPageFooter/> -->

    </div>

   

  </div>
</template>

<script setup>


</script>

<style scoped>

/* .wrapper {
  max-width: 1280px;
  margin: 0 auto;
} */



.footer-wrapper {
  width: 100vw; 
  position: relative;
  left: 50%; 
  right: 50%; 
  margin-left: -50vw; 
  margin-right: -50vw; 
  background-color: #212529;
 
}

main {
  margin-top: 28px;
 
}


/* @media (min-width: 768px) and (max-width: 992px) {
  main {
    margin-top: 80px; 
  }
}


@media (min-width: 993px) {
 
  main {

    margin-top: 180px;
  
  }

} */


@media (min-width: 992px) and (max-width: 1440px) {
  main {

    margin-left: 82px;

    margin-right: 82px;
    
  }
}






/* iPad Air, iPad Pro, and Surface Pro 7 */
/* @media only screen and (min-device-width: 820px) and (max-device-width: 1366px),
       only screen and (min-width: 912px) and (max-width: 1440px) {
    .container {
       padding-left: 104px;
       padding-right: 104px;
      max-width: 100%; 
      margin: 0 auto; 
      margin-top: 100px;
    }

    
} */


</style>


