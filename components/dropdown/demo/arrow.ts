import { Component } from '@angular/core';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'nz-demo-dropdown-arrow',
  template: `
    <div>
      <ng-container *ngFor="let position of listOfPosition">
        <button nz-button nz-dropdown [nzDropdownMenu]="menu" [nzPlacement]="position" nzArrow>{{ position }}</button>
        <nz-dropdown-menu #menu="nzDropdownMenu">
          <ul nz-menu>
            <li nz-menu-item>1st menu item length</li>
            <li nz-menu-item>2nd menu item length</li>
            <li nz-menu-item>3rd menu item length</li>
          </ul>
        </nz-dropdown-menu>
      </ng-container>
    </div>
  `,
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 8px;
      }
    `
  ]
})
export class NzDemoDropdownArrowComponent {
  listOfPosition: NzPlacementType[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
}
