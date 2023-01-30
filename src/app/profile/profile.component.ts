import { ProfileServiceService } from './profile-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileData!: any[];
  daily!: boolean;
  weekly!: boolean;
  monthly!: boolean;

  constructor(private profileService: ProfileServiceService) {}

  ngOnInit(): void {
    this.exibirConteudo('Weekly');

    this.profileService.getData().subscribe((response: any) => {
      this.profileData = response;
    });
  }


  exibirConteudo(classe: string) {
    if (classe == 'Daily') {

      console.log(this.profileData);

      this.daily = true;
      this.weekly = false;
      this.monthly = false;
    } else if (classe == 'Weekly') {
      this.daily = false;
      this.weekly = true;
      this.monthly = false;
    } else {
      this.daily = false;
      this.weekly = false;
      this.monthly = true;
    }
  }
}
