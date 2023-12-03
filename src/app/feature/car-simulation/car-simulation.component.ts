import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
enum Direction {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West',
}
@Component({
  selector: 'app-car-simulation',
  standalone: true,
  imports: [NgFor, NgClass, NgStyle, ReactiveFormsModule],
  templateUrl: './car-simulation.component.html',
  styleUrl: './car-simulation.component.scss'
})
export class CarSimulationComponent {
  tiles: { row: number, column: number }[] = [];
  carPosition = { column: 1, row: 2}; // Car starts at the bottom-left corner
  direction: Direction = Direction.North; // Car starts facing North
  directions = Object.keys(Direction);
  fieldSize = 10;

  configForm!: FormGroup;
  fb = inject(FormBuilder);

  ngOnInit(): void {

    this.initForm();

    this.start();


  }
  gridColumn: string = '';
  start(){
    this.tiles = [];

    this.fieldSize = Number(this.configForm.value.tile);
    this.gridColumn = `repeat(${this.fieldSize}, 50px)`
    const xPosition = this.configForm.value.xPosition;
    const yPosition = this.configForm.value.yPosition;
    const direction = this.configForm.value.direction;
    this.carPosition = { column: xPosition, row: yPosition, }
    this.direction = direction;
    for (let row = (this.fieldSize - 1); row >= 0; row--) {
      for (let column = 0; column < this.fieldSize; column++) {
        this.tiles.push({ row, column });
      }
    }
  }

  initForm(){
    this.configForm = this.fb.group({
      tile: [10],
      xPosition: [1],
      yPosition: [2],
      direction: ['North']
    })
  }

  rotateLeft(): void {
    switch (this.direction) {
      case Direction.North:
        this.direction = Direction.West;
        break;
      case Direction.East:
        this.direction = Direction.North;
        break;
      case Direction.South:
        this.direction = Direction.East;
        break;
      case Direction.West:
        this.direction = Direction.South;
        break;
    }
  }

  moveForward(): void {
    switch (this.direction) {
      case Direction.North:
        if (this.carPosition.row < (this.fieldSize - 1)) { // added max size of filed/ car should not go beyound
          this.carPosition.row++;
        }
        break;
      case Direction.East:
        if (this.carPosition.column < (this.fieldSize - 1)) {
          this.carPosition.column++;
        }
        break;
      case Direction.South:
        if (this.carPosition.row > 0) {
          this.carPosition.row--;
        }
        break;
      case Direction.West:
        if (this.carPosition.column > 0) {
          this.carPosition.column--;
        }
        break;
    }
  }

  rotateRight(): void {
    switch (this.direction) {
      case Direction.North:
        this.direction = Direction.East;
        break;
      case Direction.East:
        this.direction = Direction.South;
        break;
      case Direction.South:
        this.direction = Direction.West;
        break;
      case Direction.West:
        this.direction = Direction.North;
        break;
    }
  }
}
