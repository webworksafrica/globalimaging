import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseScrollbarModule } from '@gi/directives/scrollbar/public-api';
import { FuseHorizontalNavigationBasicItemComponent } from '@gi/components/navigation/horizontal/components/basic/basic.component';
import { FuseHorizontalNavigationBranchItemComponent } from '@gi/components/navigation/horizontal/components/branch/branch.component';
import { FuseHorizontalNavigationDividerItemComponent } from '@gi/components/navigation/horizontal/components/divider/divider.component';
import { FuseHorizontalNavigationSpacerItemComponent } from '@gi/components/navigation/horizontal/components/spacer/spacer.component';
import { FuseHorizontalNavigationComponent } from '@gi/components/navigation/horizontal/horizontal.component';
import { FuseVerticalNavigationAsideItemComponent } from '@gi/components/navigation/vertical/components/aside/aside.component';
import { FuseVerticalNavigationBasicItemComponent } from '@gi/components/navigation/vertical/components/basic/basic.component';
import { FuseVerticalNavigationCollapsableItemComponent } from '@gi/components/navigation/vertical/components/collapsable/collapsable.component';
import { FuseVerticalNavigationDividerItemComponent } from '@gi/components/navigation/vertical/components/divider/divider.component';
import { FuseVerticalNavigationGroupItemComponent } from '@gi/components/navigation/vertical/components/group/group.component';
import { FuseVerticalNavigationSpacerItemComponent } from '@gi/components/navigation/vertical/components/spacer/spacer.component';
import { FuseVerticalNavigationComponent } from '@gi/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        FuseHorizontalNavigationBasicItemComponent,
        FuseHorizontalNavigationBranchItemComponent,
        FuseHorizontalNavigationDividerItemComponent,
        FuseHorizontalNavigationSpacerItemComponent,
        FuseHorizontalNavigationComponent,
        FuseVerticalNavigationAsideItemComponent,
        FuseVerticalNavigationBasicItemComponent,
        FuseVerticalNavigationCollapsableItemComponent,
        FuseVerticalNavigationDividerItemComponent,
        FuseVerticalNavigationGroupItemComponent,
        FuseVerticalNavigationSpacerItemComponent,
        FuseVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        FuseScrollbarModule
    ],
    exports     : [
        FuseHorizontalNavigationComponent,
        FuseVerticalNavigationComponent
    ]
})
export class FuseNavigationModule
{
}
