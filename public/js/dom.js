/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const autoList = document.getElementById('autoList');
const searchInput = document.getElementById('searchInput');
const imageListWrap = document.getElementById('imageListWrap');
const load = document.querySelector('.load');

const displayLoad = () => {
  imageListWrap.textContent = '';
  load.style.display = 'block';
};

const searchAuto = (categoriesArray) => {
  // eslint-disable-next-line max-len
  const searchList = categoriesArray.filter((item) =>
    item.toLowerCase().trim().startsWith(searchInput.value.toLowerCase().trim())
  );
  return searchList;
};

const addToSearch = (item) => {
  searchInput.value = item.textContent;
  autoList.textContent = '';
};

const manipulateDOM = (categoriesArray) => {
  if (searchAuto(categoriesArray).length) {
    autoList.textContent = '';
    searchAuto(categoriesArray).forEach((ele) => {
      const item = document.createElement('li');

      let word = `<span class="match">${ele.substr(0, searchInput.value.length)}</span>`;
      word += ele.substr(searchInput.value.length);

      item.innerHTML = word;

      item.addEventListener('click', () => {
        addToSearch(item);
      });
      autoList.appendChild(item);
    });
  }
  if (searchInput.value === '') {
    autoList.textContent = '';
  }
};

// eslint-disable-next-line no-inner-declarations
function checkKey(e, autoLst) {
  e = e || window.event;
  // let indx = 0;
  if (e.keyCode === '38') {
    for (let i = 0; i < autoLst.length; i++) {
      const element = autoLst[i];
      element.style.background = 'red';
    }
  } else if (e.keyCode === '40') {
    autoLst.style.background = 'blue';
  }
}

document.onkeydown = checkKey;

const getImages = (data) => {
  imageListWrap.textContent = '';
  data.results.forEach((img, index) => {
    if (index % 2 === 0) {
      const item = document.createElement('li');
      item.className = 'item';
      const imgItem = document.createElement('img');
      imgItem.setAttribute('src', `${img}`);
      imgItem.setAttribute('loading', 'lazy');
      item.appendChild(imgItem);

      imageListWrap.appendChild(item);
    }
  });
};

const getPicsumImages = (data) => {
  imageListWrap.textContent = '';
  data.forEach((img) => {
    const item = document.createElement('li');
    item.className = 'item';
    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', `${img.download_url}`);
    imgItem.setAttribute('loading', 'lazy');
    item.appendChild(imgItem);
    imageListWrap.appendChild(item);
  });
};
