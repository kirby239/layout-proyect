import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './reportes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { Reportevisor1Component } from './reportevisor1/reportevisor1.component';
import { Reportevisor2Component } from './reportevisor2/reportevisor2.component';
import { Reportevisor3Component } from './reportevisor3/reportevisor3.component';

const routes: Routes = [
  {
    path: '',
    component: ReportesComponent,
    children: [
      { path: 'visor-1', component: Reportevisor1Component },
      { path: 'visor-2', component: Reportevisor2Component },
      { path: 'visor-3', component: Reportevisor3Component }

    ]
  }
]

@NgModule({
  declarations: [
    ReportesComponent,
    Reportevisor1Component,
    Reportevisor2Component,
    Reportevisor3Component,

  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ]
})
export class ReportesModule { }
