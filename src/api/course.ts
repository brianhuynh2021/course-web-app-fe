// src/api/course.ts
import api from "@/api/axios";
import { AxiosResponse } from "axios";
import { Course } from "@/types/course";

export const getAllCourses = (): Promise<AxiosResponse<Course[]>> => {
  return api.get<Course[]>("/courses/");
};