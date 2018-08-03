import { Component } from '@angular/core';

import { isCapacitorNative } from '@ionic/core';
import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar } = Plugins;

@Component({
  selector: 'ez-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (isCapacitorNative(window)) {
        StatusBar.setStyle({
          style: StatusBarStyle.Dark
        });
      }
    });
  }
}
