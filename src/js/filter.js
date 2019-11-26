(function() {
  fetch(`https://my-json-server.typicode.com/nickAndrey/webpaint/db`)
    .then((resp) => resp.json())
    .then((data) => getImages(data))
    .catch((err) => console.log(err));

  const filter = document.querySelector('.portfolio__filter');
  const filterItems = filter.querySelector('.portfolio__filter__items');

  const getImages = (data) => {
    const imgTable = Object.values(data).flat();
    imgTable.forEach((item) => {
      const imgNode = document.createElement('img');
      imgNode.setAttribute('src', item.src);
      imgNode.setAttribute('alt', item.alt);
      imgNode.setAttribute('aria-label', item.label);
      filterItems.appendChild(imgNode);
    });
  };

  const handleFilter = (elm) => {
    let imgNodes = [...filterItems.children];
    let label = elm.getAttribute('aria-label');

    imgNodes.filter((item) => {
      item.getAttribute('aria-label') !== label && label !== 'all' && label
        ? (item.hidden = true)
        : (item.hidden = false);
    });
  };

  const handleToggleActive = (elm) => {
    const btnNodes = filter.querySelectorAll('.portfolio__filter__controls .button');
    btnNodes.forEach((btn) => btn.classList.remove('active'));
    elm.classList.add('active');
  };

  document
    .querySelector('.portfolio__filter__controls')
    .addEventListener('click', (evt) => {
      const target = evt.target;
      handleFilter(target);
      handleToggleActive(target);
    });
})();
