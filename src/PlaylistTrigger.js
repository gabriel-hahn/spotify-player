const albumTracks = document.getElementById('album-tracks');
let audioObject = null;

export default function playlistTrigger() {
  albumTracks.addEventListener('click', (e) => {
    const track = e.target.parentNode;

    if (track.classList.contains('active')) {
      audioObject.pause();
    } else {
      if (audioObject) {
        audioObject.pause();
      }

      audioObject = new Audio(track.getAttribute('data-track-preview'));
      audioObject.play();
      track.classList.add('active');

      audioObject.addEventListener('pause', () => {
        track.classList.remove('active');
      });
    }
  });
}
