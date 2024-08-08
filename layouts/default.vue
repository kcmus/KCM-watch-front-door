
 <template>
  <div class="wrapper">


      <PageHeader/>
     
    <main class="container px-3">

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
  margin-top: 88px;
}


@media (min-width: 768px) and (max-width: 992px) {
  main {
    margin-top: 80px; 
  }
}


@media (min-width: 993px) {
 
  main {

    margin-top: 180px;
   

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


