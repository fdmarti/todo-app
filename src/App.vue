<template>
    <div class="h-screen bg-yellow-200">
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
}
</script>