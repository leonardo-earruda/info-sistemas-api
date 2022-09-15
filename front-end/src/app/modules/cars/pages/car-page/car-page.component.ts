import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CarFormComponent } from '../../components/car-form/car-form.component';
import { Car } from '../../dtos/Car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {
  displayedColumns: string[] = ['placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'edit', 'delete']
  dataSource = new MatTableDataSource<Car>()

  constructor(private carService: CarService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this._loadCars()
  }

  private _loadCars() {
    this.carService.findAll().subscribe((res) => {
      this.dataSource.data = res;
    })
  }

  private _openDialog(car?: Car) {
    this.dialog.open(CarFormComponent, {
      data: car
    }).afterClosed().subscribe(() => this._loadCars())
  }

  public create() {
    this._openDialog()
  }

  public edit(id: number) {
    this.carService.findById(id).subscribe((car) => {
      this._openDialog(car);
    })
  }

  public delete(id: number) {
    this.carService.delete(id).subscribe((car) => {
      this._loadCars();
    })
  }
}
