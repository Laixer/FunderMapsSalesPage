<template>
  <div id="ContactInfo">
    <div class="contact-container">
      <!-- Contact | Title / Text -->
      <div class="contact-box">
        <p class="contact-title">Get In Touch</p>
        <p class="contact-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          quis purus id ex mollis aliquet. Proin rhoncus lobortis tempor.
          Suspendisse potenti.
        </p>
      </div>
      <div class="contact-info" v-for="info in contact" :key="info.id">
        <div class="contact-info-item">
          <p class="contact-info-title">{{info.title}}</p>
          <p class="contact-info-text">{{info.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  data() {
    return {
      contact: [
        {
          id: 1,
          title: "Lorem",
          text: "Lorem Ipsum dolor"
        },
        {
          id: 2,
          title: "Lorem",
          text: "Lorem Ipsum dolor"
        },
        { id: 3, title: "Lorem", text: "Lorem Ipsum dolor" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  flex-wrap: wrap;
  flex-direction: row;

  margin: 20vh 0 20vh 0;
  @media (min-width: 901px) {
    max-width: 80%;
    margin: 20vh auto;
  }
}

.contact-title {
  font-size: 2.4rem;
  font-weight: 600;
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;
}

.contact-text {
  color: #707070;
}

.contact-box {
  padding-right: 0;
  border-right: none;
  max-width: 100%;
  width: 100vw;
  text-align: center;
  margin-bottom: 10vh;
}

.contact-info {
  // min-width: 15%;
  // margin-left: 4%;

  margin-left: 0;
  justify-content: space-between;
  padding: 10px 5%;
  display: flex;
  text-align: center;
  // @media (min-width: 901px) {
  // }
}

.contact-info-title {
  margin-block-start: 0em;
  padding-block-end: 0.2em;
  font-weight: 600;
  font-size: 1.3rem;
}

.contact-info-text {
  border-top: solid 1px #707070;
  padding-block-start: 0.2em;
  margin-block-end: 0.2em;
  font-weight: 400;
  color: #707070;
}
</style>