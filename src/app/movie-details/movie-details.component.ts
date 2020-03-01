import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Form } from "@angular/forms";
import { MoviesService } from "../movies.service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"]
})
export class MovieDetailsComponent implements OnInit {
  id: 0;
  sub: any;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private movies: MoviesService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.movies
      .getMovieDetails<any[]>(this.movieDetails)
      .subscribe((data: any[]) => {
        console.log("movieDetails", data);
        this.movieDetails = data;
      });
  }

  ngOnInit(): void {}
}
