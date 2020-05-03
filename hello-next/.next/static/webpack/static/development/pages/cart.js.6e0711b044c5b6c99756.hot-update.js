webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_cart_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart-item-service */ "./services/cart-item-service.js");


var _this = undefined,
    _jsxFileName = "/Users/scottmolloy/Desktop/04 software_engineering/cartTest/hello-next/pages/cart.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var removeItemFromCart = function removeItemFromCart(cartItem) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function removeItemFromCart$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:5555/cart-items/".concat(cartItem.cartItemId), {
            method: 'DELETE'
          }));

        case 2:
          location.reload();

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var Index = function Index(props) {
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, props.customer.firstName, "'s Cart"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "You have ", props.cartItems.length, " ", props.cartItems.length === 1 ? 'item' : 'items', " in your cart."), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, props.items.map(function (item, index) {
    return __jsx("li", {
      key: item.itemId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/items/[itemId]",
      as: "/items/".concat(item.itemId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, item.description)), __jsx("button", {
      type: "button",
      onClick: function onClick() {
        return removeItemFromCart(props.cartItems[index]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, "Remove"));
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Current Total: $", props.items.reduce(function (accum, item) {
    return accum + item.price;
  }, 0)), props.items.length === 0 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("a", {
    title: "Shop!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Start shopping!")));
};

Index.getInitialProps = _services_cart_item_service__WEBPACK_IMPORTED_MODULE_4__["getCustomersCart"];
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./services/cart-item-service.js":
/*!***************************************!*\
  !*** ./services/cart-item-service.js ***!
  \***************************************/
/*! exports provided: getCustomersCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomersCart", function() { return getCustomersCart; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);



var getCustomersCart = function getCustomersCart() {
  var customerResponse, _await$customerRespon, _await$customerRespon2, customer, cartResponse, _await$cartResponse$j, _await$cartResponse$j2, cart, cartItemResponse, cartItems, itemsToFetch, itemResponses, items;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getCustomersCart$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:5555/customers"));

        case 2:
          customerResponse = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(customerResponse.json());

        case 5:
          _await$customerRespon = _context.sent;
          _await$customerRespon2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_await$customerRespon, 1);
          customer = _await$customerRespon2[0];
          _context.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:5555/customers/".concat(customer.customerId, "/carts")));

        case 10:
          cartResponse = _context.sent;
          _context.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(cartResponse.json());

        case 13:
          _await$cartResponse$j = _context.sent;
          _await$cartResponse$j2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_await$cartResponse$j, 1);
          cart = _await$cartResponse$j2[0];
          _context.next = 18;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:5555/carts/".concat(cart.cartId, "/cart-items")));

        case 18:
          cartItemResponse = _context.sent;
          _context.next = 21;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(cartItemResponse.json());

        case 21:
          cartItems = _context.sent;
          itemsToFetch = cartItems.map(function (cartItem) {
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:5555/items/".concat(cartItem.itemId));
          });
          _context.next = 25;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(itemsToFetch));

        case 25:
          itemResponses = _context.sent;
          _context.next = 28;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(itemResponses.map(function (itemResponse) {
            return itemResponse.json();
          })));

        case 28:
          items = _context.sent;
          return _context.abrupt("return", {
            customer: customer,
            cartItems: cartItems,
            items: items
          });

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/***/ })

})
//# sourceMappingURL=cart.js.6e0711b044c5b6c99756.hot-update.js.map