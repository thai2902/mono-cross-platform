import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@nx-workspace/utils';
import { EzCoreModule } from '@nx-workspace/web';

@NgModule({
  imports: [EzCoreModule, IonicModule.forRoot()]
})
export class EzIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: EzIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'EzIonicCoreModule');
  }
}
