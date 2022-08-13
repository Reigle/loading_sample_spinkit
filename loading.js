$(function () {
  // 以下に「SpinKit」で選んだアニメーションのHTMLを貼付する
  const html = `
  <div id="loader">
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
  </div>`;

  $(".loading").html(html);
});
