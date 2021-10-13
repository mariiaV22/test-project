import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';

import { GridDataComponent } from './grid-data.component';

describe('GridDataComponent', () => {
  let component: GridDataComponent;
  let fixture: ComponentFixture<GridDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule 
      ],
      declarations: [ GridDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.form.get('interval')?.setValue(30);
    component.changeInterval();
  });
});
