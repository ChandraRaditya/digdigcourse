import { objectDataType } from "./interface";

export const getListData =  () => {
    try {
      const dataObj : objectDataType =  JSON.parse(
        localStorage.getItem("obj") || "{}"
      );

    if (dataObj["LearningPath"]) {
      return dataObj["LearningPath"].List
    }
    } catch (error) {
      console.log('this is error getListData',error)
    }
}

export const getCourseDetailData =  () => {
  try {
    const dataObj : objectDataType =  JSON.parse(
      localStorage.getItem("obj") || "{}"
    );

  return dataObj["detailedCourses"].Courses
  } catch (error) {
    console.log('this is error getCourseDetailData',error)
  }
}

export const getMaterialsData =  () => {
  try {
    const dataObj : objectDataType =  JSON.parse(
      localStorage.getItem("obj") || "{}"
    );

  return dataObj["detailedMaterials"].materials
  } catch (error) {
    console.log('this is error getCourseDetailData',error)
  }
}