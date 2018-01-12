
can.Component.extend({
  tag: "foo-bar"
});


customElements.define("foo-bar", class extends HTMLElement {
  constructor() {
    super();

    if(!creatingFragment && !cloningFragment) {
      callbacks.tagHandler(this, { });
    }
  }
});


// can-stache -> fragment

// 1. can-view-target -> fragment.cloneNode(true)
// 2. can-view-target -> callbacks(el, { })
