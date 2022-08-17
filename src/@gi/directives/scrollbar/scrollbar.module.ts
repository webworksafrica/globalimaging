import { NgModule } from '@angular/core';
import { FuseScrollbarDirective } from '@gi/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        FuseScrollbarDirective
    ],
    exports     : [
        FuseScrollbarDirective
    ]
})
export class FuseScrollbarModule
{
}
