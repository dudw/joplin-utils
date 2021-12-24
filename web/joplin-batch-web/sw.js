/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-73849388'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets/browser.aaf5c39c.js",
    "revision": "4ce8750e9c6c5b6ca27d0c851e6a578c"
  }, {
    "url": "assets/index.1deaff2a.js",
    "revision": "184b9376d514f15499161589beb5df03"
  }, {
    "url": "assets/index.24b25a07.js",
    "revision": "4304c008b095b110f57814114bfa65c7"
  }, {
    "url": "assets/index.dfc94c30.css",
    "revision": "971ff1098876c9462fceeac2d2a0eafe"
  }, {
    "url": "assets/MarkdownLinkUtil.63c340c2.js",
    "revision": "1803ffda822ea925a6f85673ff742aaa"
  }, {
    "url": "assets/parseInternalLink.e7a8cff8.js",
    "revision": "e6fa6916b53e6c655e007388c4799365"
  }, {
    "url": "assets/vendor.4d84dd7b.css",
    "revision": "e069884fb2e65b46e28d3f53c9907dbf"
  }, {
    "url": "assets/vendor.ecaa4e6e.js",
    "revision": "5b18a523f7690f0905ab604ef1499257"
  }, {
    "url": "index.html",
    "revision": "5b11bb40d2c8039d24a842e1fbb4a388"
  }, {
    "url": "manifest.webmanifest",
    "revision": "f5ea8403a380de1b1448f409ceeaa199"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
