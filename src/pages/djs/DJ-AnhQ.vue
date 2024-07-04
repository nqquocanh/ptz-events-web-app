<template>
  <div>
    <div class="line"></div>
    <div class="body-container pt-5">
      <div class="section-title pt-4">DJ AnhQ</div>
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
          div: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1845361065&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dj-anh-q" title="DJ AnhQ" target="_blank" style="color: #cccccc; text-decoration: none;">DJ AnhQ</a> · <a href="https://soundcloud.com/dj-anh-q/pre-party-brazouky-vietnam-2024-zouk-set" title="Pre-Party Brazouky Vietnam 2024 Zouk Set" target="_blank" style="color: #cccccc; text-decoration: none;">Pre-Party Brazouky Vietnam 2024 Zouk Set</a></div>
          `,
        },
        {
          key: 2,
          div: `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1828762443&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dj-anh-q" title="DJ AnhQ" target="_blank" style="color: #cccccc; text-decoration: none;">DJ AnhQ</a> · <a href="https://soundcloud.com/dj-anh-q/chill-out-thursday" title="Chill Out Thursday" target="_blank" style="color: #cccccc; text-decoration: none;">Chill Out Thursday</a></div>
          `,
        },
        {
          key: 3,
          div: `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1823369385&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dj-anh-q" title="DJ AnhQ" target="_blank" style="color: #cccccc; text-decoration: none;">DJ AnhQ</a> · <a href="https://soundcloud.com/dj-anh-q/the-sound-of-your-fear" title="The Sound Of Your Fear Zouk Set" target="_blank" style="color: #cccccc; text-decoration: none;">The Sound Of Your Fear Zouk Set</a></div>
          `,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
