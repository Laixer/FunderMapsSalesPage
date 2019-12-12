
<template>
  <div class="quote-container">
    <div class="quote-box" v-for="quotes in quote" :key="quotes.id">
      <!-- Quote | Icon -->
      <img src="@/assets/IconQuote.svg" alt="quote-icon" class="quote-icon" />
      <img src="@/assets/ImageGevalscan.png" alt class="quote-image" width="75px" height="75px" />
      <div class="quote-info">
        <p class="quote-name">{{quotes.name}}</p>
        <p class="quote-job">{{quotes.job}}</p>
      </div>

      <div class="quote-text">{{quotes.quote}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialsQuote",
  data() {
    return {
      quote: [
        {
          id: 1,
          name: " John Doe",
          job: "Lorem ipsum",
          quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum optio tempora dicta, incidunt architecto non quam fugit illo molestias ipsam quod rem nemo esse reprehenderit neque commodi ex a? "
        },
        {
          id: 2,
          name: " John Doe",
          job: "Lorem ipsum",
          quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum optio tempora dicta, incidunt architecto non quam fugit illo molestias ipsam quod rem nemo esse reprehenderit neque commodi ex a? "
        },
        {
          id: 3,
          name: "Name here",
          job: "Lorem ipsum",
          quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum optio tempora dicta, incidunt architecto non quam fugit illo molestias ipsam quod rem nemo esse reprehenderit neque commodi ex a? "
        },
        {
          id: 4,
          name: " John Doe",
          job: "Lorem ipsum",
          quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum optio tempora dicta, incidunt architecto non quam fugit illo molestias ipsam quod rem nemo esse reprehenderit neque commodi ex a? "
        },
        {
          id: 5,
          name: " John Doe",
          job: "Lorem ipsum",
          quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum optio tempora dicta, incidunt architecto non quam fugit illo molestias ipsam quod rem nemo esse reprehenderit neque commodi ex a? "
        },
        {
          id: 6,
          name: " John Doe",
          job: "Lorem ipsum",
          quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum optio tempora dicta, incidunt architecto non quam fugit illo molestias ipsam quod rem nemo esse reprehenderit neque commodi ex a? "
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.quote-container {
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;

  @media (max-width: 1366px) {
    width: 95%;
    margin: auto;
  }

  @media (min-width: 1367px) {
    width: 80%;
    margin: auto;
  }
}
.quote-box {
  width: 375px;
  height: 300px;
  margin: 50px;
  box-shadow: 1px 7px 6px rgba(0, 0, 0, 0.14);
  background-color: white;

  @media (min-width: 901px) {
    margin: 50px 5px;
  }

  @media (min-width: 1367px) {
    margin: 50px 50px;
  }
}

.quote-icon {
  position: absolute;
  margin: -20px;
}

.quote-image {
  border-radius: 100%;
  margin: 10px;
  vertical-align: middle;
  display: inline;
}

.quote-name {
  font-size: 1.5rem;
  font-weight: 400;
  margin-block-start: 0;
  margin-block-end: 0;
  display: inline;
}

.quote-job {
  font-size: 1rem;
  font-weight: 800;

  margin-block-start: 0;
  margin-block-end: 0;
  display: block;

  color: #17a4ea;
}

.quote-info {
  padding-top: 25px;
  display: inline-block;
  border-bottom: 1px solid gray;
  width: 70%;
  margin: auto 0;
  vertical-align: middle;
}

.quote-text {
  width: 80%;
  margin: auto;
  margin: 25px;
}
</style>