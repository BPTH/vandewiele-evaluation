import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiWithLocalSearchComponent } from './api-with-local-search/api-with-local-search.component';
import { ApiWithQuerySearchComponent } from './api-with-query-search/api-with-query-search.component';
import { AppComponent } from './app.component';
import { LocalWithLocalSearchComponent } from './local-with-local-search/local-with-local-search.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'api-with-local-search',
        component: ApiWithLocalSearchComponent
    },
    {
        path: 'api-with-query-search',
        component: ApiWithQuerySearchComponent
    },
    {
        path: 'local-with-local-search',
        component: LocalWithLocalSearchComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
