<template>
  <div>
    <div class="line"></div>
    <div class="body-container pt-5">
      <div class="section-title pt-4">DJ TK</div>
      <b-row>
        <b-col lg="4" md="6" sm="6" class="pt-3">
          <img src="@/assets/img/djs/tk/tk.jpg" class="d-block w-100" />
        </b-col>
        <b-col lg="8" md="6" sm="6" class="text-left text-justify pt-2">
          The beauty of being a Brazilian Zouk DJ is that you don't just play
          one type of song. Instead, you spin a kaleidoscope of music genres,
          energy, vibe, bpm to the dancers. It's not a set menu but a buffet
          full of twists and turns, surprises and shines, ups and downs. It's an
          eventful journey - chilling at the meadows, running up the hills,
          sailing with the waves and sometimes skyrocketing to the moon. That's
          how I feel about DJing. TK has DJed at multiple events, at home and
          abroad, namely BraZouky Vietnam, PTZ's ZoukItUp, ZoukMeLah, and some
          other marathons. He is also a regular DJ at the weekly party in Hanoi
          - Sensation Night! DJ TK is in da house
        </b-col>
      </b-row>
      <div>
        <div class="my-5 section-sub-title">Selected Sets</div>
        <div
          class="pb-5"
          v-for="set in zoukSet"
          :key="set.key"
          v-html="set.div"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DjAnhq",
  data: function () {
    return {
      zoukSet: [
        {
          key: 1,
          div: `
            <iframe width="100%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPhuongVu201%2Fbrazouky-vietnam-friday-live-set%2F" frameborder="0" ></iframe>
          `,
        },
        {
          key: 2,
          div: `
            <iframe width="100%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPhuongVu201%2Fsex-in-the-morning%2F" frameborder="0" ></iframe>
          `,
        },
        {
          key: 3,
          div: `
            <iframe width="100%" height="120" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPhuongVu201%2Flose-myself-part-xxx%2F" frameborder="0" ></iframe>
          `,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
