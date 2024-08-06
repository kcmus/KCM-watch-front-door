
 <template>
  <div class="wrapper">

    <!-- <div class="header-wrapper-outer sticky-top bg-white ">

      <div class="header-wrapper">
 
      </div>

    </div> -->
<!-- 
    <div id="header-wrapper"> -->
      <!-- <PageHeader /> -->
      <PageHeader2/>
     
    <!-- </div> -->
        

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
  margin-top: 24px;
}


@media (min-width: 768px) {
 
  main {
    margin-top: 60px;
   
  }

}
</style>


