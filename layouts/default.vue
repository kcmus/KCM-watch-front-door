
 <template>
  <div class="wrapper">



    <HeaderPageHeader/>
    <HeaderOffcanvasMobile/>
     
    <main>
      <NuxtPage/>
    </main>

    <FooterPageFooter/>

   

  </div>
</template>

<script setup>



</script>

<style lang="scss">
// @import url("~/assets/scss/main.scss");
// @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");


@media (min-width: 768px) {

  main{

     margin-top: 28px;

  } 
  
}



</style>


