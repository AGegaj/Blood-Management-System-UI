import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { RequestComponent } from '../../request/request.component';
import { AddUserComponent } from '../../user/add-user/add-user.component';
import { AddCampComponent} from '../../camps/add-camp/add-camp.component';
import { CampsComponent } from '../../camps/camps.component';
import { DonorComponent } from '../../donor/donor.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {EditCampComponent} from '../../camps/edit-camp/edit-camp.component';
import {ViewDonationComponent} from '../../donor/view-donations/view-donation.component';
import {ViewDonatorsComponent} from '../../user/view-donators/view-donators.component';
import {EditUserComponent} from '../../user/edit-user/edit-user.component';
import {ViewClientDonationComponent} from '../../donor/view-client-donations/view-client-donation.component';
import {ViewClientRequestComponent} from '../../request/view-client-request/view-client-request.component';
import {HomeClientComponent} from '../../home/home-client/home-client.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    HomeClientComponent,
    UserComponent,
    RequestComponent,
    AddUserComponent,
    EditUserComponent,
    CampsComponent,
    AddCampComponent,
    EditCampComponent,
    DonorComponent,
    ViewDonationComponent,
    ViewDonatorsComponent,
    ViewClientDonationComponent,
    ViewClientRequestComponent,
    NotificationsComponent,
    UpgradeComponent
  ]
})

export class AdminLayoutModule {}
