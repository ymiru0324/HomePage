const URL = "https://v1.nocodeapi.com/yongmini/instagram/ToXUBLgMvXQEXXQt"


$(".inst-card_container").click((e) => {
  // $(e.target)
    // .next()
    // .slideDown()
    // .slideUp()
    // .slideToggle()

  // 아코디언
  $(e.target)
    .next()
    .slideToggle()
    .siblings(".insta-card")
    .slideUp();
});


$(window).on('load',  async() => {
  const response = await axios(URL);
  const {data: {data}} = response; // response.data.id

  const img = document.createElement('img');
  img.src = data[0].media_url;
  document.querySelector('#insta-img-1').append(img);

  const img1 = document.createElement('img');
  img1.src = data[1].media_url;
  document.querySelector('#insta-img-1').append(img1);

  const img2 = document.createElement('img');
  img2.src = data[2].media_url;
  document.querySelector('#insta-img-2').append(img2);

});
