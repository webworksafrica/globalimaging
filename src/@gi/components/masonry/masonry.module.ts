import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseMasonryComponent } from '@gi/components/masonry/masonry.component';

@NgModule({
    declarations: [
        FuseMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        FuseMasonryComponent
    ]
})
export class FuseMasonryModule
{
}
