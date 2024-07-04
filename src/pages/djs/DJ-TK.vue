<template>
  <div>
    <div class="line"></div>
    <div class="body-container pt-5">
      <div class="section-title pt-4">DJ TK</div>
      <div>
        <div class="my-5 section-sub-title">Hot Sets</div>
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
