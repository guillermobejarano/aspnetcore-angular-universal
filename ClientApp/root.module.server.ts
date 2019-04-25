import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule } from '@angular/platform-server';
import { PrebootModule } from 'preboot';
import { RootComponent } from './root.component';
import { RootModuleShared } from './root.module';

import { TransferHttpCacheModule, StateTransferInitializerModule } from '@nguniversal/common';

@NgModule({
  bootstrap: [RootComponent],
  imports: [
    // Our Common AppModule
    RootModuleShared,

    ServerModule,
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    NoopAnimationsModule,

    TransferHttpCacheModule, // still needs fixes for 5.0
    //   Leave this commented out for now, as it breaks Server-renders
    //   Looking into fixes for this! - @MarkPieszak
    // StateTransferInitializerModule // <-- broken for the time-being with ASP.NET
    ],
    declarations: [RootComponent]
})
export class RootModule {
  constructor() {}
}
