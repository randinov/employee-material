export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
    import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },

  {
    path: 'employee',
    loadChildren: () =>
    import('./employee/employee.module').then(m => m.EmployeeModule),
    data: { icon: 'people', text: 'Employee' }
  },

];
