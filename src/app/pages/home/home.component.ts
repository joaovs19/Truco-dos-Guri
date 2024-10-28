import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalVictoryComponent } from '../modal-victory/modal-victory.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, ModalVictoryComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  teamAName: string = 'Time A';
  teamBName: string = 'Time B';
  editTeamA: boolean = false;
  editTeamB: boolean = false;

  teamAPoints: number = 0;
  teamBPoints: number = 0;

  winningTeam: string | null = null;

  pointsArray = Array.from({ length: 12 }, (_, i) => i + 1);

  @ViewChild('teamAInput') teamAInput!: ElementRef<HTMLInputElement>;
  @ViewChild('teamBInput') teamBInput!: ElementRef<HTMLInputElement>;

  ngAfterViewChecked() {
    if (this.editTeamA && this.teamAInput) {
      this.teamAInput.nativeElement.focus();
    }
    if (this.editTeamB && this.teamBInput) {
      this.teamBInput.nativeElement.focus();
    }
  }

  onKeyUp(event: KeyboardEvent, team: string): void {
    if (event.key === 'Escape' || event.key === 'Enter') {
      if (team === 'A') {
        this.editTeamA = false;
      } else if (team === 'B') {
        this.editTeamB = false;
      }
    }
  }

  checkWin() {
    if (this.teamAPoints === 12) {
      this.winningTeam = this.teamAName;
    } else if (this.teamBPoints === 12) {
      this.winningTeam = this.teamBName;
    }
  }

  setTeamAPoints(points: number) {
    this.teamAPoints = points;
    this.checkWin();
  }

  setTeamBPoints(points: number) {
    this.teamBPoints = points;
    this.checkWin();
  }

  restartGame() {
    this.teamAPoints = 0;
    this.teamBPoints = 0;
    this.winningTeam = null;
  }

  onModalClose() {
    this.restartGame(); 
  }
}
