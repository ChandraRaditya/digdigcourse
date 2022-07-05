export interface List {
    id: string;
    imgUrl: string;
    learningPathName: string;
    info: string;
    hours: string;
    level: string;
    courses: Course[];
}

export interface Course {
    id: string;
    imgUrl: string;
    courseName: string;
    level: string;
    hours: string;
}

export interface learningPathTypes {
    type: string;
    List: List[];
}

export interface ListOfAnswer {
    answerId: string;
    label: string;
}

export interface Materials {
    id: string;
    title: string;
    type: string;
    content: string;
    question: string;
    listOfAnswer: ListOfAnswer[];
    correctAnswer: string;
}

export interface detailedMaterialsType {
    type: string;
    materials: Materials[];
}

export interface Material {
    id: string;
    title: string;
}

export interface Cours {
    id: string;
    imgUrl: string;
    courseName: string;
    level: string;
    hours: string;
    about: string;
    requirement: string[];
    materials: Material[];
}

export interface detailedCoursesType {
    type: string;
    Courses: Cours[];
}

export interface objectDataType {
    LearningPath: learningPathTypes,
    detailedMaterials: detailedMaterialsType,
    detailedCourses: detailedCoursesType,
}

export interface ParamTypes {
    id: string;
    idMaterial: string;
}

export interface cardOptionComponent {
    answerId: string;
    label: string;
    currentAnswer: string;
  }