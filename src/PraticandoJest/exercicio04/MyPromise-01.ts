export function myPromise(name: string | null) {
  return new Promise((resolve, reject) => {
    if (name) {
      setTimeout(() => {
        resolve(`Hello ${name}!`);
      }, 4000);
    } else {
      reject('You must enter a name!');
    }
  });
}
