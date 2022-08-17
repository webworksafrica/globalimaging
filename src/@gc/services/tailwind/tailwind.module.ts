import { NgModule } from '@angular/core';
import { FuseTailwindService } from '@gc/services/tailwind/tailwind.service';

@NgModule({
    providers: [
        FuseTailwindService
    ]
})
export class FuseTailwindConfigModule
{
    /**
     * Constructor
     */
    constructor(private _fuseTailwindConfigService: FuseTailwindService)
    {
    }
}
