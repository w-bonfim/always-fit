<template>
  <header class="header">
    <div class="header-container">
      <div class="header-contact">
        <p>
          Havendo qualquer dúvida, entre em contato com nosso SAC: 
          <strong>(17) 9 9126-6117</strong>
        </p>
      </div>
      <div class="header-whatsapp">
        <a href="https://api.whatsapp.com/send?phone=5517991266117" target="_blank" class="whatsapp-link">
          <i class="fab fa-whatsapp whatsapp-icon"></i>
          SAC pelo WhatsApp
        </a>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #1c1c28;
  color: #fff;
  max-height: 50px;
  height: 100%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 85%;
  margin: auto;
}

.header-contact p {
  font-size: 14px;
  margin: 0;
  padding: 10px 0;
}

.header-contact strong {
  font-weight: bold;
  color: #fff;
}

.header-whatsapp .whatsapp-link {
  display: flex;
  align-items: center;
  background-color: #00BF63;
  color: #fff;
  padding: 10px 40px;
  text-decoration: none;
  font-size: 14px;
  height: 100%;
}

.header-whatsapp .whatsapp-link:hover {
  background-color: #1ebe57;
}

.header-whatsapp .whatsapp-icon {
  font-size: 18px;
  margin-right: 5px;
}
</style>