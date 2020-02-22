function creatorPopup() {
  setTimeout(function () {
    $('#creatorPopup').animate({
      right: "+=500",
    }, 1000, () => { });
  }, 0);

  setTimeout(function () {
    $('#creatorPopup').animate({
      opacity: 0.5,
      right: "-=450",
    }, 1000, () => { });
  }, 10000);
}


