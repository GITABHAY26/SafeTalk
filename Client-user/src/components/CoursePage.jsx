import { Box, Button, Card, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DownloadIcon from "@mui/icons-material/Download";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import "./courseStyle.css";

function Courses() {
  const [course, setCourse] = useState({});
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const courseResponse = await axios.get(
          `http://localhost:3000/users/courses/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        setCourse(courseResponse.data.course);

        const purchasedCoursesResponse = await axios.get(
          "https://localhost:3000/users/purchasedCourses",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        setPurchasedCourses(purchasedCoursesResponse.data.purchasedCourses);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const isCoursePurchased = purchasedCourses.some((item) => item._id === id);
    setIsPurchased(isCoursePurchased);
  }, [id, purchasedCourses]);

  const handleBuyNow = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `https://loclahost:3000/users/courses/${id}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      toast.success(response.data.message);

      setPurchasedCourses([...purchasedCourses, response.data.purchasedCourse]);
      setIsPurchased(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <div className="single-course" >
      <div className="text-container">
        <div>
          <img
            src={course?.imageLink}
            alt={course?.imageLink}
            width={"200px"}
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div>
          <h5 style={{color:"white",fontSize:"25px"}}>{course?.title}</h5>
        </div>

        <div>
          <p style={{color:"white",fontSize:"10px",fontStyle:"italic"}}>
            {course?.description}
          </p>
        </div>

        <div>
          {!isPurchased ? (
            <button
              className="button-btn"
              style={{ width: "180px" }}
              onClick={handleBuyNow}
            >
              BUY NOW Rs.{course?.price}
            </button>
          ) : (
            <div>
              <button
                variant="contained"
                style={{
                  backgroundColor: "green",
                  padding: "10px 20px",
                  fontWeight: "700",
                  fontSize: "15px !important",
                  borderRadius: "50px",
                  color:"white",
                  borderWidth: "0px"
                }}
              >
                Purchased
              </button>
              <button
                variant="contained"
                style={{
                  backgroundColor: "#1E267A",
                  padding: "10px 20px",
                  fontWeight: "700",
                  fontSize: "15px !important",
                  borderRadius: "50px",
                  color:"white",
                  borderWidth: "0px",
                  marginLeft: "20px",
                }}
              >
                View Content
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <Card
          className="cardstyle"
          variant="outlined"
          sx={{ width: "350px", height: "440px" }}
          style={{
            backgroundColor: "#601b99",
            color: "white",
            borderRadius: "10px",
            display: "flex",
            padding: "5px",
          }}
        >
          <CardActionArea>
            <CardContent style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h6" component="div"  back>
                Mentor Overview
              </Typography>
              <br />
              <Box
                sx={{
                  bgcolor: "background.paper",
                  color: "black",
                  borderRadius: "20px",
                  padding: "5px 2px",
                }}
              >
                <nav aria-label="main mailbox folders">
                  <List style={{ padding: "5px" }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <SignalCellularAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Expert in Field" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <OndemandVideoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Free 10 Min Session for new users " />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="150+ Sessions Taken" />
                      </ListItemButton>
                    </ListItem>
                    {/* <ListItem disablePadding> */}
                      {/* <ListItemButton>
                        <ListItemIcon>
                          <DownloadIcon />
                        </ListItemIcon>
                        <ListItemText primary="Downloadable content" />
                      </ListItemButton>
                    </ListItem> */}
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <ClosedCaptionIcon />
                        </ListItemIcon>
                        <ListItemText primary="English and Hindi " />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <MilitaryTechIcon />
                        </ListItemIcon>
                        <ListItemText primary="Doctrate in Field" />
                      </ListItemButton>
                    </ListItem>
                    {/* <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <AllInclusiveIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lifetime access" />
                      </ListItemButton>
                    </ListItem> */}
                  </List>
                </nav>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default Courses;
