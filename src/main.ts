import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component-Amruthavarsha'; // Import the standalone component

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent) // Bootstrap the standalone component
  .catch(err => console.error(err));
