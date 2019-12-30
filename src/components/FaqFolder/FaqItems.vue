<template>
  <div class="faq">
    <div class="faq-container">
      <div class="faq-menu">
        <div class="fixed" id="menulink">
          <div class="faq-menu-item" v-for="topic in topics" :key="topic.id">
            <a>
              <img src="@/assets/IconQuestionmark.svg" class="faq-icon" />
              <div class="menu">
                <h3 class="menu-title">{{topic.title}}</h3>
                <p class="menu-desc">{{topic.desc}}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-item-container" id v-for="topic in topics" :key="topic.id">
          <img src="@/assets/IconQuestionmark.svg" class="faq-icon" />
          <div class="info">
            <h2 class="info-title">{{topic.title}}</h2>
            <p class="info-text">{{topic.desc}}</p>

            <div class="item" v-for="questions in topic.question" :key="questions.id">
              <h3 class="item-text">
                {{questions.title}}
                <img v-bind:src="getIcon"  v-on:click="makeCollapsed"  :key="questions.id" />
              </h3>
              <ul class="expand-info" style="display: none;">
                <li class="item-info">{{questions.text}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqItems",
  data() {
    return {
      isCollapsed: false,
      hideText: true,
      topics: [
        {
          id: 1,
          title: "Lorem ipsum",
          desc: "Nullam at nulla sapien. Integer vel nulla augue.",
          question: [
            {
              id: 1,

              title: "Hi",
              text:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fuga, quos maiores quas ipsa illo et assumenda eveniet, laborum aperiam nam ullam, ea deserunt. Provident voluptate at dolorem veritatis nisi"
            },
            {
              id: 2,

              title: "Hsdai",
              text:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fuga, quos maiores quas ipsa illo et assumenda eveniet, laborum aperiam nam ullam, ea deserunt. Provident voluptate at dolorem veritatis nisi"
            }
          ]
        },
        {
          id: 2,
          title: "Lorem Ipsum",
          desc: "Nullam at nulla sapien. Integer vel nulla augue.",
          question: [
            {
              id: 1,

              title: "Hdsadasi",
              text:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fuga, quos maiores quas ipsa illo et assumenda eveniet, laborum aperiam nam ullam, ea deserunt. Provident voluptate at dolorem veritatis nisi"
            },
            {
              id: 2,
              title: "Hifsfsa",
              text:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fuga, quos maiores quas ipsa illo et assumenda eveniet, laborum aperiam nam ullam, ea deserunt. Provident voluptate at dolorem veritatis nisi"
            }
          ]
        }
      ]
    };
  },
  computed: {
    getIcon() {
      return require(this.isCollapsed
        ? "@/assets/IconMinus.svg"
        : "@/assets/IconPlus.svg");
    }
  },
  methods: {
    changeImage(index) {
      return "../assets/" + this.pics[index] + ".svg";
    },
    // makeCollapsed: function(){
    //   this.isCollapsed = !this.isCollapsed;
    // }
  }
};
</script>

<style lang="scss" scoped>
.faq-container {
  display: flex;
  width: 100%;
}

.faq {
  width: 80%;
  margin: auto;

  //LEFT SIDE
}
.faq-menu {
  flex: 1 0 50%;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.faq-menu-item {
  width: 60%;
  display: flex;
  margin: 10px;
  cursor: pointer;
  a {
    display: flex;
    text-decoration: none;
  }
  &:hover {
    box-shadow: 3px 2px 8px #888;
  }
}

.active {
  box-shadow: 3px 2px 8px #888;
}

.faq-icon {
  max-width: 30px;
  margin: 7px;
  align-self: flex-start;
}

.menu {
  padding: 5px 5px;
  min-height: 70px;

  &-title {
    color: #000000;
    font-weight: 500;
  }

  &-desc {
    color: #888;
    max-width: 90%;
  }
}
.faq-item {
  flex: 1 0 50%;
  &-container {
    width: 100%;
    box-shadow: 3px 2px 8px #888;
    padding-bottom: 25px;
    padding-right: 25px;
    display: flex;
    margin-bottom: 25px;
  }
  .faq-icon {
    max-width: 30px;
    margin: 15px 5px 0px 30px;
    align-self: flex-start;
  }

  .info {
    margin: 12px 0 10px 10px;
    width: 100%;

    &-title {
      font-weight: 500;
      color: #000000;
      font-size: 1.3rem;
    }

    &-text {
      color: #888;
      font-size: 0.8rem;
    }
  }
}

.item {
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
  margin-top: 15px;

  border-bottom: 1px solid #888888;
  padding-bottom: 10px;

  &-text {
    flex: 1 0 50%;
    font-weight: 500;
    color: #000;
    display: flex;
    justify-content: space-between;
  }

  img {
    flex: 1 0 50%;
    max-width: 20px;
  }

  &-info {
    color: #888;
    max-width: 80%;
    font-size: 0.8rem;
    margin-top: 5px;
    transition: 0.3s;
    list-style: none;
  }
}
</style>