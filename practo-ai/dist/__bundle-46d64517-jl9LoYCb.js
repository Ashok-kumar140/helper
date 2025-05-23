import { c as commonjsGlobal } from "./index-Gfpknp0y.js";
function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e2 = m2[i2];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k in e2) {
        if (k !== "default" && !(k in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k);
          if (d2) {
            Object.defineProperty(n2, k, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var __bundle46d64517$1 = {};
var t = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || "undefined" != typeof commonjsGlobal && commonjsGlobal || {}, e = "URLSearchParams" in t, r = "Symbol" in t && "iterator" in Symbol, o = "FileReader" in t && "Blob" in t && function() {
  try {
    return new Blob(), true;
  } catch (t2) {
    return false;
  }
}(), n = "FormData" in t, s = "ArrayBuffer" in t;
if (s) var i = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], a = ArrayBuffer.isView || function(t2) {
  return t2 && i.indexOf(Object.prototype.toString.call(t2)) > -1;
};
function h(t2) {
  if ("string" != typeof t2 && (t2 = String(t2)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t2) || "" === t2) throw new TypeError('Invalid character in header field name: "' + t2 + '"');
  return t2.toLowerCase();
}
function u(t2) {
  return "string" != typeof t2 && (t2 = String(t2)), t2;
}
function f(t2) {
  var e2 = { next: function() {
    var e3 = t2.shift();
    return { done: void 0 === e3, value: e3 };
  } };
  return r && (e2[Symbol.iterator] = function() {
    return e2;
  }), e2;
}
function d(t2) {
  this.map = {}, t2 instanceof d ? t2.forEach(function(t3, e2) {
    this.append(e2, t3);
  }, this) : Array.isArray(t2) ? t2.forEach(function(t3) {
    if (2 != t3.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t3.length);
    this.append(t3[0], t3[1]);
  }, this) : t2 && Object.getOwnPropertyNames(t2).forEach(function(e2) {
    this.append(e2, t2[e2]);
  }, this);
}
function c(t2) {
  if (!t2._noBody) return t2.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (t2.bodyUsed = true);
}
function l(t2) {
  return new Promise(function(e2, r2) {
    t2.onload = function() {
      e2(t2.result);
    }, t2.onerror = function() {
      r2(t2.error);
    };
  });
}
function y(t2) {
  var e2 = new FileReader(), r2 = l(e2);
  return e2.readAsArrayBuffer(t2), r2;
}
function p(t2) {
  if (t2.slice) return t2.slice(0);
  var e2 = new Uint8Array(t2.byteLength);
  return e2.set(new Uint8Array(t2)), e2.buffer;
}
function b() {
  return this.bodyUsed = false, this._initBody = function(t2) {
    var r2;
    this.bodyUsed = this.bodyUsed, this._bodyInit = t2, t2 ? "string" == typeof t2 ? this._bodyText = t2 : o && Blob.prototype.isPrototypeOf(t2) ? this._bodyBlob = t2 : n && FormData.prototype.isPrototypeOf(t2) ? this._bodyFormData = t2 : e && URLSearchParams.prototype.isPrototypeOf(t2) ? this._bodyText = t2.toString() : s && o && ((r2 = t2) && DataView.prototype.isPrototypeOf(r2)) ? (this._bodyArrayBuffer = p(t2.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t2) || a(t2)) ? this._bodyArrayBuffer = p(t2) : this._bodyText = t2 = Object.prototype.toString.call(t2) : (this._noBody = true, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof t2 ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t2) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, o && (this.blob = function() {
    var t2 = c(this);
    if (t2) return t2;
    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }), this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var t2 = c(this);
      return t2 || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
    }
    if (o) return this.blob().then(y);
    throw new Error("could not read as ArrayBuffer");
  }, this.text = function() {
    var t2, e2, r2, o2, n2, s2 = c(this);
    if (s2) return s2;
    if (this._bodyBlob) return t2 = this._bodyBlob, e2 = new FileReader(), r2 = l(e2), o2 = /charset=([A-Za-z0-9_-]+)/.exec(t2.type), n2 = o2 ? o2[1] : "utf-8", e2.readAsText(t2, n2), r2;
    if (this._bodyArrayBuffer) return Promise.resolve(function(t3) {
      for (var e3 = new Uint8Array(t3), r3 = new Array(e3.length), o3 = 0; o3 < e3.length; o3++) r3[o3] = String.fromCharCode(e3[o3]);
      return r3.join("");
    }(this._bodyArrayBuffer));
    if (this._bodyFormData) throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, n && (this.formData = function() {
    return this.text().then(g);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
d.prototype.append = function(t2, e2) {
  t2 = h(t2), e2 = u(e2);
  var r2 = this.map[t2];
  this.map[t2] = r2 ? r2 + ", " + e2 : e2;
}, d.prototype.delete = function(t2) {
  delete this.map[h(t2)];
}, d.prototype.get = function(t2) {
  return t2 = h(t2), this.has(t2) ? this.map[t2] : null;
}, d.prototype.has = function(t2) {
  return this.map.hasOwnProperty(h(t2));
}, d.prototype.set = function(t2, e2) {
  this.map[h(t2)] = u(e2);
}, d.prototype.forEach = function(t2, e2) {
  for (var r2 in this.map) this.map.hasOwnProperty(r2) && t2.call(e2, this.map[r2], r2, this);
}, d.prototype.keys = function() {
  var t2 = [];
  return this.forEach(function(e2, r2) {
    t2.push(r2);
  }), f(t2);
}, d.prototype.values = function() {
  var t2 = [];
  return this.forEach(function(e2) {
    t2.push(e2);
  }), f(t2);
}, d.prototype.entries = function() {
  var t2 = [];
  return this.forEach(function(e2, r2) {
    t2.push([r2, e2]);
  }), f(t2);
}, r && (d.prototype[Symbol.iterator] = d.prototype.entries);
var m = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function w(e2, r2) {
  if (!(this instanceof w)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  var o2, n2, s2 = (r2 = r2 || {}).body;
  if (e2 instanceof w) {
    if (e2.bodyUsed) throw new TypeError("Already read");
    this.url = e2.url, this.credentials = e2.credentials, r2.headers || (this.headers = new d(e2.headers)), this.method = e2.method, this.mode = e2.mode, this.signal = e2.signal, s2 || null == e2._bodyInit || (s2 = e2._bodyInit, e2.bodyUsed = true);
  } else this.url = String(e2);
  if (this.credentials = r2.credentials || this.credentials || "same-origin", !r2.headers && this.headers || (this.headers = new d(r2.headers)), this.method = (o2 = r2.method || this.method || "GET", n2 = o2.toUpperCase(), m.indexOf(n2) > -1 ? n2 : o2), this.mode = r2.mode || this.mode || null, this.signal = r2.signal || this.signal || function() {
    if ("AbortController" in t) return new AbortController().signal;
  }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && s2) throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(s2), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== r2.cache && "no-cache" !== r2.cache)) {
    var i2 = /([?&])_=[^&]*/;
    if (i2.test(this.url)) this.url = this.url.replace(i2, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
function g(t2) {
  var e2 = new FormData();
  return t2.trim().split("&").forEach(function(t3) {
    if (t3) {
      var r2 = t3.split("="), o2 = r2.shift().replace(/\+/g, " "), n2 = r2.join("=").replace(/\+/g, " ");
      e2.append(decodeURIComponent(o2), decodeURIComponent(n2));
    }
  }), e2;
}
function v(t2, e2) {
  if (!(this instanceof v)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (e2 || (e2 = {}), this.type = "default", this.status = void 0 === e2.status ? 200 : e2.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === e2.statusText ? "" : "" + e2.statusText, this.headers = new d(e2.headers), this.url = e2.url || "", this._initBody(t2);
}
w.prototype.clone = function() {
  return new w(this, { body: this._bodyInit });
}, b.call(w.prototype), b.call(v.prototype), v.prototype.clone = function() {
  return new v(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new d(this.headers), url: this.url });
}, v.error = function() {
  var t2 = new v(null, { status: 200, statusText: "" });
  return t2.ok = false, t2.status = 0, t2.type = "error", t2;
};
var A = [301, 302, 303, 307, 308];
v.redirect = function(t2, e2) {
  if (-1 === A.indexOf(e2)) throw new RangeError("Invalid status code");
  return new v(null, { status: e2, headers: { location: t2 } });
};
var T = t.DOMException;
try {
  new T();
} catch (t2) {
  (T = function(t3, e2) {
    this.message = t3, this.name = e2;
    var r2 = Error(t3);
    this.stack = r2.stack;
  }).prototype = Object.create(Error.prototype), T.prototype.constructor = T;
}
function _(e2, r2) {
  return new Promise(function(n2, i2) {
    var a2 = new w(e2, r2);
    if (a2.signal && a2.signal.aborted) return i2(new T("Aborted", "AbortError"));
    var f2 = new XMLHttpRequest();
    function c2() {
      f2.abort();
    }
    if (f2.onload = function() {
      var t2, e3, r3 = { statusText: f2.statusText, headers: (t2 = f2.getAllResponseHeaders() || "", e3 = new d(), t2.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(t3) {
        return 0 === t3.indexOf("\n") ? t3.substr(1, t3.length) : t3;
      }).forEach(function(t3) {
        var r4 = t3.split(":"), o3 = r4.shift().trim();
        if (o3) {
          var n3 = r4.join(":").trim();
          try {
            e3.append(o3, n3);
          } catch (t4) {
            console.warn("Response " + t4.message);
          }
        }
      }), e3) };
      0 === a2.url.indexOf("file://") && (f2.status < 200 || f2.status > 599) ? r3.status = 200 : r3.status = f2.status, r3.url = "responseURL" in f2 ? f2.responseURL : r3.headers.get("X-Request-URL");
      var o2 = "response" in f2 ? f2.response : f2.responseText;
      setTimeout(function() {
        n2(new v(o2, r3));
      }, 0);
    }, f2.onerror = function() {
      setTimeout(function() {
        i2(new TypeError("Network request failed"));
      }, 0);
    }, f2.ontimeout = function() {
      setTimeout(function() {
        i2(new TypeError("Network request timed out"));
      }, 0);
    }, f2.onabort = function() {
      setTimeout(function() {
        i2(new T("Aborted", "AbortError"));
      }, 0);
    }, f2.open(a2.method, function(e3) {
      try {
        return "" === e3 && t.location.href ? t.location.href : e3;
      } catch (t2) {
        return e3;
      }
    }(a2.url), true), "include" === a2.credentials ? f2.withCredentials = true : "omit" === a2.credentials && (f2.withCredentials = false), "responseType" in f2 && (o ? f2.responseType = "blob" : s && (f2.responseType = "arraybuffer")), r2 && "object" == typeof r2.headers && !(r2.headers instanceof d || t.Headers && r2.headers instanceof t.Headers)) {
      var l2 = [];
      Object.getOwnPropertyNames(r2.headers).forEach(function(t2) {
        l2.push(h(t2)), f2.setRequestHeader(t2, u(r2.headers[t2]));
      }), a2.headers.forEach(function(t2, e3) {
        -1 === l2.indexOf(e3) && f2.setRequestHeader(e3, t2);
      });
    } else a2.headers.forEach(function(t2, e3) {
      f2.setRequestHeader(e3, t2);
    });
    a2.signal && (a2.signal.addEventListener("abort", c2), f2.onreadystatechange = function() {
      4 === f2.readyState && a2.signal.removeEventListener("abort", c2);
    }), f2.send(void 0 === a2._bodyInit ? null : a2._bodyInit);
  });
}
_.polyfill = true, t.fetch || (t.fetch = _, t.Headers = d, t.Request = w, t.Response = v);
var E = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || "undefined" != typeof commonjsGlobal && commonjsGlobal || { fetch: null };
E.fetch || (E.fetch = _);
const __bundle46d64517 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: __bundle46d64517$1
}, [__bundle46d64517$1]);
export {
  __bundle46d64517 as _
};
//# sourceMappingURL=__bundle-46d64517-jl9LoYCb.js.map
