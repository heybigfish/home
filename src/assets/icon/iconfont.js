/* eslint-disable no-redeclare */
/* eslint-disable no-self-assign */
; (window._iconfont_svg_string_4205725 =
  '<svg><symbol id="icon-iconset0435" viewBox="0 0 1024 1024"><path d="M810.666667 640l-192 0L618.666667 128c0-46.933333-38.4-85.333333-85.333333-85.333333l-42.666667 0c-46.933333 0-85.333333 38.4-85.333333 85.333333l0 512-192 0c-12.8 0-21.333333 8.533333-21.333333 21.333333 0 6.4 2.133333 10.666667 6.4 14.933333l298.666667 298.666667c4.266667 4.266667 8.533333 6.4 14.933333 6.4 6.4 0 10.666667-2.133333 14.933333-6.4l298.666667-298.666667c4.266667-4.266667 6.4-8.533333 6.4-14.933333C832 648.533333 823.466667 640 810.666667 640zM512 930.133333 264.533333 682.666667 448 682.666667 448 128c0-23.466667 19.2-42.666667 42.666667-42.666667l42.666667 0c23.466667 0 42.666667 19.2 42.666667 42.666667l0 554.666667 183.466667 0L512 930.133333z" fill="#0B80E0" ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
      e = t.getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var o,
        i,
        c,
        d,
        l,
        s = function (t, e) {
          e.parentNode.insertBefore(t, e)
        }
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          )
        } catch (t) {
          console && console.log(t)
        }
      }
      ; (o = function () {
        var t,
          e = document.createElement('div')
          ; (e.innerHTML = n._iconfont_svg_string_4205725),
            (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
              (e.style.position = 'absolute'),
              (e.style.width = 0),
              (e.style.height = 0),
              (e.style.overflow = 'hidden'),
              (e = e),
              (t = document.body).firstChild ? s(e, t.firstChild) : t.appendChild(e))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
              document.removeEventListener('DOMContentLoaded', i, !1), o()
            }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
          ((c = o),
            (d = n.document),
            (l = !1),
            r(),
            (d.onreadystatechange = function () {
              'complete' == d.readyState && ((d.onreadystatechange = null), a())
            }))
    }
    function a () {
      l || ((l = !0), c())
    }
    function r () {
      try {
        d.documentElement.doScroll('left')
      } catch (t) {
        return void setTimeout(r, 50)
      }
      a()
    }
  })(window)
