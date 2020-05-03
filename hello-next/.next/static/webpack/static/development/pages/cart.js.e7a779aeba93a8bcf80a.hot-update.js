webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "/Users/scottmolloy/Desktop/04 software_engineering/cartTest/hello-next/pages/cart.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var removeItemFromCart = function removeItemFromCart(cartItem) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function removeItemFromCart$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:5555/cart-items/".concat(cartItem.cartItemId), {
            method: 'DELETE'
          }));

        case 2:
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
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, props.customer.firstName, "'s Cart"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "You have ", props.cartItems.length, " ", props.cartItems.length === 1 ? 'item' : 'items', " in your cart."), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, props.items.map(function (item, index) {
    return __jsx("li", {
      key: item.itemId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/items/[itemId]",
      as: "/items/".concat(item.itemId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
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
        lineNumber: 21,
        columnNumber: 21
      }
    }, "Remove"));
  })));
};

Index.getInitialProps = function _callee() {
  var customerResponse, _await$customerRespon, _await$customerRespon2, customer, cartResponse, _await$cartResponse$j, _await$cartResponse$j2, cart, cartItemResponse, cartItems, itemsToFetch, itemResponses, items;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:5555/customers"));

        case 2:
          customerResponse = _context2.sent;
          _context2.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(customerResponse.json());

        case 5:
          _await$customerRespon = _context2.sent;
          _await$customerRespon2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_await$customerRespon, 1);
          customer = _await$customerRespon2[0];
          _context2.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:5555/customers/".concat(customer.customerId, "/carts")));

        case 10:
          cartResponse = _context2.sent;
          _context2.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(cartResponse.json());

        case 13:
          _await$cartResponse$j = _context2.sent;
          _await$cartResponse$j2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_await$cartResponse$j, 1);
          cart = _await$cartResponse$j2[0];
          _context2.next = 18;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:5555/carts/".concat(cart.cartId, "/cart-items")));

        case 18:
          cartItemResponse = _context2.sent;
          _context2.next = 21;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(cartItemResponse.json());

        case 21:
          cartItems = _context2.sent;
          itemsToFetch = cartItems.map(function (cartItem) {
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("http://localhost:5555/items/".concat(cartItem.itemId));
          });
          _context2.next = 25;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Promise.all(itemsToFetch));

        case 25:
          itemResponses = _context2.sent;
          _context2.next = 28;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Promise.all(itemResponses.map(function (itemResponse) {
            return itemResponse.json();
          })));

        case 28:
          items = _context2.sent;
          return _context2.abrupt("return", {
            customer: customer,
            cartItems: cartItems,
            items: items
          });

        case 30:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=cart.js.e7a779aeba93a8bcf80a.hot-update.js.map