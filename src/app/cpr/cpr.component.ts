import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-cpr',
  templateUrl: './cpr.component.html',
  styleUrls: ['./cpr.component.css'],
  providers: [PlayerService]
})
export class CprComponent implements OnInit {
  player: Player;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }

}
