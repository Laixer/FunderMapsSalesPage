<template>
  <div class="infotext">
    <h1>Duis tincidunt scelerisque nunc in vestibulum?</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis
      purus id ex mollis aliquet. Proin rhoncus lobortis tempor. Suspendisse
      potenti.
    </p>
    <br />
    <p>
      Nunc diam tellus, ullamcorper ut sapien vitae, gravida malesuada
      neque. Phasellus placerat nisl neque, quis blandit eros aliquet ac.
    </p>
  </div>
</template>

<script>
export default {
  name: "InfoText"
};
</script>

<style lang="scss" scoped>
.infotext {
  text-align: center;
  justify-content: center;
  top: 40px;
  background-color: white;
  z-index: 1;
  position: relative;
  padding: 25px 0px;
  margin: -150px 100px 0px 100px;

  @media (max-width: 1366px) {
    margin: -125px 25px 0px 25px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-top: 50px;

    @media (max-width: 1366px) {
      margin-top: 25px;
    }
  }

  p {
    letter-spacing: 0;
    color: #707070;
    font-size: 1.3rem;
    max-width: 70%;
    margin: auto;
  }
}
</style>