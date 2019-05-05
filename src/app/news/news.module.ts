import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { newsReducer } from './state/news.reducers';
import { commentReducer } from './state/comment.reducers';
import { NewsEffect } from './state/news.effects';
import { CommentEffects } from './state/comment.effects';

import { AllMaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsDetailComponent, DialogOverviewExampleDialog} from './news-detail/news-detail.component';

@NgModule({
  declarations: [NewsListComponent, NewsFormComponent, NewsDetailComponent, DialogOverviewExampleDialog],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewsRoutingModule,
    StoreModule.forFeature('news', newsReducer),
    StoreModule.forFeature('comment', commentReducer),
    EffectsModule.forFeature([NewsEffect, CommentEffects]),
    AllMaterialModule,
    FlexLayoutModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [ NewsDetailComponent, DialogOverviewExampleDialog]
})
export class NewsModule {}
