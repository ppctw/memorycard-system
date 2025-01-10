/*! For license information please see main.960a55cb.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function o(e) {
          for (
            var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var y = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            y[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
          ].forEach(function (e) {
            var t = e[0];
            y[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            y[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
            function (e) {
              y[e] = new m(e, 2, !1, e, null, !1, !1);
            }
          ),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              y[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            y[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            y[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            y[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            y[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function v(e, t, n, r) {
          var a = y.hasOwnProperty(t) ? y[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) && (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, b);
            y[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, b);
              y[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, b);
            y[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            y[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            y[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          N = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          j = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          U = Object.assign;
        function M(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var I = !1;
        function A(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  }
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var s = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = A(e.type, !1));
            case 11:
              return (e = A(e.type.render, !1));
            case 1:
              return (e = A(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case S:
              return "Portal";
            case E:
              return "Profiler";
            case N:
              return "StrictMode";
            case P:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case j:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null) ? t : W(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === N ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t) return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    }
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    }
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return U({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
            });
        }
        function X(e, t) {
          null != (t = t.checked) && v(e, "checked", t, !1);
        }
        function Y(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") && ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value)))
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return U({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function oe(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n || "number" !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ye(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
          });
        });
        var ge = U(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
          }
        );
        function be(e, t) {
          if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style) throw Error(o(62));
          }
        }
        function ve(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          ke = null,
          Ne = null;
        function Ee(e) {
          if ((e = va(e))) {
            if ("function" !== typeof Se) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), Se(e.stateNode, e.type, t));
          }
        }
        function je(e) {
          ke ? (Ne ? Ne.push(e) : (Ne = [e])) : (ke = e);
        }
        function Ce() {
          if (ke) {
            var e = ke,
              t = Ne;
            if (((Ne = ke = null), Ee(e), t)) for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function _e(e, t) {
          return e(t);
        }
        function Pe() {}
        var Te = !1;
        function Oe(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return _e(e, t, n);
          } finally {
            (Te = !1), (null !== ke || null !== Ne) && (Pe(), Ce());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Le = !0;
              }
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            Le = !1;
          }
        function ze(e, t, n, r, a, o, l, i, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          Ue = null,
          Me = !1,
          Ie = null,
          Ae = {
            onError: function (e) {
              (Fe = !0), (Ue = e);
            }
          };
        function Be(e, t, n, r, a, o, l, i, s) {
          (Fe = !1), (Ue = null), ze.apply(Ae, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (We(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return Ve(a), e;
                    if (l === r) return Ve(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (s === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = l.child; s; ) {
                      if (s === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (s === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Je = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ye = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / st) | 0)) | 0;
              },
          it = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (o &= l) && (r = dt(o));
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function yt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function bt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var vt = 0;
        function xt(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var wt,
          St,
          kt,
          Nt,
          Et,
          jt = !1,
          Ct = [],
          _t = null,
          Pt = null,
          Tt = null,
          Ot = new Map(),
          Rt = new Map(),
          Lt = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              _t = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a]
              }),
              null !== t && null !== (t = va(t)) && St(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ut(e) {
          var t = ba(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = va(n)) && St(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function At() {
          (jt = !1),
            null !== _t && Mt(_t) && (_t = null),
            null !== Pt && Mt(Pt) && (Pt = null),
            null !== Tt && Mt(Tt) && (Tt = null),
            Ot.forEach(It),
            Rt.forEach(It);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            jt || ((jt = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, At)));
        }
        function Wt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Ct.length) {
            Bt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== _t && Bt(_t, e),
              null !== Pt && Bt(Pt, e),
              null !== Tt && Bt(Tt, e),
              Ot.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Ut(n), null === n.blockedOn && Lt.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Vt = !0;
        function $t(e, t, n, r) {
          var a = vt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (vt = 1), Qt(e, t, n, r);
          } finally {
            (vt = a), (Ht.transition = o);
          }
        }
        function qt(e, t, n, r) {
          var a = vt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (vt = 4), Qt(e, t, n, r);
          } finally {
            (vt = a), (Ht.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          if (Vt) {
            var a = Jt(e, t, n, r);
            if (null === a) Vr(e, t, r, Kt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (_t = Ft(_t, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = Ft(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Tt = Ft(Tt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Ot.set(o, Ft(Ot.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (o = a.pointerId), Rt.set(o, Ft(Rt.get(o) || null, e, t, n, r, a)), !0;
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var o = va(a);
                if (
                  (null !== o && wt(o),
                  null === (o = Jt(e, t, n, r)) && Vr(e, t, r, Kt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Jt(e, t, n, r) {
          if (((Kt = null), null !== (e = ba((e = we(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Gt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ye()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Yt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Yt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            U(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
          },
          cn = an(un),
          dn = U({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = U({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX), (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            }
          }),
          hn = an(pn),
          mn = an(U({}, pn, { dataTransfer: 0 })),
          yn = an(U({}, dn, { relatedTarget: 0 })),
          gn = an(U({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          bn = U({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
          }),
          vn = an(bn),
          xn = an(U({}, un, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
          },
          kn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function Nn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e];
        }
        function En() {
          return Nn;
        }
        var jn = U({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            }
          }),
          Cn = an(jn),
          _n = an(
            U({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0
            })
          ),
          Pn = an(
            U({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En
            })
          ),
          Tn = an(U({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          On = U({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0
          }),
          Rn = an(On),
          Ln = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          zn = null;
        c && "documentMode" in document && (zn = document.documentMode);
        var Fn = c && "TextEvent" in window && !zn,
          Un = c && (!Dn || (zn && 8 < zn && 11 >= zn)),
          Mn = String.fromCharCode(32),
          In = !1;
        function An(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var Wn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          je(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Qn = null;
        function Kn(e) {
          Mr(e, 0);
        }
        function Jn(e) {
          if (Q(xa(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Yn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"), (Zn = "function" === typeof er.oninput);
            }
            Yn = Zn;
          } else Yn = !1;
          Xn = Yn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), (Qn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Jn(Qn)) {
            var t = [];
            $n(t, Qn, e, we(e)), Oe(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Jn(Qn);
        }
        function or(e, t) {
          if ("click" === e) return Jn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function sr(e, t) {
          if (ir(e, t)) return !0;
          if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
              if (((t = r.start), void 0 === (e = r.end) && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          yr = null,
          gr = null,
          br = null,
          vr = !1;
        function xr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          vr ||
            null == yr ||
            yr !== K(r) ||
            ("selectionStart" in (r = yr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset
                }),
            (br && sr(br, r)) ||
              ((br = r),
              0 < (r = qr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Sr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd")
          },
          kr = {},
          Nr = {};
        function Er(e) {
          if (kr[e]) return kr[e];
          if (!Sr[e]) return e;
          var t,
            n = Sr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Nr) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Nr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var jr = Er("animationend"),
          Cr = Er("animationiteration"),
          _r = Er("animationstart"),
          Pr = Er("transitionend"),
          Tr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          Tr.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < Or.length; Lr++) {
          var Dr = Or[Lr];
          Rr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Rr(jr, "onAnimationEnd"),
          Rr(Cr, "onAnimationIteration"),
          Rr(_r, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Pr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(" ")
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(" ")
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(" ")
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
        function Ur(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, s, u) {
              if ((Be.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(o(198));
                var c = Ue;
                (Fe = !1), (Ue = null), Me || ((Me = !0), (Ie = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    s = i.instance,
                    u = i.currentTarget;
                  if (((i = i.listener), s !== o && a.isPropagationStopped())) break e;
                  Ur(a, i, u), (o = s);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((s = (i = r[l]).instance),
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ur(a, i, u), (o = s);
                }
            }
          }
          if (Me) throw ((e = Ie), (Me = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Ar(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t && (Fr.has(t) || Ar(t, !1, e), Ar(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ar("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var s = l.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = l.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = ba(i))) return;
                  if (5 === (s = l.tag) || 6 === s) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = o,
              a = we(n),
              l = [];
            e: {
              var i = Tr.get(e);
              if (void 0 !== i) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = yn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = yn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = yn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pn;
                    break;
                  case jr:
                  case Cr:
                  case _r:
                    s = gn;
                    break;
                  case Pr:
                    s = Tn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = vn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = _n;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m), null !== f && null != (m = Re(h, f)) && c.push($r(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length && ((i = new s(i, u, null, n, a)), l.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ba(u) && !u[ha])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !== (u = (u = n.relatedTarget || n.toElement) ? ba(u) : null) &&
                        (u !== (d = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = _n), (m = "onPointerLeave"), (f = "onPointerEnter"), (h = "pointer")),
                  (d = null == s ? i : xa(s)),
                  (p = null == u ? i : xa(u)),
                  ((i = new c(m, h + "leave", s, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  ba(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Qr(p)) h++;
                    for (p = 0, m = f; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (f = Qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qr(c)), (f = Qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Kr(l, i, s, c, !1), null !== u && null !== d && Kr(l, d, u, c, !0);
              }
              if (
                "select" === (s = (i = r ? xa(r) : window).nodeName && i.nodeName.toLowerCase()) ||
                ("input" === s && "file" === i.type)
              )
                var y = Gn;
              else if (Vn(i))
                if (Xn) y = lr;
                else {
                  y = ar;
                  var g = rr;
                }
              else
                (s = i.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (y = or);
              switch (
                (y && (y = y(e, r))
                  ? $n(l, y, n, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(g) || "true" === g.contentEditable) && ((yr = g), (gr = r), (br = null));
                  break;
                case "focusout":
                  br = gr = yr = null;
                  break;
                case "mousedown":
                  vr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (vr = !1), xr(l, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(l, n, a);
              }
              var b;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var v = "onCompositionStart";
                      break e;
                    case "compositionend":
                      v = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      v = "onCompositionUpdate";
                      break e;
                  }
                  v = void 0;
                }
              else
                Wn
                  ? An(e, n) && (v = "onCompositionEnd")
                  : "keydown" === e && 229 === n.keyCode && (v = "onCompositionStart");
              v &&
                (Un &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== v
                    ? "onCompositionEnd" === v && Wn && (b = en())
                    : ((Yt = "value" in (Xt = a) ? Xt.value : Xt.textContent), (Wn = !0))),
                0 < (g = qr(r, v)).length &&
                  ((v = new xn(v, e, null, n, a)),
                  l.push({ event: v, listeners: g }),
                  b ? (v.data = b) : null !== (b = Bn(n)) && (v.data = b))),
                (b = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!Dn && An(e, t))
                          ? ((e = en()), (Zt = Yt = Xt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Un && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = b));
            }
            Mr(l, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Re(e, n)) && r.unshift($r(e, o, a)),
              null != (o = Re(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              u = i.stateNode;
            if (null !== s && s === r) break;
            5 === i.tag &&
              null !== u &&
              ((i = u),
              a
                ? null != (s = Re(n, o)) && l.unshift($r(n, s, i))
                : a || (null != (s = Re(n, o)) && l.push($r(n, s, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Jr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e).replace(Jr, "\n").replace(Gr, "");
        }
        function Yr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Wt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ya = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ba(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function va(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var Sa = [],
          ka = -1;
        function Na(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > ka || ((e.current = Sa[ka]), (Sa[ka] = null), ka--);
        }
        function ja(e, t) {
          ka++, (Sa[ka] = e.current), (e.current = t);
        }
        var Ca = {},
          _a = Na(Ca),
          Pa = Na(!1),
          Ta = Ca;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Ea(Pa), Ea(_a);
        }
        function Da(e, t, n) {
          if (_a.current !== Ca) throw Error(o(168));
          ja(_a, t), ja(Pa, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), "function" !== typeof r.getChildContext)) return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || "Unknown", a));
          return U({}, n, r);
        }
        function Fa(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ca),
            (Ta = _a.current),
            ja(_a, e),
            ja(Pa, Pa.current),
            !0
          );
        }
        function Ua(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = za(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Pa),
              Ea(_a),
              ja(_a, e))
            : Ea(Pa),
            ja(Pa, n);
        }
        var Ma = null,
          Ia = !1,
          Aa = !1;
        function Ba(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function Wa() {
          if (!Aa && null !== Ma) {
            Aa = !0;
            var e = 0,
              t = vt;
            try {
              var n = Ma;
              for (vt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ma = null), (Ia = !1);
            } catch (a) {
              throw (null !== Ma && (Ma = Ma.slice(e + 1)), Qe(Ze, Wa), a);
            } finally {
              (vt = t), (Aa = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Va = 0,
          $a = null,
          qa = 0,
          Qa = [],
          Ka = 0,
          Ja = null,
          Ga = 1,
          Xa = "";
        function Ya(e, t) {
          (Ha[Va++] = qa), (Ha[Va++] = $a), ($a = e), (qa = t);
        }
        function Za(e, t, n) {
          (Qa[Ka++] = Ga), (Qa[Ka++] = Xa), (Qa[Ka++] = Ja), (Ja = e);
          var r = Ga;
          e = Xa;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ga = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ga = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ya(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; ) ($a = Ha[--Va]), (Ha[Va] = null), (qa = Ha[--Va]), (Ha[Va] = null);
          for (; e === Ja; )
            (Ja = Qa[--Ka]),
              (Qa[Ka] = null),
              (Xa = Qa[--Ka]),
              (Qa[Ka] = null),
              (Ga = Qa[--Ka]),
              (Qa[Ka] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = Ou(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ja ? { id: Ga, overflow: Xa } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Ou(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(n.nextSibling);
                var r = no;
                t && io(e, t) ? lo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ua(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var yo = x.ReactCurrentBatchConfig;
        function go(e, t, n) {
          if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function bo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
              )
            ))
          );
        }
        function vo(e) {
          return (0, e._init)(e._payload);
        }
        function xo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Uu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o && null !== o && o.$$typeof === R && vo(o) === t.type))
              ? (((r = a(t, n.props)).ref = go(e, t, n)), (r.return = e), r)
              : (((r = Du(n.type, n.key, n.props, null, e.mode, r)).ref = go(e, t, n)),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Mu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = zu(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Uu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Du(t.type, t.key, t.props, null, e.mode, n)).ref = go(e, null, t)),
                    (n.return = e),
                    n
                  );
                case S:
                  return ((t = Mu(t, e.mode, n)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t)) return ((t = zu(t, e.mode, n, null)).return = e), t;
              bo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case S:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : d(e, t, n, r, null);
              bo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case S:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r)) return d(t, (e = e.get(n) || null), r, a, null);
              bo(t, r);
            }
            return null;
          }
          function m(a, o, i, s) {
            for (
              var u = null, c = null, d = o, m = (o = 0), y = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((y = d), (d = null)) : (y = d.sibling);
              var g = p(a, d, i[m], s);
              if (null === g) {
                null === d && (d = y);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (o = l(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = y);
            }
            if (m === i.length) return n(a, d), ao && Ya(a, m), u;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], s)) &&
                  ((o = l(d, o, m)), null === c ? (u = d) : (c.sibling = d), (c = d));
              return ao && Ya(a, m), u;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (y = h(d, a, m, i[m], s)) &&
                (e && null !== y.alternate && d.delete(null === y.key ? m : y.key),
                (o = l(y, o, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ya(a, m),
              u
            );
          }
          function y(a, i, s, u) {
            var c = z(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var d = (c = null), m = i, y = (i = 0), g = null, b = s.next();
              null !== m && !b.done;
              y++, b = s.next()
            ) {
              m.index > y ? ((g = m), (m = null)) : (g = m.sibling);
              var v = p(a, m, b.value, u);
              if (null === v) {
                null === m && (m = g);
                break;
              }
              e && m && null === v.alternate && t(a, m),
                (i = l(v, i, y)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v),
                (m = g);
            }
            if (b.done) return n(a, m), ao && Ya(a, y), c;
            if (null === m) {
              for (; !b.done; y++, b = s.next())
                null !== (b = f(a, b.value, u)) &&
                  ((i = l(b, i, y)), null === d ? (c = b) : (d.sibling = b), (d = b));
              return ao && Ya(a, y), c;
            }
            for (m = r(a, m); !b.done; y++, b = s.next())
              null !== (b = h(m, a, y, b.value, u)) &&
                (e && null !== b.alternate && m.delete(null === b.key ? y : b.key),
                (i = l(b, i, y)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ya(a, y),
              c
            );
          }
          return function e(r, o, l, s) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === k &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case w:
                  e: {
                    for (var u = l.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = l.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling), ((o = a(c, l.props.children)).return = r), (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            vo(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, l.props)).ref = go(r, c, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === k
                      ? (((o = zu(l.props.children, r.mode, s, l.key)).return = r), (r = o))
                      : (((s = Du(l.type, l.key, l.props, null, r.mode, s)).ref = go(r, o, l)),
                        (s.return = r),
                        (r = s));
                  }
                  return i(r);
                case S:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling), ((o = a(o, l.children || [])).return = r), (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Mu(l, r.mode, s)).return = r), (r = o);
                  }
                  return i(r);
                case R:
                  return e(r, o, (c = l._init)(l._payload), s);
              }
              if (te(l)) return m(r, o, l, s);
              if (z(l)) return y(r, o, l, s);
              bo(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Uu(l, r.mode, s)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var wo = xo(!0),
          So = xo(!1),
          ko = Na(null),
          No = null,
          Eo = null,
          jo = null;
        function Co() {
          jo = Eo = No = null;
        }
        function _o(e) {
          var t = ko.current;
          Ea(ko), (e._currentValue = t);
        }
        function Po(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function To(e, t) {
          (No = e),
            (jo = Eo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (vi = !0), (e.firstContext = null));
        }
        function Oo(e) {
          var t = e._currentValue;
          if (jo !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === Eo)) {
              if (null === No) throw Error(o(308));
              (Eo = e), (No.dependencies = { lanes: 0, firstContext: e });
            } else Eo = Eo.next = e;
          return t;
        }
        var Ro = null;
        function Lo(e) {
          null === Ro ? (Ro = [e]) : Ro.push(e);
        }
        function Do(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a ? ((n.next = n), Lo(t)) : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            zo(e, r)
          );
        }
        function zo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Fo = !1;
        function Uo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null
          };
        }
        function Mo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects
              });
        }
        function Io(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Ao(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _s))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              zo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Lo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            zo(e, n)
          );
        }
        function Bo(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        function Wo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ho(e, t, n, r) {
          var a = e.updateQueue;
          Fo = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              u = s.next;
            (s.next = null), null === l ? (o = u) : (l.next = u), (l = s);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u), (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, c = u = s = null, i = o; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f = "function" === typeof (h = m.payload) ? h.call(p, d, f) : h) ||
                        void 0 === f
                      )
                        break e;
                      d = U({}, d, f);
                      break e;
                    case 2:
                      Fo = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64), null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (l |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Fs |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Vo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a)) throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var $o = {},
          qo = Na($o),
          Qo = Na($o),
          Ko = Na($o);
        function Jo(e) {
          if (e === $o) throw Error(o(174));
          return e;
        }
        function Go(e, t) {
          switch ((ja(Ko, t), ja(Qo, e), ja(qo, $o), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          Ea(qo), ja(qo, t);
        }
        function Xo() {
          Ea(qo), Ea(Qo), Ea(Ko);
        }
        function Yo(e) {
          Jo(Ko.current);
          var t = Jo(qo.current),
            n = se(t, e.type);
          t !== n && (ja(Qo, e), ja(qo, n));
        }
        function Zo(e) {
          Qo.current === e && (Ea(qo), Ea(Qo));
        }
        var el = Na(0);
        function tl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var nl = [];
        function rl() {
          for (var e = 0; e < nl.length; e++) nl[e]._workInProgressVersionPrimary = null;
          nl.length = 0;
        }
        var al = x.ReactCurrentDispatcher,
          ol = x.ReactCurrentBatchConfig,
          ll = 0,
          il = null,
          sl = null,
          ul = null,
          cl = !1,
          dl = !1,
          fl = 0,
          pl = 0;
        function hl() {
          throw Error(o(321));
        }
        function ml(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function yl(e, t, n, r, a, l) {
          if (
            ((ll = l),
            (il = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (al.current = null === e || null === e.memoizedState ? Zl : ei),
            (e = n(r, a)),
            dl)
          ) {
            l = 0;
            do {
              if (((dl = !1), (fl = 0), 25 <= l)) throw Error(o(301));
              (l += 1), (ul = sl = null), (t.updateQueue = null), (al.current = ti), (e = n(r, a));
            } while (dl);
          }
          if (
            ((al.current = Yl),
            (t = null !== sl && null !== sl.next),
            (ll = 0),
            (ul = sl = il = null),
            (cl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function gl() {
          var e = 0 !== fl;
          return (fl = 0), e;
        }
        function bl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
          };
          return null === ul ? (il.memoizedState = ul = e) : (ul = ul.next = e), ul;
        }
        function vl() {
          if (null === sl) {
            var e = il.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = sl.next;
          var t = null === ul ? il.memoizedState : ul.next;
          if (null !== t) (ul = t), (sl = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (sl = e).memoizedState,
              baseState: sl.baseState,
              baseQueue: sl.baseQueue,
              queue: sl.queue,
              next: null
            }),
              null === ul ? (il.memoizedState = ul = e) : (ul = ul.next = e);
          }
          return ul;
        }
        function xl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function wl(e) {
          var t = vl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = sl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var s = (i = null),
              u = null,
              c = l;
            do {
              var d = c.lane;
              if ((ll & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null
                };
                null === u ? ((s = u = f), (i = r)) : (u = u.next = f), (il.lanes |= d), (Fs |= d);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === u ? (i = r) : (u.next = s),
              ir(r, t.memoizedState) || (vi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (il.lanes |= l), (Fs |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Sl(e) {
          var t = vl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (vi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function kl() {}
        function Nl(e, t) {
          var n = il,
            r = vl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (vi = !0)),
            (r = r.queue),
            Fl(Cl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || l || (null !== ul && 1 & ul.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), Ol(9, jl.bind(null, n, r, a, t), void 0, null), null === Ps))
              throw Error(o(349));
            0 !== (30 & ll) || El(n, t, a);
          }
          return a;
        }
        function El(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = il.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (il.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function jl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), _l(t) && Pl(e);
        }
        function Cl(e, t, n) {
          return n(function () {
            _l(t) && Pl(e);
          });
        }
        function _l(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Pl(e) {
          var t = zo(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Tl(e) {
          var t = bl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xl,
              lastRenderedState: e
            }),
            (t.queue = e),
            (e = e.dispatch = Kl.bind(null, il, e)),
            [t.memoizedState, e]
          );
        }
        function Ol(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = il.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (il.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Rl() {
          return vl().memoizedState;
        }
        function Ll(e, t, n, r) {
          var a = bl();
          (il.flags |= e), (a.memoizedState = Ol(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Dl(e, t, n, r) {
          var a = vl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== sl) {
            var l = sl.memoizedState;
            if (((o = l.destroy), null !== r && ml(r, l.deps)))
              return void (a.memoizedState = Ol(t, n, o, r));
          }
          (il.flags |= e), (a.memoizedState = Ol(1 | t, n, o, r));
        }
        function zl(e, t) {
          return Ll(8390656, 8, e, t);
        }
        function Fl(e, t) {
          return Dl(2048, 8, e, t);
        }
        function Ul(e, t) {
          return Dl(4, 2, e, t);
        }
        function Ml(e, t) {
          return Dl(4, 4, e, t);
        }
        function Il(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Al(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Dl(4, 4, Il.bind(null, t, e), n)
          );
        }
        function Bl() {}
        function Wl(e, t) {
          var n = vl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ml(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Hl(e, t) {
          var n = vl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ml(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Vl(e, t, n) {
          return 0 === (21 & ll)
            ? (e.baseState && ((e.baseState = !1), (vi = !0)), (e.memoizedState = n))
            : (ir(n, t) || ((n = mt()), (il.lanes |= n), (Fs |= n), (e.baseState = !0)), t);
        }
        function $l(e, t) {
          var n = vt;
          (vt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ol.transition;
          ol.transition = {};
          try {
            e(!1), t();
          } finally {
            (vt = n), (ol.transition = r);
          }
        }
        function ql() {
          return vl().memoizedState;
        }
        function Ql(e, t, n) {
          var r = tu(e);
          if (
            ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Jl(e))
          )
            Gl(t, n);
          else if (null !== (n = Do(e, t, n, r))) {
            nu(n, e, r, eu()), Xl(n, t, r);
          }
        }
        function Kl(e, t, n) {
          var r = tu(e),
            a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (Jl(e)) Gl(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var s = t.interleaved;
                  return (
                    null === s ? ((a.next = a), Lo(t)) : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Do(e, t, a, r)) && (nu(n, e, r, (a = eu())), Xl(n, t, r));
          }
        }
        function Jl(e) {
          var t = e.alternate;
          return e === il || (null !== t && t === il);
        }
        function Gl(e, t) {
          dl = cl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function Xl(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        var Yl = {
            readContext: Oo,
            useCallback: hl,
            useContext: hl,
            useEffect: hl,
            useImperativeHandle: hl,
            useInsertionEffect: hl,
            useLayoutEffect: hl,
            useMemo: hl,
            useReducer: hl,
            useRef: hl,
            useState: hl,
            useDebugValue: hl,
            useDeferredValue: hl,
            useTransition: hl,
            useMutableSource: hl,
            useSyncExternalStore: hl,
            useId: hl,
            unstable_isNewReconciler: !1
          },
          Zl = {
            readContext: Oo,
            useCallback: function (e, t) {
              return (bl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Oo,
            useEffect: zl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ll(4194308, 4, Il.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ll(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ll(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = bl();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = bl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t
                }),
                (r.queue = e),
                (e = e.dispatch = Ql.bind(null, il, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (bl().memoizedState = e);
            },
            useState: Tl,
            useDebugValue: Bl,
            useDeferredValue: function (e) {
              return (bl().memoizedState = e);
            },
            useTransition: function () {
              var e = Tl(!1),
                t = e[0];
              return (e = $l.bind(null, e[1])), (bl().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = il,
                a = bl();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ps)) throw Error(o(349));
                0 !== (30 & ll) || El(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                zl(Cl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Ol(9, jl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = bl(),
                t = Ps.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t = ":" + t + "R" + (n = (Ga & ~(1 << (32 - lt(Ga) - 1))).toString(32) + n)),
                  0 < (n = fl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = pl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1
          },
          ei = {
            readContext: Oo,
            useCallback: Wl,
            useContext: Oo,
            useEffect: Fl,
            useImperativeHandle: Al,
            useInsertionEffect: Ul,
            useLayoutEffect: Ml,
            useMemo: Hl,
            useReducer: wl,
            useRef: Rl,
            useState: function () {
              return wl(xl);
            },
            useDebugValue: Bl,
            useDeferredValue: function (e) {
              return Vl(vl(), sl.memoizedState, e);
            },
            useTransition: function () {
              return [wl(xl)[0], vl().memoizedState];
            },
            useMutableSource: kl,
            useSyncExternalStore: Nl,
            useId: ql,
            unstable_isNewReconciler: !1
          },
          ti = {
            readContext: Oo,
            useCallback: Wl,
            useContext: Oo,
            useEffect: Fl,
            useImperativeHandle: Al,
            useInsertionEffect: Ul,
            useLayoutEffect: Ml,
            useMemo: Hl,
            useReducer: Sl,
            useRef: Rl,
            useState: function () {
              return Sl(xl);
            },
            useDebugValue: Bl,
            useDeferredValue: function (e) {
              var t = vl();
              return null === sl ? (t.memoizedState = e) : Vl(t, sl.memoizedState, e);
            },
            useTransition: function () {
              return [Sl(xl)[0], vl().memoizedState];
            },
            useMutableSource: kl,
            useSyncExternalStore: Nl,
            useId: ql,
            unstable_isNewReconciler: !1
          };
        function ni(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = U({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ri(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : U({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ai = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Io(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ao(e, o, a)) && (nu(t, e, a, r), Bo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Io(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Ao(e, o, a)) && (nu(t, e, a, r), Bo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Io(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ao(e, a, r)) && (nu(t, e, r, n), Bo(t, e, r));
          }
        };
        function oi(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype || !t.prototype.isPureReactComponent || !sr(n, r) || !sr(a, o);
        }
        function li(e, t, n) {
          var r = !1,
            a = Ca,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Oo(o))
              : ((a = Ra(t) ? Ta : _a.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Oa(e, a) : Ca)),
            (t = new t(n, o)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ai),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function ii(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ai.enqueueReplaceState(t, t.state, null);
        }
        function si(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Uo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Oo(o))
            : ((o = Ra(t) ? Ta : _a.current), (a.context = Oa(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (ri(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount && a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
              t !== a.state && ai.enqueueReplaceState(a, a.state, null),
              Ho(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function ui(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function ci(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fi = "function" === typeof WeakMap ? WeakMap : Map;
        function pi(e, t, n) {
          ((n = Io(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vs || ((Vs = !0), ($s = r)), di(0, t);
            }),
            n
          );
        }
        function hi(e, t, n) {
          (n = Io(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof r && (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
              }),
            n
          );
        }
        function mi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
        }
        function yi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Io(-1, 1)).tag = 2), Ao(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = x.ReactCurrentOwner,
          vi = !1;
        function xi(e, t, n, r) {
          t.child = null === e ? So(t, null, n, r) : wo(t, e.child, n, r);
        }
        function wi(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            To(t, a),
            (r = yl(e, t, n, r, o, a)),
            (n = gl()),
            null === e || vi
              ? (ao && n && eo(t), (t.flags |= 1), xi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Vi(e, t, a))
          );
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ru(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Du(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), ki(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : sr)(l, r) && e.ref === t.ref)
              return Vi(e, t, a);
          }
          return (t.flags |= 1), ((e = Lu(o, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function ki(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((vi = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Vi(e, t, a);
              0 !== (131072 & e.flags) && (vi = !0);
            }
          }
          return ji(e, t, n, r, a);
        }
        function Ni(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                ja(Ls, Rs),
                (Rs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  ja(Ls, Rs),
                  (Rs |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== o ? o.baseLanes : n),
                ja(Ls, Rs),
                (Rs |= r);
            }
          else
            null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
              ja(Ls, Rs),
              (Rs |= r);
          return xi(e, t, a, n), t.child;
        }
        function Ei(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function ji(e, t, n, r, a) {
          var o = Ra(n) ? Ta : _a.current;
          return (
            (o = Oa(t, o)),
            To(t, a),
            (n = yl(e, t, n, r, o, a)),
            (r = gl()),
            null === e || vi
              ? (ao && r && eo(t), (t.flags |= 1), xi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), Vi(e, t, a))
          );
        }
        function Ci(e, t, n, r, a) {
          if (Ra(n)) {
            var o = !0;
            Fa(t);
          } else o = !1;
          if ((To(t, a), null === t.stateNode)) Hi(e, t), li(t, n, r), si(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var s = l.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Oo(u))
              : (u = Oa(t, (u = Ra(n) ? Ta : _a.current)));
            var c = n.getDerivedStateFromProps,
              d = "function" === typeof c || "function" === typeof l.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || s !== u) && ii(t, l, r, u)),
              (Fo = !1);
            var f = t.memoizedState;
            (l.state = f),
              Ho(t, r, l, a),
              (s = t.memoizedState),
              i !== r || f !== s || Pa.current || Fo
                ? ("function" === typeof c && (ri(t, n, c, r), (s = t.memoizedState)),
                  (i = Fo || oi(t, n, i, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount && l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount && (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = u),
                  (r = i))
                : ("function" === typeof l.componentDidMount && (t.flags |= 4194308), (r = !1));
          } else {
            (l = t.stateNode),
              Mo(e, t),
              (i = t.memoizedProps),
              (u = t.type === t.elementType ? i : ni(t.type, i)),
              (l.props = u),
              (d = t.pendingProps),
              (f = l.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Oo(s))
                : (s = Oa(t, (s = Ra(n) ? Ta : _a.current)));
            var p = n.getDerivedStateFromProps;
            (c = "function" === typeof p || "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== s) && ii(t, l, r, s)),
              (Fo = !1),
              (f = t.memoizedState),
              (l.state = f),
              Ho(t, r, l, a);
            var h = t.memoizedState;
            i !== d || f !== h || Pa.current || Fo
              ? ("function" === typeof p && (ri(t, n, p, r), (h = t.memoizedState)),
                (u = Fo || oi(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, s),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof l.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = s),
                (r = u))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _i(e, t, n, r, o, a);
        }
        function _i(e, t, n, r, a, o) {
          Ei(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Ua(t, n, !1), Vi(e, t, o);
          (r = t.stateNode), (bi.current = t);
          var i = l && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = wo(t, e.child, null, o)), (t.child = wo(t, null, i, o)))
              : xi(e, t, i, o),
            (t.memoizedState = r.state),
            a && Ua(t, n, !0),
            t.child
          );
        }
        function Pi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            Go(e, t.containerInfo);
        }
        function Ti(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), xi(e, t, n, r), t.child;
        }
        var Oi,
          Ri,
          Li,
          Di,
          zi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ui(e, t, n) {
          var r,
            a = t.pendingProps,
            l = el.current,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            ja(el, 1 & l),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = Fu(s, a, 0, null)),
                      (e = zu(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Fi(n)),
                      (t.memoizedState = zi),
                      e)
                    : Mi(t, s))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ii(e, t, i, (r = ci(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = t.mode),
                    (r = Fu({ mode: "visible", children: r.children }, a, 0, null)),
                    ((l = zu(l, a, i, null)).flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    0 !== (1 & t.mode) && wo(t, e.child, null, i),
                    (t.child.memoizedState = Fi(i)),
                    (t.memoizedState = zi),
                    l);
              if (0 === (1 & t.mode)) return Ii(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var s = r.dgst;
                return (r = s), Ii(e, t, i, (r = ci((l = Error(o(419))), r, void 0)));
              }
              if (((s = 0 !== (i & e.childLanes)), vi || s)) {
                if (null !== (r = Ps)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), zo(e, a), nu(r, e, a, -1));
                }
                return mu(), Ii(e, t, i, (r = ci(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[Ka++] = Ga),
                    (Qa[Ka++] = Xa),
                    (Qa[Ka++] = Ja),
                    (Ga = e.id),
                    (Xa = e.overflow),
                    (Ja = t)),
                  (t = Mi(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, l, n);
          if (i) {
            (i = a.fallback), (s = t.mode), (r = (l = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== l
                ? (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null))
                : ((a = Lu(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r ? (i = Lu(r, i)) : ((i = zu(i, s, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Fi(n)
                  : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = zi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Lu(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Mi(e, t) {
          return (
            ((t = Fu({ mode: "visible", children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Ii(e, t, n, r) {
          return (
            null !== r && mo(r),
            wo(t, e.child, null, n),
            ((e = Mi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ai(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Po(e.return, t, n);
        }
        function Bi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Wi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((xi(e, t, r.children, n), 0 !== (2 & (r = el.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ai(e, n, t);
                else if (19 === e.tag) Ai(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((ja(el, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === tl(e) && (a = n), (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bi(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === tl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bi(t, !0, n, null, o);
                break;
              case "together":
                Bi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $i(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qi(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return qi(t), null;
            case 1:
            case 17:
              return Ra(t.type) && La(), qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xo(),
                Ea(Pa),
                Ea(_a),
                rl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== oo && (lu(oo), (oo = null)))),
                Ri(e, t),
                qi(t),
                null
              );
            case 5:
              Zo(t);
              var a = Jo(Ko.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Li(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return qi(t), null;
                }
                if (((e = Jo(qo.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < zr.length; a++) Ir(zr[a], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      G(r, l), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }), Ir("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Ir("invalid", r);
                  }
                  for (var s in (be(n, l), (a = null), l))
                    if (l.hasOwnProperty(s)) {
                      var u = l[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== l.suppressHydrationWarning && Yr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== l.suppressHydrationWarning && Yr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : i.hasOwnProperty(s) && null != u && "onScroll" === s && Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), Z(r, l, !0);
                      break;
                    case "textarea":
                      q(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML = "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Oi(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ve(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < zr.length; a++) Ir(zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ir("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (a = r);
                        break;
                      case "details":
                        Ir("toggle", e), (a = r);
                        break;
                      case "input":
                        G(e, r), (a = J(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = U({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ir("invalid", e);
                    }
                    for (l in (be(n, a), (u = a)))
                      if (u.hasOwnProperty(l)) {
                        var c = u[l];
                        "style" === l
                          ? ye(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === l
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && Ir("scroll", e)
                              : null != c && v(e, l, c, s));
                      }
                    switch (n) {
                      case "input":
                        q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        q(e), le(e);
                        break;
                      case "option":
                        null != r.value && e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qi(t), null;
            case 6:
              if (e && null != t.stateNode) Di(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
                if (((n = Jo(Ko.current)), Jo(qo.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t),
                    (t.stateNode = r);
              }
              return qi(t), null;
            case 13:
              if (
                (Ea(el),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  po(), ho(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null))
                      throw Error(o(317));
                    l[fa] = t;
                  } else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  qi(t), (l = !1);
                } else null !== oo && (lu(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & el.current) ? 0 === Ds && (Ds = 3) : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qi(t),
                  null);
            case 4:
              return Xo(), Ri(e, t), null === e && Wr(t.stateNode.containerInfo), qi(t), null;
            case 10:
              return _o(t.type._context), qi(t), null;
            case 19:
              if ((Ea(el), null === (l = t.memoizedState))) return qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = l.rendering)))
                if (r) $i(l, !1);
                else {
                  if (0 !== Ds || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = tl(e))) {
                        for (
                          t.flags |= 128,
                            $i(l, !1),
                            null !== (r = s.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return ja(el, (1 & el.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Xe() > Ws &&
                    ((t.flags |= 128), (r = !0), $i(l, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = tl(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      $i(l, !0),
                      null === l.tail && "hidden" === l.tailMode && !s.alternate && !ao)
                    )
                      return qi(t), null;
                  } else
                    2 * Xe() - l.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 128), (r = !0), $i(l, !1), (t.lanes = 4194304));
                l.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = l.last) ? (n.sibling = s) : (t.child = s), (l.last = s));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = el.current),
                  ja(el, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qi(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Rs) && (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Ki(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && La(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                Xo(),
                Ea(Pa),
                Ea(_a),
                rl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zo(t), null;
            case 13:
              if ((Ea(el), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return Ea(el), null;
            case 4:
              return Xo(), null;
            case 10:
              return _o(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Oi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ri = function () {}),
          (Li = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Jo(qo.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (l = []);
                  break;
                case "select":
                  (a = U({}, a, { value: void 0 })), (r = U({}, r, { value: void 0 })), (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (be(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}), (n[o] = u[o]));
                    } else n || (l || (l = []), l.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (l = l || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (l = l || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ir("scroll", e),
                            l || s === u || (l = []))
                          : (l = l || []).push(c, u));
              }
              n && (l = l || []).push("style", n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Di = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ji = !1,
          Gi = !1,
          Xi = "function" === typeof WeakSet ? WeakSet : Set,
          Yi = null;
        function Zi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Nu(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Nu(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && es(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa], delete t[pa], delete t[ma], delete t[ya], delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function is(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; ) ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; ) us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Gi || Zi(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n),
                    Wt(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Gi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l && (0 !== (2 & o) || 0 !== (4 & o)) && es(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (!Gi && (Zi(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount))
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Nu(n, t, i);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gi = (r = Gi) || null !== n.memoizedState), fs(e, t, n), (Gi = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xi()),
              t.forEach(function (t) {
                var r = _u.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  s = i;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(o(160));
                ps(l, i, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Nu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) ys(t, e), (t = t.sibling);
        }
        function ys(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), gs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (y) {
                  Nu(e, e.return, y);
                }
                try {
                  ns(5, e, e.return);
                } catch (y) {
                  Nu(e, e.return, y);
                }
              }
              break;
            case 1:
              ms(t, e), gs(e), 512 & r && null !== n && Zi(n, n.return);
              break;
            case 5:
              if ((ms(t, e), gs(e), 512 & r && null !== n && Zi(n, n.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (y) {
                  Nu(e, e.return, y);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s && "radio" === l.type && null != l.name && X(a, l), ve(s, i);
                    var c = ve(s, l);
                    for (i = 0; i < u.length; i += 2) {
                      var d = u[i],
                        f = u[i + 1];
                      "style" === d
                        ? ye(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : v(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        Y(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (y) {
                    Nu(e, e.return, y);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (y) {
                  Nu(e, e.return, y);
                }
              }
              break;
            case 3:
              if ((ms(t, e), gs(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  Wt(t.containerInfo);
                } catch (y) {
                  Nu(e, e.return, y);
                }
              break;
            case 4:
            default:
              ms(t, e), gs(e);
              break;
            case 13:
              ms(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate && null !== a.alternate.memoizedState) ||
                    (Bs = Xe())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Gi = (c = Gi) || d), ms(t, e), (Gi = c)) : ms(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Yi = e, d = e.child; null !== d; ) {
                    for (f = Yi = d; null !== Yi; ) {
                      switch (((h = (p = Yi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zi(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (y) {
                              Nu(r, n, y);
                            }
                          }
                          break;
                        case 5:
                          Zi(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Yi = h)) : ws(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((s = f.stateNode),
                              (i =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", i)));
                      } catch (y) {
                        Nu(e, e.return, y);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (y) {
                        Nu(e, e.return, y);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), gs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)), us(e, is(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  ss(e, is(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              Nu(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Yi = e), vs(e, t, n);
        }
        function vs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Yi; ) {
            var a = Yi,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Ji;
              if (!l) {
                var i = a.alternate,
                  s = (null !== i && null !== i.memoizedState) || Gi;
                i = Ji;
                var u = Gi;
                if (((Ji = l), (Gi = s) && !u))
                  for (Yi = a; null !== Yi; )
                    (s = (l = Yi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Ss(a)
                        : null !== s
                        ? ((s.return = l), (Yi = s))
                        : Ss(a);
                for (; null !== o; ) (Yi = o), vs(o, t, n), (o = o.sibling);
                (Yi = a), (Ji = i), (Gi = u);
              }
              xs(e);
            } else 0 !== (8772 & a.subtreeFlags) && null !== o ? ((o.return = a), (Yi = o)) : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Yi; ) {
            var t = Yi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ni(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Vo(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Vo(t, i, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Wt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Gi || (512 & t.flags && as(t));
              } catch (p) {
                Nu(t, t.return, p);
              }
            }
            if (t === e) {
              Yi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Yi = n);
              break;
            }
            Yi = t.return;
          }
        }
        function ws(e) {
          for (; null !== Yi; ) {
            var t = Yi;
            if (t === e) {
              Yi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Yi = n);
              break;
            }
            Yi = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Yi; ) {
            var t = Yi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Nu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Nu(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Nu(t, o, s);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Nu(t, l, s);
                  }
              }
            } catch (s) {
              Nu(t, t.return, s);
            }
            if (t === e) {
              Yi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Yi = i);
              break;
            }
            Yi = t.return;
          }
        }
        var ks,
          Ns = Math.ceil,
          Es = x.ReactCurrentDispatcher,
          js = x.ReactCurrentOwner,
          Cs = x.ReactCurrentBatchConfig,
          _s = 0,
          Ps = null,
          Ts = null,
          Os = 0,
          Rs = 0,
          Ls = Na(0),
          Ds = 0,
          zs = null,
          Fs = 0,
          Us = 0,
          Ms = 0,
          Is = null,
          As = null,
          Bs = 0,
          Ws = 1 / 0,
          Hs = null,
          Vs = !1,
          $s = null,
          qs = null,
          Qs = !1,
          Ks = null,
          Js = 0,
          Gs = 0,
          Xs = null,
          Ys = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & _s) ? Xe() : -1 !== Ys ? Ys : (Ys = Xe());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _s) && 0 !== Os
            ? Os & -Os
            : null !== yo.transition
            ? (0 === Zs && (Zs = mt()), Zs)
            : 0 !== (e = vt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Gs) throw ((Gs = 0), (Xs = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & _s) && e === Ps) ||
              (e === Ps && (0 === (2 & _s) && (Us |= n), 4 === Ds && iu(e, Os)),
              ru(e, r),
              1 === n && 0 === _s && 0 === (1 & t.mode) && ((Ws = Xe() + 500), Ia && Wa()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                s = a[l];
              -1 === s
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : s <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Ps ? Os : 0);
          if (0 === r) null !== n && Ke(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ia = !0), Ba(e);
                  })(su.bind(null, e))
                : Ba(su.bind(null, e)),
                la(function () {
                  0 === (6 & _s) && Wa();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Ys = -1), (Zs = 0), 0 !== (6 & _s))) throw Error(o(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ps ? Os : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yu(e, r);
          else {
            t = r;
            var a = _s;
            _s |= 2;
            var l = hu();
            for ((Ps === e && Os === t) || ((Hs = null), (Ws = Xe() + 500), fu(e, t)); ; )
              try {
                bu();
                break;
              } catch (s) {
                pu(e, s);
              }
            Co(),
              (Es.current = l),
              (_s = a),
              null !== Ts ? (t = 0) : ((Ps = null), (Os = 0), (t = Ds));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ou(e, a))), 1 === t))
              throw ((n = zs), fu(e, 0), iu(e, r), ru(e, Xe()), n);
            if (6 === t) iu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = yu(e, r)) && 0 !== (l = ht(e)) && ((r = l), (t = ou(e, l))), 1 === t))
              )
                throw ((n = zs), fu(e, 0), iu(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wu(e, As, Hs);
                  break;
                case 3:
                  if ((iu(e, r), (130023424 & r) === r && 10 < (t = Bs + 500 - Xe()))) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(wu.bind(null, e, As, Hs), t);
                    break;
                  }
                  wu(e, As, Hs);
                  break;
                case 4:
                  if ((iu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ns(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wu.bind(null, e, As, Hs), r);
                    break;
                  }
                  wu(e, As, Hs);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Is;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = yu(e, t)) && ((t = As), (As = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === As ? (As = e) : As.push.apply(As, e);
        }
        function iu(e, t) {
          for (
            t &= ~Ms, t &= ~Us, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & _s)) throw Error(o(327));
          Su();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Xe()), null;
          var n = yu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = zs), fu(e, 0), iu(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, As, Hs),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = _s;
          _s |= 1;
          try {
            return e(t);
          } finally {
            0 === (_s = n) && ((Ws = Xe() + 500), Ia && Wa());
          }
        }
        function cu(e) {
          null !== Ks && 0 === Ks.tag && 0 === (6 & _s) && Su();
          var t = _s;
          _s |= 1;
          var n = Cs.transition,
            r = vt;
          try {
            if (((Cs.transition = null), (vt = 1), e)) return e();
          } finally {
            (vt = r), (Cs.transition = n), 0 === (6 & (_s = t)) && Wa();
          }
        }
        function du() {
          (Rs = Ls.current), Ea(Ls);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ts))
            for (n = Ts.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && La();
                  break;
                case 3:
                  Xo(), Ea(Pa), Ea(_a), rl();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Xo();
                  break;
                case 13:
                case 19:
                  Ea(el);
                  break;
                case 10:
                  _o(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ps = e),
            (Ts = e = Lu(e.current, null)),
            (Os = Rs = t),
            (Ds = 0),
            (zs = null),
            (Ms = Us = Fs = 0),
            (As = Is = null),
            null !== Ro)
          ) {
            for (t = 0; t < Ro.length; t++)
              if (null !== (r = (n = Ro[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            Ro = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ts;
            try {
              if ((Co(), (al.current = Yl), cl)) {
                for (var r = il.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                cl = !1;
              }
              if (
                ((ll = 0),
                (ul = sl = il = null),
                (dl = !1),
                (fl = 0),
                (js.current = null),
                null === n || null === n.return)
              ) {
                (Ds = 1), (zs = t), (Ts = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Os),
                  (s.flags |= 32768),
                  null !== u && "object" === typeof u && "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = yi(i);
                  if (null !== h) {
                    (h.flags &= -257), gi(h, i, s, 0, t), 1 & h.mode && mi(l, c, t), (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var y = new Set();
                      y.add(u), (t.updateQueue = y);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mi(l, c, t), mu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var g = yi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256), gi(g, i, s, 0, t), mo(ui(u, s));
                    break e;
                  }
                }
                (l = u = ui(u, s)),
                  4 !== Ds && (Ds = 2),
                  null === Is ? (Is = [l]) : Is.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536), (t &= -t), (l.lanes |= t), Wo(l, pi(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var b = l.type,
                        v = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof b.getDerivedStateFromError ||
                          (null !== v &&
                            "function" === typeof v.componentDidCatch &&
                            (null === qs || !qs.has(v))))
                      ) {
                        (l.flags |= 65536), (t &= -t), (l.lanes |= t), Wo(l, hi(l, s, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              xu(n);
            } catch (x) {
              (t = x), Ts === n && null !== n && (Ts = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Es.current;
          return (Es.current = Yl), null === e ? Yl : e;
        }
        function mu() {
          (0 !== Ds && 3 !== Ds && 2 !== Ds) || (Ds = 4),
            null === Ps || (0 === (268435455 & Fs) && 0 === (268435455 & Us)) || iu(Ps, Os);
        }
        function yu(e, t) {
          var n = _s;
          _s |= 2;
          var r = hu();
          for ((Ps === e && Os === t) || ((Hs = null), fu(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((Co(), (_s = n), (Es.current = r), null !== Ts)) throw Error(o(261));
          return (Ps = null), (Os = 0), Ds;
        }
        function gu() {
          for (; null !== Ts; ) vu(Ts);
        }
        function bu() {
          for (; null !== Ts && !Je(); ) vu(Ts);
        }
        function vu(e) {
          var t = ks(e.alternate, e, Rs);
          (e.memoizedProps = e.pendingProps), null === t ? xu(e) : (Ts = t), (js.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qi(n, t, Rs))) return void (Ts = n);
            } else {
              if (null !== (n = Ki(n, t))) return (n.flags &= 32767), void (Ts = n);
              if (null === e) return (Ds = 6), void (Ts = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ts = t);
            Ts = t = e;
          } while (null !== t);
          0 === Ds && (Ds = 5);
        }
        function wu(e, t, n) {
          var r = vt,
            a = Cs.transition;
          try {
            (Cs.transition = null),
              (vt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Ks);
                if (0 !== (6 & _s)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Ps && ((Ts = Ps = null), (Os = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qs ||
                    ((Qs = !0),
                    Pu(tt, function () {
                      return Su(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Cs.transition), (Cs.transition = null);
                  var i = vt;
                  vt = 1;
                  var s = _s;
                  (_s |= 4),
                    (js.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window)
                                .getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n || (0 !== a && 3 !== f.nodeType) || (s = i + a),
                                    f !== l || (0 !== r && 3 !== f.nodeType) || (u = i + r),
                                    3 === f.nodeType && (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = i),
                                    p === l && ++d === r && (u = i),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n = -1 === s || -1 === u ? null : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n }, Vt = !1, Yi = t;
                        null !== Yi;

                      )
                        if (((e = (t = Yi).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Yi = e);
                        else
                          for (; null !== Yi; ) {
                            t = Yi;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var y = m.memoizedProps,
                                        g = m.memoizedState,
                                        b = t.stateNode,
                                        v = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? y : ni(t.type, y),
                                          g
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = v;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              Nu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Yi = e);
                              break;
                            }
                            Yi = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    ys(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Ge(),
                    (_s = s),
                    (vt = i),
                    (Cs.transition = l);
                } else e.current = n;
                if (
                  (Qs && ((Qs = !1), (Ks = e), (Js = a)),
                  (l = e.pendingLanes),
                  0 === l && (qs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Vs) throw ((Vs = !1), (e = $s), ($s = null), e);
                0 !== (1 & Js) && 0 !== e.tag && Su(),
                  (l = e.pendingLanes),
                  0 !== (1 & l) ? (e === Xs ? Gs++ : ((Gs = 0), (Xs = e))) : (Gs = 0),
                  Wa();
              })(e, t, n, r);
          } finally {
            (Cs.transition = a), (vt = r);
          }
          return null;
        }
        function Su() {
          if (null !== Ks) {
            var e = xt(Js),
              t = Cs.transition,
              n = vt;
            try {
              if (((Cs.transition = null), (vt = 16 > e ? 16 : e), null === Ks)) var r = !1;
              else {
                if (((e = Ks), (Ks = null), (Js = 0), 0 !== (6 & _s))) throw Error(o(331));
                var a = _s;
                for (_s |= 4, Yi = e.current; null !== Yi; ) {
                  var l = Yi,
                    i = l.child;
                  if (0 !== (16 & Yi.flags)) {
                    var s = l.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Yi = c; null !== Yi; ) {
                          var d = Yi;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Yi = f);
                          else
                            for (; null !== Yi; ) {
                              var p = (d = Yi).sibling,
                                h = d.return;
                              if ((os(d), d === c)) {
                                Yi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Yi = p);
                                break;
                              }
                              Yi = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var y = m.child;
                        if (null !== y) {
                          m.child = null;
                          do {
                            var g = y.sibling;
                            (y.sibling = null), (y = g);
                          } while (null !== y);
                        }
                      }
                      Yi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i) (i.return = l), (Yi = i);
                  else
                    e: for (; null !== Yi; ) {
                      if (0 !== (2048 & (l = Yi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, l, l.return);
                        }
                      var b = l.sibling;
                      if (null !== b) {
                        (b.return = l.return), (Yi = b);
                        break e;
                      }
                      Yi = l.return;
                    }
                }
                var v = e.current;
                for (Yi = v; null !== Yi; ) {
                  var x = (i = Yi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== x) (x.return = i), (Yi = x);
                  else
                    e: for (i = v; null !== Yi; ) {
                      if (0 !== (2048 & (s = Yi).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (S) {
                          Nu(s, s.return, S);
                        }
                      if (s === i) {
                        Yi = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Yi = w);
                        break e;
                      }
                      Yi = s.return;
                    }
                }
                if (((_s = a), Wa(), ot && "function" === typeof ot.onPostCommitFiberRoot))
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (vt = n), (Cs.transition = t);
            }
          }
          return !1;
        }
        function ku(e, t, n) {
          (e = Ao(e, (t = pi(0, (t = ui(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (gt(e, 1, t), ru(e, t));
        }
        function Nu(e, t, n) {
          if (3 === e.tag) ku(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ku(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch && (null === qs || !qs.has(r)))
                ) {
                  (t = Ao(t, (e = hi(t, (e = ui(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (gt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (Os & n) === n &&
              (4 === Ds || (3 === Ds && (130023424 & Os) === Os && 500 > Xe() - Bs)
                ? fu(e, 0)
                : (Ms |= n)),
            ru(e, t);
        }
        function ju(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = zo(e, t)) && (gt(e, t, n), ru(e, n));
        }
        function Cu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), ju(e, n);
        }
        function _u(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), ju(e, n);
        }
        function Pu(e, t) {
          return Qe(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ou(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function Ru(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ou(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Du(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Ru(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case k:
                return zu(n.children, a, l, t);
              case N:
                (i = 8), (a |= 8);
                break;
              case E:
                return ((e = Ou(12, n, t, 2 | a)).elementType = E), (e.lanes = l), e;
              case P:
                return ((e = Ou(13, n, t, a)).elementType = P), (e.lanes = l), e;
              case T:
                return ((e = Ou(19, n, t, a)).elementType = T), (e.lanes = l), e;
              case L:
                return Fu(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case j:
                      i = 10;
                      break e;
                    case C:
                      i = 9;
                      break e;
                    case _:
                      i = 11;
                      break e;
                    case O:
                      i = 14;
                      break e;
                    case R:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return ((t = Ou(i, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t;
        }
        function zu(e, t, n, r) {
          return ((e = Ou(7, e, r, t)).lanes = n), e;
        }
        function Fu(e, t, n, r) {
          return (
            ((e = Ou(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Uu(e, t, n) {
          return ((e = Ou(6, e, null, t)).lanes = n), e;
        }
        function Mu(e, t, n) {
          return (
            ((t = Ou(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation
            }),
            t
          );
        }
        function Iu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = yt(0)),
            (this.expirationTimes = yt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = yt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Au(e, t, n, r, a, o, l, i, s) {
          return (
            (e = new Iu(e, t, n, i, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ou(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null
            }),
            Uo(o),
            e
          );
        }
        function Bu(e) {
          if (!e) return Ca;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return za(e, n, t);
          }
          return t;
        }
        function Wu(e, t, n, r, a, o, l, i, s) {
          return (
            ((e = Au(n, r, !0, e, 0, o, 0, i, s)).context = Bu(null)),
            (n = e.current),
            ((o = Io((r = eu()), (a = tu(n)))).callback = void 0 !== t && null !== t ? t : null),
            Ao(n, o, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var a = t.current,
            o = eu(),
            l = tu(a);
          return (
            (n = Bu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Io(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ao(a, t, l)) && (nu(e, a, l, o), Bo(e, a, l)),
            l
          );
        }
        function Vu(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function $u(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          $u(e, t), (e = e.alternate) && $u(e, t);
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) vi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (vi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pi(t), ho();
                        break;
                      case 5:
                        Yo(t);
                        break;
                      case 1:
                        Ra(t.type) && Fa(t);
                        break;
                      case 4:
                        Go(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        ja(ko, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (ja(el, 1 & el.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ui(e, t, n)
                            : (ja(el, 1 & el.current),
                              null !== (e = Vi(e, t, n)) ? e.sibling : null);
                        ja(el, 1 & el.current);
                        break;
                      case 19:
                        if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Wi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                          ja(el, el.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ni(e, t, n);
                    }
                    return Vi(e, t, n);
                  })(e, t, n)
                );
              vi = 0 !== (131072 & e.flags);
            }
          else (vi = !1), ao && 0 !== (1048576 & t.flags) && Za(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hi(e, t), (e = t.pendingProps);
              var a = Oa(t, _a.current);
              To(t, n), (a = yl(null, t, r, e, a, n));
              var l = gl();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((l = !0), Fa(t)) : (l = !1),
                    (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                    Uo(t),
                    (a.updater = ai),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    si(t, r, e, n),
                    (t = _i(null, t, r, !0, l, n)))
                  : ((t.tag = 0), ao && l && eo(t), xi(null, t, a, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ru(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ni(r, e)),
                  a)
                ) {
                  case 0:
                    t = ji(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ci(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Si(null, t, r, ni(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ji(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ci(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 3:
              e: {
                if ((Pi(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Mo(e, t),
                  Ho(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ti(e, t, r, n, (a = ui(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ti(e, t, r, n, (a = ui(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = So(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Vi(e, t, n);
                    break e;
                  }
                  xi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Yo(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a) ? (i = null) : null !== l && na(r, l) && (t.flags |= 32),
                Ei(e, t),
                xi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Ui(e, t, n);
            case 4:
              return (
                Go(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wo(t, null, r, n)) : xi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wi(e, t, r, (a = t.elementType === r ? a : ni(r, a)), n)
              );
            case 7:
              return xi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  ja(ko, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Pa.current) {
                      t = Vi(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                      var s = l.dependencies;
                      if (null !== s) {
                        i = l.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === l.tag) {
                              (u = Io(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d ? (u.next = u) : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (l.lanes |= n),
                              null !== (u = l.alternate) && (u.lanes |= n),
                              Po(l.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === l.tag) i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (s = i.alternate) && (s.lanes |= n),
                          Po(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                xi(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                To(t, n),
                (r = r((a = Oo(a)))),
                (t.flags |= 1),
                xi(e, t, r, n),
                t.child
              );
            case 14:
              return (a = ni((r = t.type), t.pendingProps)), Si(e, t, r, (a = ni(r.type, a)), n);
            case 15:
              return ki(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ni(r, a)),
                Hi(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Fa(t)) : (e = !1),
                To(t, n),
                li(t, r, a),
                si(t, r, a, n),
                _i(null, t, r, !0, e, n)
              );
            case 19:
              return Wi(e, t, n);
            case 22:
              return Ni(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Yu() {}
        function Zu(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Vu(l);
                i.call(e);
              };
            }
            Hu(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Vu(l);
                    o.call(e);
                  };
                }
                var l = Wu(t, r, e, 0, null, !1, 0, "", Yu);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Vu(s);
                  i.call(e);
                };
              }
              var s = Au(e, 0, !1, null, 0, !1, 0, "", Yu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Hu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Vu(l);
        }
        (Ju.prototype.render = Ku.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hu(e, t, null, null);
          }),
          (Ju.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Hu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Nt();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Lt.length && 0 !== t && t < Lt[n].priority; n++);
              Lt.splice(n, 0, e), 0 === n && Ut(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (bt(t, 1 | n), ru(t, Xe()), 0 === (6 & _s) && ((Ws = Xe() + 500), Wa()));
                }
                break;
              case 13:
                cu(function () {
                  var t = zo(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = zo(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              qu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = zo(e, t);
              if (null !== n) nu(n, e, t, eu());
              qu(e, t);
            }
          }),
          (Nt = function () {
            return vt;
          }),
          (Et = function (e, t) {
            var n = vt;
            try {
              return (vt = e), t();
            } finally {
              vt = n;
            }
          }),
          (Se = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Y(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      Q(r), Y(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (_e = uu),
          (Pe = cu);
        var ec = { usingClientEntryPoint: !1, Events: [va, xa, wa, je, Ce, uu] },
          tc = {
            findFiberByHostInstance: ba,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (ot = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Gu(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Au(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Ku(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              i = Qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Wu(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ha] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ju(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return { $$typeof: a, type: e, key: u, ref: c, props: o, _owner: i.current };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
          },
          m = Object.assign,
          y = {};
        function g(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = y), (this.updater = n || h);
        }
        function b() {}
        function v(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = y), (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = g.prototype);
        var x = (v.prototype = new b());
        (x.constructor = v), m(x, g.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          N = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = "" + t.key), t))
              S.call(t, a) && !N.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps) for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return { $$typeof: n, type: e, key: l, ref: i, props: o, _owner: k.current };
        }
        function j(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function _(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (l = l((s = e))),
              (e = "" === o ? "." + _(s, 0) : o),
              w(l)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  P(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (j(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                      };
                    })(
                      l,
                      a +
                        (!l.key || (s && s.key === l.key)
                          ? ""
                          : ("" + l.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + _((i = e[u]), u);
              s += P(i, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              s += P((i = i.value), t, a, (c = o + _(i, u++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          D = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: L, ReactCurrentOwner: k };
        function z() {
          throw Error("act(...) is not supported in production builds of React.");
        }
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!j(e))
              throw Error("React.Children.only expected to receive a single React element child.");
            return e;
          }
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = v),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.act = z),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = k.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !N.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return { $$typeof: n, type: e.type, key: o, ref: l, props: a, _owner: i };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = j),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: O };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = z),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                u = i + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if ("object" === typeof performance && "function" === typeof performance.now) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          y = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          v = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((y = !1), x(e), !m))
            if (null !== r(u)) (m = !0), L(S);
            else {
              var t = r(c);
              null !== t && D(w, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), y && ((y = !1), b(j), (j = -1)), (h = !0);
          var o = p;
          try {
            for (x(n), f = r(u); null !== f && (!(f.expirationTime > n) || (e && !P())); ) {
              var l = f.callback;
              if ("function" === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var i = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i ? (f.callback = i) : f === r(u) && a(u),
                  x(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && D(w, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          N = !1,
          E = null,
          j = -1,
          C = 5,
          _ = -1;
        function P() {
          return !(t.unstable_now() - _ < C);
        }
        function T() {
          if (null !== E) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? k() : ((N = !1), (E = null));
            }
          } else N = !1;
        }
        if ("function" === typeof v)
          k = function () {
            v(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            R = O.port2;
          (O.port1.onmessage = T),
            (k = function () {
              R.postMessage(null);
            });
        } else
          k = function () {
            g(T, 0);
          };
        function L(e) {
          (E = e), N || ((N = !0), k());
        }
        function D(e, n) {
          j = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) && e === r(c) && (y ? (b(j), (j = -1)) : (y = !0), D(w, o - l)))
                : ((e.sortIndex = i), n(u, e), m || h || ((m = !0), L(S))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      }
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__;
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var o = Object.create(null);
      n.r(o);
      var l = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var i = 2 & a && r; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((e) => (l[e] = () => r[e]));
      return (l.default = () => r), n.d(o, l), o;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/");
  var r = {};
  n.r(r),
    n.d(r, {
      hasBrowserEnv: () => un,
      hasStandardBrowserEnv: () => dn,
      hasStandardBrowserWebWorkerEnv: () => fn,
      navigator: () => cn,
      origin: () => pn
    });
  var a,
    o = n(43),
    l = n.t(o, 2),
    i = n(391),
    s = n(950),
    u = n.t(s, 2);
  function c() {
    return (
      (c = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      c.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(a || (a = {}));
  const d = "popstate";
  function f(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function p(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function h(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function m(e, t, n, r) {
    return (
      void 0 === n && (n = null),
      c(
        { pathname: "string" === typeof e ? e : e.pathname, search: "", hash: "" },
        "string" === typeof t ? g(t) : t,
        { state: n, key: (t && t.key) || r || Math.random().toString(36).substr(2, 8) }
      )
    );
  }
  function y(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function g(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
  }
  function b(e, t, n, r) {
    void 0 === r && (r = {});
    let { window: o = document.defaultView, v5Compat: l = !1 } = r,
      i = o.history,
      s = a.Pop,
      u = null,
      p = g();
    function g() {
      return (i.state || { idx: null }).idx;
    }
    function b() {
      s = a.Pop;
      let e = g(),
        t = null == e ? null : e - p;
      (p = e), u && u({ action: s, location: x.location, delta: t });
    }
    function v(e) {
      let t = "null" !== o.location.origin ? o.location.origin : o.location.href,
        n = "string" === typeof e ? e : y(e);
      return (
        (n = n.replace(/ $/, "%20")),
        f(t, "No window.location.(origin|href) available to create URL for href: " + n),
        new URL(n, t)
      );
    }
    null == p && ((p = 0), i.replaceState(c({}, i.state, { idx: p }), ""));
    let x = {
      get action() {
        return s;
      },
      get location() {
        return e(o, i);
      },
      listen(e) {
        if (u) throw new Error("A history only accepts one active listener");
        return (
          o.addEventListener(d, b),
          (u = e),
          () => {
            o.removeEventListener(d, b), (u = null);
          }
        );
      },
      createHref: (e) => t(o, e),
      createURL: v,
      encodeLocation(e) {
        let t = v(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        s = a.Push;
        let r = m(x.location, e, t);
        n && n(r, e), (p = g() + 1);
        let c = h(r, p),
          d = x.createHref(r);
        try {
          i.pushState(c, "", d);
        } catch (f) {
          if (f instanceof DOMException && "DataCloneError" === f.name) throw f;
          o.location.assign(d);
        }
        l && u && u({ action: s, location: x.location, delta: 1 });
      },
      replace: function (e, t) {
        s = a.Replace;
        let r = m(x.location, e, t);
        n && n(r, e), (p = g());
        let o = h(r, p),
          c = x.createHref(r);
        i.replaceState(o, "", c), l && u && u({ action: s, location: x.location, delta: 0 });
      },
      go: (e) => i.go(e)
    };
    return x;
  }
  var v;
  !(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
  })(v || (v = {}));
  new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function x(e, t, n) {
    return void 0 === n && (n = "/"), w(e, t, n, !1);
  }
  function w(e, t, n, r) {
    let a = z(("string" === typeof t ? g(t) : t).pathname || "/", n);
    if (null == a) return null;
    let o = S(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(o);
    let l = null;
    for (let i = 0; null == l && i < o.length; ++i) {
      let e = D(a);
      l = R(o[i], e, r);
    }
    return l;
  }
  function S(e, t, n, r) {
    void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
    let a = (e, a, o) => {
      let l = {
        relativePath: void 0 === o ? e.path || "" : o,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: a,
        route: e
      };
      l.relativePath.startsWith("/") &&
        (f(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let i = A([r, l.relativePath]),
        s = n.concat(l);
      e.children &&
        e.children.length > 0 &&
        (f(
          !0 !== e.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            i +
            '".'
        ),
        S(e.children, t, s, i)),
        (null != e.path || e.index) && t.push({ path: i, score: O(i, e.index), routesMeta: s });
    };
    return (
      e.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
          for (let r of k(e.path)) a(e, t, r);
        else a(e, t);
      }),
      t
    );
  }
  function k(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      o = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [o, ""] : [o];
    let l = k(r.join("/")),
      i = [];
    return (
      i.push(...l.map((e) => ("" === e ? o : [o, e].join("/")))),
      a && i.push(...l),
      i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  const N = /^:[\w-]+$/,
    E = 3,
    j = 2,
    C = 1,
    _ = 10,
    P = -2,
    T = (e) => "*" === e;
  function O(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(T) && (r += P),
      t && (r += j),
      n.filter((e) => !T(e)).reduce((e, t) => e + (N.test(t) ? E : "" === t ? C : _), r)
    );
  }
  function R(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
      a = {},
      o = "/",
      l = [];
    for (let i = 0; i < r.length; ++i) {
      let e = r[i],
        s = i === r.length - 1,
        u = "/" === o ? t : t.slice(o.length) || "/",
        c = L({ path: e.relativePath, caseSensitive: e.caseSensitive, end: s }, u),
        d = e.route;
      if (
        (!c &&
          s &&
          n &&
          !r[r.length - 1].route.index &&
          (c = L({ path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 }, u)),
        !c)
      )
        return null;
      Object.assign(a, c.params),
        l.push({
          params: a,
          pathname: A([o, c.pathname]),
          pathnameBase: B(A([o, c.pathnameBase])),
          route: d
        }),
        "/" !== c.pathnameBase && (o = A([o, c.pathnameBase]));
    }
    return l;
  }
  function L(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        p(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
            e +
            '" will be treated as if it were "' +
            e.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            e.replace(/\*$/, "/*") +
            '".'
        );
        let r = [],
          a =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
        let o = new RegExp(a, t ? void 0 : "i");
        return [o, r];
      })(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let o = a[0],
      l = o.replace(/(.)\/+$/, "$1"),
      i = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = i[n] || "";
          l = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const s = i[n];
        return (e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: o,
      pathnameBase: l,
      pattern: e
    };
  }
  function D(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        p(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            t +
            ")."
        ),
        e
      );
    }
  }
  function z(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function F(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified `to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the `to." +
      n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function U(e) {
    return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
  }
  function M(e, t) {
    let n = U(e);
    return t
      ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
      : n.map((e) => e.pathnameBase);
  }
  function I(e, t, n, r) {
    let a;
    void 0 === r && (r = !1),
      "string" === typeof e
        ? (a = g(e))
        : ((a = c({}, e)),
          f(!a.pathname || !a.pathname.includes("?"), F("?", "pathname", "search", a)),
          f(!a.pathname || !a.pathname.includes("#"), F("#", "pathname", "hash", a)),
          f(!a.search || !a.search.includes("#"), F("#", "search", "hash", a)));
    let o,
      l = "" === e || "" === a.pathname,
      i = l ? "/" : a.pathname;
    if (null == i) o = n;
    else {
      let e = t.length - 1;
      if (!r && i.startsWith("..")) {
        let t = i.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        a.pathname = t.join("/");
      }
      o = e >= 0 ? t[e] : "/";
    }
    let s = (function (e, t) {
        void 0 === t && (t = "/");
        let { pathname: n, search: r = "", hash: a = "" } = "string" === typeof e ? g(e) : e,
          o = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: o, search: W(r), hash: H(a) };
      })(a, o),
      u = i && "/" !== i && i.endsWith("/"),
      d = (l || "." === i) && n.endsWith("/");
    return s.pathname.endsWith("/") || (!u && !d) || (s.pathname += "/"), s;
  }
  const A = (e) => e.join("/").replace(/\/\/+/g, "/"),
    B = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    W = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    H = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  Error;
  function V(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  const $ = ["post", "put", "patch", "delete"],
    q = (new Set($), ["get", ...$]);
  new Set(q), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol("deferred");
  function Q() {
    return (
      (Q = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Q.apply(this, arguments)
    );
  }
  const K = o.createContext(null);
  const J = o.createContext(null);
  const G = o.createContext(null);
  const X = o.createContext(null);
  const Y = o.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const Z = o.createContext(null);
  function ee() {
    return null != o.useContext(X);
  }
  function te() {
    return ee() || f(!1), o.useContext(X).location;
  }
  function ne(e) {
    o.useContext(G).static || o.useLayoutEffect(e);
  }
  function re() {
    let { isDataRoute: e } = o.useContext(Y);
    return e
      ? (function () {
          let { router: e } = pe(de.UseNavigateStable),
            t = me(fe.UseNavigateStable),
            n = o.useRef(!1);
          return (
            ne(() => {
              n.current = !0;
            }),
            o.useCallback(
              function (r, a) {
                void 0 === a && (a = {}),
                  n.current &&
                    ("number" === typeof r
                      ? e.navigate(r)
                      : e.navigate(r, Q({ fromRouteId: t }, a)));
              },
              [e, t]
            )
          );
        })()
      : (function () {
          ee() || f(!1);
          let e = o.useContext(K),
            { basename: t, future: n, navigator: r } = o.useContext(G),
            { matches: a } = o.useContext(Y),
            { pathname: l } = te(),
            i = JSON.stringify(M(a, n.v7_relativeSplatPath)),
            s = o.useRef(!1);
          return (
            ne(() => {
              s.current = !0;
            }),
            o.useCallback(
              function (n, a) {
                if ((void 0 === a && (a = {}), !s.current)) return;
                if ("number" === typeof n) return void r.go(n);
                let o = I(n, JSON.parse(i), l, "path" === a.relative);
                null == e &&
                  "/" !== t &&
                  (o.pathname = "/" === o.pathname ? t : A([t, o.pathname])),
                  (a.replace ? r.replace : r.push)(o, a.state, a);
              },
              [t, r, i, l, e]
            )
          );
        })();
  }
  function ae(e, t) {
    let { relative: n } = void 0 === t ? {} : t,
      { future: r } = o.useContext(G),
      { matches: a } = o.useContext(Y),
      { pathname: l } = te(),
      i = JSON.stringify(M(a, r.v7_relativeSplatPath));
    return o.useMemo(() => I(e, JSON.parse(i), l, "path" === n), [e, i, l, n]);
  }
  function oe(e, t, n, r) {
    ee() || f(!1);
    let { navigator: l } = o.useContext(G),
      { matches: i } = o.useContext(Y),
      s = i[i.length - 1],
      u = s ? s.params : {},
      c = (s && s.pathname, s ? s.pathnameBase : "/");
    s && s.route;
    let d,
      p = te();
    if (t) {
      var h;
      let e = "string" === typeof t ? g(t) : t;
      "/" === c || (null == (h = e.pathname) ? void 0 : h.startsWith(c)) || f(!1), (d = e);
    } else d = p;
    let m = d.pathname || "/",
      y = m;
    if ("/" !== c) {
      let e = c.replace(/^\//, "").split("/");
      y = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let b = x(e, { pathname: y });
    let v = ce(
      b &&
        b.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: A([c, l.encodeLocation ? l.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase:
              "/" === e.pathnameBase
                ? c
                : A([
                    c,
                    l.encodeLocation ? l.encodeLocation(e.pathnameBase).pathname : e.pathnameBase
                  ])
          })
        ),
      i,
      n,
      r
    );
    return t && v
      ? o.createElement(
          X.Provider,
          {
            value: {
              location: Q({ pathname: "/", search: "", hash: "", state: null, key: "default" }, d),
              navigationType: a.Pop
            }
          },
          v
        )
      : v;
  }
  function le() {
    let e = (function () {
        var e;
        let t = o.useContext(Z),
          n = he(fe.UseRouteError),
          r = me(fe.UseRouteError);
        if (void 0 !== t) return t;
        return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = V(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      a = { padding: "0.5rem", backgroundColor: r };
    return o.createElement(
      o.Fragment,
      null,
      o.createElement("h2", null, "Unexpected Application Error!"),
      o.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? o.createElement("pre", { style: a }, n) : null,
      null
    );
  }
  const ie = o.createElement(le, null);
  class se extends o.Component {
    constructor(e) {
      super(e),
        (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || ("idle" !== t.revalidation && "idle" === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
          };
    }
    componentDidCatch(e, t) {
      console.error("React Router caught the following error during render", e, t);
    }
    render() {
      return void 0 !== this.state.error
        ? o.createElement(
            Y.Provider,
            { value: this.props.routeContext },
            o.createElement(Z.Provider, { value: this.state.error, children: this.props.component })
          )
        : this.props.children;
    }
  }
  function ue(e) {
    let { routeContext: t, match: n, children: r } = e,
      a = o.useContext(K);
    return (
      a &&
        a.static &&
        a.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (a.staticContext._deepestRenderedBoundaryId = n.route.id),
      o.createElement(Y.Provider, { value: t }, r)
    );
  }
  function ce(e, t, n, r) {
    var a;
    if (
      (void 0 === t && (t = []), void 0 === n && (n = null), void 0 === r && (r = null), null == e)
    ) {
      var l;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (
          !(
            null != (l = r) &&
            l.v7_partialHydration &&
            0 === t.length &&
            !n.initialized &&
            n.matches.length > 0
          )
        )
          return null;
        e = n.matches;
      }
    }
    let i = e,
      s = null == (a = n) ? void 0 : a.errors;
    if (null != s) {
      let e = i.findIndex((e) => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id]));
      e >= 0 || f(!1), (i = i.slice(0, Math.min(i.length, e + 1)));
    }
    let u = !1,
      c = -1;
    if (n && r && r.v7_partialHydration)
      for (let o = 0; o < i.length; o++) {
        let e = i[o];
        if (((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (c = o), e.route.id)) {
          let { loaderData: t, errors: r } = n,
            a = e.route.loader && void 0 === t[e.route.id] && (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || a) {
            (u = !0), (i = c >= 0 ? i.slice(0, c + 1) : [i[0]]);
            break;
          }
        }
      }
    return i.reduceRight((e, r, a) => {
      let l,
        d = !1,
        f = null,
        p = null;
      var h;
      n &&
        ((l = s && r.route.id ? s[r.route.id] : void 0),
        (f = r.route.errorElement || ie),
        u &&
          (c < 0 && 0 === a
            ? ((h = "route-fallback"), !1 || ye[h] || (ye[h] = !0), (d = !0), (p = null))
            : c === a && ((d = !0), (p = r.route.hydrateFallbackElement || null))));
      let m = t.concat(i.slice(0, a + 1)),
        y = () => {
          let t;
          return (
            (t = l
              ? f
              : d
              ? p
              : r.route.Component
              ? o.createElement(r.route.Component, null)
              : r.route.element
              ? r.route.element
              : e),
            o.createElement(ue, {
              match: r,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t
            })
          );
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
        ? o.createElement(se, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: l,
            children: y(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 }
          })
        : y();
    }, null);
  }
  var de = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(de || {}),
    fe = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(fe || {});
  function pe(e) {
    let t = o.useContext(K);
    return t || f(!1), t;
  }
  function he(e) {
    let t = o.useContext(J);
    return t || f(!1), t;
  }
  function me(e) {
    let t = (function () {
        let e = o.useContext(Y);
        return e || f(!1), e;
      })(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || f(!1), n.route.id;
  }
  const ye = {};
  const ge = {};
  const be = (e, t, n) => {
    var r;
    ge[
      (r =
        "\u26a0\ufe0f React Router Future Flag Warning: " +
        t +
        ". You can use the `" +
        e +
        "` future flag to opt-in early. For more information, see " +
        n +
        ".")
    ] || ((ge[r] = !0), console.warn(r));
  };
  function ve(e, t) {
    void 0 === (null == e ? void 0 : e.v7_startTransition) &&
      be(
        "v7_startTransition",
        "React Router will begin wrapping state updates in `React.startTransition` in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
      ),
      void 0 !== (null == e ? void 0 : e.v7_relativeSplatPath) ||
        (t && t.v7_relativeSplatPath) ||
        be(
          "v7_relativeSplatPath",
          "Relative route resolution within Splat routes is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
        ),
      t &&
        (void 0 === t.v7_fetcherPersist &&
          be(
            "v7_fetcherPersist",
            "The persistence behavior of fetchers is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"
          ),
        void 0 === t.v7_normalizeFormMethod &&
          be(
            "v7_normalizeFormMethod",
            "Casing of `formMethod` fields is being normalized to uppercase in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"
          ),
        void 0 === t.v7_partialHydration &&
          be(
            "v7_partialHydration",
            "`RouterProvider` hydration behavior is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"
          ),
        void 0 === t.v7_skipActionErrorRevalidation &&
          be(
            "v7_skipActionErrorRevalidation",
            "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"
          ));
  }
  l.startTransition;
  function xe(e) {
    let { to: t, replace: n, state: r, relative: a } = e;
    ee() || f(!1);
    let { future: l, static: i } = o.useContext(G),
      { matches: s } = o.useContext(Y),
      { pathname: u } = te(),
      c = re(),
      d = I(t, M(s, l.v7_relativeSplatPath), u, "path" === a),
      p = JSON.stringify(d);
    return (
      o.useEffect(() => c(JSON.parse(p), { replace: n, state: r, relative: a }), [c, p, a, n, r]),
      null
    );
  }
  function we(e) {
    f(!1);
  }
  function Se(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: l = a.Pop,
      navigator: i,
      static: s = !1,
      future: u
    } = e;
    ee() && f(!1);
    let c = t.replace(/^\/*/, "/"),
      d = o.useMemo(
        () => ({
          basename: c,
          navigator: i,
          static: s,
          future: Q({ v7_relativeSplatPath: !1 }, u)
        }),
        [c, u, i, s]
      );
    "string" === typeof r && (r = g(r));
    let {
        pathname: p = "/",
        search: h = "",
        hash: m = "",
        state: y = null,
        key: b = "default"
      } = r,
      v = o.useMemo(() => {
        let e = z(p, c);
        return null == e
          ? null
          : { location: { pathname: e, search: h, hash: m, state: y, key: b }, navigationType: l };
      }, [c, p, h, m, y, b, l]);
    return null == v
      ? null
      : o.createElement(
          G.Provider,
          { value: d },
          o.createElement(X.Provider, { children: n, value: v })
        );
  }
  function ke(e) {
    let { children: t, location: n } = e;
    return oe(Ne(t), n);
  }
  new Promise(() => {});
  o.Component;
  function Ne(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
      o.Children.forEach(e, (e, r) => {
        if (!o.isValidElement(e)) return;
        let a = [...t, r];
        if (e.type === o.Fragment) return void n.push.apply(n, Ne(e.props.children, a));
        e.type !== we && f(!1), e.props.index && e.props.children && f(!1);
        let l = {
          id: e.props.id || a.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy
        };
        e.props.children && (l.children = Ne(e.props.children, a)), n.push(l);
      }),
      n
    );
  }
  function Ee() {
    return (
      (Ee = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Ee.apply(this, arguments)
    );
  }
  function je(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a;
  }
  new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
  const Ce = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition"
  ];
  try {
    window.__reactRouterVersion = "6";
  } catch (Xr) {}
  new Map();
  const _e = l.startTransition;
  u.flushSync, l.useId;
  function Pe(e) {
    let { basename: t, children: n, future: r, window: a } = e,
      l = o.useRef();
    var i;
    null == l.current &&
      (l.current =
        (void 0 === (i = { window: a, v5Compat: !0 }) && (i = {}),
        b(
          function (e, t) {
            let { pathname: n, search: r, hash: a } = e.location;
            return m(
              "",
              { pathname: n, search: r, hash: a },
              (t.state && t.state.usr) || null,
              (t.state && t.state.key) || "default"
            );
          },
          function (e, t) {
            return "string" === typeof t ? t : y(t);
          },
          null,
          i
        )));
    let s = l.current,
      [u, c] = o.useState({ action: s.action, location: s.location }),
      { v7_startTransition: d } = r || {},
      f = o.useCallback(
        (e) => {
          d && _e ? _e(() => c(e)) : c(e);
        },
        [c, d]
      );
    return (
      o.useLayoutEffect(() => s.listen(f), [s, f]),
      o.useEffect(() => ve(r), [r]),
      o.createElement(Se, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: s,
        future: r
      })
    );
  }
  const Te =
      "undefined" !== typeof window &&
      "undefined" !== typeof window.document &&
      "undefined" !== typeof window.document.createElement,
    Oe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Re = o.forwardRef(function (e, t) {
      let n,
        {
          onClick: r,
          relative: a,
          reloadDocument: l,
          replace: i,
          state: s,
          target: u,
          to: c,
          preventScrollReset: d,
          viewTransition: p
        } = e,
        h = je(e, Ce),
        { basename: m } = o.useContext(G),
        g = !1;
      if ("string" === typeof c && Oe.test(c) && ((n = c), Te))
        try {
          let e = new URL(window.location.href),
            t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
            n = z(t.pathname, m);
          t.origin === e.origin && null != n ? (c = n + t.search + t.hash) : (g = !0);
        } catch (Xr) {}
      let b = (function (e, t) {
          let { relative: n } = void 0 === t ? {} : t;
          ee() || f(!1);
          let { basename: r, navigator: a } = o.useContext(G),
            { hash: l, pathname: i, search: s } = ae(e, { relative: n }),
            u = i;
          return (
            "/" !== r && (u = "/" === i ? r : A([r, i])),
            a.createHref({ pathname: u, search: s, hash: l })
          );
        })(c, { relative: a }),
        v = (function (e, t) {
          let {
              target: n,
              replace: r,
              state: a,
              preventScrollReset: l,
              relative: i,
              viewTransition: s
            } = void 0 === t ? {} : t,
            u = re(),
            c = te(),
            d = ae(e, { relative: i });
          return o.useCallback(
            (t) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                    })(e)
                  );
                })(t, n)
              ) {
                t.preventDefault();
                let n = void 0 !== r ? r : y(c) === y(d);
                u(e, {
                  replace: n,
                  state: a,
                  preventScrollReset: l,
                  relative: i,
                  viewTransition: s
                });
              }
            },
            [c, u, d, r, a, n, e, l, i, s]
          );
        })(c, {
          replace: i,
          state: s,
          target: u,
          preventScrollReset: d,
          relative: a,
          viewTransition: p
        });
      return o.createElement(
        "a",
        Ee({}, h, {
          href: n || b,
          onClick:
            g || l
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || v(e);
                },
          ref: t,
          target: u
        })
      );
    });
  var Le, De;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(Le || (Le = {})),
    (function (e) {
      (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(De || (De = {}));
  function ze(e) {
    return (
      (ze =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      ze(e)
    );
  }
  function Fe(e) {
    var t = (function (e, t) {
      if ("object" != ze(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != ze(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == ze(t) ? t : t + "";
  }
  function Ue(e, t, n) {
    return (
      (t = Fe(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  function Me(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Ie(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Me(Object(n), !0).forEach(function (t) {
            Ue(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Me(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Ae(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (t.includes(r)) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++)
        (n = o[r]), t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
  }
  const Be = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t
      .filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t)
      .join(" ")
      .trim();
  };
  var We = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const He = [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ],
    Ve = (0, o.forwardRef)((e, t) => {
      let {
          color: n = "currentColor",
          size: r = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: l,
          className: i = "",
          children: s,
          iconNode: u
        } = e,
        c = Ae(e, He);
      return (0, o.createElement)(
        "svg",
        Ie(
          Ie({ ref: t }, We),
          {},
          {
            width: r,
            height: r,
            stroke: n,
            strokeWidth: l ? (24 * Number(a)) / Number(r) : a,
            className: Be("lucide", i)
          },
          c
        ),
        [
          ...u.map((e) => {
            let [t, n] = e;
            return (0, o.createElement)(t, n);
          }),
          ...(Array.isArray(s) ? s : [s])
        ]
      );
    }),
    $e = ["className"],
    qe = (e, t) => {
      const n = (0, o.forwardRef)((n, r) => {
        let { className: a } = n,
          l = Ae(n, $e);
        return (0, o.createElement)(
          Ve,
          Ie(
            {
              ref: r,
              iconNode: t,
              className: Be(
                "lucide-".concat(((i = e), i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())),
                a
              )
            },
            l
          )
        );
        var i;
      });
      return (n.displayName = "".concat(e)), n;
    },
    Qe = qe("CreditCard", [
      ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
    ]),
    Ke = qe("ClipboardList", [
      ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
      [
        "path",
        {
          d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
          key: "116196"
        }
      ],
      ["path", { d: "M12 11h4", key: "1jrz19" }],
      ["path", { d: "M12 16h4", key: "n85exb" }],
      ["path", { d: "M8 11h.01", key: "1dfujw" }],
      ["path", { d: "M8 16h.01", key: "18s6g9" }]
    ]),
    Je = qe("Settings", [
      [
        "path",
        {
          d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
          key: "1qme2f"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]),
    Ge = qe("Users", [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
    ]),
    Xe = qe("LogOut", [
      ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
      ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
      ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
    ]),
    Ye = qe("LogIn", [
      ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
      ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
      ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
    ]),
    Ze = qe("UserPlus", [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
    ]),
    et = n.p + "static/media/PPC_009.0620241086af410f5e50.png";
  var tt = n(579);
  const nt = () => {
    const e = re(),
      t = localStorage.getItem("token");
    let n = null;
    if (t)
      try {
        const e = t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
          r = decodeURIComponent(
            atob(e)
              .split("")
              .map(function (e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
        n = JSON.parse(r).user;
      } catch (r) {
        console.error("Token \u89e3\u78bc\u5931\u6557", r);
      }
    return (0, tt.jsx)("nav", {
      className: "bg-[#1a237e] pt-4 pb-4",
      children: (0, tt.jsxs)("div", {
        className: "container mx-auto flex justify-start items-center",
        children: [
          (0, tt.jsxs)(Re, {
            to: "/",
            className:
              "text-white font-bold text-xl flex items-center transition-all duration-300 hover:text-blue-200",
            children: [
              (0, tt.jsx)("img", { src: et, alt: "Logo", className: "h-8 w-auto mr-2" }),
              "\u8a18\u61b6\u5361\u501f\u7528\u7cfb\u7d71"
            ]
          }),
          (0, tt.jsxs)("div", {
            className: "flex items-center ml-auto",
            children: [
              (0, tt.jsxs)(Re, {
                to: "/borrow-with-cards",
                className:
                  "text-white mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2",
                children: [
                  (0, tt.jsx)(Qe, { className: "mr-1", size: 18 }),
                  "\u6211\u8981\u501f\u7528"
                ]
              }),
              t
                ? (0, tt.jsxs)(tt.Fragment, {
                    children: [
                      n &&
                        "admin" === n.role &&
                        (0, tt.jsxs)(tt.Fragment, {
                          children: [
                            (0, tt.jsxs)(Re, {
                              to: "/borrow-memorycard",
                              className:
                                "text-white mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2",
                              children: [
                                (0, tt.jsx)(Ke, { className: "mr-1", size: 18 }),
                                "\u501f\u7528\u6e05\u55ae"
                              ]
                            }),
                            (0, tt.jsxs)(Re, {
                              to: "/add-memorycard",
                              className:
                                "text-white mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2",
                              children: [
                                (0, tt.jsx)(Je, { className: "mr-1", size: 18 }),
                                "\u8a18\u61b6\u5361\u7ba1\u7406"
                              ]
                            }),
                            (0, tt.jsxs)(Re, {
                              to: "/user-management",
                              className:
                                "text-white mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2",
                              children: [
                                (0, tt.jsx)(Ge, { className: "mr-1", size: 18 }),
                                "\u7528\u6236\u7ba1\u7406"
                              ]
                            })
                          ]
                        }),
                      (0, tt.jsxs)("button", {
                        onClick: () => {
                          localStorage.removeItem("token"), e("/login");
                        },
                        className:
                          "text-white flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2",
                        children: [(0, tt.jsx)(Xe, { className: "mr-1", size: 18 }), "\u767b\u51fa"]
                      })
                    ]
                  })
                : (0, tt.jsxs)(tt.Fragment, {
                    children: [
                      (0, tt.jsxs)(Re, {
                        to: "/login",
                        className:
                          "text-white mr-4 flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2",
                        children: [(0, tt.jsx)(Ye, { className: "mr-1", size: 18 }), "\u767b\u5165"]
                      }),
                      (0, tt.jsxs)("button", {
                        onClick: () => {
                          alert("\u76ee\u524d\u4e0d\u958b\u653e\u8a3b\u518a\uff01");
                        },
                        className:
                          "text-white flex items-center transition-all duration-300 hover:bg-blue-900 hover:text-white rounded-lg px-3 py-2",
                        children: [(0, tt.jsx)(Ze, { className: "mr-1", size: 18 }), "\u8a3b\u518a"]
                      })
                    ]
                  })
            ]
          })
        ]
      })
    });
  };
  function rt(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: at } = Object.prototype,
    { getPrototypeOf: ot } = Object,
    lt =
      ((it = Object.create(null)),
      (e) => {
        const t = at.call(e);
        return it[t] || (it[t] = t.slice(8, -1).toLowerCase());
      });
  var it;
  const st = (e) => ((e = e.toLowerCase()), (t) => lt(t) === e),
    ut = (e) => (t) => typeof t === e,
    { isArray: ct } = Array,
    dt = ut("undefined");
  const ft = st("ArrayBuffer");
  const pt = ut("string"),
    ht = ut("function"),
    mt = ut("number"),
    yt = (e) => null !== e && "object" === typeof e,
    gt = (e) => {
      if ("object" !== lt(e)) return !1;
      const t = ot(e);
      return (
        (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    bt = st("Date"),
    vt = st("File"),
    xt = st("Blob"),
    wt = st("FileList"),
    St = st("URLSearchParams"),
    [kt, Nt, Et, jt] = ["ReadableStream", "Request", "Response", "Headers"].map(st);
  function Ct(e, t) {
    let n,
      r,
      { allOwnKeys: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null !== e && "undefined" !== typeof e)
      if (("object" !== typeof e && (e = [e]), ct(e)))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else {
        const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
          o = r.length;
        let l;
        for (n = 0; n < o; n++) (l = r[n]), t.call(null, e[l], l, e);
      }
  }
  function _t(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      a = n.length;
    for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
    return null;
  }
  const Pt =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
        ? self
        : "undefined" !== typeof window
        ? window
        : global,
    Tt = (e) => !dt(e) && e !== Pt;
  const Ot =
    ((Rt = "undefined" !== typeof Uint8Array && ot(Uint8Array)), (e) => Rt && e instanceof Rt);
  var Rt;
  const Lt = st("HTMLFormElement"),
    Dt = ((e) => {
      let { hasOwnProperty: t } = e;
      return (e, n) => t.call(e, n);
    })(Object.prototype),
    zt = st("RegExp"),
    Ft = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      Ct(n, (n, a) => {
        let o;
        !1 !== (o = t(n, a, e)) && (r[a] = o || n);
      }),
        Object.defineProperties(e, r);
    },
    Ut = "abcdefghijklmnopqrstuvwxyz",
    Mt = "0123456789",
    It = { DIGIT: Mt, ALPHA: Ut, ALPHA_DIGIT: Ut + Ut.toUpperCase() + Mt };
  const At = st("AsyncFunction"),
    Bt = ((e, t) => {
      return e
        ? setImmediate
        : t
        ? ((n = "axios@".concat(Math.random())),
          (r = []),
          Pt.addEventListener(
            "message",
            (e) => {
              let { source: t, data: a } = e;
              t === Pt && a === n && r.length && r.shift()();
            },
            !1
          ),
          (e) => {
            r.push(e), Pt.postMessage(n, "*");
          })
        : (e) => setTimeout(e);
      var n, r;
    })("function" === typeof setImmediate, ht(Pt.postMessage)),
    Wt =
      "undefined" !== typeof queueMicrotask
        ? queueMicrotask.bind(Pt)
        : ("undefined" !== typeof process && process.nextTick) || Bt,
    Ht = {
      isArray: ct,
      isArrayBuffer: ft,
      isBuffer: function (e) {
        return (
          null !== e &&
          !dt(e) &&
          null !== e.constructor &&
          !dt(e.constructor) &&
          ht(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" === typeof FormData && e instanceof FormData) ||
            (ht(e.append) &&
              ("formdata" === (t = lt(e)) ||
                ("object" === t && ht(e.toString) && "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && ft(e.buffer)),
          t
        );
      },
      isString: pt,
      isNumber: mt,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: yt,
      isPlainObject: gt,
      isReadableStream: kt,
      isRequest: Nt,
      isResponse: Et,
      isHeaders: jt,
      isUndefined: dt,
      isDate: bt,
      isFile: vt,
      isBlob: xt,
      isRegExp: zt,
      isFunction: ht,
      isStream: (e) => yt(e) && ht(e.pipe),
      isURLSearchParams: St,
      isTypedArray: Ot,
      isFileList: wt,
      forEach: Ct,
      merge: function e() {
        const { caseless: t } = (Tt(this) && this) || {},
          n = {},
          r = (r, a) => {
            const o = (t && _t(n, a)) || a;
            gt(n[o]) && gt(r)
              ? (n[o] = e(n[o], r))
              : gt(r)
              ? (n[o] = e({}, r))
              : ct(r)
              ? (n[o] = r.slice())
              : (n[o] = r);
          };
        for (let a = 0, o = arguments.length; a < o; a++) arguments[a] && Ct(arguments[a], r);
        return n;
      },
      extend: function (e, t, n) {
        let { allOwnKeys: r } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          Ct(
            t,
            (t, r) => {
              n && ht(t) ? (e[r] = rt(t, n)) : (e[r] = t);
            },
            { allOwnKeys: r }
          ),
          e
        );
      },
      trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
        let a, o, l;
        const i = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
            (l = a[o]), (r && !r(l, e, t)) || i[l] || ((t[l] = e[l]), (i[l] = !0));
          e = !1 !== n && ot(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: lt,
      kindOfTest: st,
      endsWith: (e, t, n) => {
        (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (ct(e)) return e;
        let t = e.length;
        if (!mt(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: Lt,
      hasOwnProperty: Dt,
      hasOwnProp: Dt,
      reduceDescriptors: Ft,
      freezeMethods: (e) => {
        Ft(e, (t, n) => {
          if (ht(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
          const r = e[n];
          ht(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return ct(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) => (null != e && Number.isFinite((e = +e)) ? e : t),
      findKey: _t,
      global: Pt,
      isContextDefined: Tt,
      ALPHABET: It,
      generateString: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : It.ALPHA_DIGIT,
          n = "";
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
      },
      isSpecCompliantForm: function (e) {
        return !!(e && ht(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (yt(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const a = ct(e) ? [] : {};
                return (
                  Ct(e, (e, t) => {
                    const o = n(e, r + 1);
                    !dt(o) && (a[t] = o);
                  }),
                  (t[r] = void 0),
                  a
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: At,
      isThenable: (e) => e && (yt(e) || ht(e)) && ht(e.then) && ht(e.catch),
      setImmediate: Bt,
      asap: Wt
    };
  function Vt(e, t, n, r, a) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      a && ((this.response = a), (this.status = a.status ? a.status : null));
  }
  Ht.inherits(Vt, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: Ht.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  const $t = Vt.prototype,
    qt = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
  ].forEach((e) => {
    qt[e] = { value: e };
  }),
    Object.defineProperties(Vt, qt),
    Object.defineProperty($t, "isAxiosError", { value: !0 }),
    (Vt.from = (e, t, n, r, a, o) => {
      const l = Object.create($t);
      return (
        Ht.toFlatObject(
          e,
          l,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e
        ),
        Vt.call(l, e.message, t, n, r, a),
        (l.cause = e),
        (l.name = e.name),
        o && Object.assign(l, o),
        l
      );
    });
  const Qt = Vt;
  function Kt(e) {
    return Ht.isPlainObject(e) || Ht.isArray(e);
  }
  function Jt(e) {
    return Ht.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Gt(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = Jt(e)), !n && t ? "[" + e + "]" : e;
          })
          .join(n ? "." : "")
      : t;
  }
  const Xt = Ht.toFlatObject(Ht, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  const Yt = function (e, t, n) {
    if (!Ht.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (n = Ht.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !Ht.isUndefined(t[e]);
        }
      )).metaTokens,
      a = n.visitor || u,
      o = n.dots,
      l = n.indexes,
      i = (n.Blob || ("undefined" !== typeof Blob && Blob)) && Ht.isSpecCompliantForm(t);
    if (!Ht.isFunction(a)) throw new TypeError("visitor must be a function");
    function s(e) {
      if (null === e) return "";
      if (Ht.isDate(e)) return e.toISOString();
      if (!i && Ht.isBlob(e)) throw new Qt("Blob is not supported. Use a Buffer instead.");
      return Ht.isArrayBuffer(e) || Ht.isTypedArray(e)
        ? i && "function" === typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function u(e, n, a) {
      let i = e;
      if (e && !a && "object" === typeof e)
        if (Ht.endsWith(n, "{}")) (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (Ht.isArray(e) &&
            (function (e) {
              return Ht.isArray(e) && !e.some(Kt);
            })(e)) ||
          ((Ht.isFileList(e) || Ht.endsWith(n, "[]")) && (i = Ht.toArray(e)))
        )
          return (
            (n = Jt(n)),
            i.forEach(function (e, r) {
              !Ht.isUndefined(e) &&
                null !== e &&
                t.append(!0 === l ? Gt([n], r, o) : null === l ? n : n + "[]", s(e));
            }),
            !1
          );
      return !!Kt(e) || (t.append(Gt(a, n, o), s(e)), !1);
    }
    const c = [],
      d = Object.assign(Xt, { defaultVisitor: u, convertValue: s, isVisitable: Kt });
    if (!Ht.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        if (!Ht.isUndefined(n)) {
          if (-1 !== c.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
          c.push(n),
            Ht.forEach(n, function (n, o) {
              !0 ===
                (!(Ht.isUndefined(n) || null === n) &&
                  a.call(t, n, Ht.isString(o) ? o.trim() : o, r, d)) && e(n, r ? r.concat(o) : [o]);
            }),
            c.pop();
        }
      })(e),
      t
    );
  };
  function Zt(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function en(e, t) {
    (this._pairs = []), e && Yt(e, this, t);
  }
  const tn = en.prototype;
  (tn.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (tn.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, Zt);
          }
        : Zt;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  const nn = en;
  function rn(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function an(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || rn;
    Ht.isFunction(n) && (n = { serialize: n });
    const a = n && n.serialize;
    let o;
    if (
      ((o = a ? a(t, n) : Ht.isURLSearchParams(t) ? t.toString() : new nn(t, n).toString(r)), o)
    ) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
    }
    return e;
  }
  const on = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        Ht.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    ln = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    sn = {
      isBrowser: !0,
      classes: {
        URLSearchParams: "undefined" !== typeof URLSearchParams ? URLSearchParams : nn,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null
      },
      protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    un = "undefined" !== typeof window && "undefined" !== typeof document,
    cn = ("object" === typeof navigator && navigator) || void 0,
    dn = un && (!cn || ["ReactNative", "NativeScript", "NS"].indexOf(cn.product) < 0),
    fn =
      "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    pn = (un && window.location.href) || "http://localhost",
    hn = Ie(Ie({}, r), sn);
  const mn = function (e) {
    function t(e, n, r, a) {
      let o = e[a++];
      if ("__proto__" === o) return !0;
      const l = Number.isFinite(+o),
        i = a >= e.length;
      if (((o = !o && Ht.isArray(r) ? r.length : o), i))
        return Ht.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !l;
      (r[o] && Ht.isObject(r[o])) || (r[o] = []);
      return (
        t(e, n, r[o], a) &&
          Ht.isArray(r[o]) &&
          (r[o] = (function (e) {
            const t = {},
              n = Object.keys(e);
            let r;
            const a = n.length;
            let o;
            for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
            return t;
          })(r[o])),
        !l
      );
    }
    if (Ht.isFormData(e) && Ht.isFunction(e.entries)) {
      const n = {};
      return (
        Ht.forEachEntry(e, (e, r) => {
          t(
            (function (e) {
              return Ht.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                "[]" === e[0] ? "" : e[1] || e[0]
              );
            })(e),
            r,
            n,
            0
          );
        }),
        n
      );
    }
    return null;
  };
  const yn = {
    transitional: ln,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          a = Ht.isObject(e);
        a && Ht.isHTMLForm(e) && (e = new FormData(e));
        if (Ht.isFormData(e)) return r ? JSON.stringify(mn(e)) : e;
        if (
          Ht.isArrayBuffer(e) ||
          Ht.isBuffer(e) ||
          Ht.isStream(e) ||
          Ht.isFile(e) ||
          Ht.isBlob(e) ||
          Ht.isReadableStream(e)
        )
          return e;
        if (Ht.isArrayBufferView(e)) return e.buffer;
        if (Ht.isURLSearchParams(e))
          return (
            t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString()
          );
        let o;
        if (a) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return Yt(
                e,
                new hn.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, n, r) {
                      return hn.isNode && Ht.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : r.defaultVisitor.apply(this, arguments);
                    }
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((o = Ht.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return Yt(o ? { "files[]": e } : e, t && new t(), this.formSerializer);
          }
        }
        return a || r
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (Ht.isString(e))
                try {
                  return (t || JSON.parse)(e), Ht.trim(e);
                } catch (Xr) {
                  if ("SyntaxError" !== Xr.name) throw Xr;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      }
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || yn.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (Ht.isResponse(e) || Ht.isReadableStream(e)) return e;
        if (e && Ht.isString(e) && ((n && !this.responseType) || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e);
          } catch (Xr) {
            if (n) {
              if ("SyntaxError" === Xr.name)
                throw Qt.from(Xr, Qt.ERR_BAD_RESPONSE, this, null, this.response);
              throw Xr;
            }
          }
        }
        return e;
      }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: hn.classes.FormData, Blob: hn.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } }
  };
  Ht.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    yn.headers[e] = {};
  });
  const gn = yn,
    bn = Ht.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ]),
    vn = Symbol("internals");
  function xn(e) {
    return e && String(e).trim().toLowerCase();
  }
  function wn(e) {
    return !1 === e || null == e ? e : Ht.isArray(e) ? e.map(wn) : String(e);
  }
  function Sn(e, t, n, r, a) {
    return Ht.isFunction(r)
      ? r.call(this, t, n)
      : (a && (t = n),
        Ht.isString(t)
          ? Ht.isString(r)
            ? -1 !== t.indexOf(r)
            : Ht.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0);
  }
  class kn {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function a(e, t, n) {
        const a = xn(t);
        if (!a) throw new Error("header name must be a non-empty string");
        const o = Ht.findKey(r, a);
        (!o || void 0 === r[o] || !0 === n || (void 0 === n && !1 !== r[o])) && (r[o || t] = wn(e));
      }
      const o = (e, t) => Ht.forEach(e, (e, n) => a(e, n, t));
      if (Ht.isPlainObject(e) || e instanceof this.constructor) o(e, t);
      else if (Ht.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))
        o(
          ((e) => {
            const t = {};
            let n, r, a;
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  (a = e.indexOf(":")),
                    (n = e.substring(0, a).trim().toLowerCase()),
                    (r = e.substring(a + 1).trim()),
                    !n ||
                      (t[n] && bn[n]) ||
                      ("set-cookie" === n
                        ? t[n]
                          ? t[n].push(r)
                          : (t[n] = [r])
                        : (t[n] = t[n] ? t[n] + ", " + r : r));
                }),
              t
            );
          })(e),
          t
        );
      else if (Ht.isHeaders(e)) for (const [l, i] of e.entries()) a(i, l, n);
      else null != e && a(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = xn(e))) {
        const n = Ht.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (Ht.isFunction(t)) return t.call(this, e, n);
          if (Ht.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = xn(e))) {
        const n = Ht.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !Sn(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function a(e) {
        if ((e = xn(e))) {
          const a = Ht.findKey(n, e);
          !a || (t && !Sn(0, n[a], a, t)) || (delete n[a], (r = !0));
        }
      }
      return Ht.isArray(e) ? e.forEach(a) : a(e), r;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const a = t[n];
        (e && !Sn(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        Ht.forEach(this, (r, a) => {
          const o = Ht.findKey(n, a);
          if (o) return (t[o] = wn(r)), void delete t[a];
          const l = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(a)
            : String(a).trim();
          l !== a && delete t[a], (t[l] = wn(r)), (n[l] = !0);
        }),
        this
      );
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return this.constructor.concat(this, ...t);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        Ht.forEach(this, (n, r) => {
          null != n && !1 !== n && (t[r] = e && Ht.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map((e) => {
          let [t, n] = e;
          return t + ": " + n;
        })
        .join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e) {
      const t = new this(e);
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
        r[a - 1] = arguments[a];
      return r.forEach((e) => t.set(e)), t;
    }
    static accessor(e) {
      const t = (this[vn] = this[vn] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = xn(e);
        t[r] ||
          (!(function (e, t) {
            const n = Ht.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, a) {
                  return this[r].call(this, t, e, n, a);
                },
                configurable: !0
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return Ht.isArray(e) ? e.forEach(r) : r(e), this;
    }
  }
  kn.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
  ]),
    Ht.reduceDescriptors(kn.prototype, (e, t) => {
      let { value: n } = e,
        r = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => n,
        set(e) {
          this[r] = e;
        }
      };
    }),
    Ht.freezeMethods(kn);
  const Nn = kn;
  function En(e, t) {
    const n = this || gn,
      r = t || n,
      a = Nn.from(r.headers);
    let o = r.data;
    return (
      Ht.forEach(e, function (e) {
        o = e.call(n, o, a.normalize(), t ? t.status : void 0);
      }),
      a.normalize(),
      o
    );
  }
  function jn(e) {
    return !(!e || !e.__CANCEL__);
  }
  function Cn(e, t, n) {
    Qt.call(this, null == e ? "canceled" : e, Qt.ERR_CANCELED, t, n), (this.name = "CanceledError");
  }
  Ht.inherits(Cn, Qt, { __CANCEL__: !0 });
  const _n = Cn;
  function Pn(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new Qt(
            "Request failed with status code " + n.status,
            [Qt.ERR_BAD_REQUEST, Qt.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
            n.config,
            n.request,
            n
          )
        )
      : e(n);
  }
  const Tn = function (e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let a,
      o = 0,
      l = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (i) {
        const s = Date.now(),
          u = r[l];
        a || (a = s), (n[o] = i), (r[o] = s);
        let c = l,
          d = 0;
        for (; c !== o; ) (d += n[c++]), (c %= e);
        if (((o = (o + 1) % e), o === l && (l = (l + 1) % e), s - a < t)) return;
        const f = u && s - u;
        return f ? Math.round((1e3 * d) / f) : void 0;
      }
    );
  };
  const On = function (e, t) {
      let n,
        r,
        a = 0,
        o = 1e3 / t;
      const l = function (t) {
        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        (a = o), (n = null), r && (clearTimeout(r), (r = null)), e.apply(null, t);
      };
      return [
        function () {
          const e = Date.now(),
            t = e - a;
          for (var i = arguments.length, s = new Array(i), u = 0; u < i; u++) s[u] = arguments[u];
          t >= o
            ? l(s, e)
            : ((n = s),
              r ||
                (r = setTimeout(() => {
                  (r = null), l(n);
                }, o - t)));
        },
        () => n && l(n)
      ];
    },
    Rn = function (e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        r = 0;
      const a = Tn(50, 250);
      return On((n) => {
        const o = n.loaded,
          l = n.lengthComputable ? n.total : void 0,
          i = o - r,
          s = a(i);
        r = o;
        e({
          loaded: o,
          total: l,
          progress: l ? o / l : void 0,
          bytes: i,
          rate: s || void 0,
          estimated: s && l && o <= l ? (l - o) / s : void 0,
          event: n,
          lengthComputable: null != l,
          [t ? "download" : "upload"]: !0
        });
      }, n);
    },
    Ln = (e, t) => {
      const n = null != e;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    Dn = (e) =>
      function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return Ht.asap(() => e(...n));
      },
    zn = hn.hasStandardBrowserEnv
      ? ((e, t) => (n) => (
          (n = new URL(n, hn.origin)),
          e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)
        ))(new URL(hn.origin), hn.navigator && /(msie|trident)/i.test(hn.navigator.userAgent))
      : () => !0,
    Fn = hn.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, a, o) {
            const l = [e + "=" + encodeURIComponent(t)];
            Ht.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
              Ht.isString(r) && l.push("path=" + r),
              Ht.isString(a) && l.push("domain=" + a),
              !0 === o && l.push("secure"),
              (document.cookie = l.join("; "));
          },
          read(e) {
            const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          }
        }
      : { write() {}, read: () => null, remove() {} };
  function Un(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const Mn = (e) => (e instanceof Nn ? Ie({}, e) : e);
  function In(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n, r) {
      return Ht.isPlainObject(e) && Ht.isPlainObject(t)
        ? Ht.merge.call({ caseless: r }, e, t)
        : Ht.isPlainObject(t)
        ? Ht.merge({}, t)
        : Ht.isArray(t)
        ? t.slice()
        : t;
    }
    function a(e, t, n, a) {
      return Ht.isUndefined(t) ? (Ht.isUndefined(e) ? void 0 : r(void 0, e, 0, a)) : r(e, t, 0, a);
    }
    function o(e, t) {
      if (!Ht.isUndefined(t)) return r(void 0, t);
    }
    function l(e, t) {
      return Ht.isUndefined(t) ? (Ht.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
    }
    function i(n, a, o) {
      return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
    }
    const s = {
      url: o,
      method: o,
      data: o,
      baseURL: l,
      transformRequest: l,
      transformResponse: l,
      paramsSerializer: l,
      timeout: l,
      timeoutMessage: l,
      withCredentials: l,
      withXSRFToken: l,
      adapter: l,
      responseType: l,
      xsrfCookieName: l,
      xsrfHeaderName: l,
      onUploadProgress: l,
      onDownloadProgress: l,
      decompress: l,
      maxContentLength: l,
      maxBodyLength: l,
      beforeRedirect: l,
      transport: l,
      httpAgent: l,
      httpsAgent: l,
      cancelToken: l,
      socketPath: l,
      responseEncoding: l,
      validateStatus: i,
      headers: (e, t, n) => a(Mn(e), Mn(t), 0, !0)
    };
    return (
      Ht.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const o = s[r] || a,
          l = o(e[r], t[r], r);
        (Ht.isUndefined(l) && o !== i) || (n[r] = l);
      }),
      n
    );
  }
  const An = (e) => {
      const t = In({}, e);
      let n,
        {
          data: r,
          withXSRFToken: a,
          xsrfHeaderName: o,
          xsrfCookieName: l,
          headers: i,
          auth: s
        } = t;
      if (
        ((t.headers = i = Nn.from(i)),
        (t.url = an(Un(t.baseURL, t.url), e.params, e.paramsSerializer)),
        s &&
          i.set(
            "Authorization",
            "Basic " +
              btoa(
                (s.username || "") +
                  ":" +
                  (s.password ? unescape(encodeURIComponent(s.password)) : "")
              )
          ),
        Ht.isFormData(r))
      )
        if (hn.hasStandardBrowserEnv || hn.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
        else if (!1 !== (n = i.getContentType())) {
          const [e, ...t] = n
            ? n
                .split(";")
                .map((e) => e.trim())
                .filter(Boolean)
            : [];
          i.setContentType([e || "multipart/form-data", ...t].join("; "));
        }
      if (
        hn.hasStandardBrowserEnv &&
        (a && Ht.isFunction(a) && (a = a(t)), a || (!1 !== a && zn(t.url)))
      ) {
        const e = o && l && Fn.read(l);
        e && i.set(o, e);
      }
      return t;
    },
    Bn =
      "undefined" !== typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = An(e);
          let a = r.data;
          const o = Nn.from(r.headers).normalize();
          let l,
            i,
            s,
            u,
            c,
            { responseType: d, onUploadProgress: f, onDownloadProgress: p } = r;
          function h() {
            u && u(),
              c && c(),
              r.cancelToken && r.cancelToken.unsubscribe(l),
              r.signal && r.signal.removeEventListener("abort", l);
          }
          let m = new XMLHttpRequest();
          function y() {
            if (!m) return;
            const r = Nn.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
            Pn(
              function (e) {
                t(e), h();
              },
              function (e) {
                n(e), h();
              },
              {
                data: d && "text" !== d && "json" !== d ? m.response : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: r,
                config: e,
                request: m
              }
            ),
              (m = null);
          }
          m.open(r.method.toUpperCase(), r.url, !0),
            (m.timeout = r.timeout),
            "onloadend" in m
              ? (m.onloadend = y)
              : (m.onreadystatechange = function () {
                  m &&
                    4 === m.readyState &&
                    (0 !== m.status || (m.responseURL && 0 === m.responseURL.indexOf("file:"))) &&
                    setTimeout(y);
                }),
            (m.onabort = function () {
              m && (n(new Qt("Request aborted", Qt.ECONNABORTED, e, m)), (m = null));
            }),
            (m.onerror = function () {
              n(new Qt("Network Error", Qt.ERR_NETWORK, e, m)), (m = null);
            }),
            (m.ontimeout = function () {
              let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
              const a = r.transitional || ln;
              r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                n(new Qt(t, a.clarifyTimeoutError ? Qt.ETIMEDOUT : Qt.ECONNABORTED, e, m)),
                (m = null);
            }),
            void 0 === a && o.setContentType(null),
            "setRequestHeader" in m &&
              Ht.forEach(o.toJSON(), function (e, t) {
                m.setRequestHeader(t, e);
              }),
            Ht.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials),
            d && "json" !== d && (m.responseType = r.responseType),
            p && (([s, c] = Rn(p, !0)), m.addEventListener("progress", s)),
            f &&
              m.upload &&
              (([i, u] = Rn(f)),
              m.upload.addEventListener("progress", i),
              m.upload.addEventListener("loadend", u)),
            (r.cancelToken || r.signal) &&
              ((l = (t) => {
                m && (n(!t || t.type ? new _n(null, e, m) : t), m.abort(), (m = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(l),
              r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
          const g = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(r.url);
          g && -1 === hn.protocols.indexOf(g)
            ? n(new Qt("Unsupported protocol " + g + ":", Qt.ERR_BAD_REQUEST, e))
            : m.send(a || null);
        });
      },
    Wn = (e, t) => {
      const { length: n } = (e = e ? e.filter(Boolean) : []);
      if (t || n) {
        let n,
          r = new AbortController();
        const a = function (e) {
          if (!n) {
            (n = !0), l();
            const t = e instanceof Error ? e : this.reason;
            r.abort(t instanceof Qt ? t : new _n(t instanceof Error ? t.message : t));
          }
        };
        let o =
          t &&
          setTimeout(() => {
            (o = null), a(new Qt("timeout ".concat(t, " of ms exceeded"), Qt.ETIMEDOUT));
          }, t);
        const l = () => {
          e &&
            (o && clearTimeout(o),
            (o = null),
            e.forEach((e) => {
              e.unsubscribe ? e.unsubscribe(a) : e.removeEventListener("abort", a);
            }),
            (e = null));
        };
        e.forEach((e) => e.addEventListener("abort", a));
        const { signal: i } = r;
        return (i.unsubscribe = () => Ht.asap(l)), i;
      }
    };
  function Hn(e, t) {
    (this.v = e), (this.k = t);
  }
  function Vn(e) {
    return function () {
      return new $n(e.apply(this, arguments));
    };
  }
  function $n(e) {
    var t, n;
    function r(t, n) {
      try {
        var o = e[t](n),
          l = o.value,
          i = l instanceof Hn;
        Promise.resolve(i ? l.v : l).then(
          function (n) {
            if (i) {
              var s = "return" === t ? "return" : "next";
              if (!l.k || n.done) return r(s, n);
              n = e[s](n).value;
            }
            a(o.done ? "return" : "normal", n);
          },
          function (e) {
            r("throw", e);
          }
        );
      } catch (e) {
        a("throw", e);
      }
    }
    function a(e, a) {
      switch (e) {
        case "return":
          t.resolve({ value: a, done: !0 });
          break;
        case "throw":
          t.reject(a);
          break;
        default:
          t.resolve({ value: a, done: !1 });
      }
      (t = t.next) ? r(t.key, t.arg) : (n = null);
    }
    (this._invoke = function (e, a) {
      return new Promise(function (o, l) {
        var i = { key: e, arg: a, resolve: o, reject: l, next: null };
        n ? (n = n.next = i) : ((t = n = i), r(e, a));
      });
    }),
      "function" != typeof e.return && (this.return = void 0);
  }
  function qn(e) {
    return new Hn(e, 0);
  }
  function Qn(e) {
    var t = {},
      n = !1;
    function r(t, r) {
      return (
        (n = !0),
        (r = new Promise(function (n) {
          n(e[t](r));
        })),
        { done: !1, value: new Hn(r, 1) }
      );
    }
    return (
      (t[("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator"] = function () {
        return this;
      }),
      (t.next = function (e) {
        return n ? ((n = !1), e) : r("next", e);
      }),
      "function" == typeof e.throw &&
        (t.throw = function (e) {
          if (n) throw ((n = !1), e);
          return r("throw", e);
        }),
      "function" == typeof e.return &&
        (t.return = function (e) {
          return n ? ((n = !1), e) : r("return", e);
        }),
      t
    );
  }
  function Kn(e) {
    var t,
      n,
      r,
      a = 2;
    for (
      "undefined" != typeof Symbol && ((n = Symbol.asyncIterator), (r = Symbol.iterator));
      a--;

    ) {
      if (n && null != (t = e[n])) return t.call(e);
      if (r && null != (t = e[r])) return new Jn(t.call(e));
      (n = "@@asyncIterator"), (r = "@@iterator");
    }
    throw new TypeError("Object is not async iterable");
  }
  function Jn(e) {
    function t(e) {
      if (Object(e) !== e) return Promise.reject(new TypeError(e + " is not an object."));
      var t = e.done;
      return Promise.resolve(e.value).then(function (e) {
        return { value: e, done: t };
      });
    }
    return (
      (Jn = function (e) {
        (this.s = e), (this.n = e.next);
      }),
      (Jn.prototype = {
        s: null,
        n: null,
        next: function () {
          return t(this.n.apply(this.s, arguments));
        },
        return: function (e) {
          var n = this.s.return;
          return void 0 === n
            ? Promise.resolve({ value: e, done: !0 })
            : t(n.apply(this.s, arguments));
        },
        throw: function (e) {
          var n = this.s.return;
          return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments));
        }
      }),
      new Jn(e)
    );
  }
  ($n.prototype[("function" == typeof Symbol && Symbol.asyncIterator) || "@@asyncIterator"] =
    function () {
      return this;
    }),
    ($n.prototype.next = function (e) {
      return this._invoke("next", e);
    }),
    ($n.prototype.throw = function (e) {
      return this._invoke("throw", e);
    }),
    ($n.prototype.return = function (e) {
      return this._invoke("return", e);
    });
  const Gn = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        a = 0;
      for (; a < n; ) (r = a + t), yield e.slice(a, r), (a = r);
    },
    Xn = (function () {
      var e = Vn(function* (e, t) {
        var n,
          r = !1,
          a = !1;
        try {
          for (var o, l = Kn(Yn(e)); (r = !(o = yield qn(l.next())).done); r = !1) {
            const e = o.value;
            yield* Qn(Kn(Gn(e, t)));
          }
        } catch (i) {
          (a = !0), (n = i);
        } finally {
          try {
            r && null != l.return && (yield qn(l.return()));
          } finally {
            if (a) throw n;
          }
        }
      });
      return function (t, n) {
        return e.apply(this, arguments);
      };
    })(),
    Yn = (function () {
      var e = Vn(function* (e) {
        if (e[Symbol.asyncIterator]) return void (yield* Qn(Kn(e)));
        const t = e.getReader();
        try {
          for (;;) {
            const { done: e, value: n } = yield qn(t.read());
            if (e) break;
            yield n;
          }
        } finally {
          yield qn(t.cancel());
        }
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    Zn = (e, t, n, r) => {
      const a = Xn(e, t);
      let o,
        l = 0,
        i = (e) => {
          o || ((o = !0), r && r(e));
        };
      return new ReadableStream(
        {
          async pull(e) {
            try {
              const { done: t, value: r } = await a.next();
              if (t) return i(), void e.close();
              let o = r.byteLength;
              if (n) {
                let e = (l += o);
                n(e);
              }
              e.enqueue(new Uint8Array(r));
            } catch (t) {
              throw (i(t), t);
            }
          },
          cancel: (e) => (i(e), a.return())
        },
        { highWaterMark: 2 }
      );
    },
    er =
      "function" === typeof fetch &&
      "function" === typeof Request &&
      "function" === typeof Response,
    tr = er && "function" === typeof ReadableStream,
    nr =
      er &&
      ("function" === typeof TextEncoder
        ? ((rr = new TextEncoder()), (e) => rr.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
  var rr;
  const ar = function (e) {
      try {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        return !!e(...n);
      } catch (Xr) {
        return !1;
      }
    },
    or =
      tr &&
      ar(() => {
        let e = !1;
        const t = new Request(hn.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          }
        }).headers.has("Content-Type");
        return e && !t;
      }),
    lr = tr && ar(() => Ht.isReadableStream(new Response("").body)),
    ir = { stream: lr && ((e) => e.body) };
  var sr;
  er &&
    ((sr = new Response()),
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !ir[e] &&
        (ir[e] = Ht.isFunction(sr[e])
          ? (t) => t[e]()
          : (t, n) => {
              throw new Qt(
                "Response type '".concat(e, "' is not supported"),
                Qt.ERR_NOT_SUPPORT,
                n
              );
            });
    }));
  const ur = async (e, t) => {
      const n = Ht.toFiniteNumber(e.getContentLength());
      return null == n
        ? (async (e) => {
            if (null == e) return 0;
            if (Ht.isBlob(e)) return e.size;
            if (Ht.isSpecCompliantForm(e)) {
              const t = new Request(hn.origin, { method: "POST", body: e });
              return (await t.arrayBuffer()).byteLength;
            }
            return Ht.isArrayBufferView(e) || Ht.isArrayBuffer(e)
              ? e.byteLength
              : (Ht.isURLSearchParams(e) && (e += ""),
                Ht.isString(e) ? (await nr(e)).byteLength : void 0);
          })(t)
        : n;
    },
    cr =
      er &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: a,
          cancelToken: o,
          timeout: l,
          onDownloadProgress: i,
          onUploadProgress: s,
          responseType: u,
          headers: c,
          withCredentials: d = "same-origin",
          fetchOptions: f
        } = An(e);
        u = u ? (u + "").toLowerCase() : "text";
        let p,
          h = Wn([a, o && o.toAbortSignal()], l);
        const m =
          h &&
          h.unsubscribe &&
          (() => {
            h.unsubscribe();
          });
        let y;
        try {
          if (s && or && "get" !== n && "head" !== n && 0 !== (y = await ur(c, r))) {
            let e,
              n = new Request(t, { method: "POST", body: r, duplex: "half" });
            if (
              (Ht.isFormData(r) && (e = n.headers.get("content-type")) && c.setContentType(e),
              n.body)
            ) {
              const [e, t] = Ln(y, Rn(Dn(s)));
              r = Zn(n.body, 65536, e, t);
            }
          }
          Ht.isString(d) || (d = d ? "include" : "omit");
          const a = "credentials" in Request.prototype;
          p = new Request(
            t,
            Ie(
              Ie({}, f),
              {},
              {
                signal: h,
                method: n.toUpperCase(),
                headers: c.normalize().toJSON(),
                body: r,
                duplex: "half",
                credentials: a ? d : void 0
              }
            )
          );
          let o = await fetch(p);
          const l = lr && ("stream" === u || "response" === u);
          if (lr && (i || (l && m))) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t) => {
              e[t] = o[t];
            });
            const t = Ht.toFiniteNumber(o.headers.get("content-length")),
              [n, r] = (i && Ln(t, Rn(Dn(i), !0))) || [];
            o = new Response(
              Zn(o.body, 65536, n, () => {
                r && r(), m && m();
              }),
              e
            );
          }
          u = u || "text";
          let g = await ir[Ht.findKey(ir, u) || "text"](o, e);
          return (
            !l && m && m(),
            await new Promise((t, n) => {
              Pn(t, n, {
                data: g,
                headers: Nn.from(o.headers),
                status: o.status,
                statusText: o.statusText,
                config: e,
                request: p
              });
            })
          );
        } catch (g) {
          if ((m && m(), g && "TypeError" === g.name && /fetch/i.test(g.message)))
            throw Object.assign(new Qt("Network Error", Qt.ERR_NETWORK, e, p), {
              cause: g.cause || g
            });
          throw Qt.from(g, g && g.code, e, p);
        }
      }),
    dr = { http: null, xhr: Bn, fetch: cr };
  Ht.forEach(dr, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (Xr) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const fr = (e) => "- ".concat(e),
    pr = (e) => Ht.isFunction(e) || null === e || !1 === e,
    hr = (e) => {
      e = Ht.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const a = {};
      for (let o = 0; o < t; o++) {
        let t;
        if (
          ((n = e[o]), (r = n), !pr(n) && ((r = dr[(t = String(n)).toLowerCase()]), void 0 === r))
        )
          throw new Qt("Unknown adapter '".concat(t, "'"));
        if (r) break;
        a[t || "#" + o] = r;
      }
      if (!r) {
        const e = Object.entries(a).map((e) => {
          let [t, n] = e;
          return (
            "adapter ".concat(t, " ") +
            (!1 === n ? "is not supported by the environment" : "is not available in the build")
          );
        });
        let n = t
          ? e.length > 1
            ? "since :\n" + e.map(fr).join("\n")
            : " " + fr(e[0])
          : "as no adapter specified";
        throw new Qt(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    };
  function mr(e) {
    if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
      throw new _n(null, e);
  }
  function yr(e) {
    mr(e),
      (e.headers = Nn.from(e.headers)),
      (e.data = En.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return hr(e.adapter || gn.adapter)(e).then(
      function (t) {
        return (
          mr(e), (t.data = En.call(e, e.transformResponse, t)), (t.headers = Nn.from(t.headers)), t
        );
      },
      function (t) {
        return (
          jn(t) ||
            (mr(e),
            t &&
              t.response &&
              ((t.response.data = En.call(e, e.transformResponse, t.response)),
              (t.response.headers = Nn.from(t.response.headers)))),
          Promise.reject(t)
        );
      }
    );
  }
  const gr = "1.7.9",
    br = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    br[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  });
  const vr = {};
  (br.transitional = function (e, t, n) {
    function r(e, t) {
      return "[Axios v1.7.9] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
    }
    return (n, a, o) => {
      if (!1 === e)
        throw new Qt(r(a, " has been removed" + (t ? " in " + t : "")), Qt.ERR_DEPRECATED);
      return (
        t &&
          !vr[a] &&
          ((vr[a] = !0),
          console.warn(
            r(a, " has been deprecated since v" + t + " and will be removed in the near future")
          )),
        !e || e(n, a, o)
      );
    };
  }),
    (br.spelling = function (e) {
      return (t, n) => (console.warn("".concat(n, " is likely a misspelling of ").concat(e)), !0);
    });
  const xr = {
      assertOptions: function (e, t, n) {
        if ("object" !== typeof e)
          throw new Qt("options must be an object", Qt.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let a = r.length;
        for (; a-- > 0; ) {
          const o = r[a],
            l = t[o];
          if (l) {
            const t = e[o],
              n = void 0 === t || l(t, o, e);
            if (!0 !== n) throw new Qt("option " + o + " must be " + n, Qt.ERR_BAD_OPTION_VALUE);
          } else if (!0 !== n) throw new Qt("Unknown option " + o, Qt.ERR_BAD_OPTION);
        }
      },
      validators: br
    },
    wr = xr.validators;
  class Sr {
    constructor(e) {
      (this.defaults = e), (this.interceptors = { request: new on(), response: new on() });
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (n) {
        if (n instanceof Error) {
          let e = {};
          Error.captureStackTrace ? Error.captureStackTrace(e) : (e = new Error());
          const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? t && !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (n.stack += "\n" + t)
              : (n.stack = t);
          } catch (Xr) {}
        }
        throw n;
      }
    }
    _request(e, t) {
      "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = In(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: a } = t;
      void 0 !== n &&
        xr.assertOptions(
          n,
          {
            silentJSONParsing: wr.transitional(wr.boolean),
            forcedJSONParsing: wr.transitional(wr.boolean),
            clarifyTimeoutError: wr.transitional(wr.boolean)
          },
          !1
        ),
        null != r &&
          (Ht.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : xr.assertOptions(r, { encode: wr.function, serialize: wr.function }, !0)),
        xr.assertOptions(
          t,
          { baseUrl: wr.spelling("baseURL"), withXsrfToken: wr.spelling("withXSRFToken") },
          !0
        ),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase());
      let o = a && Ht.merge(a.common, a[t.method]);
      a &&
        Ht.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e) => {
          delete a[e];
        }),
        (t.headers = Nn.concat(o, a));
      const l = [];
      let i = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((i = i && e.synchronous), l.unshift(e.fulfilled, e.rejected));
      });
      const s = [];
      let u;
      this.interceptors.response.forEach(function (e) {
        s.push(e.fulfilled, e.rejected);
      });
      let c,
        d = 0;
      if (!i) {
        const e = [yr.bind(this), void 0];
        for (
          e.unshift.apply(e, l), e.push.apply(e, s), c = e.length, u = Promise.resolve(t);
          d < c;

        )
          u = u.then(e[d++], e[d++]);
        return u;
      }
      c = l.length;
      let f = t;
      for (d = 0; d < c; ) {
        const e = l[d++],
          t = l[d++];
        try {
          f = e(f);
        } catch (p) {
          t.call(this, p);
          break;
        }
      }
      try {
        u = yr.call(this, f);
      } catch (p) {
        return Promise.reject(p);
      }
      for (d = 0, c = s.length; d < c; ) u = u.then(s[d++], s[d++]);
      return u;
    }
    getUri(e) {
      return an(Un((e = In(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
    }
  }
  Ht.forEach(["delete", "get", "head", "options"], function (e) {
    Sr.prototype[e] = function (t, n) {
      return this.request(In(n || {}, { method: e, url: t, data: (n || {}).data }));
    };
  }),
    Ht.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, a) {
          return this.request(
            In(a || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r
            })
          );
        };
      }
      (Sr.prototype[e] = t()), (Sr.prototype[e + "Form"] = t(!0));
    });
  const kr = Sr;
  class Nr {
    constructor(e) {
      if ("function" !== typeof e) throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, a) {
          n.reason || ((n.reason = new _n(e, r, a)), t(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
        ? this._listeners.push(e)
        : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return this.subscribe(t), (e.signal.unsubscribe = () => this.unsubscribe(t)), e.signal;
    }
    static source() {
      let e;
      return {
        token: new Nr(function (t) {
          e = t;
        }),
        cancel: e
      };
    }
  }
  const Er = Nr;
  const jr = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(jr).forEach((e) => {
    let [t, n] = e;
    jr[n] = t;
  });
  const Cr = jr;
  const _r = (function e(t) {
    const n = new kr(t),
      r = rt(kr.prototype.request, n);
    return (
      Ht.extend(r, kr.prototype, n, { allOwnKeys: !0 }),
      Ht.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(In(t, n));
      }),
      r
    );
  })(gn);
  (_r.Axios = kr),
    (_r.CanceledError = _n),
    (_r.CancelToken = Er),
    (_r.isCancel = jn),
    (_r.VERSION = gr),
    (_r.toFormData = Yt),
    (_r.AxiosError = Qt),
    (_r.Cancel = _r.CanceledError),
    (_r.all = function (e) {
      return Promise.all(e);
    }),
    (_r.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (_r.isAxiosError = function (e) {
      return Ht.isObject(e) && !0 === e.isAxiosError;
    }),
    (_r.mergeConfig = In),
    (_r.AxiosHeaders = Nn),
    (_r.formToJSON = (e) => mn(Ht.isHTMLForm(e) ? new FormData(e) : e)),
    (_r.getAdapter = hr),
    (_r.HttpStatusCode = Cr),
    (_r.default = _r);
  const Pr = _r.create({ baseURL: "http://${process.env.REACT_APP_API_URL}/api" });
  Pr.interceptors.request.use(
    (e) => {
      const t = localStorage.getItem("token");
      return t && (e.headers["x-auth-token"] = t), e;
    },
    (e) => Promise.reject(e)
  );
  const Tr = Pr,
    Or = () => {
      const [e, t] = (0, o.useState)({ username: "", password: "" }),
        n = re(),
        r = (n) => {
          t(Ie(Ie({}, e), {}, { [n.target.name]: n.target.value }));
        };
      return (0, tt.jsx)("div", {
        className: "flex justify-center items-center h-screen bg-gray-100",
        children: (0, tt.jsxs)("form", {
          onSubmit: async (t) => {
            t.preventDefault();
            try {
              const t = await Tr.post("/users/login", e);
              localStorage.setItem("token", t.data.token), n("/");
            } catch (r) {
              console.error(r.response.data),
                alert(r.response.data.msg || "\u767b\u5165\u5931\u6557");
            }
          },
          className: "bg-white p-8 rounded shadow-md w-full max-w-md",
          children: [
            (0, tt.jsx)("h2", {
              className: "text-2xl font-bold mb-6 text-center",
              children: "\u767b\u5165"
            }),
            (0, tt.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, tt.jsx)("label", {
                  className: "block text-gray-700 mb-2",
                  htmlFor: "username",
                  children: "\u7528\u6236\u540d"
                }),
                (0, tt.jsx)("input", {
                  type: "text",
                  id: "username",
                  name: "username",
                  value: e.username,
                  onChange: r,
                  className:
                    "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                  placeholder: "\u8f38\u5165\u7528\u6236\u540d",
                  required: !0
                })
              ]
            }),
            (0, tt.jsxs)("div", {
              className: "mb-6",
              children: [
                (0, tt.jsx)("label", {
                  className: "block text-gray-700 mb-2",
                  htmlFor: "password",
                  children: "\u5bc6\u78bc"
                }),
                (0, tt.jsx)("input", {
                  type: "password",
                  id: "password",
                  name: "password",
                  value: e.password,
                  onChange: r,
                  className:
                    "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                  placeholder: "\u8f38\u5165\u5bc6\u78bc",
                  required: !0
                })
              ]
            }),
            (0, tt.jsx)("button", {
              type: "submit",
              className:
                "w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200",
              children: "\u767b\u5165"
            })
          ]
        })
      });
    },
    Rr = () => {
      const [e, t] = (0, o.useState)({ username: "", password: "", role: "user" }),
        n = re(),
        r = (n) => {
          t(Ie(Ie({}, e), {}, { [n.target.name]: n.target.value }));
        };
      return (0, tt.jsx)("div", {
        className: "flex justify-center items-center h-screen bg-gray-100",
        children: (0, tt.jsxs)("form", {
          onSubmit: async (t) => {
            t.preventDefault();
            try {
              await Tr.post("/users/register", e);
              alert("\u8a3b\u518a\u6210\u529f\uff0c\u8acb\u767b\u5165"), n("/login");
            } catch (r) {
              console.error(r.response.data),
                alert(r.response.data.msg || "\u8a3b\u518a\u5931\u6557");
            }
          },
          className: "bg-white p-8 rounded shadow-md w-full max-w-md",
          children: [
            (0, tt.jsx)("h2", {
              className: "text-2xl font-bold mb-6 text-center",
              children: "\u8a3b\u518a"
            }),
            (0, tt.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, tt.jsx)("label", {
                  className: "block text-gray-700 mb-2",
                  htmlFor: "username",
                  children: "\u7528\u6236\u540d"
                }),
                (0, tt.jsx)("input", {
                  type: "text",
                  id: "username",
                  name: "username",
                  value: e.username,
                  onChange: r,
                  className:
                    "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                  placeholder: "\u8f38\u5165\u7528\u6236\u540d",
                  required: !0
                })
              ]
            }),
            (0, tt.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, tt.jsx)("label", {
                  className: "block text-gray-700 mb-2",
                  htmlFor: "password",
                  children: "\u5bc6\u78bc"
                }),
                (0, tt.jsx)("input", {
                  type: "password",
                  id: "password",
                  name: "password",
                  value: e.password,
                  onChange: r,
                  className:
                    "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                  placeholder: "\u8f38\u5165\u5bc6\u78bc",
                  required: !0
                })
              ]
            }),
            (0, tt.jsxs)("div", {
              className: "mb-6",
              children: [
                (0, tt.jsx)("label", {
                  className: "block text-gray-700 mb-2",
                  htmlFor: "role",
                  children: "\u89d2\u8272"
                }),
                (0, tt.jsxs)("select", {
                  id: "role",
                  name: "role",
                  value: e.role,
                  onChange: r,
                  className:
                    "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                  required: !0,
                  children: [
                    (0, tt.jsx)("option", { value: "user", children: "\u7528\u6236" }),
                    (0, tt.jsx)("option", { value: "admin", children: "\u7ba1\u7406\u54e1" })
                  ]
                })
              ]
            }),
            (0, tt.jsx)("button", {
              type: "submit",
              className:
                "w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200",
              children: "\u8a3b\u518a"
            }),
            (0, tt.jsxs)("p", {
              className: "mt-4 text-center text-gray-600",
              children: [
                "\u5df2\u6709\u5e33\u865f\uff1f",
                " ",
                (0, tt.jsx)(Re, {
                  to: "/login",
                  className: "text-blue-500 hover:underline",
                  children: "\u767b\u5165"
                })
              ]
            })
          ]
        })
      });
    },
    Lr = qe("Scroll", [
      ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
      [
        "path",
        {
          d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
          key: "1ph1d7"
        }
      ]
    ]),
    Dr = qe("Bell", [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
      [
        "path",
        {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
          key: "11g9vi"
        }
      ]
    ]),
    zr = qe("Phone", [
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          key: "foiqr5"
        }
      ]
    ]),
    Fr = {
      title: "\u8a18\u61b6\u5361\u501f\u7528\u898f\u5247",
      rules: [
        "1. \u6bcf\u6b21\u501f\u7528\u9700\u586b\u5beb\u501f\u7528\u8868\u55ae\uff0c\u5305\u542b\u501f\u7528\u4eba\u59d3\u540d\u3001\u501f\u7528\u65e5\u671f\u7b49\u8cc7\u8a0a",
        "2. \u501f\u7528\u671f\u9650\u6700\u9577\u70ba14\u5929",
        "3. \u4f7f\u7528\u5b8c\u7562\u5f8c\u8acb\u52d9\u5fc5\u6b78\u9084\u4e26\u66f4\u65b0\u7cfb\u7d71\u72c0\u614b",
        "4. \u8acb\u59a5\u5584\u4fdd\u7ba1\u8a18\u61b6\u5361\uff0c\u5982\u6709\u907a\u5931\u6216\u640d\u58de\u9700\u8ce0\u511f",
        "5. \u540c\u4e00\u5f35\u8a18\u61b6\u5361\u9700\u7b49\u5f85\u6b78\u9084\u5f8c\u624d\u80fd\u518d\u6b21\u501f\u7528"
      ],
      notes: [
        "\u203b \u5982\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u8acb\u806f\u7e6b\u7cfb\u7d71\u7ba1\u7406\u54e1",
        "\u203b \u501f\u7528\u898f\u5247\u53ef\u80fd\u6703\u8996\u60c5\u6cc1\u8abf\u6574\uff0c\u8acb\u96a8\u6642\u95dc\u6ce8\u6700\u65b0\u516c\u544a"
      ],
      contact: { admin: "\u7cfb\u7d71\u7ba1\u7406\u54e1:\u8212\u55ac", phone: "0976079302" }
    },
    Ur = () =>
      (0, tt.jsx)("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-white p-6",
        children: (0, tt.jsxs)("div", {
          className: "container mx-auto max-w-4xl",
          children: [
            (0, tt.jsx)("h1", {
              className:
                "text-4xl font-bold text-center text-gray-800 mb-12 p-4 border-b-4 border-blue-500",
              children: Fr.title
            }),
            (0, tt.jsxs)("div", {
              className: "grid gap-8",
              children: [
                (0, tt.jsxs)("div", {
                  className:
                    "bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
                  children: [
                    (0, tt.jsxs)("div", {
                      className: "flex items-center mb-6",
                      children: [
                        (0, tt.jsx)(Lr, { className: "w-8 h-8 text-blue-600 mr-3" }),
                        (0, tt.jsx)("h2", {
                          className: "text-2xl font-semibold text-gray-800",
                          children: "\u501f\u7528\u898f\u5247"
                        })
                      ]
                    }),
                    (0, tt.jsx)("ul", {
                      className: "space-y-4",
                      children: Fr.rules.map((e, t) =>
                        (0, tt.jsxs)(
                          "li",
                          {
                            className: "text-gray-700 flex items-start",
                            children: [
                              (0, tt.jsx)("span", {
                                className:
                                  "inline-block w-8 h-8 bg-blue-100 rounded-full text-blue-600 flex items-center justify-center mr-3 font-semibold",
                                children: t + 1
                              }),
                              (0, tt.jsx)("span", {
                                className: "flex-1 pt-1",
                                children: e.substring(2)
                              })
                            ]
                          },
                          t
                        )
                      )
                    })
                  ]
                }),
                (0, tt.jsxs)("div", {
                  className:
                    "bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
                  children: [
                    (0, tt.jsxs)("div", {
                      className: "flex items-center mb-6",
                      children: [
                        (0, tt.jsx)(Dr, { className: "w-8 h-8 text-yellow-600 mr-3" }),
                        (0, tt.jsx)("h2", {
                          className: "text-2xl font-semibold text-gray-800",
                          children: "\u6ce8\u610f\u4e8b\u9805"
                        })
                      ]
                    }),
                    (0, tt.jsx)("ul", {
                      className: "space-y-4",
                      children: Fr.notes.map((e, t) =>
                        (0, tt.jsx)(
                          "li",
                          {
                            className: "text-gray-700 pl-4 border-l-4 border-yellow-400",
                            children: e
                          },
                          t
                        )
                      )
                    })
                  ]
                }),
                (0, tt.jsxs)("div", {
                  className:
                    "bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
                  children: [
                    (0, tt.jsxs)("div", {
                      className: "flex items-center mb-6",
                      children: [
                        (0, tt.jsx)(zr, { className: "w-8 h-8 text-green-600 mr-3" }),
                        (0, tt.jsx)("h2", {
                          className: "text-2xl font-semibold text-gray-800",
                          children: "\u806f\u7d61\u8cc7\u8a0a"
                        })
                      ]
                    }),
                    (0, tt.jsxs)("div", {
                      className: "text-gray-700 space-y-3",
                      children: [
                        (0, tt.jsxs)("p", {
                          className: "flex items-center bg-green-50 p-3 rounded-lg",
                          children: [
                            (0, tt.jsx)("span", {
                              className: "font-semibold mr-2",
                              children: "\ud83d\udc64"
                            }),
                            Fr.contact.admin
                          ]
                        }),
                        (0, tt.jsxs)("p", {
                          className: "flex items-center bg-green-50 p-3 rounded-lg",
                          children: [
                            (0, tt.jsx)("span", {
                              className: "font-semibold mr-2",
                              children: "\ud83d\udcf1"
                            }),
                            "\u96fb\u8a71: ",
                            Fr.contact.phone
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      }),
    Mr = () =>
      (0, tt.jsx)("div", { children: (0, tt.jsx)("h1", { children: "Memory Card Detail" }) }),
    Ir = (e) => {
      let { card: t, onClose: n, onUpdate: r, memoryCards: a, setMemoryCards: l } = e;
      const [i, s] = (0, o.useState)({
        cardType: t.cardType || "",
        serialNumber: t.serialNumber || "",
        remarks: t.remarks || "",
        borrowStatus: t.borrowStatus || !1
      });
      (0, o.useEffect)(() => {
        s({
          cardType: t.cardType || "",
          serialNumber: t.serialNumber || "",
          remarks: t.remarks || "",
          borrowStatus: t.borrowStatus || !1
        });
      }, [t]);
      const u = (e) => {
        const { name: t, value: n, type: r, checked: a } = e.target;
        s(Ie(Ie({}, i), {}, "checkbox" === r ? { [t]: a } : { [t]: n }));
      };
      return (0, tt.jsx)("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",
        children: (0, tt.jsxs)("div", {
          className: "bg-white p-6 rounded shadow-md w-full max-w-lg",
          children: [
            (0, tt.jsx)("h2", {
              className: "text-2xl font-bold mb-4 text-center",
              children: "\u7de8\u8f2f\u8a18\u61b6\u5361"
            }),
            (0, tt.jsxs)("form", {
              onSubmit: async (e) => {
                e.preventDefault();
                try {
                  console.log(i);
                  const e = await Tr.put("/memorycards/".concat(t._id), i);
                  alert("\u8a18\u61b6\u5361\u66f4\u65b0\u6210\u529f"), r(e.data), n();
                } catch (a) {
                  console.error(a.response.data),
                    alert(a.response.data.msg || "\u66f4\u65b0\u5931\u6557");
                }
              },
              children: [
                (0, tt.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, tt.jsx)("label", {
                      className: "block text-gray-700 mb-2",
                      htmlFor: "cardType",
                      children: "\u8a18\u61b6\u5361\u985e\u578b"
                    }),
                    (0, tt.jsxs)("select", {
                      id: "cardType",
                      name: "cardType",
                      value: i.cardType,
                      onChange: u,
                      className:
                        "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                      required: !0,
                      children: [
                        (0, tt.jsx)("option", { value: "", children: "\u9078\u64c7\u985e\u578b" }),
                        (0, tt.jsx)("option", { value: "64G", children: "64G" }),
                        (0, tt.jsx)("option", { value: "128G", children: "128G" }),
                        (0, tt.jsx)("option", { value: "256G", children: "256G" })
                      ]
                    })
                  ]
                }),
                (0, tt.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, tt.jsx)("label", {
                      className: "block text-gray-700 mb-2",
                      htmlFor: "serialNumber",
                      children: "\u7de8\u865f"
                    }),
                    (0, tt.jsx)("input", {
                      type: "text",
                      id: "serialNumber",
                      name: "serialNumber",
                      value: i.serialNumber,
                      onChange: u,
                      className:
                        "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                      placeholder: "\u8f38\u5165\u7de8\u865f",
                      required: !0
                    })
                  ]
                }),
                (0, tt.jsxs)("div", {
                  className: "mb-6",
                  children: [
                    (0, tt.jsx)("label", {
                      className: "block text-gray-700 mb-2",
                      htmlFor: "remarks",
                      children: "\u5099\u8a3b"
                    }),
                    (0, tt.jsx)("input", {
                      type: "text",
                      id: "remarks",
                      name: "remarks",
                      value: i.remarks,
                      onChange: u,
                      className:
                        "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                      placeholder: "\u8f38\u5165\u5099\u8a3b"
                    })
                  ]
                }),
                (0, tt.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, tt.jsx)("label", {
                      className: "block text-gray-700 mb-2",
                      htmlFor: "borrowStatus",
                      children: "\u501f\u7528\u72c0\u614b"
                    }),
                    (0, tt.jsx)("input", {
                      type: "checkbox",
                      id: "borrowStatus",
                      name: "borrowStatus",
                      checked: i.borrowStatus,
                      onChange: u,
                      className: "mr-2"
                    }),
                    (0, tt.jsx)("span", { children: "\u5df2\u501f\u51fa" })
                  ]
                }),
                (0, tt.jsxs)("div", {
                  className: "flex justify-end",
                  children: [
                    (0, tt.jsx)("button", {
                      type: "button",
                      onClick: n,
                      className: "bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600",
                      children: "\u53d6\u6d88"
                    }),
                    (0, tt.jsx)("button", {
                      type: "submit",
                      className: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",
                      children: "\u66f4\u65b0"
                    }),
                    (0, tt.jsx)("button", {
                      type: "button",
                      onClick: () =>
                        (async (e) => {
                          if (
                            window.confirm(
                              "\u78ba\u5b9a\u8981\u522a\u9664\u9019\u500b\u8a18\u61b6\u5361\u55ce\uff1f"
                            )
                          )
                            try {
                              await Tr.delete("/memorycards/".concat(e)),
                                alert("\u8a18\u61b6\u5361\u5df2\u522a\u9664"),
                                l(a.filter((t) => t._id !== e)),
                                n();
                            } catch (t) {
                              console.error(t.response.data),
                                alert(t.response.data.msg || "\u522a\u9664\u5931\u6557");
                            }
                        })(t._id),
                      className: "bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-600",
                      children: "\u522a\u9664"
                    })
                  ]
                })
              ]
            })
          ]
        })
      });
    },
    Ar = () => {
      const [e, t] = (0, o.useState)({
          cardType: "",
          serialNumber: "",
          remarks: "",
          borrowStatus: !1
        }),
        [n, r] = (0, o.useState)([]),
        [a, l] = (0, o.useState)(!0),
        [i, s] = (0, o.useState)(null);
      re();
      (0, o.useEffect)(() => {
        (async () => {
          try {
            const e = await Tr.get("/memorycards");
            console.log("(res.data", e.data), r(e.data), l(!1);
          } catch (e) {
            console.error(e.response.data),
              alert(e.response.data.msg || "\u7372\u53d6\u8a18\u61b6\u5361\u5931\u6557"),
              l(!1);
          }
        })();
      }, []);
      const u = (n) => {
        const { name: r, value: a } = n.target;
        t(Ie(Ie({}, e), {}, { [r]: a }));
      };
      return (0, tt.jsxs)("div", {
        className: "container mx-auto p-4",
        children: [
          (0, tt.jsxs)("div", {
            className: "flex flex-col md:flex-row",
            children: [
              (0, tt.jsx)("div", {
                className: "md:w-1/3 md:mr-4",
                children: (0, tt.jsxs)("form", {
                  onSubmit: async (a) => {
                    a.preventDefault();
                    try {
                      const a = await Tr.post("/memorycards", e);
                      alert("\u8a18\u61b6\u5361\u65b0\u589e\u6210\u529f"),
                        r([...n, a.data]),
                        t({ cardType: "", serialNumber: "", remarks: "", borrowStatus: !1 });
                    } catch (o) {
                      console.error(o.response.data),
                        alert(o.response.data.msg || "\u65b0\u589e\u5931\u6557");
                    }
                  },
                  className: "bg-white p-6 rounded shadow-md",
                  children: [
                    (0, tt.jsx)("h2", {
                      className: "text-2xl font-bold mb-4 text-center",
                      children: "\u65b0\u589e\u8a18\u61b6\u5361"
                    }),
                    (0, tt.jsxs)("div", {
                      className: "mb-4",
                      children: [
                        (0, tt.jsx)("label", {
                          className: "block text-gray-700 mb-2",
                          htmlFor: "cardType",
                          children: "\u8a18\u61b6\u5361\u985e\u578b"
                        }),
                        (0, tt.jsxs)("select", {
                          id: "cardType",
                          name: "cardType",
                          value: e.cardType,
                          onChange: u,
                          className:
                            "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                          required: !0,
                          children: [
                            (0, tt.jsx)("option", {
                              value: "",
                              children: "\u9078\u64c7\u985e\u578b"
                            }),
                            (0, tt.jsx)("option", { value: "64G", children: "64G" }),
                            (0, tt.jsx)("option", { value: "128G", children: "128G" }),
                            (0, tt.jsx)("option", { value: "256G", children: "256G" })
                          ]
                        })
                      ]
                    }),
                    (0, tt.jsxs)("div", {
                      className: "mb-4",
                      children: [
                        (0, tt.jsx)("label", {
                          className: "block text-gray-700 mb-2",
                          htmlFor: "serialNumber",
                          children: "\u7de8\u865f"
                        }),
                        (0, tt.jsx)("input", {
                          type: "text",
                          id: "serialNumber",
                          name: "serialNumber",
                          value: e.serialNumber,
                          onChange: u,
                          className:
                            "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                          placeholder: "\u8f38\u5165\u7de8\u865f"
                        })
                      ]
                    }),
                    (0, tt.jsxs)("div", {
                      className: "mb-6",
                      children: [
                        (0, tt.jsx)("label", {
                          className: "block text-gray-700 mb-2",
                          htmlFor: "remarks",
                          children: "\u5099\u8a3b"
                        }),
                        (0, tt.jsx)("input", {
                          type: "text",
                          id: "remarks",
                          name: "remarks",
                          value: e.remarks,
                          onChange: u,
                          className:
                            "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                          placeholder: "\u8f38\u5165\u5099\u8a3b"
                        })
                      ]
                    }),
                    (0, tt.jsxs)("div", {
                      className: "mb-4",
                      children: [
                        (0, tt.jsx)("label", {
                          className: "block text-gray-700 mb-2",
                          htmlFor: "borrowStatus",
                          children: "\u501f\u7528\u72c0\u614b"
                        }),
                        (0, tt.jsx)("input", {
                          type: "checkbox",
                          id: "borrowStatus",
                          name: "borrowStatus",
                          checked: e.borrowStatus,
                          onChange: (n) => t(Ie(Ie({}, e), {}, { borrowStatus: n.target.checked })),
                          className: "mr-2"
                        }),
                        (0, tt.jsx)("span", { children: "\u5df2\u501f\u51fa" })
                      ]
                    }),
                    (0, tt.jsx)("button", {
                      type: "submit",
                      className:
                        "w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200",
                      children: "\u65b0\u589e"
                    })
                  ]
                })
              }),
              (0, tt.jsx)("div", {
                className: "md:w-2/3 mt-6 md:mt-0",
                children: (0, tt.jsxs)("div", {
                  className: "bg-white p-6 rounded shadow-md",
                  children: [
                    (0, tt.jsx)("h2", {
                      className: "text-2xl font-bold mb-4 text-center",
                      children: "\u8a18\u61b6\u5361\u5217\u8868"
                    }),
                    a
                      ? (0, tt.jsx)("p", {
                          className: "text-center",
                          children: "\u8f09\u5165\u4e2d..."
                        })
                      : (0, tt.jsx)("div", {
                          className: "overflow-x-auto",
                          children: (0, tt.jsxs)("table", {
                            className: "min-w-full bg-white",
                            children: [
                              (0, tt.jsx)("thead", {
                                children: (0, tt.jsxs)("tr", {
                                  children: [
                                    (0, tt.jsx)("th", {
                                      className: "py-2 px-4 border-b",
                                      children: "\u7de8\u865f"
                                    }),
                                    (0, tt.jsx)("th", {
                                      className: "py-2 px-4 border-b",
                                      children: "\u8a18\u61b6\u5361\u985e\u578b"
                                    }),
                                    (0, tt.jsx)("th", {
                                      className: "py-2 px-4 border-b",
                                      children: "\u5099\u8a3b"
                                    }),
                                    (0, tt.jsx)("th", {
                                      className: "py-2 px-4 border-b",
                                      children: "\u501f\u7528\u72c0\u614b"
                                    }),
                                    (0, tt.jsx)("th", {
                                      className: "py-2 px-4 border-b",
                                      children: "\u64cd\u4f5c"
                                    })
                                  ]
                                })
                              }),
                              (0, tt.jsx)("tbody", {
                                children:
                                  0 === n.length
                                    ? (0, tt.jsx)("tr", {
                                        children: (0, tt.jsx)("td", {
                                          colSpan: "5",
                                          className: "text-center py-4",
                                          children: "\u6c92\u6709\u8a18\u61b6\u5361\u8cc7\u6599"
                                        })
                                      })
                                    : n.map((e) =>
                                        (0, tt.jsxs)(
                                          "tr",
                                          {
                                            children: [
                                              (0, tt.jsx)("td", {
                                                className: "py-2 px-4 border-b",
                                                children: e.serialNumber || "-"
                                              }),
                                              (0, tt.jsx)("td", {
                                                className: "py-2 px-4 border-b",
                                                children: e.cardType
                                              }),
                                              (0, tt.jsx)("td", {
                                                className: "py-2 px-4 border-b",
                                                children: e.remarks
                                              }),
                                              (0, tt.jsx)("td", {
                                                className: "py-2 px-4 border-b",
                                                children: (0, tt.jsx)("span", {
                                                  className: "".concat(
                                                    e.borrowStatus
                                                      ? "bg-yellow-200 text-yellow-800"
                                                      : "bg-green-200 text-green-800",
                                                    " px-2 py-1 rounded"
                                                  ),
                                                  children: e.borrowStatus
                                                    ? "\u672a\u501f\u51fa"
                                                    : "\u5df2\u501f\u51fa"
                                                })
                                              }),
                                              (0, tt.jsxs)("td", {
                                                className: "py-2 px-4 border-b",
                                                children: [
                                                  (0, tt.jsx)("button", {
                                                    onClick: () =>
                                                      ((e) => {
                                                        s(e);
                                                      })(e),
                                                    className:
                                                      "bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600",
                                                    children: "\u7de8\u8f2f"
                                                  }),
                                                  (0, tt.jsx)("button", {
                                                    onClick: () =>
                                                      (async (e) => {
                                                        if (
                                                          window.confirm(
                                                            "\u78ba\u5b9a\u8981\u522a\u9664\u9019\u500b\u8a18\u61b6\u5361\u55ce\uff1f"
                                                          )
                                                        )
                                                          try {
                                                            await Tr.delete(
                                                              "/memorycards/".concat(e)
                                                            ),
                                                              alert(
                                                                "\u8a18\u61b6\u5361\u5df2\u522a\u9664"
                                                              ),
                                                              r(n.filter((t) => t._id !== e));
                                                          } catch (t) {
                                                            console.error(t.response.data),
                                                              alert(
                                                                t.response.data.msg ||
                                                                  "\u522a\u9664\u5931\u6557"
                                                              );
                                                          }
                                                      })(e._id),
                                                    className:
                                                      "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600",
                                                    children: "\u522a\u9664"
                                                  })
                                                ]
                                              })
                                            ]
                                          },
                                          e._id
                                        )
                                      )
                              })
                            ]
                          })
                        })
                  ]
                })
              })
            ]
          }),
          i &&
            (0, tt.jsx)(Ir, {
              card: i,
              onClose: () => s(null),
              onUpdate: (e) => {
                r(n.map((t) => (t._id === e._id ? e : t)));
              }
            })
        ]
      });
    },
    Br = () => {
      const [e, t] = (0, o.useState)([]),
        [n, r] = (0, o.useState)({ username: "", password: "", role: "user" }),
        [a, l] = (0, o.useState)(null),
        [i, s] = (0, o.useState)(!0),
        u = async () => {
          try {
            const e = await Tr.get("/users");
            t(e.data), s(!1);
          } catch (e) {
            console.error("Error fetching users:", e), s(!1);
          }
        };
      (0, o.useEffect)(() => {
        u();
      }, []);
      const c = (e) => {
        const { name: t, value: a } = e.target;
        r(Ie(Ie({}, n), {}, { [t]: a }));
      };
      return (0, tt.jsxs)("div", {
        className: "container mx-auto p-4",
        children: [
          (0, tt.jsx)("h1", {
            className: "text-2xl font-bold mb-4 text-center",
            children: "\u7528\u6236\u7ba1\u7406"
          }),
          (0, tt.jsxs)("div", {
            className: "flex flex-col md:flex-row",
            children: [
              (0, tt.jsx)("div", {
                className: "md:w-1/3 md:mr-4",
                children: (0, tt.jsxs)("form", {
                  onSubmit: async (e) => {
                    e.preventDefault();
                    try {
                      a
                        ? (await Tr.put("/users/".concat(a), n),
                          alert("\u7528\u6236\u66f4\u65b0\u6210\u529f"))
                        : (await Tr.post("/users", n),
                          alert("\u7528\u6236\u65b0\u589e\u6210\u529f")),
                        r({ username: "", password: "", role: "user" }),
                        l(null),
                        u();
                    } catch (t) {
                      console.error("Error saving user:", t), alert("\u64cd\u4f5c\u5931\u6557");
                    }
                  },
                  className: "bg-white p-6 rounded shadow-md mb-6",
                  children: [
                    (0, tt.jsx)("h2", {
                      className: "text-xl font-semibold mb-4",
                      children: a ? "\u66f4\u65b0\u7528\u6236" : "\u65b0\u589e\u7528\u6236"
                    }),
                    (0, tt.jsxs)("div", {
                      className: "mb-4",
                      children: [
                        (0, tt.jsx)("label", {
                          className: "block text-gray-700 mb-2",
                          htmlFor: "username",
                          children: "\u7528\u6236\u540d"
                        }),
                        (0, tt.jsx)("input", {
                          type: "text",
                          id: "username",
                          name: "username",
                          value: n.username,
                          onChange: c,
                          className:
                            "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                          required: !0
                        })
                      ]
                    }),
                    (0, tt.jsxs)("div", {
                      className: "mb-4",
                      children: [
                        (0, tt.jsx)("label", {
                          className: "block text-gray-700 mb-2",
                          htmlFor: "password",
                          children: "\u5bc6\u78bc"
                        }),
                        (0, tt.jsx)("input", {
                          type: "password",
                          id: "password",
                          name: "password",
                          value: n.password,
                          onChange: c,
                          className:
                            "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                          required: !a
                        })
                      ]
                    }),
                    (0, tt.jsxs)("div", {
                      className: "mb-4",
                      children: [
                        (0, tt.jsx)("label", {
                          className: "block text-gray-700 mb-2",
                          htmlFor: "role",
                          children: "\u89d2\u8272"
                        }),
                        (0, tt.jsxs)("select", {
                          id: "role",
                          name: "role",
                          value: n.role,
                          onChange: c,
                          className:
                            "w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300",
                          children: [
                            (0, tt.jsx)("option", { value: "user", children: "User" }),
                            (0, tt.jsx)("option", { value: "admin", children: "Admin" })
                          ]
                        })
                      ]
                    }),
                    (0, tt.jsx)("button", {
                      type: "submit",
                      className:
                        "w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200",
                      children: a ? "\u66f4\u65b0\u7528\u6236" : "\u65b0\u589e\u7528\u6236"
                    })
                  ]
                })
              }),
              (0, tt.jsx)("div", {
                className: "md:w-2/3",
                children: i
                  ? (0, tt.jsx)("p", {
                      className: "text-center",
                      children: "\u8f09\u5165\u4e2d..."
                    })
                  : (0, tt.jsxs)("div", {
                      className: "bg-white p-6 rounded shadow-md",
                      children: [
                        (0, tt.jsx)("h2", {
                          className: "text-xl font-semibold mb-4",
                          children: "\u7528\u6236\u5217\u8868"
                        }),
                        (0, tt.jsxs)("table", {
                          className: "min-w-full bg-white",
                          children: [
                            (0, tt.jsx)("thead", {
                              children: (0, tt.jsxs)("tr", {
                                children: [
                                  (0, tt.jsx)("th", {
                                    className: "py-2 px-4 border-b",
                                    children: "\u7528\u6236\u540d"
                                  }),
                                  (0, tt.jsx)("th", {
                                    className: "py-2 px-4 border-b",
                                    children: "\u89d2\u8272"
                                  }),
                                  (0, tt.jsx)("th", {
                                    className: "py-2 px-4 border-b",
                                    children: "\u64cd\u4f5c"
                                  })
                                ]
                              })
                            }),
                            (0, tt.jsx)("tbody", {
                              children:
                                0 === e.length
                                  ? (0, tt.jsx)("tr", {
                                      children: (0, tt.jsx)("td", {
                                        colSpan: "3",
                                        className: "text-center py-4",
                                        children: "\u6c92\u6709\u7528\u6236\u8cc7\u6599"
                                      })
                                    })
                                  : e.map((e) =>
                                      (0, tt.jsxs)(
                                        "tr",
                                        {
                                          children: [
                                            (0, tt.jsx)("td", {
                                              className: "py-2 px-4 border-b",
                                              children: e.username
                                            }),
                                            (0, tt.jsx)("td", {
                                              className: "py-2 px-4 border-b",
                                              children: e.role
                                            }),
                                            (0, tt.jsxs)("td", {
                                              className: "py-2 px-4 border-b",
                                              children: [
                                                (0, tt.jsx)("button", {
                                                  onClick: () =>
                                                    ((e) => {
                                                      l(e._id),
                                                        r({
                                                          username: e.username,
                                                          password: "",
                                                          role: e.role
                                                        });
                                                    })(e),
                                                  className:
                                                    "bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600",
                                                  children: "\u7de8\u8f2f"
                                                }),
                                                (0, tt.jsx)("button", {
                                                  onClick: () =>
                                                    (async (e) => {
                                                      if (
                                                        window.confirm(
                                                          "\u78ba\u5b9a\u8981\u522a\u9664\u9019\u500b\u7528\u6236\u55ce\uff1f"
                                                        )
                                                      )
                                                        try {
                                                          await Tr.delete("/users/".concat(e)),
                                                            alert("\u7528\u6236\u5df2\u522a\u9664"),
                                                            u();
                                                        } catch (t) {
                                                          console.error("Error deleting user:", t),
                                                            alert("\u522a\u9664\u5931\u6557");
                                                        }
                                                    })(e._id),
                                                  className:
                                                    "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600",
                                                  children: "\u522a\u9664"
                                                })
                                              ]
                                            })
                                          ]
                                        },
                                        e._id
                                      )
                                    )
                            })
                          ]
                        })
                      ]
                    })
              })
            ]
          })
        ]
      });
    },
    Wr = () => (0, tt.jsx)("div", { children: (0, tt.jsx)(Br, {}) }),
    Hr = () => {
      const e = new Date(),
        t = e.getFullYear(),
        n = String(e.getMonth() + 1).padStart(2, "0"),
        r = String(e.getDate()).padStart(2, "0"),
        a = String(e.getHours()).padStart(2, "0"),
        o = String(e.getMinutes()).padStart(2, "0");
      return "".concat(t, "-").concat(n, "-").concat(r, "T").concat(a, ":").concat(o);
    },
    Vr = (e) => {
      let { initialData: t = {}, onSubmit: n, onClose: r } = e;
      const [a, l] = (0, o.useState)({
        cardId: t.cardId || "",
        borrowerName: t.borrowerName || "",
        borrowDate: Hr(),
        notes: t.notes || ""
      });
      (0, o.useEffect)(() => {
        const e = (e) => {
            const t = 6e4 * e.getTimezoneOffset();
            return new Date(e.getTime() - t).toISOString().slice(0, 16);
          },
          n = t.borrowDate ? e(new Date(t.borrowDate)) : e(new Date());
        l((e) => ({
          cardId: t.cardId || "",
          borrowerName: t.borrowerName || "",
          borrowDate: n,
          notes: t.notes || ""
        }));
      }, [t.cardId, t.borrowerName, t.borrowDate, t.notes]);
      const i = (e) => {
        const { name: t, value: n } = e.target;
        l((e) => Ie(Ie({}, e), {}, { [t]: n }));
      };
      return (0, tt.jsxs)("div", {
        className: "bg-white p-6 rounded-lg shadow-lg w-full",
        children: [
          (0, tt.jsx)("h2", {
            className: "text-2xl font-bold mb-4",
            children: t._id
              ? "\u7de8\u8f2f\u501f\u7528\u8a18\u9304"
              : "\u65b0\u589e\u501f\u7528\u8a18\u9304"
          }),
          (0, tt.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(),
                n &&
                  (n(a), t._id || l({ cardId: "", borrowerName: "", borrowDate: Hr(), notes: "" }));
            },
            children: [
              (0, tt.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, tt.jsx)("label", {
                    htmlFor: "cardId",
                    className: "block text-sm font-medium text-gray-700",
                    children: "\u8a18\u61b6\u5361\u7de8\u865f"
                  }),
                  (0, tt.jsx)("input", {
                    type: "text",
                    id: "cardId",
                    name: "cardId",
                    value: a.cardId,
                    onChange: i,
                    className:
                      "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                    required: !0
                  })
                ]
              }),
              (0, tt.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, tt.jsx)("label", {
                    htmlFor: "borrowerName",
                    className: "block text-sm font-medium text-gray-700",
                    children: "\u501f\u7528\u4eba\u59d3\u540d"
                  }),
                  (0, tt.jsx)("input", {
                    type: "text",
                    id: "borrowerName",
                    name: "borrowerName",
                    value: a.borrowerName,
                    onChange: i,
                    className:
                      "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                    required: !0
                  })
                ]
              }),
              (0, tt.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, tt.jsx)("label", {
                    htmlFor: "borrowDate",
                    className: "block text-sm font-medium text-gray-700",
                    children: "\u501f\u7528\u65e5\u671f"
                  }),
                  (0, tt.jsx)("input", {
                    type: "datetime-local",
                    id: "borrowDate",
                    name: "borrowDate",
                    value: a.borrowDate,
                    onChange: i,
                    className:
                      "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                    required: !0
                  })
                ]
              }),
              (0, tt.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, tt.jsx)("label", {
                    htmlFor: "notes",
                    className: "block text-sm font-medium text-gray-700",
                    children: "\u5099\u8a3b"
                  }),
                  (0, tt.jsx)("textarea", {
                    id: "notes",
                    name: "notes",
                    value: a.notes,
                    onChange: i,
                    className:
                      "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  })
                ]
              }),
              (0, tt.jsxs)("div", {
                className: "flex justify-end",
                children: [
                  r &&
                    (0, tt.jsx)("button", {
                      type: "button",
                      onClick: r,
                      className:
                        "bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2",
                      children: "\u53d6\u6d88"
                    }),
                  (0, tt.jsx)("button", {
                    type: "submit",
                    className: "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",
                    children: "\u78ba\u5b9a"
                  })
                ]
              })
            ]
          })
        ]
      });
    },
    $r = () => {
      const [e, t] = (0, o.useState)([]),
        [n, r] = (0, o.useState)(null);
      (0, o.useEffect)(() => {
        a();
      }, []);
      const a = async () => {
        try {
          const e = await fetch("http://${process.env.REACT_APP_API_URL}/api/borrow"),
            n = (await e.json()).sort((e, t) => new Date(t.borrowDate) - new Date(e.borrowDate));
          t(n);
        } catch (e) {
          console.error("\u7121\u6cd5\u7372\u53d6\u501f\u7528\u6e05\u55ae\uff1a", e);
        }
      };
      return (0, tt.jsxs)("div", {
        className: "min-h-screen flex flex-row bg-gray-100",
        children: [
          (0, tt.jsx)("div", {
            className: "w-1/3 bg-white p-6 shadow-md",
            children: (0, tt.jsx)(Vr, {
              onSubmit: async (n) => {
                if (e.some((e) => e.cardId === n.cardId && !e.returnDate))
                  alert(
                    "\u8a72\u8a18\u61b6\u5361\u5c1a\u672a\u6b78\u9084\uff0c\u7121\u6cd5\u518d\u6b21\u501f\u7528\uff01"
                  );
                else
                  try {
                    const e = await fetch("http://${process.env.REACT_APP_API_URL}/api/borrow", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(n)
                    });
                    if (e.ok) {
                      const n = await e.json();
                      t((e) => [n, ...e]), alert("\u65b0\u589e\u6210\u529f\uff01");
                    } else
                      alert("\u65b0\u589e\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002");
                  } catch (r) {
                    console.error("\u65b0\u589e\u932f\u8aa4\uff1a", r);
                  }
              }
            })
          }),
          (0, tt.jsxs)("div", {
            className: "w-2/3 bg-white p-6 shadow-md",
            children: [
              (0, tt.jsx)("h2", {
                className: "text-2xl font-bold mb-4",
                children: "\u501f\u7528\u6e05\u55ae"
              }),
              (0, tt.jsxs)("table", {
                className: "min-w-full border-collapse border border-gray-200",
                children: [
                  (0, tt.jsx)("thead", {
                    children: (0, tt.jsxs)("tr", {
                      className: "bg-gray-100",
                      children: [
                        (0, tt.jsx)("th", {
                          className:
                            "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                          children: "\u8a18\u61b6\u5361\u7de8\u865f"
                        }),
                        (0, tt.jsx)("th", {
                          className:
                            "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                          children: "\u501f\u7528\u4eba"
                        }),
                        (0, tt.jsx)("th", {
                          className:
                            "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                          children: "\u501f\u7528\u65e5\u671f"
                        }),
                        (0, tt.jsx)("th", {
                          className:
                            "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                          children: "\u6b78\u9084\u65e5\u671f"
                        }),
                        (0, tt.jsx)("th", {
                          className:
                            "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                          children: "\u5099\u8a3b"
                        }),
                        (0, tt.jsx)("th", {
                          className:
                            "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                          children: "\u64cd\u4f5c"
                        })
                      ]
                    })
                  }),
                  (0, tt.jsx)("tbody", {
                    children: e.map((e) =>
                      (0, tt.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, tt.jsx)("td", {
                              className: "border border-gray-300 px-4 py-2 text-sm",
                              children: e.cardId
                            }),
                            (0, tt.jsx)("td", {
                              className: "border border-gray-300 px-4 py-2 text-sm",
                              children: e.borrowerName
                            }),
                            (0, tt.jsx)("td", {
                              className: "border border-gray-300 px-4 py-2 text-sm",
                              children: new Date(e.borrowDate).toLocaleString("zh-TW", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit"
                              })
                            }),
                            (0, tt.jsx)("td", {
                              className: "border border-gray-300 px-4 py-2 text-sm",
                              children: e.returnDate
                                ? new Date(e.returnDate).toLocaleString("zh-TW", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                  })
                                : "-"
                            }),
                            (0, tt.jsx)("td", {
                              className: "border border-gray-300 px-4 py-2 text-sm",
                              children: e.notes || "-"
                            }),
                            (0, tt.jsx)("td", {
                              className: "border border-gray-300 px-4 py-2 text-sm",
                              children: e.returnDate
                                ? (0, tt.jsx)("span", {
                                    className: "text-gray-500",
                                    children: "\u5df2\u6b78\u9084"
                                  })
                                : (0, tt.jsxs)(tt.Fragment, {
                                    children: [
                                      (0, tt.jsx)("button", {
                                        onClick: () => r(e),
                                        className:
                                          "bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 mr-2",
                                        children: "\u7de8\u8f2f"
                                      }),
                                      (0, tt.jsx)("button", {
                                        onClick: () =>
                                          (async (e) => {
                                            if (
                                              window.confirm(
                                                "\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u8a18\u9304\u55ce\uff1f"
                                              )
                                            )
                                              try {
                                                (
                                                  await fetch(
                                                    "http://${process.env.REACT_APP_API_URL}/api/borrow/".concat(
                                                      e
                                                    ),
                                                    { method: "DELETE" }
                                                  )
                                                ).ok
                                                  ? (t((t) => t.filter((t) => t._id !== e)),
                                                    alert("\u522a\u9664\u6210\u529f\uff01"))
                                                  : alert(
                                                      "\u522a\u9664\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002"
                                                    );
                                              } catch (n) {
                                                console.error("\u522a\u9664\u932f\u8aa4\uff1a", n);
                                              }
                                          })(e._id),
                                        className:
                                          "bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 mr-2",
                                        children: "\u522a\u9664"
                                      }),
                                      (0, tt.jsx)("button", {
                                        onClick: () =>
                                          (async (e) => {
                                            try {
                                              const n = new Date().toISOString(),
                                                r = await fetch(
                                                  "http://${process.env.REACT_APP_API_URL}/api/borrow/".concat(
                                                    e
                                                  ),
                                                  {
                                                    method: "PUT",
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify({ returnDate: n })
                                                  }
                                                );
                                              r.ok
                                                ? (await r.json(),
                                                  t((t) =>
                                                    t.map((t) =>
                                                      t._id === e
                                                        ? Ie(
                                                            Ie({}, t),
                                                            {},
                                                            { returnDate: n, borrowStatus: !1 }
                                                          )
                                                        : t
                                                    )
                                                  ),
                                                  alert("\u6b78\u9084\u6210\u529f\uff01"))
                                                : alert(
                                                    "\u6b78\u9084\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002"
                                                  );
                                            } catch (n) {
                                              console.error("\u6b78\u9084\u932f\u8aa4\uff1a", n);
                                            }
                                          })(e._id),
                                        className:
                                          "bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600",
                                        children: "\u6b78\u9084"
                                      })
                                    ]
                                  })
                            })
                          ]
                        },
                        e._id
                      )
                    )
                  })
                ]
              })
            ]
          }),
          n &&
            (0, tt.jsx)("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
              children: (0, tt.jsx)("div", {
                className: "bg-white p-6 rounded-lg shadow-lg w-1/3",
                children: (0, tt.jsx)(Vr, {
                  initialData: n,
                  onSubmit: async (e) => {
                    if (!e._id)
                      return (
                        console.error("\u8868\u55ae\u6578\u64da\u7f3a\u5c11 ID\uff1a", e),
                        void alert(
                          "\u7121\u6cd5\u7de8\u8f2f\uff0c\u7f3a\u5c11\u8a18\u9304\u7684 ID"
                        )
                      );
                    try {
                      const n = await fetch(
                        "http://${process.env.REACT_APP_API_URL}/api/borrow/".concat(e._id),
                        {
                          method: "PUT",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(e)
                        }
                      );
                      if (n.ok) {
                        const e = await n.json();
                        t((t) =>
                          t
                            .map((t) => (t._id === e._id ? e : t))
                            .sort((e, t) => new Date(t.borrowDate) - new Date(e.borrowDate))
                        ),
                          r(null),
                          alert("\u7de8\u8f2f\u6210\u529f\uff01");
                      } else
                        alert("\u7de8\u8f2f\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002");
                    } catch (n) {
                      console.error("\u7de8\u8f2f\u932f\u8aa4\uff1a", n);
                    }
                  },
                  onClose: () => r(null)
                })
              })
            })
        ]
      });
    },
    qr = (e) => {
      let { children: t, role: n } = e;
      const r = localStorage.getItem("token");
      if (!r) return (0, tt.jsx)(xe, { to: "/login", replace: !0 });
      let a = null;
      try {
        const e = r.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
          t = decodeURIComponent(
            atob(e)
              .split("")
              .map(function (e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
        a = JSON.parse(t).user;
      } catch (o) {
        console.error("Token \u89e3\u78bc\u5931\u6557", o);
      }
      return !n || (a && a.role === n) ? t : (0, tt.jsx)(xe, { to: "/", replace: !0 });
    },
    Qr = (e) => {
      let { handleBorrow: t, isFormOpen: n, refreshKey: r } = e;
      const [a, l] = (0, o.useState)([]),
        [i, s] = (0, o.useState)(null);
      (0, o.useEffect)(() => {
        !(async function () {
          try {
            const e = await fetch("http://${process.env.REACT_APP_API_URL}/api/memorycards"),
              t = await e.json();
            console.log("data", t),
              Array.isArray(t) ? l(t) : console.error("\u8cc7\u6599\u4e0d\u662f\u9663\u5217", t);
          } catch (e) {
            console.error("\u7121\u6cd5\u7372\u53d6\u8a18\u61b6\u5361\u6578\u64da\uff1a", e);
          }
        })();
      }, [r]);
      return (0, tt.jsxs)("div", {
        className: "w-full bg-white p-6 shadow-md mb-6",
        children: [
          (0, tt.jsx)("h2", {
            className: "text-2xl font-bold mb-4",
            children: "\u76ee\u524d\u6709\u7684\u8a18\u61b6\u5361"
          }),
          (0, tt.jsxs)("table", {
            className: "min-w-full border-collapse border border-gray-200",
            children: [
              (0, tt.jsx)("thead", {
                children: (0, tt.jsxs)("tr", {
                  className: "bg-gray-100",
                  children: [
                    (0, tt.jsx)("th", {
                      className:
                        "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                      children: "\u8a18\u61b6\u5361\u7de8\u865f"
                    }),
                    (0, tt.jsx)("th", {
                      className:
                        "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                      children: "\u985e\u578b"
                    }),
                    (0, tt.jsx)("th", {
                      className:
                        "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                      children: "\u5099\u8a3b"
                    }),
                    (0, tt.jsx)("th", {
                      className:
                        "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                      children: "\u72c0\u614b"
                    }),
                    (0, tt.jsx)("th", {
                      className:
                        "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                      children: "\u64cd\u4f5c"
                    })
                  ]
                })
              }),
              (0, tt.jsx)("tbody", {
                children: a.map((e) =>
                  (0, tt.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, tt.jsx)("td", {
                          className: "border border-gray-300 px-4 py-2 text-sm",
                          children: e.serialNumber
                        }),
                        (0, tt.jsx)("td", {
                          className: "border border-gray-300 px-4 py-2 text-sm",
                          children: e.cardType
                        }),
                        (0, tt.jsx)("td", {
                          className: "border border-gray-300 px-4 py-2 text-sm",
                          children: e.remarks || "-"
                        }),
                        (0, tt.jsx)("td", {
                          className: "border border-gray-300 px-4 py-2 text-sm",
                          children: (0, tt.jsx)("span", {
                            className: "".concat(
                              e.borrowStatus
                                ? "bg-yellow-200 text-yellow-800"
                                : "bg-green-200 text-green-800",
                              " px-2 py-1 rounded"
                            ),
                            children: e.borrowStatus ? "\u672a\u501f\u51fa" : "\u5df2\u501f\u51fa"
                          })
                        }),
                        (0, tt.jsx)("td", {
                          className: "border border-gray-300 px-4 py-2 text-sm",
                          children:
                            e.borrowStatus &&
                            (0, tt.jsx)("button", {
                              onClick: () => {
                                return (n = e.serialNumber), s(n), void t(n);
                                var n;
                              },
                              className:
                                "bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md",
                              children: "\u501f\u7528"
                            })
                        })
                      ]
                    },
                    e._id
                  )
                )
              })
            ]
          })
        ]
      });
    },
    Kr = (e) => {
      let {
        borrowList: t,
        handleDelete: n,
        handleReturn: r,
        setModalData: a,
        handleEdit: o,
        borrowCount: l,
        setBorrowCount: i
      } = e;
      const s = [...t].sort((e, t) => new Date(t.borrowDate) - new Date(e.borrowDate)).slice(0, l);
      return (0, tt.jsxs)("div", {
        className: "bg-white shadow-md",
        children: [
          (0, tt.jsxs)("div", {
            className: "flex justify-between items-center p-6 pb-4",
            children: [
              (0, tt.jsx)("h2", {
                className: "text-2xl font-bold",
                children: "\u501f\u7528\u6e05\u55ae"
              }),
              (0, tt.jsxs)("div", {
                className: "flex items-center",
                children: [
                  (0, tt.jsx)("label", {
                    className: "mr-2",
                    children: "\u986f\u793a\u7b46\u6578:"
                  }),
                  (0, tt.jsxs)("select", {
                    value: l,
                    onChange: (e) => i(Number(e.target.value)),
                    className: "border border-gray-300 rounded px-2 py-1",
                    children: [
                      (0, tt.jsx)("option", { value: 10, children: "\u6700\u65b010\u7b46" }),
                      (0, tt.jsx)("option", { value: 15, children: "\u6700\u65b015\u7b46" }),
                      (0, tt.jsx)("option", { value: 20, children: "\u6700\u65b020\u7b46" }),
                      (0, tt.jsx)("option", {
                        value: t.length,
                        children: "\u5168\u90e8\u7b46\u6578"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, tt.jsx)("div", {
            className: "p-6 pt-0",
            children: (0, tt.jsxs)("table", {
              className: "min-w-full border-collapse border border-gray-200",
              children: [
                (0, tt.jsx)("thead", {
                  children: (0, tt.jsxs)("tr", {
                    className: "bg-gray-100",
                    children: [
                      (0, tt.jsx)("th", {
                        className:
                          "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                        children: "\u8a18\u61b6\u5361\u7de8\u865f"
                      }),
                      (0, tt.jsx)("th", {
                        className:
                          "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                        children: "\u501f\u7528\u4eba"
                      }),
                      (0, tt.jsx)("th", {
                        className:
                          "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                        children: "\u501f\u7528\u65e5\u671f"
                      }),
                      (0, tt.jsx)("th", {
                        className:
                          "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                        children: "\u6b78\u9084\u65e5\u671f"
                      }),
                      (0, tt.jsx)("th", {
                        className:
                          "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                        children: "\u5099\u8a3b"
                      }),
                      (0, tt.jsx)("th", {
                        className:
                          "border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700",
                        children: "\u64cd\u4f5c"
                      })
                    ]
                  })
                }),
                (0, tt.jsx)("tbody", {
                  children: s.map((e, t) =>
                    (0, tt.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, tt.jsx)("td", {
                            className: "border border-gray-300 px-4 py-2 text-sm",
                            children: e.cardId
                          }),
                          (0, tt.jsx)("td", {
                            className: "border border-gray-300 px-4 py-2 text-sm",
                            children: e.borrowerName
                          }),
                          (0, tt.jsx)("td", {
                            className: "border border-gray-300 px-4 py-2 text-sm",
                            children: new Date(e.borrowDate).toLocaleString("zh-TW", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit"
                            })
                          }),
                          (0, tt.jsx)("td", {
                            className: "border border-gray-300 px-4 py-2 text-sm",
                            children: e.returnDate
                              ? new Date(e.returnDate).toLocaleString("zh-TW", {
                                  year: "numeric",
                                  month: "2-digit",
                                  day: "2-digit",
                                  hour: "2-digit",
                                  minute: "2-digit"
                                })
                              : "-"
                          }),
                          (0, tt.jsx)("td", {
                            className: "border border-gray-300 px-4 py-2 text-sm",
                            children: e.notes || "-"
                          }),
                          (0, tt.jsx)("td", {
                            className: "border border-gray-300 px-4 py-2 text-sm",
                            children: e.returnDate
                              ? (0, tt.jsx)("span", {
                                  className: "text-gray-500",
                                  children: "\u5df2\u6b78\u9084"
                                })
                              : (0, tt.jsxs)(tt.Fragment, {
                                  children: [
                                    (0, tt.jsx)("button", {
                                      onClick: () => a(e),
                                      className:
                                        "bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 mr-2",
                                      children: "\u7de8\u8f2f"
                                    }),
                                    (0, tt.jsx)("button", {
                                      onClick: () => n(e._id),
                                      className:
                                        "bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 mr-2",
                                      children: "\u522a\u9664"
                                    }),
                                    (0, tt.jsx)("button", {
                                      onClick: () => r(e._id),
                                      className:
                                        "bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600",
                                      children: "\u6b78\u9084"
                                    })
                                  ]
                                })
                          })
                        ]
                      },
                      t
                    )
                  )
                })
              ]
            })
          })
        ]
      });
    },
    Jr = () => {
      const [e, t] = (0, o.useState)([]),
        [n, r] = (0, o.useState)(null),
        [a, l] = (0, o.useState)(""),
        [i, s] = (0, o.useState)(null),
        [u, c] = (0, o.useState)({ cardId: "", borrowerName: "", borrowDate: "", notes: "" }),
        [d, f] = (0, o.useState)(!1),
        [p, h] = (0, o.useState)(0),
        [m, y] = (0, o.useState)(10);
      (0, o.useEffect)(() => {
        !(async function () {
          try {
            const e = await fetch("http://${process.env.REACT_APP_API_URL}/api/borrow"),
              n = await e.json();
            t(n);
          } catch (e) {
            console.error("\u7121\u6cd5\u7372\u53d6\u501f\u7528\u6e05\u55ae\uff1a", e);
          }
        })();
      }, []);
      const g = async (e) => {
        if (!e._id)
          return (
            console.error("\u8868\u55ae\u6578\u64da\u7f3a\u5c11 ID\uff1a", e),
            void alert("\u7121\u6cd5\u7de8\u8f2f\uff0c\u7f3a\u5c11\u8a18\u9304\u7684 ID")
          );
        try {
          const n = await fetch(
            "http://${process.env.REACT_APP_API_URL}/api/borrow/".concat(e._id),
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e)
            }
          );
          if (n.ok) {
            const e = await n.json();
            t((t) => t.map((t) => (t._id === e._id ? e : t))),
              alert("\u7de8\u8f2f\u6210\u529f\uff01"),
              r(null);
          } else alert("\u7de8\u8f2f\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002");
        } catch (n) {
          console.error("\u7de8\u8f2f\u932f\u8aa4\uff1a", n);
        }
      };
      return (0, tt.jsxs)("div", {
        className: "min-h-screen flex flex-row bg-gray-100",
        children: [
          (0, tt.jsx)("div", {
            className: "w-1/3 bg-white p-6 shadow-md",
            children: (0, tt.jsx)(Vr, {
              initialData: u,
              onSubmit: async (n) => {
                if (e.some((e) => e.cardId === n.cardId && !e.returnDate))
                  alert(
                    "\u8a72\u8a18\u61b6\u5361\u5c1a\u672a\u6b78\u9084\uff0c\u7121\u6cd5\u518d\u6b21\u501f\u7528\uff01"
                  );
                else
                  try {
                    const e = await fetch("http://${process.env.REACT_APP_API_URL}/api/borrow", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(n)
                    });
                    if (e.ok) {
                      const n = await e.json();
                      t((e) => [n, ...e]),
                        c({ cardId: "", borrowerName: "", borrowDate: "", notes: "" }),
                        h((e) => e + 1),
                        alert("\u65b0\u589e\u6210\u529f\uff01");
                    } else
                      alert("\u65b0\u589e\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002");
                  } catch (r) {
                    console.error("\u65b0\u589e\u932f\u8aa4\uff1a", r);
                  }
              },
              onClose: () => c({ cardId: "", borrowerName: "", borrowDate: "", notes: "" })
            })
          }),
          (0, tt.jsxs)("div", {
            className: "w-2/3 bg-white p-6 shadow-md",
            children: [
              (0, tt.jsx)(Qr, {
                handleBorrow: (t) => {
                  e.some((e) => e.cardId === t && !e.returnDate)
                    ? alert(
                        "\u8a72\u8a18\u61b6\u5361\u5c1a\u672a\u6b78\u9084\uff0c\u7121\u6cd5\u518d\u6b21\u501f\u7528\uff01"
                      )
                    : (c((e) => Ie(Ie({}, e), {}, { cardId: t })), l(t), f(!0));
                },
                isFormOpen: d,
                refreshKey: p
              }),
              (0, tt.jsx)(Kr, {
                borrowList: e,
                handleDelete: async (e) => {
                  if (
                    window.confirm("\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u8a18\u9304\u55ce\uff1f")
                  )
                    try {
                      (
                        await fetch(
                          "http://${process.env.REACT_APP_API_URL}/api/borrow/".concat(e),
                          { method: "DELETE" }
                        )
                      ).ok
                        ? (t((t) => t.filter((t) => t._id !== e)),
                          h((e) => e + 1),
                          alert("\u522a\u9664\u6210\u529f\uff01"))
                        : alert(
                            "\u522a\u9664\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002"
                          );
                    } catch (n) {
                      console.error("\u522a\u9664\u932f\u8aa4\uff1a", n);
                    }
                },
                handleReturn: async (e) => {
                  const n = new Date().toISOString();
                  try {
                    const r = await fetch(
                      "http://${process.env.REACT_APP_API_URL}/api/borrow/".concat(e),
                      {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ returnDate: n })
                      }
                    );
                    if (r.ok) {
                      const e = await r.json();
                      t((t) =>
                        t.map((t) =>
                          t._id === e._id
                            ? Ie(Ie({}, t), {}, { returnDate: n, borrowStatus: !1 })
                            : t
                        )
                      ),
                        h((e) => e + 1),
                        alert("\u6b78\u9084\u6210\u529f\uff01");
                    } else
                      alert("\u6b78\u9084\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002");
                  } catch (r) {
                    console.error("\u6b78\u9084\u932f\u8aa4\uff1a", r);
                  }
                },
                setModalData: r,
                handleEdit: g,
                borrowCount: m,
                setBorrowCount: y
              })
            ]
          }),
          n &&
            (0, tt.jsx)("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
              children: (0, tt.jsx)("div", {
                className: "bg-white p-6 rounded-lg shadow-lg w-1/3",
                children: (0, tt.jsx)(Vr, { initialData: n, onSubmit: g, onClose: () => r(null) })
              })
            })
        ]
      });
    };
  const Gr = function () {
    return (0, tt.jsxs)(Pe, {
      children: [
        (0, tt.jsx)(nt, {}),
        (0, tt.jsxs)(ke, {
          children: [
            (0, tt.jsx)(we, { path: "/login", element: (0, tt.jsx)(Or, {}) }),
            (0, tt.jsx)(we, { path: "/register", element: (0, tt.jsx)(Rr, {}) }),
            (0, tt.jsx)(we, {
              path: "/add-memorycard",
              element: (0, tt.jsx)(qr, { role: "admin", children: (0, tt.jsx)(Ar, {}) })
            }),
            (0, tt.jsx)(we, {
              path: "/user-management",
              element: (0, tt.jsx)(qr, { role: "admin", children: (0, tt.jsx)(Wr, {}) })
            }),
            (0, tt.jsx)(we, { path: "/", element: (0, tt.jsx)(Ur, {}) }),
            (0, tt.jsx)(we, { path: "/memorycards/:id", element: (0, tt.jsx)(Mr, {}) }),
            (0, tt.jsx)(we, { path: "/borrow-memorycard", element: (0, tt.jsx)($r, {}) }),
            " ",
            (0, tt.jsx)(we, { path: "/borrow-with-cards", element: (0, tt.jsx)(Jr, {}) })
          ]
        })
      ]
    });
  };
  i.createRoot(document.getElementById("root")).render(
    (0, tt.jsx)(o.StrictMode, { children: (0, tt.jsx)(Gr, {}) })
  );
})();
//# sourceMappingURL=main.960a55cb.js.map
