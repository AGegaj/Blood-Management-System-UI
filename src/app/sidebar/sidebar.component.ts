import { Component, OnInit } from '@angular/core';
import {inspect} from 'util';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'User Profile',  icon: 'pe-7s-user', class: '' },
    { path: '/add-user', title: 'Add User',  icon: 'pe-7s-news-paper', class: '' },
    { path: '/view-donator', title: 'View Donators',  icon: 'pe-7s-news-paper', class: '' },
    { path: '/donor-register', title: 'Donor Register',  icon: 'pe-7s-news-paper', class: '' },
    { path: '/requests', title: 'Request List',  icon: 'pe-7s-note2', class: '' },
    { path: '/donations', title: 'View Donations',  icon: 'pe-7s-note2', class: '' },
    { path: '/camps', title: 'Camps',  icon: 'pe-7s-science', class: '' },

];

export const ROUTES_ClIENT: RouteInfo[] = [
  { path: '/home', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/user', title: 'User Profile',  icon: 'pe-7s-user', class: '' },
  { path: '/view-requests', title: 'View Requests',  icon: 'pe-7s-note2', class: '' },
  { path: '/view-donations', title: 'View Donations',  icon: 'pe-7s-note2', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['styles.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  role: String;

  constructor() { }

  ngOnInit() {
    this.role = localStorage.getItem("role");
    if(this.role == 'ADMIN'){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }else {
      this.menuItems = ROUTES_ClIENT.filter(menuItem => menuItem);
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
