import { objectDataType } from "./interface";

export const getData = async () => {
    const dataObj : objectDataType = await JSON.parse(
        localStorage.getItem("obj") || "{}"
      )!;

    return dataObj
}