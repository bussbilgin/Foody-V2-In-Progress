<template>
  <footer class="footer">
    <div class="container">
      <div class="container-top">
        <div class="container__links">
          <div class="footer__title">
            <h5>LINKS</h5>
          </div>
          <div class="footer__items">
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
        </div>
        <div class="container__company">
          <div class="footer__title">
            <h5>COMPANY</h5>
          </div>
          <div class="footer__items">
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">User Agreement</a></li>
            </ul>
          </div>
        </div>
        <div class="container__community">
          <div class="footer__title">
            <h5>COMMUNITY</h5>
          </div>
          <div class="footer__items">
            <ul>
              <li><a href="#">Purpose</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Search</a></li>
            </ul>
          </div>
        </div>
        <div class="container__address">
          <div class="footer__title">
            <h5>ADDRESS</h5>
            <a
              href="https://www.google.com/maps/place/%C3%9Csk%C3%BCdar%2F%C4%B0stanbul/@41.0353568,28.9776898,12z/data=!4m5!3m4!1s0x14cac826d524c9f1:0xc14f7612337b7f38!8m2!3d41.0189417!4d29.0576298"
              target="_blank"
              >Istanbul, TURKEY</a
            >
          </div>
        </div>
        <div class="container__contact">
          <div class="footer__title">
            <h5>CONTACT</h5>
          </div>
          <div class="contact-text">
            Phone :
            <a href="tel:+90 (216) 000 00 00">+90 (216) 000 00 00</a>
          </div>
          <div class="contact-text">
            Mail :
            <a href="mailto:info@foody.com">info@foody.com</a>
          </div>
        </div>
      </div>

      <div class="container-bottom">
        <div class="copyright">
          COPYRIGHT &copy; 2021
        </div>
        <div class="social-content">
          <span>FOLLOW US</span>
          <a
            class="social linkedin"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <img src="/icon-linkedin.png" alt="Linkedin Icon" />
          </a>
          <a
            class="social facebook"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <img src="/icon-facebook.png" alt="Facbook Icon" />
          </a>
          <a class="social twitter" href="https://twitter.com/" target="_blank">
            <img src="/icon-twitter.png" alt="Twitter Icon" />
          </a>
          <a
            class="social instagram"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <img src="/icon-instagram.png" alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
.footer {
  height: 350px;
  position: relative;
  background-color: #212121;
  display: flex;
  align-items: flex-end;
  // background-color: #191919;

  @media (max-width: 767px) {
    height: 420px;
  }

  &__title {
    h5 {
      font-size: 14px;
      margin-bottom: 15px;
      color: #e7e7e7;

      @media (max-width: 767px) {
        font-size: 13px;
        margin-bottom: 2px;
      }
    }

    a {
      font-size: 13px;
      color: #e7e7e7;
    }
  }

  &__items {
    li {
      font-size: 13px;
      margin-bottom: 15px;

      @media (max-width: 767px) {
        margin-right: 15px;
        margin-bottom: -10px;
      }
    }

    a {
      color: #e7e7e7;
    }
  }

  &__items ul {
    @media (max-width: 767px) {
      display: flex;
    }
  }

  .container {
    width: 100%;
    max-width: 1300px;

    &-top {
      height: 180px;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;

      @media (max-width: 767px) {
        height: 300px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
      }
    }

    &__links,
    &__company,
    &__community,
    &__address,
    &__contact {
      height: 150px;
    }

    .contact-text {
      font-size: 13px;
      color: #e7e7e7;

      a {
        font-size: 12px;
        color: #e7e7e7;
      }
    }

    &-bottom {
      width: 100%;
      height: 50px;
      border-radius: 5px 5px 0px 0px;
      background-color: #272727;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 767px) {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .copyright {
        margin-left: 10px;
        font-size: 13px;
        color: #e7e7e7;

        @media (max-width: 767px) {
          margin-left: -10px;
          margin-bottom: 15px;
        }
      }

      .social-content {
        margin-right: 10px;
        display: flex;
        align-items: center;

        span {
          font-size: 13px;
          margin-right: 10px;
          color: #e7e7e7;
        }

        .social {
          width: 33px;
          height: 33px;
          margin-left: 10px;
          border: 1px solid #e7e7e7;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 14px;
          }
        }

        .facebook img {
          width: 8px;
        }
      }
    }
  }
}
</style>
