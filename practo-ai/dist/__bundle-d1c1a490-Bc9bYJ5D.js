import { u as uo, b, q as qe, V as Ve, j as je, r as rt, Z as Ze, s as st } from "./index-Gfpknp0y.js";
var i = function(i2, u) {
  return new Promise(function(c, p) {
    if ("undefined" != typeof XMLHttpRequest) {
      var f = uo.of(i2), l = f.dispatcher, g = f.logger, h = u.requestId, m = u.method, q = u.url, v = u.headers, w = void 0 === v ? {} : v, b$1 = u.data, E = void 0 === b$1 ? "" : b$1, y = u.uploadProgressHandler, x = false, H = new XMLHttpRequest();
      H.open(m, q), Object.keys(w).forEach(function(e) {
        H.setRequestHeader(e, w[e]);
      }), y && H.upload.addEventListener("progress", function(e) {
        e.lengthComputable ? y(h, e.loaded, e.total) : g.debug("Progress computing failed: `Content-Length` header is not given.");
      }), H.onabort = function() {
        p(b.requestCanceled);
      }, H.onerror = function(e) {
        p(b.networkError);
      }, H.onreadystatechange = function() {
        if (H.readyState === XMLHttpRequest.DONE && !x) if (0 === H.status || H.status >= 200 && H.status < 400) try {
          var e = JSON.parse(H.responseText);
          c(new qe(i2, e));
        } catch (u3) {
          p(b.networkError);
        }
        else try {
          var d = JSON.parse(H.responseText);
          if (d) {
            var u2 = new b(d);
            if (u2.isSessionExpiredError) {
              if (l.dispatch(new Ve({ reason: u2.code, message: u2.message })), !(H instanceof je)) {
                var f2 = new rt();
                return l.dispatch(new Ze({ request: H, deferred: f2, error: u2 })), f2.promise;
              }
            } else u2.isSessionInvalidatedError && l.dispatch(new Ve({ reason: u2.code, message: u2.message }));
            p(u2);
          } else p(b.requestFailed);
        } catch (u3) {
          p(b.requestFailed);
        }
      }, l.on(function(e) {
        e instanceof st && (e.requestId && e.requestId !== h || (x = true, H.abort()));
      }), H.send(E);
    } else p(b.xmlHttpRequestNotSupported);
  });
};
export {
  i as xmlHttpRequest
};
//# sourceMappingURL=__bundle-d1c1a490-Bc9bYJ5D.js.map
