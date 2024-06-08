import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { fade } from '../animations/fade';

@Component({
  selector: 'auth-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  animations: [fade],
})
export class AuthComponent {
  constructor(private _contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this._contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
