import "./index.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Track from "../../Component/Data";
import { useParams } from "react-router-dom";
import Button from "../../Component/Button";
import CustomChip from "../../Component/Chip";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../../Helper/getData";
import { List, Course, objectDataType } from "../../Helper/interface";

export const Cardcourse = () => {
  // const { id } = useParams<{ id?: string | undefined }>();
  const [course, setCourse] = useState([]);
  const currentId = useSelector((state: any) => state.id.value);
  console.log("ini id dari redux", currentId);

  useEffect(() => {
    getData()
      .then((response: any) => {
        const data = response["LearningPath"].List;
        setCourse(data);
      })
      .catch((e: any) => console.log("Error", e));
  }, []);

  const coursesList: List[] = course.filter(
    (data: List) => data.id === currentId
  );
  const courseListData = coursesList[0]?.courses;
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
      {courseListData?.map((data: Course) => {
        return (
          <Card
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
                  desc={"Mulai belajar"}
                  link={`/course/${data.courseName}`}
                  id={""}
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
  return (
    <div className="course-wrapper">
      <h1 className="title-course">Paket Web Development Pemula</h1>
      <Cardcourse />
    </div>
  );
}

export default MediaControlCard;
