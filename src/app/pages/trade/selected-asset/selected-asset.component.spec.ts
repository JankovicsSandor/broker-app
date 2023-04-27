import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAssetComponent } from './selected-asset.component';

describe('SelectedAssetComponent', () => {
  let component: SelectedAssetComponent;
  let fixture: ComponentFixture<SelectedAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedAssetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
