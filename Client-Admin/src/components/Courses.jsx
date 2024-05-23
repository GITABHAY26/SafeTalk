import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/courses/",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        const data = response.data;
        console.log(data);
        setCourses(data.courses);
        setIsLoading(false);
        console.log(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <Typography
        variant="h4"
        style={{
          padding: "10px",
          borderRadius: "4px",
          fontWeight: "bold",
          color: "whitesmoke",
          textAlign: "center",
          marginTop: "70px",
          fontSize: "25px",
        }}
      >
        All Programs
      </Typography>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {courses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
function Course({ course }) {
  const navigate = useNavigate();
  const [isMouseOver, setIsMoueOver] = useState(false);
  return (
    <div>
      <Card
        className="cardstyle"
        variant="outlined"
        sx={{ minWidth: 80, width: 240, height: 245 }}
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          padding: "13px",
          flexWrap: "wrap",
          fontFamily: "Arial, sans-serif",
          boxShadow: isMouseOver ? "0 0 50px #601b99" : "0 0 10px #601b99",
          margin: "15px",
        }}
        onMouseOver={() => setIsMoueOver(true)}
        onMouseLeave={() => setIsMoueOver(false)}
      >
        <div>
          <CardMedia
            sx={{
              height: 120,
              width: 80,
              minWidth: "100%",
              borderRadius: "20px",
            }}
            image={course.imageLink}
            title={course.title}
          />
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: isMouseOver && "#601b99",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                "-webkit-line-clamp": 2, // Set the maximum number of lines to 2
                "-webkit-box-orient": "vertical",
              }}
            >
              {course.title}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              style={{
                fontWeight: "50",
                fontSize: "12px",
                fontFamily: "inherit",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: isMouseOver && "#601b99",
              }}
            >
              {course.description}
            </Typography>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="button-btn"
                style={{ boxShadow: "none" }}
                onClick={() => {
                  navigate("/course/" + course._id);
                }}
              >
                Edit
              </button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Courses;
