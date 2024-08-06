
 <template>
  <div class="wrapper">

    <div class="header-wrapper-outer sticky-top bg-white ">

      <div class="header-wrapper">
        <PageHeader/>
      </div>

    </div>

  
    <main >
      <NuxtPage/>
    </main>

    <div class="footer-wrapper">
      <PageFooter/>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
}

.header-wrapper-outer{

  
}

.header-wrapper {
  width: 100vw; 
  position: relative;
  left: 50%; 
  right: 50%; 
  margin-left: -50vw; 
  margin-right: -50vw; 
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1); 
}

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
  margin-top: 24px;
}


@media (min-width: 768px) {
 
  main {
    margin-top: 60px;
    



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


