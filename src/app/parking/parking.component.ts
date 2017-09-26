import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
  providers: [PlayerService]
})
export class ParkingComponent implements OnInit {
  player: Player;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }
}
