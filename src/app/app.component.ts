import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldDataComponent } from './old-data/old-data.component';
import { SignalDataComponent } from './signal-data/signal-data.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    OldDataComponent,
    SignalDataComponent,
    InputComponent,
  ],
})
export class AppComponent { }
