import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sub-banner-material',
  templateUrl: './sub-banner-material.component.html',
  styleUrls: ['./sub-banner-material.component.css']
})
export class SubBannerMaterialComponent implements OnInit {

  descriptionsArray: any[] = [];

  constructor() {
  }

  ngOnInit(): void {

    this.descriptionsArray.push(
      {
        title: 'Calendário de exames da época especial',
        description: 'Não conseguiste passar àquela unidade curricular difícil?\n' +
          'Não entres em pânico, ainda tens uma última oportunidade antes de o novo ano letivo começar: a época especial de exames!',
        date: 'Today: July 10, 2020',
        new: false
      },
      {
        title: 'Camisolas de curso',
        description: 'Com o regresso das aulas presenciais vamos finalmente poder distribuir-vos as tão ansiadas camisolas de curso',
        date: 'Today: July 10, 2020',
        new: true
      },
      {
        title: 'Workshop LaTeX',
        description: 'LaTeX é um sistema ou programa para a\n' +
          'edição de documentos de alta qualidade tipográfica',
        date: 'Today: July 10, 2020',
        new: true
      },
      {
        title: 'Novo website da NES',
        description: '-------todo----------',
        date: 'Today: July 10, 2020',
        new: true
      }
    );

  }

}
