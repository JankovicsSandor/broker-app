import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OpenTransaction } from '@state';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionComponent {
  @Input() transactions: OpenTransaction[] = []

}
