export function get(callback) {
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then((res) => res.json())
    .then((data) => callback(data));
}
