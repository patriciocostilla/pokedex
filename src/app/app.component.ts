import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pokemons', url: '/pokemons', icon: 'mail' },
    { title: 'Types', url: '/folder/types', icon: 'paper-plane' },
    { title: 'Moves', url: '/folder/moves', icon: 'heart' },
    { title: 'Abilities', url: '/folder/abilities', icon: 'archive' },
    { title: 'Items', url: '/folder/items', icon: 'trash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
