import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    imports: [CommonModule, MatProgressSpinnerModule]
})
export class LoadingComponent {
    @Input() public loading$: Observable<boolean> = of(true);
    @Input() public loadingMessage: string = 'Loading...';
}
