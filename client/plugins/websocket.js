import Pusher from 'pusher-js';

export default ({app}, inject) => {

  // Enable pusher logging - don't include this in production
  Pusher.logToConsole = true;

  var pusher = new Pusher(process.env.PUSHER_ID, {
    cluster: 'eu'
  });

  inject('pusher', pusher)
}

