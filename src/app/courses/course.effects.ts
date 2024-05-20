import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoursesHttpService } from "./services/courses-http.service";
import { CourseActions } from "./action.types";
import { concatMap, map } from "rxjs/operators";
import { allCoursesLoaded } from "./course.actions";


@Injectable()
export class CourseEffects {

    loadCourses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CourseActions.loadAllCourses),
            concatMap(() => {
                return this.coursesHttpService.findAllCourses()
            }),
            map(courses => allCoursesLoaded({ courses }))
        )
    })


    constructor(
        private actions$: Actions,
        private coursesHttpService: CoursesHttpService
    ) { }


}