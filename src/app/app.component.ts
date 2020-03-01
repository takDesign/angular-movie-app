import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Form } from "@angular/forms";
import { MoviesService } from "./movies.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-movie-app";

  id: 0;
  sub: any;
  movieList: any;

  movieForm = new FormGroup({
    movie: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private movies: MoviesService
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    // delete this function when submitting
    this.movies.searchMovies<any[]>("shrek").subscribe((data: any[]) => {
      console.log("data", data);
      this.movieList = data;
    });

    this.movieForm = this.formBuilder.group({
      // make this empty when submitting
      movie: "shrek"
    });
  }

  onKeyUp(event: any) {
    this.movies
      .searchMovies<any[]>(event.target.value)
      .subscribe((data: any[]) => {
        console.log("data", data);
        this.movieList = data;
        // this.insertList(this.movie);
      });
    console.log(`Key Up: ${event.target.value}`);
  }

  // insertList(movies: any) {
  //   let movieList = document.getElementById("movieList");
  //   movieList.innerHTML = "";

  //   let html = movies.Search.map(movie => {
  //     // console.log([String(key), movies[key]]);
  //     console.log(movie.Title);
  //     return `<li style="background-image: url(${movie.Poster})"><a href="#" (click)="showDetail()">${movie.Title}</a></li>`;
  //   });

  //   movieList.innerHTML += html.join("");
  // }

  showDetail() {
    console.log("Detail page");
  }

  ngOnInit(): void {}
}
