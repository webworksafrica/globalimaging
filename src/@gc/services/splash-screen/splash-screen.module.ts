import { NgModule } from '@angular/core';
import { FuseSplashScreenService } from '@gc/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        FuseSplashScreenService
    ]
})
export class FuseSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _fuseSplashScreenService: FuseSplashScreenService)
    {
    }
}
