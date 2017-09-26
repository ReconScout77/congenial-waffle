import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { player } from './mock-player';

@Injectable()
export class PlayerService {
  constructor() { }

  getPlayer() {
    return player;
  }

  onClick(sanityChange: number) {
    player.sanityLevel += sanityChange;
  }
}
