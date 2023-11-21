import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProyectComponent } from './edit-proyect.component';

describe('EditarProyectoComponent', () => {
  let component: EditProyectComponent;
  let fixture: ComponentFixture<EditProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
