import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  teamAName: string = 'Time A';
  teamBName: string = 'Time B';
  editModeA: boolean = false;
  editModeB: boolean = false;

  onKeyUp(event: KeyboardEvent, team: string):void{
    if(event.key === 'Escape' || event.key === 'Enter'){
      if (team === 'A'){
        this.editModeA = false;
      } else if(team === 'B') {
        this.editModeB = false;
      }
    }
  }

  activateEditMode(team: string): void {
    if (team === 'A') {
      this.editModeA = true;
      setTimeout(() => {
        const inputA = document.getElementById('inputA') as HTMLInputElement;
        if (inputA) {
          inputA.focus();
          inputA.select();
        }
      }, 0);
    } else if (team === 'B') {
      this.editModeB = true;
      setTimeout(() => {
        const inputB = document.getElementById('inputB') as HTMLInputElement;
        if (inputB) {
          inputB.focus();
          inputB.select();
        }
      }, 0);
    }
  }

}
