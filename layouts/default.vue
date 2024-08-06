
 <template>
  <div class="wrapper">

      <PageHeader2/>
     
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


</style>


