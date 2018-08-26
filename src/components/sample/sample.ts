import { Component, Input } from '@angular/core';

/**
 * Generated class for the SampleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sample',
  template: '<div class="param">\n' +
  ' {{parameter}}\n' +
  '</div>'
})
export class SampleComponent {
  // example parameter
  @Input('param') parameter: string;

  constructor() {
  }
}
