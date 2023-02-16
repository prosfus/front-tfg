let WEBRRTC_STREAM: MediaStream;

export const requestMediaDevices = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      WEBRRTC_STREAM = stream;
    });
};

export const getStream = () => {
  return WEBRRTC_STREAM;
};
