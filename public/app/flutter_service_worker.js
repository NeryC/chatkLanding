'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/android/app/src/main/res/drawable/launch_back_icon.jpg": "a687d2700bea0edb7c1ff27a1889c79a",
"assets/AssetManifest.json": "16c61aa713b06e515f5eddca67d6ed78",
"assets/assets/images/alert_done.svg": "76d7d551fba5b66ac51434d81d90f141",
"assets/assets/images/alert_error.svg": "b6be78bf42b12e0643ff0a8fee2555de",
"assets/assets/images/alert_info.svg": "4cee503f02b2d4723758ece91b96c0ab",
"assets/assets/images/alert_warning.svg": "02c2faa9281814dc5f2cdc5945694a8e",
"assets/assets/images/button_no.svg": "e08cf4f3fed23692ef1fbbdba9b13c21",
"assets/assets/images/button_yes.svg": "5ef9bb9a891cbf5d42471530c5df1ce3",
"assets/assets/images/calendario_icon.png": "aa0c2f87139790a74b218e4a7270aaea",
"assets/assets/images/calendario_icon2.png": "8995d82cf6da1f9799bd40b885b41a69",
"assets/assets/images/chiatk_logo.svg": "fd2b389b08f3dd2fbef73b1b40dfc415",
"assets/assets/images/chia_coin.png": "22b8fbf8558008069561230511d213aa",
"assets/assets/images/chia_wallet.png": "4922500c662f7cbe112a85a5c50bbf60",
"assets/assets/images/close_icon.svg": "cfe5af1f39761f48aa693cbd92572049",
"assets/assets/images/exit_icon.png": "08725e532bed23984c8779ef05543a96",
"assets/assets/images/g.svg": "53ee2e02c78b8da416042264a8c98713",
"assets/assets/images/help_icon.png": "72ce3ef1ceeedaf8a51623bd16099572",
"assets/assets/images/help_icon2.png": "8435ab0e7b71637ab93b18827b8719d2",
"assets/assets/images/home_icon.png": "757fb0ea80b8effb93965c4e9e181871",
"assets/assets/images/home_icon2.png": "ab4e56bb24e93397d6f449a5e33ce814",
"assets/assets/images/icon-down.png": "19d8ab4fbf0da512c7d04e97a6bf5d53",
"assets/assets/images/icons-menu.svg": "a64b893493c54a67e0ffc98ed4953994",
"assets/assets/images/icons-notification.svg": "aa1c877cf0af164eb96165954d651551",
"assets/assets/images/icons-user.svg": "16655113c0bc4d740c8ee54c757b06e0",
"assets/assets/images/info_black_24dp.svg": "4cee503f02b2d4723758ece91b96c0ab",
"assets/assets/images/loading.svg": "e6e9fde0773a4723006a1bf24947713d",
"assets/assets/images/menu_bottom_car.png": "fb3bf75354a687a98a213830b33ea2f0",
"assets/assets/images/menu_bottom_car2.png": "166c2ca03de0c360281762f16a385207",
"assets/assets/images/menu_bottom_community.png": "3445bd359c20bddeb374e050dda4837d",
"assets/assets/images/menu_bottom_community2.png": "66417c5b0327d729958817f9ad31c564",
"assets/assets/images/menu_bottom_home.png": "1502e50b939b5df781d486b08b793325",
"assets/assets/images/menu_bottom_home2.png": "4cf9a5f72bb9b6c6e913be0d7c1d685d",
"assets/assets/images/menu_bottom_pool.png": "57f9baf8659f41220ffff63316e054aa",
"assets/assets/images/menu_bottom_pool2.png": "cf45e61eb92b76b74e96a9b3f930afb8",
"assets/assets/images/menu_bottom_wallet.png": "e64d08751aa185dd0f98aee273c5ed79",
"assets/assets/images/menu_bottom_wallet2.png": "d298161429d11f8b5ae3930ba135252d",
"assets/assets/images/menu_tools.png": "2dc825272bf31319e44c67474221e6cf",
"assets/assets/images/profile_info.svg": "e7f830b64b01cae3445a6dc54a309151",
"assets/assets/images/profile_politicas.svg": "090a0277cdb41cb49a5c706d88763dae",
"assets/assets/images/profile_seguridad.svg": "1beba4cb25c175dd9f962243ea4986ed",
"assets/assets/images/right_arrow.png": "5f679ed4fbe19513d06a3fe06f54bab9",
"assets/assets/images/right_arrow.svg": "e8478a4d0088fecb81f45a552cb95a94",
"assets/assets/images/robot.svg": "69a4fa0ab5634e168bb74e29f7d97fff",
"assets/assets/images/social_discord.svg": "24a1f729af9cdc3543e39c42d044f146",
"assets/assets/images/social_facebook.svg": "cd03d84a87c28cf0beeddcc7cc590d88",
"assets/assets/images/social_instragram.svg": "332ee24a415d0ac7d33dea3aaf9319fb",
"assets/assets/images/social_message.svg": "3f2775f92043b7f9cdea6e072e3712b6",
"assets/assets/images/social_twitter.svg": "0ba88a90c503ae7990006e150434f639",
"assets/assets/images/social_youtube.svg": "fb7d56a07fef1c53928d9af8cfc19619",
"assets/assets/images/tools_academia.svg": "b026cc019fb51b3732d0d6b94f21337a",
"assets/assets/images/tools_calculator.svg": "1288640eb00dd997bae66ca9af8a7135",
"assets/assets/images/tools_comunidad.svg": "af64957ef3747c24dbf8a3ff0b075ed6",
"assets/assets/images/tools_easy_farm.svg": "1d341c1718e2e3ecba391baea77f6492",
"assets/assets/images/tools_mercado.svg": "f1f5a24aa12917c16a4e8f027e1210ec",
"assets/assets/images/tools_plot_master.svg": "d2de6db4512d0604f2ab3f998cfac946",
"assets/assets/images/tools_pool.svg": "e35eed87de49ba2d9f41b01138c4ec99",
"assets/assets/images/tools_temp.png": "996faf2fb35a5d85efb9a8af577169f9",
"assets/assets/images/tools_wallet.svg": "427cf3dc7811b26594eec2d9ff26c53c",
"assets/assets/images/user_container.svg": "d458237234f05a54889b2b41fc89f700",
"assets/assets/images/welcome_background.png": "ddcf496731f367fce3850ea4cf49b4e5",
"assets/assets/images/welcome_background_web.png": "99b5d79ce18b0877a0a25757b0965c8a",
"assets/assets/images/welcome_background_web.webp": "a1d31934df8d829b456c0e1873a44394",
"assets/FontManifest.json": "46d91d4ca6380b23b140bc575cff764d",
"assets/fonts/Gibson/gibson-bold.ttf": "bc2d83bcc968f4f4d44719b2931f06e1",
"assets/fonts/Gibson/Gibson-Regular.ttf": "21140248d8dda0109003bbcfc50a2de2",
"assets/fonts/Gibson/Gibson-RegularItalic.ttf": "fd85fbd6d69f2a7afc96c797386dc366",
"assets/fonts/Gibson/GibsonLight.OTF": "8838011bb381d66a5231ac36234541f4",
"assets/fonts/Gibson/GibsonSemiBd.OTF": "5436eb62561957fd9d8522530aa72113",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e28fb52964c133a1e4048980b627da04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_auth_buttons/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/flutter_auth_buttons/fonts/SF-Pro-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"assets/packages/flutter_auth_buttons/graphics/flogo-HexRBG-Wht-100.png": "25e26b49492089deea672175452d50df",
"assets/packages/flutter_auth_buttons/graphics/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/packages/flutter_auth_buttons/graphics/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"assets/packages/flutter_auth_buttons/graphics/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4cef03baf67f06ceb93f1e23e5e87c2f",
"/": "4cef03baf67f06ceb93f1e23e5e87c2f",
"main.dart.js": "7b04d64be39e3206e66b959139683833",
"manifest.json": "cd440a3855287eabf19ef993a56e0d58",
"version.json": "5d246d2b9c63cc7ce23c2fec819557b6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
