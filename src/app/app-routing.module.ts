import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes: Routes = [
  { path: "movie-details", component: MovieDetailsComponent },
  {
    path: "movie-details/:id",
    component: MovieDetailsComponent,
    data: { id: 0 }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
