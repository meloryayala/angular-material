import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonIconsComponent } from './button-icons/button-icons.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonIconsComponent },
  { path: 'formField', component: FormFieldsComponent },
  { path: 'progressSpinner', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'datepicker', component: DatepickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
