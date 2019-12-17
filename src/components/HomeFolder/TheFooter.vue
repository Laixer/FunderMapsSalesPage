<template>
  <footer id="thefooter">
    <div class="footer-container">
      <!-- Footer || Contact -->
      <div class="footer-item">
        <hr />
        <h2 class="footer-title">Contact Us</h2>
        <div class="footer-info">
          <p>Straatnaam 52</p>
          <p>3241 RT</p>
          <p>Delft, The Netherlands</p>
          <br />

          <p>PHONE: 06 12345678</p>
          <p>E-MAIL: info@fundermaps.nl</p>
        </div>
      </div>
      <!-- Footer | MENU  -->
      <div class="footer-item">
        <hr />
        <h2 class="footer-title">MENU</h2>
        <div class="footer-info footer-info-menu">
          <a href="#main">Home</a>
          <a href="#infomenu">Information</a>
          <router-link to="/faq" class="link">FAQ</router-link>

          <a href="#contactinfo">Contact</a>
        </div>
      </div>
      <!-- Footer | Links -->
      <div class="footer-item">
        <hr />
        <h2 class="footer-title">Connect With Us</h2>
        <div class="footer-info footer-social">
          <div class="footer-social-item">
            <div class="footer-social-icon"></div>
            <a href="#" class="footer-link">Facebook</a>
          </div>
          <div class="footer-social-item">
            <div class="footer-social-icon"></div>
            <a href="#" class="footer-link">Instagram</a>
          </div>
          <div class="footer-social-item">
            <div class="footer-social-icon"></div>
            <a href="#" class="footer-link">Twitter</a>
          </div>
          <div class="footer-social-item">
            <div class="footer-social-icon"></div>
            <a href="#" class="footer-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright">
      <span>©2019 KCAF & Laixer</span>
      <span class="link">
        <a href="#">Privacy Policy</a>
      </span>
      <span class="link">
        <a href="#">Terms of Service</a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="scss" scoped>
footer {
  margin: auto;
  width: 80%;

  .footer-container {
    flex-wrap: wrap;
    display: flex;

    hr {
      width: 75px;
      margin-bottom: 0px;
      border: 2px solid #1a1d39;
    }

    .footer-item {
      flex: 1 0 33%;

      flex-wrap: wrap;
      margin: 100px 0px 100px 0px;

      @media (min-width: 901px) {
        flex: 1 0 50%;
        margin: 20px 0px 20px 0px;
      }
    }

    .footer-title {
      padding-top: 10px;
    }

    .footer-info {
      margin-top: 30px;
    }

    .footer-info-menu a {
      font-weight: 600;
      transition: 0.15s;
      color: #1a1d39;
      text-decoration: none;
      display: flex;
      flex-direction: column;

      &:hover {
        font-weight: 500;
        color: 1a1d39;
        cursor: pointer;
      }
    }
  }

  .footer-social {
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 901px) {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  .footer-social-item {
    flex: 1 0 40%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    margin: 5px;

    @media (min-width: 901px) {
      flex: 1 0 20%;
      justify-content: center;
      display: grid;
    }
  }

  .footer-social-icon {
    width: 50px;
    height: 50px;
    background-color: #17a4ea;
    border-radius: 100%;

    @media (min-width: 901px) {
      justify-self: center;
      display: grid;
    }
  }

  .footer-link {
    text-decoration: none;
    color: #17a4ea;
    font-weight: 600;
    margin-left: 10px;

    @media (min-width: 901px) {
      margin-left: 0;
      margin-top: 10px;
    }
  }
}

.copyright {
  display: flex;
  justify-content: left;
  margin-bottom: 25px;

  span {
    margin: 10px;
    font-size: 0.7em;
  }

  span.link {
    a {
      text-decoration: none;
      color: #17a4ea;
      font-weight: 800;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        color: #1a1d39;
      }
    }
  }
}
</style>