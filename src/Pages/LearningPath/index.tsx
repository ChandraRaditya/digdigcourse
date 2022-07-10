import "./index.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "../../Component/Button";
import CustomChip from "../../Component/Chip";
import { useEffect, useState } from "react";
import { getListData } from "../../Helper/getData";
import { List, Course } from "../../Helper/interface";
import { useParams } from "react-router-dom";

export const Cardcourse = () => {
  const { id } = useParams<{ id?: string | undefined }>();
  const [course, setCourse] = useState<List[] | undefined>([]);
  const data = localStorage.getItem("obj");
  // const currentId = useSelector((state: any) => state.id.value);
  // console.log("ini id dari redux", currentId);
  // console.log("ini id dari url", id);
  // console.log("ini path", url);

  useEffect(() => {
    setCourse(getListData());
    window.scrollTo(0, 0);
  }, [data]);

  const pathName = id?.replace(/-/g, "").toLowerCase();

  //perlu perbaikan di type courseListnya
  const coursesList = course?.filter(
    (data) =>
      data.learningPathName.replace(/\s/g, "").toLowerCase() === pathName
  );
  const courseListData = coursesList?.[0]?.courses;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      {courseListData?.map((data: Course, id) => {
        return (
          <Card
            key={id}
            sx={{
              display: "flex",
              width: "50%",
              height: 250,
              marginBottom: "3%",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "25%" }}
              image={data?.imgUrl}
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "start",
                paddingLeft: "5%",
                width: "50%",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  padding: 0,
                }}
              >
                <Typography variant="h4" gutterBottom component="div">
                  {data.courseName}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <CustomChip label="Pemula" />
                  <CustomChip label={data.hours} />
                  <CustomChip label={data.courseName} />
                </Stack>
              </CardContent>
              <CardActions sx={{ padding: 0 }}>
                <Button
                  link={`/course-detail/${data.courseName
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                />
              </CardActions>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

function MediaControlCard() {
  const { id } = useParams<{ id?: string | undefined }>();
  const titleH1 = id?.replace(/-/g, " ").toUpperCase();
  return (
    <div className="course-wrapper">
      <h1 className="title-course">{titleH1}</h1>
      <Cardcourse />
    </div>
  );
}

export default MediaControlCard;
