import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Platform, IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Pokemons', url: '/pokemons', icon: 'mail' },
    { title: 'Types', url: '/types', icon: 'paper-plane' },
    { title: 'Abilities', url: '/abilities', icon: 'paper-plane' },
  ];
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet;
  constructor(
    private platform: Platform,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(1, () => {
        if (!this.routerOutlet.canGoBack()) {
          App.exitApp();
        } else {
          this.location.back();
        }
      });
    });
  }
}
