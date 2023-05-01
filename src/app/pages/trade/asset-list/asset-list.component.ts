import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stock } from '@state';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent {


  @Input() assetList: Stock[] = []
  @Output() buyAction: EventEmitter<Stock> = new EventEmitter();

  buyProduct(product: Stock) {
    this.buyAction.emit(product);
  }
}
