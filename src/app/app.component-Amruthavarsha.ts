import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

@Component({
  selector: 'app-root',
  standalone: true, // Mark it as a standalone component
  templateUrl: './app.component.html',
  imports: [RouterModule]  // Import RouterModule here for routing
})
export class AppComponent {
  title: any;
}
