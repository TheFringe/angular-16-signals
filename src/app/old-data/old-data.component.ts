import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-old-data',
  standalone: true,
  templateUrl: './old-data.component.html',
  styleUrls: ['./old-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, InputComponent],
})
export class OldDataComponent {
  constructor(private service: DataService) { }

  get counter(): number {
    return this.service.counter;
  }
  get cars(): string[] {
    return this.service.cars;
  }
}
