import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './examples/contact/contact.component';
import { BlogComponent } from './examples/blog/blog.component';
import { BlogOneComponent } from './examples/blog/blog-one/blog-one.component';
import { BlogTwoComponent } from './examples/blog/blog-two/blog-two.component';
import { BlogThreeComponent } from './examples/blog/blog-three/blog-three.component';
import { BlogFourComponent } from './examples/blog/blog-four/blog-four.component';
import { BlogFiveComponent } from './examples/blog/blog-five/blog-five.component';
import { BlogSixComponent } from './examples/blog/blog-six/blog-six.component';
import { BlogSevenComponent } from './examples/blog/blog-seven/blog-seven.component';
import { BlogEightComponent } from './examples/blog/blog-eight/blog-eight.component';
import { TruncatePipe } from './examples/blog/truncate.pipe';
import { BlogHeaderComponent } from './examples/blog/blog-header/blog-header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogThreeComponent,
    BlogFourComponent,
    BlogFiveComponent,
    BlogSixComponent,
    BlogSevenComponent,
    BlogEightComponent,
    TruncatePipe,
    BlogHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
