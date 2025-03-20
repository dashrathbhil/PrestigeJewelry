// video

const videoBox = document.getElementById('videoBox');
const thumb = document.getElementById('play-button');

thumb.addEventListener('click', () => {
    videoBox.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/aqz-KE-bpKQ?si=-ovZGrrVpUPfBRiR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
});