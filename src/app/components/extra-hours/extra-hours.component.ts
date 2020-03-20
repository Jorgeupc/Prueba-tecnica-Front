import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HourRequestService } from 'src/app/services/hour-request.service';
import { HoursJob } from 'src/app/models/hours-job';

@Component({
  selector: 'app-extra-hours',
  templateUrl: './extra-hours.component.html',
  styleUrls: ['./extra-hours.component.scss']
})
export class ExtraHoursComponent implements OnInit {

  hourForm: FormGroup

  constructor(private frombuilder: FormBuilder, private service: HourRequestService) {
    this.buildFrom();
  }

  ngOnInit(): void {
  }

  private buildFrom() {
    this.hourForm = this.frombuilder.group({
      document: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      initialDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      startTimeExtra: ['', [Validators.required]],
      endTimeExtra: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  createExtraHours(event: Event){
    event.preventDefault();
    const body: HoursJob = this.hourForm.value;
    this.service.postHours(body).subscribe(response =>{
      if (response) {
        alert('Horas extras agregadas');
      }
    } )

  }

}
