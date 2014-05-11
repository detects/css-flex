/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  var definition = module.definition;
  if (definition) {
    definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

require.register("./index.js", function (exports, module) {

// http://caniuse.com/flexbox

var html = document.documentElement

var prefixes = [
  '-webkit-',
  '-moz-',
  '-ms-',
  '-o-',
  ''
]

var supported

cssflex()

module.exports = cssflex

function cssflex() {
  if (supported) return supported

  supported = {}

  // tests
  test('flex-basis: 1px;', 'flexbox')
  test('box-direction: reverse;', 'flexboxlegacy')
  test('flex-align: end;', 'flexboxtweener')
  test('flex-wrap: wrap;', 'flexwrap')

  // aliases
  supported.flex = supported.flexbox
  supported.legacy = supported.flexboxlegacy
  supported.tweener = supported.flexboxtweener
  supported.wrap = supported.flexwrap

  return supported
}

function test(prop, name) {
  var el = document.createElement('div')
  el.style.cssText = prefix(prop)
  supported[name] = !!el.style.length
  html.className += ' ' + (supported[name] ? '' : 'no-') + name
}

function prefix(str) {
  var out = ''
  for (var i = 0; i < prefixes.length; i++) {
    out += prefixes[i] + str
  }
  return out
}

})

require("./index.js");
