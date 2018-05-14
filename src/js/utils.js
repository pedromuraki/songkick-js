const toggleClass = (el, cl) => (!el.classList.contains(cl) ? el.classList.add(cl) : el.classList.remove(cl));
const addClass = (el, cl) => el.classList.add(cl);
const removeClass = (el, cl) => el.classList.remove(cl);
const nodelistToArray = (selector) => Array.prototype.slice.call(document.querySelectorAll(selector));

export { toggleClass, addClass, removeClass, nodelistToArray };
