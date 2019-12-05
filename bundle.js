/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/style.scss */ "./src/style.scss");
/* harmony import */ var _src_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/panel */ "./src/panel.js");
/* harmony import */ var _src_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/slider */ "./src/slider.js");
/* harmony import */ var _src_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ref */ "./src/ref.js");
/* harmony import */ var _src_ref__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_ref__WEBPACK_IMPORTED_MODULE_3__);




//import './project/theyalow/index.html'
//import './project/theyalow/style.css'

/***/ }),

/***/ "./src/panel.js":
/*!**********************!*\
  !*** ./src/panel.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var coll = document.getElementsByClassName("main-education-btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-panel");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/***/ }),

/***/ "./src/ref.js":
/*!********************!*\
  !*** ./src/ref.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

//let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
console.log('items')
document.getElementById('first-item').addEventListener('mouseup', ()=>{
  console.log('go')
  document.location.href = "./project/theyalow/index.html"
})
document.getElementById('second-item').addEventListener('mouseup', ()=>{
  console.log('go')
  document.location.href = "./project/repair-design-project/index.html"
})
document.getElementById('third-item').addEventListener('mouseup', ()=>{
  console.log('go')
  document.location.href = "./project/canvas/index.html"
})


document.getElementById('first-item').click();

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem (n) {
  currentItem = (n + items.length) % items.length;
  console.log(currentItem)
}

function hideItem (direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function () {
    console.log('anim end hide')
    this.classList.remove('active', direction);
    //console.log(this.classList)
  })
}

function showItem (direction) {
  console.log('show')
  items[currentItem].classList.add('next', direction);
  console.log('show add')
  console.log(items[currentItem])
  items[currentItem].addEventListener('animationend', function () {
    console.log('anim end show')
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  })
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document.querySelector('.control.left').addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
})

document.querySelector('.control.right').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
})*/

let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem);
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.carousel');
swipedetect(el);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3M/YmMzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNMO0FBQ0M7QUFDSDtBQUNuQjtBQUNBLHVDOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUEsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QsOEM7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxnQjs7Ozs7Ozs7Ozs7QUNoTUEsdUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAuanNcIik7XG4iLCJpbXBvcnQgJy4vc3JjL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3JjL3BhbmVsJztcclxuaW1wb3J0ICcuL3NyYy9zbGlkZXInO1xyXG5pbXBvcnQgJy4vc3JjL3JlZic7XHJcbi8vaW1wb3J0ICcuL3Byb2plY3QvdGhleWFsb3cvaW5kZXguaHRtbCdcclxuLy9pbXBvcnQgJy4vcHJvamVjdC90aGV5YWxvdy9zdHlsZS5jc3MnIiwidmFyIGNvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1lZHVjYXRpb24tYnRuXCIpO1xyXG52YXIgaTtcclxuXHJcbmZvciAoaSA9IDA7IGkgPCBjb2xsLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29sbFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmUtcGFuZWxcIik7XHJcbiAgICB2YXIgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiLy9sZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwgLml0ZW0nKTtcclxubGV0IGN1cnJlbnRJdGVtID0gMDtcclxuY29uc29sZS5sb2coJ2l0ZW1zJylcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0LWl0ZW0nKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PntcclxuICBjb25zb2xlLmxvZygnZ28nKVxyXG4gIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcIi4uL3Byb2plY3QvdGhleWFsb3cvaW5kZXguaHRtbFwiXHJcbn0pXHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0LWl0ZW0nKS5jbGljaygpOyIsIi8qbGV0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKTtcclxubGV0IGN1cnJlbnRJdGVtID0gMDtcclxubGV0IGlzRW5hYmxlZCA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50SXRlbSAobikge1xyXG4gIGN1cnJlbnRJdGVtID0gKG4gKyBpdGVtcy5sZW5ndGgpICUgaXRlbXMubGVuZ3RoO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRJdGVtKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlSXRlbSAoZGlyZWN0aW9uKSB7XHJcbiAgaXNFbmFibGVkID0gZmFsc2U7XHJcbiAgaXRlbXNbY3VycmVudEl0ZW1dLmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uKTtcclxuICBpdGVtc1tjdXJyZW50SXRlbV0uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FuaW0gZW5kIGhpZGUnKVxyXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCBkaXJlY3Rpb24pO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmNsYXNzTGlzdClcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SXRlbSAoZGlyZWN0aW9uKSB7XHJcbiAgY29uc29sZS5sb2coJ3Nob3cnKVxyXG4gIGl0ZW1zW2N1cnJlbnRJdGVtXS5jbGFzc0xpc3QuYWRkKCduZXh0JywgZGlyZWN0aW9uKTtcclxuICBjb25zb2xlLmxvZygnc2hvdyBhZGQnKVxyXG4gIGNvbnNvbGUubG9nKGl0ZW1zW2N1cnJlbnRJdGVtXSlcclxuICBpdGVtc1tjdXJyZW50SXRlbV0uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FuaW0gZW5kIHNob3cnKVxyXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCduZXh0JywgZGlyZWN0aW9uKTtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBpc0VuYWJsZWQgPSB0cnVlO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXZpb3VzSXRlbShuKSB7XHJcbiAgaGlkZUl0ZW0oJ3RvLXJpZ2h0Jyk7XHJcbiAgY2hhbmdlQ3VycmVudEl0ZW0obiAtIDEpO1xyXG4gIHNob3dJdGVtKCdmcm9tLWxlZnQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dEl0ZW0obikge1xyXG4gIGhpZGVJdGVtKCd0by1sZWZ0Jyk7XHJcbiAgY2hhbmdlQ3VycmVudEl0ZW0obiArIDEpO1xyXG4gIHNob3dJdGVtKCdmcm9tLXJpZ2h0Jyk7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLmxlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gIGlmIChpc0VuYWJsZWQpIHtcclxuICAgIHByZXZpb3VzSXRlbShjdXJyZW50SXRlbSk7XHJcbiAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2wucmlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gIGlmIChpc0VuYWJsZWQpIHtcclxuICAgIG5leHRJdGVtKGN1cnJlbnRJdGVtKTtcclxuICB9XHJcbn0pKi9cclxuXHJcbmxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbCAuaXRlbScpO1xyXG5sZXQgY3VycmVudEl0ZW0gPSAwO1xyXG5sZXQgaXNFbmFibGVkID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRJdGVtKG4pIHtcclxuXHRjdXJyZW50SXRlbSA9IChuICsgaXRlbXMubGVuZ3RoKSAlIGl0ZW1zLmxlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUl0ZW0oZGlyZWN0aW9uKSB7XHJcblx0aXNFbmFibGVkID0gZmFsc2U7XHJcblx0aXRlbXNbY3VycmVudEl0ZW1dLmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uKTtcclxuXHRpdGVtc1tjdXJyZW50SXRlbV0uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScsIGRpcmVjdGlvbik7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJdGVtKGRpcmVjdGlvbikge1xyXG5cdGl0ZW1zW2N1cnJlbnRJdGVtXS5jbGFzc0xpc3QuYWRkKCduZXh0JywgZGlyZWN0aW9uKTtcclxuXHRpdGVtc1tjdXJyZW50SXRlbV0uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ25leHQnLCBkaXJlY3Rpb24pO1xyXG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdGlzRW5hYmxlZCA9IHRydWU7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRJdGVtKG4pIHtcclxuXHRoaWRlSXRlbSgndG8tbGVmdCcpO1xyXG5cdGNoYW5nZUN1cnJlbnRJdGVtKG4gKyAxKTtcclxuXHRzaG93SXRlbSgnZnJvbS1yaWdodCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmV2aW91c0l0ZW0obikge1xyXG5cdGhpZGVJdGVtKCd0by1yaWdodCcpO1xyXG5cdGNoYW5nZUN1cnJlbnRJdGVtKG4gLSAxKTtcclxuXHRzaG93SXRlbSgnZnJvbS1sZWZ0Jyk7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLmxlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdGlmIChpc0VuYWJsZWQpIHtcclxuXHRcdHByZXZpb3VzSXRlbShjdXJyZW50SXRlbSk7XHJcblx0fVxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLnJpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRpZiAoaXNFbmFibGVkKSB7XHJcblx0XHRuZXh0SXRlbShjdXJyZW50SXRlbSk7XHJcblx0fVxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlZGV0ZWN0ID0gKGVsKSA9PiB7XHJcbiAgXHJcblx0bGV0IHN1cmZhY2UgPSBlbDtcclxuXHRsZXQgc3RhcnRYID0gMDtcclxuXHRsZXQgc3RhcnRZID0gMDtcclxuXHRsZXQgZGlzdFggPSAwO1xyXG5cdGxldCBkaXN0WSA9IDA7XHJcblx0bGV0IHN0YXJ0VGltZSA9IDA7XHJcblx0bGV0IGVsYXBzZWRUaW1lID0gMDtcclxuXHJcblx0bGV0IHRocmVzaG9sZCA9IDE1MDtcclxuXHRsZXQgcmVzdHJhaW50ID0gMTAwO1xyXG5cdGxldCBhbGxvd2VkVGltZSA9IDMwMDtcclxuXHJcblx0c3VyZmFjZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKXtcclxuXHRcdHN0YXJ0WCA9IGUucGFnZVg7XHJcblx0XHRzdGFydFkgPSBlLnBhZ2VZO1xyXG5cdFx0c3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRzdXJmYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbihlKXtcclxuXHRcdGRpc3RYID0gZS5wYWdlWCAtIHN0YXJ0WDtcclxuXHRcdGRpc3RZID0gZS5wYWdlWSAtIHN0YXJ0WTtcclxuXHRcdGVsYXBzZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWU7XHJcblx0XHRpZiAoZWxhcHNlZFRpbWUgPD0gYWxsb3dlZFRpbWUpe1xyXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGlzdFgpID49IHRocmVzaG9sZCAmJiBNYXRoLmFicyhkaXN0WSkgPD0gcmVzdHJhaW50KXtcclxuXHRcdFx0XHRpZiAoKGRpc3RYID4gMCkpIHtcclxuXHRcdFx0XHRcdGlmIChpc0VuYWJsZWQpIHtcclxuXHRcdFx0XHRcdFx0cHJldmlvdXNJdGVtKGN1cnJlbnRJdGVtKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGlzRW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0SXRlbShjdXJyZW50SXRlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRzdXJmYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKXtcclxuXHRcdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Fycm93JykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250cm9sJykpIHtcclxuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGVmdCcpKSB7XHJcblx0XHRcdFx0aWYgKGlzRW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0cHJldmlvdXNJdGVtKGN1cnJlbnRJdGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGlzRW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0bmV4dEl0ZW0oY3VycmVudEl0ZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHR2YXIgdG91Y2hvYmogPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRzdGFydFggPSB0b3VjaG9iai5wYWdlWDtcclxuXHRcdFx0c3RhcnRZID0gdG91Y2hvYmoucGFnZVk7XHJcblx0XHRcdHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRzdXJmYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRzdXJmYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdHZhciB0b3VjaG9iaiA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdGRpc3RYID0gdG91Y2hvYmoucGFnZVggLSBzdGFydFg7XHJcblx0XHRcdGRpc3RZID0gdG91Y2hvYmoucGFnZVkgLSBzdGFydFk7XHJcblx0XHRcdGVsYXBzZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWU7XHJcblx0XHRcdGlmIChlbGFwc2VkVGltZSA8PSBhbGxvd2VkVGltZSl7XHJcblx0XHRcdFx0XHRpZiAoTWF0aC5hYnMoZGlzdFgpID49IHRocmVzaG9sZCAmJiBNYXRoLmFicyhkaXN0WSkgPD0gcmVzdHJhaW50KXtcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGRpc3RYID4gMCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChpc0VuYWJsZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJldmlvdXNJdGVtKGN1cnJlbnRJdGVtKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzRW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuZXh0SXRlbShjdXJyZW50SXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9LCBmYWxzZSk7XHJcbn1cclxuXHJcbnZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCcpO1xyXG5zd2lwZWRldGVjdChlbCk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==