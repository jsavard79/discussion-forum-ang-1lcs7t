import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewComponent } from './discussion/new/new.component';
import { UpdateordeleteComponent } from './discussion/updateordelete/updateordelete.component';
import { ViewComponent } from './discussion/view/view.component';
import { LoginComponent } from './login/login.component';
import{Routes,RouterModule}from '@angular/router';
import { DiscussionService } from './core/service/discussion.service';
import { LoginService } from './core/service/login.service';
import{FormsModule} from '@angular/forms'
const routes:Routes=[{path:"",component:ViewComponent},
{path:"new",component:NewComponent},
{path:"update/:id",component:UpdateordeleteComponent},
{path:"login",component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    UpdateordeleteComponent,
    ViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [DiscussionService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
