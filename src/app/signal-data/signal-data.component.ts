import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signal-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-data.component.html',
  styleUrls: ['./signal-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalDataComponent {
  constructor(private readonly service: DataService) { }

  counter = this.service.counterSignal;
  data = this.service.carsSignal;
}
