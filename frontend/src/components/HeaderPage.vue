<template>
  <header class="w-full fixed top-0 left-0 z-50 bg-wilton-blue">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

      <!-- logo -->
      <div class="flex items-center h-full">
        <img 
          src="/Wilton Technologies navy blue-01.png" 
          alt="Wilton Technologies"
          class="h-24 object-contain"
        >
      </div>

      <!-- desktop menu -->
      <nav class="hidden md:flex gap-6 text-white font-medium">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>

      <!-- mobile menu -->
       <div class="md:hidden cursor-pointer">
        <button type="button" @click="toggleMenu">
          <img src="/hamburger.png" alt="hamburger" width="20">
        </button>
       </div>

    </div>

    <!-- mobile dropdown -->
     <div v-if="mobileMenu" class="md:hidden bg-wilton-blue px-6 pb-4">
      <nav class="flex flex-col gap-4 text-white font-medium">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
     </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false
    }
  },

  methods: {
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu
    }
  }
}
</script>
