import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})

export class Componente1Component implements OnInit {
  segundos:number=0;

  constructor (){}
  ngOnInit(): void {
    this.segundos = 10;
  }

}
