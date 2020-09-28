import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProjectQuestionModalComponent } from './components/modal/project-question-modal/project-question-modal.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    OverlayComponent,
    LoadingComponent,
    ProjectQuestionModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    OverlayComponent,
    LoadingComponent
  ]
})
export class OverlayModule { }
