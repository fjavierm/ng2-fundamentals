import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppCompoment } from './events-app.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppCompoment],
    bootstrap: [EventsAppCompoment]
})
export class AppModule {}