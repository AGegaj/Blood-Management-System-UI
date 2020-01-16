import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { RequestComponent } from '../../request/request.component';
import { AddUserComponent } from '../../user/add-user/add-user.component';
import { CampsComponent } from '../../camps/camps.component';
import { DonorComponent } from '../../donor/donor.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {AddCampComponent} from '../../camps/add-camp/add-camp.component';
import {EditCampComponent} from '../../camps/edit-camp/edit-camp.component';
import {ViewDonationComponent} from '../../donor/view-donations/view-donation.component';
import {ViewDonatorsComponent} from '../../user/view-donators/view-donators.component';
import {EditUserComponent} from '../../user/edit-user/edit-user.component';
import {ViewClientDonationComponent} from '../../donor/view-client-donations/view-client-donation.component';
import {ViewClientRequestComponent} from '../../request/view-client-request/view-client-request.component';
import {HomeClientComponent} from '../../home/home-client/home-client.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'home',           component: HomeClientComponent },
    { path: 'user',           component: UserComponent },
    { path: 'add-user',       component: AddUserComponent },
    { path: 'edit-user/:id',  component: EditUserComponent},
    { path: 'view-donator',   component: ViewDonatorsComponent },
    { path: 'view-donations', component: ViewClientDonationComponent },
    { path: 'requests',       component: RequestComponent },
    { path: 'view-requests',  component: ViewClientRequestComponent },
    { path: 'camps',          component: CampsComponent },
    { path: 'add-camp',       component: AddCampComponent },
    { path: 'edit-camp/:id',  component: EditCampComponent },
    { path: 'donor-register', component: DonorComponent },
    { path: 'donations',      component: ViewDonationComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
