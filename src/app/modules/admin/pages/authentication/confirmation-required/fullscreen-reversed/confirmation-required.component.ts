import { Component, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@gi/animations';

@Component({
    selector     : 'confirmation-required-fullscreen-reversed',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ConfirmationRequiredFullscreenReversedComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
