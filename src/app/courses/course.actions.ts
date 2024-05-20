import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction(
    "[Course Resolver] Load All Courses"
)

export const allCoursesLoaded = createAction(
    "[Load Course Effect] All Courses Loaded",
    props<{ courses: Course[] }>()
)

