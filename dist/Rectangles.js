function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var r = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var React = window.React;
if (r) React = r;

function T(props) {
  return /*#__PURE__*/React.createElement(C, _extends({
    p: "0px 15px 0px 15px"
  }, pass(props)), /*#__PURE__*/React.createElement("textarea", {
    className: "R " + props.theme,
    style: {
      paddingTop: "18px",
      height: "100%",
      width: "100%",
      resize: "none"
    },
    placeholder: props.children
  }));
}

function C(props) {
  var ha = props.ha ? props.ha : "left";
  var va = props.va ? props.va : "center";
  var p = props.p ? props.p : "0px 0px 0px 15px";
  return /*#__PURE__*/React.createElement(R, pass(props), /*#__PURE__*/React.createElement(R, {
    ns: props.ns,
    tel: true,
    t: true,
    h: props.h
  }, /*#__PURE__*/React.createElement("div", _extends({}, pass(props), {
    style: {
      display: "flex",
      height: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: va,
      width: "100%",
      justifyContent: ha,
      padding: p
    }
  }, props.children))));
}

function R(props) {
  function a(x, y) {
    return _extends({}, x, y);
  }

  var style = {};
  var _ref = [props.t, props.b, props.l, props.r],
      t = _ref[0],
      b = _ref[1],
      l = _ref[2],
      r = _ref[3];
  var side = "top";
  if (t + b + l + r > 1) console.log("warning conflicting tblrs ! ");

  if (t) {
    side = "top";
  }

  if (b) {
    side = "bottom";
  }

  if (l) {
    side = "left";
  }

  if (r) {
    side = "right";
  }

  if (l || r) {
    style = a(style, {
      writingMode: "vertical-lr"
    });
  } else if (t || b) {
    style = a(style, {
      writingMode: "horizontal-tb"
    });
  }

  var _ref2 = [props.bt, props.bb, props.bl, props.br],
      bt = _ref2[0],
      bb = _ref2[1],
      bl = _ref2[2],
      br = _ref2[3];

  if (bt) {
    style = a(style, {
      borderTopStyle: "solid"
    });
  }

  if (bb) {
    style = a(style, {
      borderBottomStyle: "solid"
    });
  }

  if (bl) {
    style = a(style, {
      borderLeftStyle: "solid"
    });
  }

  if (br) {
    style = a(style, {
      borderRightStyle: "solid"
    });
  }

  if (props.ns) {
    style = a(style, {
      overflow: "hidden"
    });
  }

  if (props.h) {
    style = a(style, {});
  }

  var v = !props.ps || props.ps == "top" || props.ps == "bottom";
  var _ref3 = [props.s, props.ms],
      s = _ref3[0];

  if (!props.root) {
    if (!s) {
      s = "auto";
    }

    if (v) {
      style = a(style, {
        height: s,
        width: "100%"
      });
    } else {
      style = a(style, {
        width: s,
        height: "100%"
      });
    }
  }

  var updatedChildren = React.Children.map(props.children, function (child, i) {
    return React.cloneElement(child, {
      ps: side,
      theme: child.props.theme ? child.props.theme : props.theme
    });
  });

  if (props.c) {
    style = a(style, {
      display: "none"
    });
  }

  var isTel = props.tel ? "tel " : "nottel ";
  var isHover = props.h ? "h " : "";
  var ismc = props.mc ? "mc " : "";
  var ismsc = props.msc ? "msc " : "";
  var root = props.root ? "root " : "";
  var theme = props.theme + " ";
  var borders = (bb ? "bb " : "") + (bt ? "bt " : "") + (bl ? "bl " : "") + (br ? "br " : "");
  var className = "R " + root + theme + isTel + isHover + ismc + ismsc + borders + props.className;
  return /*#__PURE__*/React.createElement("div", {
    childfloat: side,
    className: className,
    style: _extends({}, style, props.style),
    dangerouslySetInnerHTML: props.dangerouslySetInnerHTML
  }, updatedChildren);
}

function pass(props) {
  var objectMap = function objectMap(obj, fn) {
    return Object.fromEntries(Object.entries(obj).map(function (_ref4, i) {
      var k = _ref4[0],
          v = _ref4[1];
      return [k, fn(v, k, i)];
    }));
  };

  return objectMap(props, function (v) {
    return v === true ? "true" : v === false ? "false" : v;
  });
}

function initTelescope() {
  var telescope = {};

  telescope.adjust = function (tel, sibs, floatSide) {
    var telescopicElement = tel[0];

    if (floatSide == "left" || floatSide == "right") {
      var remainingWidth = sibs.reduce(function (accumulator, child) {
        return accumulator + child.offsetWidth;
      }, 0);
      telescopicElement.style.width = "calc(100% - " + remainingWidth + "px)";
    } else if (floatSide == "top" || floatSide == "bottom") {
      var remainingHeight = sibs.reduce(function (accumulator, child) {
        return accumulator + child.offsetHeight;
      }, 0);
      telescopicElement.style.height = "calc(100% - " + remainingHeight + "px)";
    } else console.error("telescope.js side error, neither horizontal or vertical");
  };

  telescope.telescope = function (div) {
    var children = [].concat(Array.from(div.childNodes)).filter(function (e) {
      return e.classList && e.classList.contains("R");
    });
    var tel = [].concat(children).filter(function (e) {
      return e.classList.contains("tel");
    });
    var sibs = [].concat(children).filter(function (e) {
      return e.classList.contains("nottel");
    });
    var floatSide = div.getAttribute("childfloat");
    if (tel.length == 1) telescope.adjust(tel, sibs, floatSide);else if (tel.length > 1) console.error("Warning. too many telescopic rects.");
    children.map(function (child) {
      return telescope.telescope(child);
    });
  };

  telescope.start = function (root) {
    var e = function e() {
      return telescope.telescope(root);
    };

    window.addEventListener("resize", e);
    window.addEventListener("click", e);
    var observer = new MutationObserver(e);
    observer.observe(root, {
      attributes: true,
      childList: true,
      subtree: true
    });
    telescope.telescope(root);
    return function () {
      window.removeEventListener("resize", e);
      window.removeEventListener("click", e);
      observer.disconnect();
    };
  };

  return telescope;
}

function startRectangles(root) {
  window.telescope = initTelescope();
  window.telescope.start(root);
}

exports.C = C;
exports.R = R;
exports.T = T;
exports.pass = pass;
exports.startRectangles = startRectangles;
//# sourceMappingURL=Rectangles.js.map
