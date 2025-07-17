import { NgModule } from "@angular/core";
import { LoadingComponent } from "../shared/loading/loading.component";
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "../shared/error/error.component";

@NgModule({
    imports: [CommonModule, LoadingComponent, ErrorComponent],
    exports: [CommonModule, LoadingComponent, ErrorComponent],
})
export class MoviesModule { }