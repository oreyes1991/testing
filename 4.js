webpackJsonp([4],{

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var nunjucks = __webpack_require__(4);
var env;
if (!nunjucks.currentEnv){
	env = nunjucks.currentEnv = new nunjucks.Environment([], { autoescape: true });
} else {
	env = nunjucks.currentEnv;
}
var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});




var shim = __webpack_require__(3);


(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["partials/footer.es.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"col-lg-3 col-md-3 hidden-sm hidden-xs\">\r\n  <div id=\"copyright\">\r\n    <b>© copyright 2012 SouthAmericansSecrets.com</b>\r\n  </div>\r\n</div>\r\n<menu class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n  <li><a href=\".\" title=\"Home\">Inicio</a></li>\r\n  <li><a href=\"articles.html\" title=\"Engaging articles about Peru's history\">Articulos</a></li>\r\n  <li><a href=\"contact.html\" title=\"Have a question? Please contact us...\">Contacto</a></li>\r\n  <li><a href=\"about.html\">About Us</a></li>\r\n</menu>\r\n<div class=\"col-lg-3 col-md-3 payment-icons hidden-sm hidden-xs\">\r\n  <img src=\"images/footer/pp-acceptance-small.png\" alt=\"PayPal Acceptance\">\r\n  <img src=\"images/footer/visa.jpg\" alt=\"Visa Acceptance\">\r\n</div>\r\n<div class=\"col-sm-12 col-xs-12 hidden-lg hidden-md\">\r\n  <div id=\"copyright\">\r\n    <b>© copyright 2012 SouthAmericansSecrets.com</b>\r\n  </div>\r\n</div>\r\n";
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



module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["partials/footer.es.njk"] , dependencies)

/***/ })

});
//# sourceMappingURL=4.js.map