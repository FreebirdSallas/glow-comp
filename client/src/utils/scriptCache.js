// ########## Ignore this for now

// class ScriptCache {
//   constructor (scripts) {
//     this.loaded = [];
//     this.failed = [];
//     this.pending = [];
//     this.load (scripts);
//   }
//   loadSrc (src) {
//     if (this.loaded.indexOf (src) >= 0) {
//       return Promise.resolve (src);
//     }

//     this.pending.push (src);
//     return this.scriptTag (src)
//       .then (() => {
//         //success
//       })
//       .catch (() => {
//         //handle fail
//       });
//   }

//   scriptTag (src, cb) {
//     return new Promise ((resolve, reject) => {
//       let resolved = false,
//         errored = false,
//         body = document.getElementsByTagName ('body')[0],
//         tag = document.createElement ('script');

//       tag.type = 'text/javascript';
//       tag.async = false;

//       const handleCallback = (tag.onreadystatechange = function () {
//         if (resolved) return handleLoad ();
//         if (errored) return handleReject ();
//         const state = tag.readyState;
//         if (state === 'complete') {
//           handleLoad ();
//         } else if (state == 'error') {
//           handleReject ();
//         }
//       });
//       const handleLoad = evt => {
//         resolved = true;
//         resolve (src);
//       };
//       const handleReject = evt => {
//         errored = true;
//         reject (src);
//       };

//       tag.addEventListener ('load', handleLoad);
//       tag.addEventListener ('error', handleReject);
//       tag.src = src;
//       body.appendChild (tag);
//       return tag;
//     });
//   }
// }

// let counter = 0;
// let scriptMap = new Map ();

// export const ScriptCache = (function (global) {
//   return function ScriptCache (scripts) {
//     const Cache = {};

//     Cache._onLoad = function (key) {
//       return cb => {
//         let stored = scriptMap.get (key);
//         if (stored) {
//           stored.promise.then (() => {
//             stored.error ? cb (stored.error) : cb (null, stored);
//           });
//         } else {
//           console.warn ('No script cached');
//         }
//       };
//     };

//     Cache._scriptTag = (key, src) => {
//       if (!scriptMap.has (key)) {
//         let tag = document.createElement ('script');
//         let promise = new Promise ((resolve, reject) => {
//           let resolved = false,
//             errored = false,
//             body = document.getElementsByTagName ('body')[0];

//           tag.type = 'text/javascript';
//           tag.async = true;
//           tag.defer = true;

//           const cbName = `loaderCB${counter++}${Date.now ()}`;
//           let cb;

//           const handleResult = state => {
//             return evt => {
//               let stored = scriptMap.get (key);

//               if (state === 'loaded') {
//                 stored.resolved = true;
//                 resolve (src);
//               } else if (state === 'error') {
//                 stored.errored = true;
//                 reject (evt);
//               }

//               cleanup ();
//             };
//           };

//           const cleanup = () => {
//             if (global[cbName] && typeof global[cbName] === 'function') {
//               global[cbName] = null;
//             }
//           };

//           tag.onload = handleResult ('loaded');
//           tag.onerror = handleResult ('error');
//           tag.onreadystatechange = () => {
//             handleResult (tag.readyState);
//           };

//           if (src.match (/callback=CALLBACK_NAME/)) {
//             src = src.replace (/(callback=)[^\&]+/, `$1${cbName}`);
//             cb = window[cbName] = tag.onload;
//           } else {
//             tag.addEventListener ('load', tag.onload);
//           }

//           tag.addEventListener ('error', tag.onerror);

//           tag.src = src;
//           body.appendChild (tag);

//           return tag;
//         });

//         let initialState = {
//           loaded: false,
//           error: false,
//           promise,
//           tag,
//         };

//         scriptMap.set (key, initialState);
//       }

//       return scriptMap.get (key);
//     };

//     Object.keys (scripts).forEach (function (key) {
//       const script = scripts[key];
//       Cache[key] = {
//         tag: Cache._scriptTag (key, script),
//         onLoad: Cache._onLoad (key),
//       };
//     });

//     return Cache;
//   };
// }) (window);

// export default ScriptCache;
