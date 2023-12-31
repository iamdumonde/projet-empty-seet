import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // module des routes et class de T
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { TemplateComponent } from './template/template.component';
import { StartBotComponent } from './start-bot/start-bot.component';

// L'ensemble des routes de notre application
const seetRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'start-bot',
    component: StartBotComponent,
  },
  {
    path: 'template',
    component: TemplateComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ChatComponent,
    TemplateComponent,
    StartBotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(seetRoutes),  // chargement des routes dans l'application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
