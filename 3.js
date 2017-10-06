webpackJsonp([3],{

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__(1);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], { autoescape: true });
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});




var shim = __webpack_require__(0);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["partials/footer.en.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<menu>\n  <li><a href=\".\" title=\"Home\">Home</a></li>\n  <li><a href=\"#\" title=\"The Best of Peru - read more about Tours of Peru...\">Tours of Peru</a></li>\n  <li><a href=\"#\" title=\"So many things to see and do...\">Activities</a></li>\n  <li><a href=\"articles.html\" title=\"Engaging articles about Peru's history\">Articles</a></li>\n  <li><a href=\"contact.html\" title=\"Have a question? Please contact us...\">Contact</a></li>\n</menu>\n<div id=\"copyright\" class=\"row\">\n  <p><a href=\"#\">\n    <img src=\"images/footer/paypal1.jpg\" width=\"60\">\n  </a>\n  <b>© copyright 2012 SouthAmericansSecrets.com</b>\n  <a href=\"http://www.bookingsperu.com/secure-site/southamericanssecrets\">\n    <img src=\"images/footer/payvisa1.jpg\" width=\"60\">\n  </a></p>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["partials/footer.en.njk"] , dependencies)

/***/ })

});
//# sourceMappingURL=3.js.map