import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikAktivacijaComponent } from './korisnik-aktivacija.component';

describe('KorisnikAktivacijaComponent', () => {
  let component: KorisnikAktivacijaComponent;
  let fixture: ComponentFixture<KorisnikAktivacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikAktivacijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorisnikAktivacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
