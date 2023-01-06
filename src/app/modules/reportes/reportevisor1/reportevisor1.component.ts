import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reportevisor1',
  templateUrl: './reportevisor1.component.html',
  styleUrls: ['./reportevisor1.component.css']
})
export class Reportevisor1Component implements OnInit {
  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.formulario()
  }
  formulario() {
    this.form = this.formBuilder.group({
      anio: [''],
      mes: [''],
      moneda: ['']
    })
  }
}
