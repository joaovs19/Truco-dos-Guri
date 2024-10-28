import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-victory',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './modal-victory.component.html',
  styleUrl: './modal-victory.component.scss'
})
export class ModalVictoryComponent {
  @Input() winningTeam: string | null = null;
  @Output() modalClosed = new EventEmitter<void>();

  teamAPoints: number = 0;
  teamBPoints: number = 0;

  closeModal() {
    this.modalClosed.emit();
  }
}
