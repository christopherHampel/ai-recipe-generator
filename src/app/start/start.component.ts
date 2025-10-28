import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HeaderComponent } from "../shared/header/header.component";
import { NgStyle } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-start',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

}
