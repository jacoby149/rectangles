//adjusts the size of a telescopic element to accomodate its siblings.
function initTelescope() {
  const telescope = {};
  telescope.adjust = function (tel, sibs, floatSide) {
    const telescopicElement = tel[0];
    if (floatSide == "left" || floatSide == "right") {
      var remainingWidth = sibs.reduce(
        (accumulator, child) => accumulator + child.offsetWidth,
        0
      );
      telescopicElement.style.width = `calc(100% - ${remainingWidth}px)`;
    } else if (floatSide == "top" || floatSide == "bottom") {
      var remainingHeight = sibs.reduce(
        (accumulator, child) => accumulator + child.offsetHeight,
        0
      );
      telescopicElement.style.height = `calc(100% - ${remainingHeight}px)`;
    } else
      console.error("telescope.js side error, neither horizontal or vertical");
  };

  // recursively adjust the webpage based on window size change
  telescope.telescope = function (div) {
    const children = [...div.childNodes].filter((e) =>
      e.classList.contains("R")
    );
    const tel = [...children].filter((e) => e.classList.contains("tel"));
    const sibs = [...children].filter((e) => e.classList.contains("nottel"));
    const floatSide = div.getAttribute("childfloat");

    if (tel.length == 1) telescope.adjust(tel, sibs, floatSide);
    else if (tel.length > 1)
      console.error("Warning. too many telescopic rects.");

    /* always recurse */
    children.map((child) => telescope.telescope(child));
  };
  telescope.start = function (root) {
    const e = () => telescope.telescope(root);
    window.addEventListener("resize", e);
    window.addEventListener("click", e);
    
    //watch mutations too
    const observer = new MutationObserver(e);
    observer.observe(root, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    telescope.telescope(root);
    return () => {
      window.removeEventListener("resize", e);
      window.removeEventListener("click", e);
      observer.disconnect();
    };
  };
  return telescope;
}

var telescope = initTelescope();
