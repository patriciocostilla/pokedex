import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbilitiesService } from 'src/app/services/abilities.service';

@Component({
  selector: 'app-ability-detail',
  templateUrl: './ability-detail.page.html',
  styleUrls: ['./ability-detail.page.scss'],
})
export class AbilityDetailPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private abilitiesService: AbilitiesService
  ) {}

  id: number;
  ability: any;
  loading: boolean = true;

  async ngOnInit() {
    this.loading = true;

    this.id = Number(this.activatedRoute.snapshot.paramMap.getAll('id')[0]);
    await this.abilitiesService.get(this.id);
    this.ability = this.abilitiesService.currentAbility;

    this.loading = false;
  }
}
