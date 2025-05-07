<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <img src="@/assets/logo_footer.png" alt="Always Fit Logo" />
      </div>
      <div class="footer-info">
        <h3>ALWAYS FIT ®</h3>
        <p>Saúde Longevidade e Autoestima</p>
        <h3 class="contact">Contato:</h3>
        <p>0800 454 5103</p>
        <p>1799126-6117 (Whatsapp)</p>
        <h3 class="address">Endereço:</h3>
        <p>
          Rodovia Fernão Dias, 937<br />
          Complemento: BW Diase - <br />DocaLog G500 Modulo 5<br />
          CEP: 37646-202<br />
          Extrema - MG<br />
          30.417.094/0001.60
        </p>
      </div>
      <div class="footer-policy">
        <h3>POLÍTICA</h3>
        <ul>
          <li><a href="#">Quem Somos</a></li>
          <li><a href="#">Política de Segurança</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Política de Entrega</a></li>
          <li><a href="#">Política de Cookies</a></li>
          <li><a href="#">Política de Devolução</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Always Fit</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #1c1c28;
  color: #fff;
  padding: 20px;
  text-align: center;
  flex: 0 0 10%;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  text-align: left;
  height: calc(100% - 40px);
  width: 85%;
  margin: auto;
}

.footer-logo img {
  max-width: 100px;
}

.footer-info,
.footer-policy {
  max-width: 300px;
}

.footer-info h3,
.footer-policy h3 {
  font-size: 14px;
  font-weight: bold;
}

.footer-policy h3 {
  margin-bottom: 10px;
}

.footer-info .contact, 
.footer-info .address {
  margin-top: 25px;
}

.footer-info p,
.footer-policy ul {
  font-size: 14px;
  line-height: 1.6;

}

.footer-policy ul {
  list-style: none;
  padding: 0;
}

.footer-policy ul li {
  margin-bottom: 5px;
}

.footer-policy ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-policy ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  margin-top: 50px;
  font-size: 14px;
  border-top: 1px solid #333;
  padding-top: 10px;
}
</style>