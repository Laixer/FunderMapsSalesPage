<template>
  <div class="infotext">
    <h1>Duis tincidunt scelerisque nunc in vestibulum?</h1>
    <p>
     De inschatting is dat circa 400.000 woningen in Nederland met funderingsproblemen te maken hebben of kunnen krijgen. Dit is geen hard aantal, maar een globale inschatting op basis van de risicogebieden in Nederland. Funderingen zijn immers niet zichtbaar en bovendien zijn er veranderende omgevingsfactoren als het klimaat en bodemdaling die invloed hebben op de staat van de funderingen.
    </p>
    <br />
    <p>
      Op lokaal of gemeente niveau kunnen deze vragen beantwoord worden en kan een meer gedetailleerd risico geduid worden door gebruik te maken van lokale data en bij de gemeente beschikbare gegevens. De FunderMaps is een hiervoor door het Kennis Centrum Aanpak Funderingsproblematiek (KCAF) ontwikkelde applicatie die helpt data te verwerken, te analyseren en presenteren. Met de speciaal ontwikkelde methodiek is het mogelijk zelf eenvoudig nieuwe gegevens toe te voegen of analyses uit te voeren. Op basis van landelijk beschikbare data, aangevuld met lokale data kunnen een serie analyses worden uitgevoerd die inzichtelijk maken waar oa. funderingsrisicogebieden binnen een gemeente aanwezig zijn.
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