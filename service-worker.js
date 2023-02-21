/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "63924daa6adb9acbf56c7115f0eb5bd8"
  },
  {
    "url": "about.html",
    "revision": "e2db8710046d3d43dcc41f922cd0fcb6"
  },
  {
    "url": "assets/css/0.styles.34185f60.css",
    "revision": "1526787f6aba0183b2473bba6c39d164"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/alipay.8701cc62.svg",
    "revision": "8701cc6229ab9a0b625126cdc1838777"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/paypal.0614c8ec.svg",
    "revision": "0614c8ec69152b15a48a6508c9ab7373"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/wechat.702bca7b.svg",
    "revision": "702bca7befb1db3ac5dace5bb9912188"
  },
  {
    "url": "assets/js/1.9b5b8dca.js",
    "revision": "3541caa616922ae89661e823e57a11ae"
  },
  {
    "url": "assets/js/10.b90106a4.js",
    "revision": "c05ebb1595d23d5d24303613005447b5"
  },
  {
    "url": "assets/js/11.2e290101.js",
    "revision": "20523b424609f000708c3650d7a98b14"
  },
  {
    "url": "assets/js/12.dfcdb280.js",
    "revision": "318d8b1fa34a744adee9aa33290f8ef6"
  },
  {
    "url": "assets/js/13.d33faae9.js",
    "revision": "77f89b415ce15a279f125c07cf5bf43c"
  },
  {
    "url": "assets/js/14.7889882f.js",
    "revision": "d096d3bcc5f8b5f90856937138fd7f98"
  },
  {
    "url": "assets/js/15.e656b652.js",
    "revision": "2f3a54154817a914a5e87614c0ed550f"
  },
  {
    "url": "assets/js/16.b872a6c1.js",
    "revision": "62d9ecf46ac8a5ca79bef8111f960632"
  },
  {
    "url": "assets/js/17.42480a56.js",
    "revision": "3e7b61509ac4ec6f92f65a34ae092e33"
  },
  {
    "url": "assets/js/18.35b17864.js",
    "revision": "06705c3f72fa227653277ee8c6a629c6"
  },
  {
    "url": "assets/js/19.ad39f5bd.js",
    "revision": "35b7e34968c5c8585d8a41c5dd4d2590"
  },
  {
    "url": "assets/js/20.ede82415.js",
    "revision": "29699200d561cc2db6ff5f0712e29f1a"
  },
  {
    "url": "assets/js/21.0c22f63d.js",
    "revision": "ee5fdb8468ca57dbb3b6a86750958e65"
  },
  {
    "url": "assets/js/22.0d1e9369.js",
    "revision": "b26878992c6f90132e71a49b08c0547e"
  },
  {
    "url": "assets/js/23.63060f82.js",
    "revision": "c13675a8d9af447d7c9edbb9716d6e78"
  },
  {
    "url": "assets/js/3.f7fd7e25.js",
    "revision": "a5eb02345967b25b21fe46a253138e4a"
  },
  {
    "url": "assets/js/4.6943f3e7.js",
    "revision": "8bd67865b16aee1f25afba4f1be8b89a"
  },
  {
    "url": "assets/js/5.693416bb.js",
    "revision": "0e0def08919c37d84e081229860901f2"
  },
  {
    "url": "assets/js/6.7a60b04f.js",
    "revision": "6aac533886ce6467cc063aa919683cce"
  },
  {
    "url": "assets/js/7.9c719ca4.js",
    "revision": "ce34e1de2addf573cb3f34bd70c5da7c"
  },
  {
    "url": "assets/js/8.3cf10f2a.js",
    "revision": "32ae4f887de2ac7586c7e0824598b698"
  },
  {
    "url": "assets/js/9.e1f43d43.js",
    "revision": "0d82a12facb090f33267b08c401e60b2"
  },
  {
    "url": "assets/js/app.1670772a.js",
    "revision": "592119b4c43f77b3beb98a64c1b51842"
  },
  {
    "url": "categories/FAQ/index.html",
    "revision": "383743ee4845383348063785d6516a76"
  },
  {
    "url": "categories/index.html",
    "revision": "1bd3d513c7983d01d4b5e19f1aa52c31"
  },
  {
    "url": "donate.html",
    "revision": "843a8aac7b6b26fb63f4c3d55a5ee342"
  },
  {
    "url": "faq.html",
    "revision": "f0643605eb2473014b1d5204f542af81"
  },
  {
    "url": "features/Assistant.html",
    "revision": "bbbc3e86031694c2515bde0bad2890d9"
  },
  {
    "url": "features/Bika.html",
    "revision": "205690f9af1ba9c56effb2a5a432d1ad"
  },
  {
    "url": "features/GroupAdmin.html",
    "revision": "ac1fb47f39c807f5b8c526e8c72f69f4"
  },
  {
    "url": "features/Notice.html",
    "revision": "a3236152657dab61dd1f893c706a3e73"
  },
  {
    "url": "features/PicSearch.html",
    "revision": "b0ba77404992edf9d6b67aaa9362bae1"
  },
  {
    "url": "features/Pixiv.html",
    "revision": "9b2fac42845472990860aececbbd6ba7"
  },
  {
    "url": "features/State.html",
    "revision": "fc6cf35d0fe8b4e0a1b506373be70c32"
  },
  {
    "url": "help.html",
    "revision": "1c693ad0df722650ff6035479a7dce3d"
  },
  {
    "url": "icons/favicon144.png",
    "revision": "c3258ba800a02ed0d788e99c72a2f377"
  },
  {
    "url": "icons/favicon192.png",
    "revision": "80afc1e17911532c93cb8637268d1bbb"
  },
  {
    "url": "icons/favicon48.png",
    "revision": "811da0e0a83246091d2cc380fe84a186"
  },
  {
    "url": "icons/favicon512.png",
    "revision": "ce21c96aceea3078edbb17160f44195f"
  },
  {
    "url": "icons/favicon72.png",
    "revision": "774b55d2b580031b720e7c03867ee2ad"
  },
  {
    "url": "icons/favicon96.png",
    "revision": "05df80e0bd02da9d7d6c0dae2a1e1821"
  },
  {
    "url": "img/hero.png",
    "revision": "abf3416c55d2fb966064d1f14eb29dbc"
  },
  {
    "url": "img/SauceNAO.png",
    "revision": "7c96dc5254055628a50e71feb8fa64c1"
  },
  {
    "url": "img/状态.png",
    "revision": "23f18717ef352a21452c2320319db7b7"
  },
  {
    "url": "index.html",
    "revision": "ad8d5e1690f4ac6131c2897e742dc40d"
  },
  {
    "url": "logo.png",
    "revision": "0cc478288d7f216ad5b9ee3730aaf6a3"
  },
  {
    "url": "pixiv-token/cmd.png",
    "revision": "8378543e981cfa8c637e4143028e936f"
  },
  {
    "url": "pixiv-token/filter.png",
    "revision": "8d49e7a36ec73320cc088f24040bd9f8"
  },
  {
    "url": "pixiv-token/request.png",
    "revision": "19fb2103681a50b2d694820d1f983f0f"
  },
  {
    "url": "sponsor-qrcode/qrcode-alipay.png",
    "revision": "a6128053f374aea2a8877d478f44d300"
  },
  {
    "url": "sponsor-qrcode/qrcode-qq.png",
    "revision": "82b629dbc521ce9013ea68b38b464a9b"
  },
  {
    "url": "sponsor-qrcode/qrcode-wechat.png",
    "revision": "012bb035d7d8e93633a3ddecb5ca66ed"
  },
  {
    "url": "tag/index.html",
    "revision": "f8a282dc67c10db8b08c9fea9b6bea18"
  },
  {
    "url": "timeline/index.html",
    "revision": "8f5f3657be17aa381bd3fb96b84b76c5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
