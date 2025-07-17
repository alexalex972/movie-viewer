import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MatButtonModule, RouterModule]
})
export class HomeComponent {
    public title = signal("Alex's Movie Viewer");
    public subtitle = signal("View a list of the most popular movies and browse their posters and descriptions");
}
