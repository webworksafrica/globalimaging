import { ModuleWithProviders, NgModule } from '@angular/core';
import { FuseConfigService } from '@gi/services/config/config.service';
import { FUSE_APP_CONFIG } from '@gi/services/config/config.constants';

@NgModule()
export class FuseConfigModule
{
    /**
     * Constructor
     */
    constructor(private _fuseConfigService: FuseConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<FuseConfigModule>
    {
        return {
            ngModule : FuseConfigModule,
            providers: [
                {
                    provide : FUSE_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
