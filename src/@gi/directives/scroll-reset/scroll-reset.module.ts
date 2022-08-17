import { NgModule } from '@angular/core';
import { FuseScrollResetDirective } from '@gi/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        FuseScrollResetDirective
    ],
    exports     : [
        FuseScrollResetDirective
    ]
})
export class FuseScrollResetModule
{
}
