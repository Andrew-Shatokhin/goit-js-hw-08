import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(evt) {
    
    localStorage.setItem('videoplayer-current-time', evt.seconds);
};

const getTimeUpdate = (localStorage.getItem('videoplayer-current-time'));
if (getTimeUpdate !== null) {
    player.setCurrentTime(getTimeUpdate)

}
