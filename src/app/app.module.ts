import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { CricketTeamComponent } from './cricket-team/cricket-team.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent,
    CandidateListComponent,
    EditCandidateComponent,
    CricketTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
