import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbums from '../src/AlbumList';

describe('AlbumList', () => {
  it('Should exist', () => {
    expect(renderAlbums).to.exist;
  });

  const data = [
    {
      album_type: 'album',
      artists: [{
        name: 'Incubus',
      }],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [{
        height: 640,
        url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
        width: 640,
      }],
      name: 'The Essential Incubus',
      type: 'album',
    },
  ];

  const data2 = [
    {
      album_type: 'album',
      artists: [{
        name: 'Incubus',
      }],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [{
        height: 640,
        url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
        width: 640,
      }],
      name: 'The Essential Incubus',
      type: 'album',
    },
    {
      album_type: 'album',
      artists: [{
        name: 'Incubus',
      }],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [{
        height: 640,
        url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
        width: 640,
      }],
      name: 'The Essential Incubus',
      type: 'album',
    },
  ];

  const markup = `
    <div class="list-item">
      <img src="${data[0].images[0].url}" alt="${data[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${data[0].name}</p>
        <p class="list-subtitle">${data[0].artists[0].name}</p>
      </div>
    </div>`;

  const markup2 = `
    <div class="list-item">
      <img src="${data[0].images[0].url}" alt="${data[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${data[0].name}</p>
        <p class="list-subtitle">${data[0].artists[0].name}</p>
      </div>
    </div>
    <div class="list-item">
      <img src="${data[0].images[0].url}" alt="${data[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${data[0].name}</p>
        <p class="list-subtitle">${data[0].artists[0].name}</p>
      </div>
    </div>`;

  it('Should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbums(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('Should create and append when more than 1 album', () => {
    const element2 = document.createElement('div');
    renderAlbums(data2, element2);

    expect(element2.innerHTML).to.be.eql(markup2);
  });
});
