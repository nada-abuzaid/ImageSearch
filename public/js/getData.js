/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function getData(method, url, cb, displayLoad) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    try {
      if (xhr.readyState === 4 && xhr.status === 200) {
        load.style.display = 'none';
        cb(JSON.parse(xhr.responseText));
      } else {
        displayLoad();
      }
    } catch (error) {
      return error;
    }
  };
  xhr.open(method, url);
  xhr.send();
}
