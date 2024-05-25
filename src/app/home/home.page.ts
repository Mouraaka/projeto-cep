import { Component } from '@angular/core';
import { CepService } from '../cep/cep.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dados: any = "";
  cep: string = "";

  constructor(
    private cepService: CepService,
    private alertController:AlertController
  ){}


  buscar(cep: string) {
    this.cepService.buscarCep(cep.replace(/[^0-9]/g, '')).subscribe((data: any) => {
          this.dados = data;
            const card: any = document.getElementsByClassName("card")[0];
            card.style.display = "block"; 
        },
        (error: any) => {
          console.error('Erro ao buscar endereço:', error);
        });
  }
}
