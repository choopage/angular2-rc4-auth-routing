import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DialogService } from './dialog.service';
import { HeroService } from './heroes/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HeroService, DialogService],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
