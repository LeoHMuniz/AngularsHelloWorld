import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { FirstComponentComponent } from './components/first-component/first-component.component';
// import { ParentDataComponent } from './components/parent-data/parent-data.component';
// import { DirectivesComponent } from './components/directives/directives.component';
// import { IfRenderComponent } from './components/if-render/if-render.component';
// import { EventsComponent } from './components/events/events.component';
// import { EmitterComponent } from './components/emitter/emitter.component';
// import { ListRenderComponent } from './components/list-render/list-render.component';
// import { PipesComponent } from './components/pipes/pipes.component';
// import { TwoWayBindsComponent } from './components/two-way-binds/two-way-binds.component';
import { FormsModule } from '@angular/forms';

// , FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventsComponent, EmitterComponent, ListRenderComponent, PipesComponent, TwoWayBindsComponent,
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userName = "José";
  userData = "joaca@humberto.com";
  title = 'firstTry';
}
