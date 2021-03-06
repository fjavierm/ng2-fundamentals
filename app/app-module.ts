import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'
import { EventsAppCompoment } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppCompoment,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppCompoment]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have no saved this event, do you really want to cancel?')

    return true
}