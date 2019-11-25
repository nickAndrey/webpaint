(function() {
  /*graphic, illustration, motion*/
  // const filter = document.querySelector('.portfolio__filter');
  // const controls = filter.querySelector('.portfolio__filter__controls');
  // const filterItems = filter.querySelector('.portfolio__filter__items');
  //
  // filterItems.querySelectorAll('[aria-label]').forEach((item) => {
  //   console.log(item)
  // });

  fetch(`https://my-json-server.typicode.com/nickAndrey/webpaint/db`)
    .then((resp) => resp.json())
    .then((data) => getImages(data))
    .catch((err) => console.log(err));

  const getImages = (data) => {

  }
})();
