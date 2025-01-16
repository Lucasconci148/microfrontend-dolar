import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mfeDollar';
  dolarData: any;
  isLoading: boolean = false;

  compra: number = 0;
  venta: number = 0;
  fecha: string = '';

  constructor(private httprequest: HttpClient) {}

  ngOnInit() {
    this.fetchDolarData();
  }

  fetchDolarData() {
    this.isLoading = true;
    this.httprequest
      .get(`https://mercados.ambito.com//dolar/informal/variacion`)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.compra = data['compra'];
          this.venta = data['venta'];
          this.fecha = data['fecha'];
        },
        error: (err) => {
          console.error('Error al obtener los datos:', err);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  ngOnDestroy() {}
}
