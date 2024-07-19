import { Controller } from '@hotwired/stimulus';
import Typed from 'typed.js';

// Connects to data-controller="typed"
export default class extends Controller {
  static values = { strings: Array };
  connect() {
    new Typed(this.element, {
      strings: this.stringsValue,
      typeSpeed: 50,
    });
  }
}

// If you want the target element to be the element in which you called the controller (in this case '<span data-controller='typed'>'),
// then you can use 'this.element' instead of, for example, 'data-toggle-target='toggleableElement''
