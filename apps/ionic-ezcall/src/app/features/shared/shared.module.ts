import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@nx-workspace/ionic';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
