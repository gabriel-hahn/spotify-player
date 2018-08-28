import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Guns N Roses');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('3I9Z1nDCL4E0cP62flcbI5');
const albumInfo = document.getElementById('album-info');

albums.then(data => renderAlbums(data.albums.items, albumList));
album.then(data => renderAlbumInfo(data, albumInfo));
