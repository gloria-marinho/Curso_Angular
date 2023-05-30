import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent  implements OnInit{

public nome: string = "Dener";
public idade: number = 29;
public maisUm: number = 1

public checkedDisabled: boolean = true;
public imgSrc: string = "https://i.pinimg.com/736x/48/bb/4c/48bb4c0815c17e52b390f0a664ce98f1.jpg";
public imgTitle: string = "Property Binding";
constructor() { }

ngOnInit(): void { }
public alertaInfo() {
  alert("Deu bom")
}

}
