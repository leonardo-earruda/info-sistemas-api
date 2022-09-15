import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from '../../dtos/Car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup = new FormGroup({
    placa: new FormControl(this.data?.placa, Validators.maxLength(7)),
    chassi: new FormControl(this.data?.chassi,  Validators.maxLength(17)),
    renavam: new FormControl(this.data?.renavam,  Validators.maxLength(9)),
    modelo: new FormControl(this.data?.modelo),
    marca: new FormControl(this.data?.marca),
    ano: new FormControl(this.data?.ano),
  });
  isEditing: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) private data: Car, private carService: CarService, private dialogRef: DialogRef) { }

  ngOnInit(): void {
    this._verifyEditing();
  }

  private _verifyEditing() {
    this.isEditing = !!this.data?.id;
  }

  public create(carForm: any) {
    this.carService.create(carForm).subscribe(() => {
      this.dialogRef.close();
    });
  }

  public edit(carForm: any): void {
    this.carService.edit(this.data.id, carForm).subscribe(() => {
      this.dialogRef.close();
    });
  }

  public save(): void {
    const form = this.carForm.value;
    this.isEditing ? this.edit(form) : this.create(form);
  }
}
