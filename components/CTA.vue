<template>

  <div class="container-fluid" id="cta-bannder">
    <div class="container my-5">
      <div class="row text-center">
        <!-- Give to KCM Card -->
        <div class="col-lg-4 mb-4">
          <div class="card text-white h-100">
            <div class="card-body">
              <h3 class="card-title mb-4">Give to KCM</h3>
              <p class="card-text mb-4">
                Every life changed is a Victory! Give a tax-deductible donation to help where it is needed most.
              </p>
              <a 
                href="https://giving.kcm.org/?fund_code=K100,KNET,KCX4&source_code=GW1WPFDCTB&elected_fund_code=K100" 
                class="btn btn-outline-light"
              >
                Give to KCM
              </a>
            </div>
          </div>
        </div>
  
        <!-- Request a Prayer Card -->
        <div class="col-lg-4 mb-4">
          <div class="card text-white h-100">
            <div class="card-body">
              <h3 class="card-title mb-4">Request a Prayer</h3>
              <p class="card-text mb-4">
                We are here for you! Complete a Prayer Request and it will be prayed on right away.
              </p>
              <a 
                href="https://www.kcm.org/prayer-request?source=GW1WPFDPF" 
                class="btn btn-outline-light btn-customize"
              >
                Request a Prayer
              </a>
            </div>
          </div>
        </div>
  
        <!-- Partner with KCM Card -->
        <div class="col-lg-4 mb-4">
          <div class="card text-white h-100">
            <div class="card-body">
              <h3 class="card-title mb-4">Partner with KCM</h3>
              <p class="card-text mb-4">
                We believe when you Partner, our outreaches become your outreaches.
              </p>
              <a 
                href="https://www.kcm.org/partner-form?source=GW1WPFDPN" 
                class="btn btn-outline-light btn-customize"
              >
                Partner Now
              </a>
            </div>
          </div>
        </div>
          
      </div>
    </div>
  </div>
 
</template>

<script setup lang="ts">



</script>

<style scoped>

.container-fluid {
  background-color: #343A40;
  padding: 20px 0; 
}

.card {
  border: none;
  background-color: #343A40;
}



.card-title{
  
  font-family: var(--heading-h3-font-family);

  color: white;
  font-size: 1.5rem;
  font-family: Helvetica;


}

.card-text{

  color: #FFFFFF99;


}

.btn-outline-light{

  padding: 8px 14px;

  font-family: var(--heading-h3-font-family);
  font-size: var(--heading-h5-font-size);
  line-height: var(--heading-h5-line-height);
  font-style: var(--heading-h5-font-style);
  font-weight: var(--heading-h5-font-weight);
  letter-spacing: var(--heading-h5-letter-spacing);
  border-color: #FFFFFF99; 

}

@media screen and (min-width: 1200px) and (max-width: 1400px) {

  .btn-customize{

    margin-top: 25px;
  }
}




</style>
