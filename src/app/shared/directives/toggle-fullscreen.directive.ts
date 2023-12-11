import { Directive, HostListener } from '@angular/core';

import * as screenfull from 'screenfull';

@Directive({
    selector: '[appToggleFullscreen]',
    standalone: true
})
export class ToggleFullscreenDirective {

  @HostListener('click') onClick() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
