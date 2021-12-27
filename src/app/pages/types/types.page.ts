import { Component, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.page.html',
  styleUrls: ['./types.page.scss'],
})
export class TypesPage implements OnInit {
  constructor(private typesService: TypesService) {}

  types: any[];

  ngOnInit() {
    this.getAll();
  }
  async getAll() {
    await this.typesService.getAll();
    this.types = this.typesService.types;
  }
}
