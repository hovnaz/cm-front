import { Injectable } from '@angular/core';

import { SidenavElem } from '../models/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  private sidenavData: SidenavElem[] = [
    {
      name: 'Dashboard',
      route: ['/dashboard'],
      possition: 'top',
      level: 1,
      index: 1,
      global_parent_index: 1,
      isOpen: false,
      iconPath: '/assets/icons/sidebar-icons/dashboard.svg',
      // children: [
      //   {
      //     name: 'Inside D 1',
      //     route: ['/system/dashboard_1'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 1,
      //     parent_index: 1,
      //     global_parent_index: 1,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside D 2',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 2,
      //     parent_index: 1,
      //     global_parent_index: 1,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside D 3',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 3,
      //     parent_index: 1,
      //     global_parent_index: 1,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside D 4',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 4,
      //     parent_index: 1,
      //     global_parent_index: 1,
      //     isOpen: false
      //   }
      // ]
    },
    {
      name: 'Activities',
      route: ['/reports'],
      possition: 'top',
      level: 1,
      index: 2,
      global_parent_index: 2,
      isOpen: false,
      iconPath: '/assets/icons/sidebar-icons/activities.svg',
      // children: [
      //   {
      //     name: 'Inside R 1',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 1,
      //     parent_index: 2,
      //     global_parent_index: 2,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside R 2',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 2,
      //     parent_index: 2,
      //     global_parent_index: 2,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside R 3',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 3,
      //     parent_index: 2,
      //     global_parent_index: 2,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside R 4',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 4,
      //     parent_index: 2,
      //     global_parent_index: 2,
      //     isOpen: false
      //   }
      // ]
    },
    {
      name: 'Events',
      route: ['/system/events'],
      possition: 'top',
      level: 1,
      index: 3,
      global_parent_index: 3,
      isOpen: false,
      iconPath: '/assets/icons/sidebar-icons/new-star-ev.svg',
      // children: [
      //   {
      //     name: 'Inside F 1',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 1,
      //     parent_index: 3,
      //     global_parent_index: 3,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside F 2',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 2,
      //     parent_index: 3,
      //     global_parent_index: 3,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside F 3',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 3,
      //     parent_index: 3,
      //     global_parent_index: 3,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside F 4',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 4,
      //     parent_index: 3,
      //     global_parent_index: 3,
      //     isOpen: false
      //   }
      // ]
    },
    {
      name: 'Holidays',
      route: ['/system/holidays'],
      possition: 'top',
      level: 1,
      index: 4,
      global_parent_index: 4,
      isOpen: false,
      iconPath: '/assets/icons/sidebar-icons/holidays.svg',
      // children: [
      //   {
      //     name: 'Projects',
      //     route: ['/system/projects/projects'],
      //     iconPath: '/assets/icons/sidebar-icons/calendar.svg',
      //     level: 2,
      //     index: 1,
      //     parent_index: 4,
      //     global_parent_index: 4,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Services',
      //     route: ['/'],
      //     iconPath: '/assets/icons/sidebar-icons/dayoffs.svg',
      //     level: 2,
      //     index: 2,
      //     parent_index: 4,
      //     global_parent_index: 4,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Industries',
      //     route: ['/system/projects/industries'],
      //     iconPath: '/assets/icons/sidebar-icons/holidays.svg',
      //     level: 2,
      //     index: 3,
      //     parent_index: 4,
      //     global_parent_index: 4,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Technologies',
      //     route: ['/'],
      //     iconPath: '/assets/icons/sidebar-icons/technologies.svg',
      //     level: 2,
      //     index: 3,
      //     parent_index: 4,
      //     global_parent_index: 4,
      //     isOpen: false
      //   }
      // ]
    },
    {
      name: 'Skills',
      route: ['/system/skills/'],
      possition: 'top',
      level: 1,
      index: 5,
      global_parent_index: 5,
      isOpen: false,
      iconPath: '/assets/icons/sidebar-icons/skills.svg',
      // children: [
      //   {
      //     name: 'Employee',
      //     route: ['/system/employee-information/employee'],
      //     iconPath: '/assets/icons/sidebar-icons/employee.svg',
      //     level: 2,
      //     index: 1,
      //     parent_index: 5,
      //     global_parent_index: 5,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Calendar',
      //     route: ['/system/calendar'],
      //     iconPath: '/assets/icons/sidebar-icons/calendar.svg',
      //     level: 2,
      //     index: 2,
      //     parent_index: 5,
      //     global_parent_index: 5,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Day Offs',
      //     route: ['/system/employee-information/day-offs'],
      //     iconPath: '/assets/icons/sidebar-icons/dayoffs.svg',
      //     level: 2,
      //     index: 3,
      //     parent_index: 5,
      //     global_parent_index: 5,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Holidays',
      //     route: ['/system/employee-information/holidays'],
      //     iconPath: '/assets/icons/sidebar-icons/holidays.svg',
      //     level: 2,
      //     index: 4,
      //     parent_index: 5,
      //     global_parent_index: 5,
      //     isOpen: false
      //   }
      // ]
    },
    {
      name: 'Day offs and vacations',
      route: ['/system/day-offs-and-vacation'],
      possition: 'top',
      level: 1,
      index: 6,
      global_parent_index: 5,
      isOpen: false,
      iconPath: '/assets/icons/sidebar-icons/day-off-and-vac.svg',
      // children: [
      //   {
      //     name: 'Employee',
      //     route: ['/system/employee-information/employee'],
      //     iconPath: '/assets/icons/sidebar-icons/employee.svg',
      //     level: 2,
      //     index: 1,
      //     parent_index: 5,
      //     global_parent_index: 5,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Calendar',
      //     route: ['/system/calendar'],
      //     iconPath: '/assets/icons/sidebar-icons/calendar.svg',
      //     level: 2,
      //     index: 2,
      //     parent_index: 5,
      //     global_parent_index: 5,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Day Offs',
      //     route: ['/system/employee-information/day-offs'],
      //     iconPath: '/assets/icons/sidebar-icons/dayoffs.svg',
      //     level: 2,
      //     index: 3,
      //     parent_index: 5,
      //     global_parent_index: 5,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Holidays',
      //     route: ['/system/employee-information/holidays'],
      //     iconPath: '/assets/icons/sidebar-icons/holidays.svg',
      //     level: 2,
      //     index: 4,
      //     parent_index: 5,
      //     global_parent_index: 5,
      //     isOpen: false
      //   }
      // ]
    },
    {
      name: 'About company',
      route: ['/system/website'],
      possition: 'bottom',
      level: 1,
      index: 7,
      global_parent_index: 7,
      isOpen: false,
      iconPath: '/assets/icons/sidebar-icons/man.svg',
      // children: [
      //   {
      //     name: 'Inside W 1',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 1,
      //     parent_index: 7,
      //     global_parent_index: 7,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Inside W 2',
      //     route: ['/'],
      //     iconPath: '/',
      //     level: 2,
      //     index: 2,
      //     parent_index: 7,
      //     global_parent_index: 7,
      //     isOpen: false
      //   }
      // ]
    },
    {
      name: 'Settings',
      route: ['/settings'],
      possition: 'bottom',
      level: 1,
      index: 8,
      global_parent_index: 6,
      isOpen: false,
      iconPath: '/assets/icons/sidebar-icons/settings.svg',
      // children: [
      //   {
      //     name: 'Expense Categories',
      //     route: ['/system/settings/create-expense-category-page'],
      //     iconPath: '/assets/icons/sidebar-icons/financial.svg',
      //     level: 2,
      //     index: 1,
      //     parent_index: 6,
      //     global_parent_index: 6,
      //     isOpen: false
      //   },
      //   {
      //     name: 'Recurring Expenses',
      //     route: ['/system/settings/recurring-expenses'],
      //     iconPath: '/assets/icons/sidebar-icons/financial.svg',
      //     level: 2,
      //     index: 2,
      //     parent_index: 6,
      //     global_parent_index: 6,
      //     isOpen: false
      //   }
      // ]
    },

  ];

  get sidenav(): SidenavElem[] {
    return this.sidenavData;
  }

  toggle(event: SidenavElem): void {
    this.sidenavData.forEach(el => {
      if (el.index === event.index) {
        el.isOpen = true;
      } else {
        el.isOpen = false;
      }
    });
  }

  // toggle(event: SidenavElem): void {
  //   if (!event.parent_index) {
  //     event.isOpen = !event.isOpen;
  //     this.sidenavData.forEach(el => {
  //       if (el.index !== event.index) {
  //         this.closeTabs(el);
  //       } else {
  //         if (!el.isOpen) {
  //           this.closeTabs(el);
  //         }
  //       }
  //     });
  //   } else {
  //     this.sidenavData[(event.global_parent_index) - 1].children?.forEach(el => {
  //       if (el.level === event.level && el.index !== event.index) {
  //         this.closeTabs(el);
  //       } else {
  //         event.isOpen = !event.isOpen;
  //       }
  //     });
  //   }
  // }

  // closeTabs(el: SidenavElem): void {
  //   if (el.isOpen) { el.isOpen = false; }
  //   el.children?.forEach((elItem: any) => {
  //     this.closeTabs(elItem);
  //   });
  // }
}
