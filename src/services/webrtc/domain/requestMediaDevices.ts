let WEBRRTC_STREAM: MediaStream;

export const requestMediaDevices = () => {
  return navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      WEBRRTC_STREAM = stream;
      return stream;
    })
    .catch((e) => {
      console.log("Error al obtener los dispositivos de audio y video ", e);
    });
};

export const hasStream = () => {
  return !!WEBRRTC_STREAM;
};

export const getStream = () => {
  return WEBRRTC_STREAM;
};
