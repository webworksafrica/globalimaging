import { NgModule } from '@angular/core';
import { FuseMediaWatcherService } from '@gi/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        FuseMediaWatcherService
    ]
})
export class FuseMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _fuseMediaWatcherService: FuseMediaWatcherService)
    {
    }
}
