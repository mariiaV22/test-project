import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services';
import { IData } from 'src/app/shared/interfaces/data';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.scss']
})
export class GridDataComponent implements OnInit {

  public form: FormGroup;
  public interval = [{
    text: 5,
    value: 5
  }, {
    text: 30,
    value: 30
  }, {
    text: 1,
    value: 60
  }];
  public rows: number[] = [];
  public ranges: IData[] = [];
  
  constructor(public fb: FormBuilder, private service: DataService) {
    this.form = this.fb.group({
      interval: this.interval[0].value
    });
  }

  ngOnInit(): void {
    this.changeInterval();
    this.rows = [...Array(new Date(2021, 10, 0).getDate()).keys()];
  }

  changeInterval(): void {
    this.ranges = this.service.getTimeRanges(this.form?.value?.interval);
  }
}
