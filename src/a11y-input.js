import { LitElement, html, css } from "lit-element";

export class A11yInput extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      value: { type: String },
    };
  }

  _requestUpdate(name, oldValue) {
    super._requestUpdate(name, oldValue);
    if (name === "value") {
      if (this.value === "cat") {
        this.log("We like cats too :)");
      }
    }
  }

  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has("value")) {
      this.inputEl.value = this.value;
    }
  }

  log(msg) {
    console.log(msg);
  }

  constructor() {
    super();
    this.label = "";
    this.value = "";
  }

  connectedCallback() {
    super.connectedCallback();
    this.labelEl = document.createElement("label");
    this.labelEl.innerText = this.label;
    this.labelEl.setAttribute("slot", "label");
    this.appendChild(this.labelEl);

    this.inputEl = document.createElement("input");
    this.inputEl.setAttribute("slot", "input");
    this.appendChild(this.inputEl);
  }

  render() {
    return html`
      <slot name="label"></slot>
      <slot name="input"></slot>
    `;
  }
}

customElements.define("a11y-input", A11yInput);
