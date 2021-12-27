import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.page.html',
  styleUrls: ['./type-detail.page.scss'],
})
export class TypeDetailPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private typesService: TypesService
  ) {}

  id: number;
  type: any;
  loading: boolean = true;

  ngOnInit() {
    this.loadType();
  }

  async loadType() {
    this.loading = true;

    this.id = Number(this.activatedRoute.snapshot.paramMap.getAll('id')[0]);
    await this.typesService.get(this.id);
    this.type = this.typesService.currentType;

    this.loading = false;
  }
}
