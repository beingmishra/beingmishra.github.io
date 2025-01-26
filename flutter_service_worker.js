'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1706a7d55b2c820b0c739a9588a44d74",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "544d3368768beb896fdee17f4ddec078",
"/": "544d3368768beb896fdee17f4ddec078",
"main.dart.js": "92dd52025297623a877e753a623bbb80",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "da0712c151193fb4daef960c14b29ace",
"assets/NOTICES": "1a1c851dc2ec37ad891bb550f1814383",
"assets/FontManifest.json": "54752140b655f06818917bd2040ba126",
"assets/AssetManifest.bin.json": "71b6b86f7d5225cc1373764d6e25175d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ca5b0dde11ab1cc29def000526325ca1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "893779adf361c651acdf8f8af5d76f94",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "e02adee2dd23e72ce0202cdbc516b6a9",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "48658140f51032c875e2ee0e63db96b1",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "4faa49bffde2a68f4185a56b4cd29049",
"assets/packages/shadcn_ui/fonts/Geist-UltraLight.otf": "b64b37fbec0a925067cbf530e4962fec",
"assets/packages/shadcn_ui/fonts/Geist-Thin.otf": "8603d0fe0def4273ebeee670eedcfb86",
"assets/packages/shadcn_ui/fonts/Geist-Bold.otf": "d3e1d3dc690224fd330969af598a9c31",
"assets/packages/shadcn_ui/fonts/Geist-Black.otf": "cf003c4f85b590cf60bec1e111ebaaf5",
"assets/packages/shadcn_ui/fonts/Geist-Regular.otf": "4d02716b4f2f2e4d9c568c8d24e8e74d",
"assets/packages/shadcn_ui/fonts/Geist-Light.otf": "21f434e8c2b53240a0c459b9d119f22f",
"assets/packages/shadcn_ui/fonts/Geist-SemiBold.otf": "2c0b1d3e7b1c71bedc2eecf78f7a1d1d",
"assets/packages/shadcn_ui/fonts/Geist-Medium.otf": "f7ceaf00b58d396cf93ff1ea43740027",
"assets/packages/shadcn_ui/fonts/Geist-UltraBlack.otf": "f3591a030925294b2bb427e6a6c9b0d8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "abed833290689375d7e84c3574674c81",
"assets/fonts/MaterialIcons-Regular.otf": "b601b3aace75a0e6ff305d302768bc35",
"assets/assets/images/xd.png": "4e2669e2add4138d0a2ea905d5aea79a",
"assets/assets/images/cashfree.png": "75ad8fe7c821d5d7b911648e84e5fd2c",
"assets/assets/images/meal_club.png": "8dc4a8d10805cc7d826a69681195d116",
"assets/assets/images/quizzpe.png": "fe9fa3f89e6bcc0f0c429b0bcb1a7441",
"assets/assets/images/git.png": "90260a37f0c75ee822473d0048329439",
"assets/assets/images/docker.png": "8fa7e2558261a76f976138e002314bb1",
"assets/assets/images/prompt.png": "e11f96661d064d307e8c3ed3dc735b94",
"assets/assets/images/compose.png": "64c5b107c9d27df9975b934cddca2e81",
"assets/assets/images/python.png": "d5bc3076e0ae46ff457da6649e22ebc0",
"assets/assets/images/razorpay.png": "2caa877f56c3c6aeae56efa8203903d6",
"assets/assets/images/zoom.png": "55eee75028d9b09baa4306d835c63fa7",
"assets/assets/images/appsflyter.png": "dcb2a4c07db797cbcb7e29db5397e00a",
"assets/assets/images/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/images/appOdeal.png": "6077600120cbb63fdd2e036a5599cf82",
"assets/assets/images/ibox.png": "744209753949141139b197a73dfad0f3",
"assets/assets/images/memoji_mac.png": "ef388ac6759fd7d3e57090cf0852937d",
"assets/assets/images/sql.png": "8c2dbbc3e48ed6512a976cf031f97cb8",
"assets/assets/images/bash.png": "9a53448bf9f672736375bd0e52deea8c",
"assets/assets/images/github.png": "49349a67e0fc08289f13fdb8adbb98c4",
"assets/assets/images/firebase.png": "dbaad3efde1b2b0ff024e951875bd21b",
"assets/assets/images/java.png": "f918cc7fa0b9bca6b4a2211d534c2772",
"assets/assets/images/supabase.png": "6eaef7cb3c54e57f288073738a100580",
"assets/assets/images/room.png": "fa9e5107ece432ab31b2b935302542a6",
"assets/assets/images/bitbucket.png": "fc094de3d31b6983b7e6e6c6e74d7a42",
"assets/assets/images/gitlab.png": "1662c51e871c16078f4ce02195a2a69e",
"assets/assets/images/agora.png": "8dfa775d246a115762b8c002c7794902",
"assets/assets/images/pattern.png": "87da8e239610094644e7efcef3d1a542",
"assets/assets/images/phonepe.png": "c5c372bb6cef488376f4170186976811",
"assets/assets/images/figma.png": "10f1533d4ad0baf7486d3bca48a37f25",
"assets/assets/images/razr.png": "0ef28b517eed5492a4e3ebfb35f6ce87",
"assets/assets/images/admob.png": "ca1992fd09d2e671706695bcbaee9df7",
"assets/assets/images/weather.png": "0a5cfeca99bc6d2a49b0b5610cb1c8a3",
"assets/assets/images/vscode.png": "f3b6efb5166fa6a87cfba88910d8c070",
"assets/assets/images/studio.png": "d561653a67d018d6c598a93ad2fe0f3b",
"assets/assets/images/bg.svg": "078c5b0e42efaca8b797cf29b98f5cad",
"assets/assets/images/node.png": "0451ed2e06f1103dd6481951f9ea2a1e",
"assets/assets/images/realm.png": "25a440521c4b520486a1e52d367370fa",
"assets/assets/images/vysor.png": "e71fb04660e8708538fe6452d95116ab",
"assets/assets/images/swift.png": "3f82f12c4c1a4e90737e25a620e37e56",
"assets/assets/images/gmaps.png": "8aa2b7799010255487a16703f607ccf1",
"assets/assets/images/web.png": "29ec7c2777608becf4017baa63c72295",
"assets/assets/images/truecaller.png": "1ec965e4386e1a1b3dd277c16bc83050",
"assets/assets/images/startAds.png": "9e6acf14d8f8e99fe4033a3870a51471",
"assets/assets/images/analytics.png": "9d2d3bf3020738b60934cdd57f9c72d2",
"assets/assets/images/app-store.png": "671cd61a346b8e679de2d8a6d4d44f4a",
"assets/assets/images/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/images/medmaven.jpeg": "36ffd13570edfc1d594ba59c6510dfdb",
"assets/assets/images/zeego.jpg": "fedae0652123ee3473033a43449ec893",
"assets/assets/images/collage.webp": "8d8b6063a9a0ad0668a34f628c3e9ef6",
"assets/assets/images/dart.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/images/sqlite.png": "d5c171440f1ce7911c5ec84cb03794c0",
"assets/assets/images/laravel.png": "7a851ae3dc354e2a7b412383b4d0df9d",
"assets/assets/images/here.png": "7481d13c39a8aafb4158d2a002f520c3",
"assets/assets/images/kotlin.png": "816fd8697b199ae4a7b5dfeccb9ce423",
"assets/assets/images/bg.png": "ea7a4133e649df18cf85586c9c37f9ac",
"assets/assets/images/adapty.jpg": "a14fecff7ca222d4b8a106f4c825331f",
"assets/assets/images/aosp.png": "bfc15fa68c8bf49985cc6ddc8accb004",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
