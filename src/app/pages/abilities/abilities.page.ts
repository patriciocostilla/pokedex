import { Component, OnInit } from '@angular/core';
import { AbilitiesService } from 'src/app/services/abilities.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.page.html',
  styleUrls: ['./abilities.page.scss'],
})
export class AbilitiesPage implements OnInit {
  constructor(private abilitiesService: AbilitiesService) {}

  abilities: any[];

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    await this.abilitiesService.getAll();
    this.abilities = this.abilitiesService.abilities;
  }

  async getNext(event) {
    console.log('Fetching', this.abilitiesService.next);
    await this.abilitiesService.getNext();
    this.abilities = this.abilitiesService.abilities;
    event.target.complete();
    if (this.abilitiesService.next === null) {
      event.target.disable;
    }
  }
}
