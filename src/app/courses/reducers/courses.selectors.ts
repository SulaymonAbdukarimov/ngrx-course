import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState, coursesFeatureKey } from "./course.reducers";
import * as fromReducer from './course.reducers'

export const selectCoursesState = createFeatureSelector<CourseState>(coursesFeatureKey)

export const selectAllCourses = createSelector(selectCoursesState, fromReducer.selectAll)
export const selectBegineerCourses = createSelector(selectAllCourses, courses => courses.filter(course => course.category == 'BEGINNER'))
export const selectAdvancedCourses = createSelector(selectAllCourses, courses => courses.filter(course => course.category == 'ADVANCED'))
export const selectPromoTotal = createSelector(selectAllCourses, courses => courses.filter(course => course.promo).length);
export const areAllCoursesLoaded = createSelector(selectCoursesState, state => state.allCoursesLoaded) 