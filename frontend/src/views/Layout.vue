<template>
  <div class="layout">
    <header class="header">
      <Topbar />
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Topbar from '../components/Topbar.vue';
import Footer from '../components/Footer.vue';

export default {
  props: {
  },
  components: {
    Topbar,
    Footer,
  },
};
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  background-color: #f5f5f5;
  padding: 20px;
  flex: 1;
}
</style>
