/* eslint-disable quotes */
/* eslint-disable no-undef */
window.addEventListener('load', () => getData('Get', '/home', getPicsumImages, displayLoad));

/* eslint-disable no-undef */
const searchBtn = document.getElementById('searchBtn');
searchInput.addEventListener('keyup', (e) => {
  autoList.textContent = '';
  getData('Get', '/auto', manipulateDOM, displayLoad);
  if (searchInput.value !== '' && e.key === 'Enter') getData('Get', `/search/${searchInput.value}`, getImages, displayLoad);
  else if (searchInput.value === '') getData('Get', '/home', getPicsumImages, displayLoad);
});

searchBtn.addEventListener('click', () => {
  if (searchInput.value !== '') {
    autoList.textContent = '';
    getData('Get', `/search/${searchInput.value}`, getImages, displayLoad);
  }
});

// Add Event To Tags
const tags = document.querySelectorAll('.tag');
document.addEventListener('click', (e) => {
  // eslint-disable-next-line no-param-reassign
  tags.forEach((tag) => { tag.style.backgroundColor = 'var(--background)'; });
  if (e.target.getAttribute('class') === 'tag') {
    e.target.style.backgroundColor = 'var(--main)';
    getData('Get', `/search/${e.target.textContent}`, getImages, displayLoad);
  }
});

// Check The Theme Of Browser
const themes = document.getElementById('themes');
const themesLabel = document.getElementById('themesLabel');

const switchToDark = () => {
  themes.checked = false;
  themes.style.backgroundImage = 'url( https://e.top4top.io/p_2245ym00k1.png)';
  themesLabel.textContent = 'Light';
  document.documentElement.setAttribute('data-theme', 'Dark');
};

const switchToLight = () => {
  themes.checked = false;
  themes.style.backgroundImage = 'url(https://f.top4top.io/p_2245daw7x2.png)';
  themesLabel.textContent = 'Dark';
  document.documentElement.setAttribute('data-theme', 'Light');
};

const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (dark) switchToDark();
else switchToLight();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (e.matches) switchToDark();
});

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
  if (e.matches) switchToLight();
});

// Switch The Theme Mode
const switchTheme = () => {
  const dataTheme = document.documentElement.getAttribute('data-theme');
  if (dataTheme === 'Dark') switchToLight();
  else switchToDark();
};
themes.addEventListener('click', switchTheme);

// Scroll to top button
const scrollToTopBtn = document.querySelector('#scrollToTopBtn');
const displayScrollToBtn = () => {
  const y = window.scrollY;
  if (y > 200) scrollToTopBtn.classList.replace('hide', 'show');
  else scrollToTopBtn.classList.replace('show', 'hide');
};
window.addEventListener('scroll', displayScrollToBtn);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
scrollToTopBtn.addEventListener('click', scrollToTop);

// Check The State Of Internet
const stateInternet = document.querySelector('#stateInternet');
const makeStateInternet = (word) => {
  const stateOnline = word;
  stateInternet.textContent = stateOnline;
  stateInternet.style.display = 'block';
  setTimeout(() => {
    stateInternet.style.display = 'none';
  }, 3000);
};

window.addEventListener('online', () => makeStateInternet(`You're Online`));
window.addEventListener('offline', () => makeStateInternet(`You're Offline`));
