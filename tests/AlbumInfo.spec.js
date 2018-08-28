import 'jsdom-global/register';
import { expect } from 'chai';

import renderAlbumInfo from '../src/AlbumInfo';

describe('AlbumInfo', () => {
  const data = {
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
    tracks: {
      total: 18,
    },
  };

  const markup = `
        <img class="album-image" src="https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757" alt="The Essential Incubus">
        <p class="album-title">The Essential Incubus</p>
        <p class="album-artist">Incubus</p>
        <p class="album-counter">18 Músicas</p>
  `;

  it('Should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumInfo(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });
});
