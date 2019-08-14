import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import {PostsService} from '../shared/posts.service';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [PostsService]
})
export class PostsModule { }
