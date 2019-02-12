(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxAbstractDomSelector = nx.AbstractDomSelector || require('next-abstract-dom-selector');

  var NxSelectorQueryAll = nx.declare('nx.SelectorQueryAll', {
    extends: NxAbstractDomSelector,
    methods: {
      exec: function() {
        return this.context.querySelectorAll(this.selector);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSelectorQueryAll;
  }
})();
