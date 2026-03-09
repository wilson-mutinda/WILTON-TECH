<template>
    <div class="">
        <!-- header -->
         <HeaderPage />

         <!-- Footer -->
          <FooterPage />
    </div>
</template>

<script>
import FooterPage from '@/components/FooterPage.vue';
import HeaderPage from '@/components/HeaderPage.vue';

export default {
    components: {
        HeaderPage,
        // FooterPage
    }
}

</script>