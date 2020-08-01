import { Component, OnInit } from '@angular/core';
import { TypeService } from '../type.service';
import bootbox from 'ngbootbox';
import { from } from 'rxjs';
@Component({
  selector: 'app-type-list',
  template: ` <select
              name="{{ nameSelect }}"
              #TypeId
              [(ngModel)]="nameSelected"
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option selected>---Select Type Product---</option>
              <option *ngFor="let type of typeService.TypeList" [value]="type.id">
                {{ type.name }}
              </option>
            </select>`,
  styleUrls: ['./type-list.component.scss'],
})
export class TypeListComponent implements OnInit {
  constructor(public typeService: TypeService) {}
  nameSelect: string | null = null;
  nameSelected: string | null = null;
  ngOnInit(): void {
    this.typeService.GetTypeList();
  }
}
