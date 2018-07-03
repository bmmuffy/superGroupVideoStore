import { NgModule } from '@angular/core';

import { SuperGroupVideoStoreSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SuperGroupVideoStoreSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SuperGroupVideoStoreSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SuperGroupVideoStoreSharedCommonModule {}
