import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppCompoment } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppCompoment,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent],
    bootstrap: [EventsAppCompoment]
})
export class AppModule {}