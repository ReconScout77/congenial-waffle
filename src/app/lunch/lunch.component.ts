import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css'],
  providers: [PlayerService]
})
export class LunchComponent implements OnInit {
player: Player;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }
}
