import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
    imports: [CommonModule, MatExpansionModule]
})
export class ErrorComponent {
    @Input() public error: Error = new Error('An unexpected error occurred');
}
