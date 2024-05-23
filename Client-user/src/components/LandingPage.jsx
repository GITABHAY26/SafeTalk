import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmailState";
import { userLoggedInState } from "../store/selectors/userIsLoggedIn";
import { motion } from "framer-motion";

function LandingPage() {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoding = useRecoilValue(userLoggedInState);

  return (
    <div>
      <Grid container style={{ padding: "5vw" }}>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ marginTop: 100 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Typography variant={"h4"} style={{ color: "white" }}>
              SafeTalk User
              </Typography>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Typography variant="h6" style={{ color: "white",fontSize:"15px"}}>
              A Secure place to connect with Professionals Anonymously
              </Typography>
            </motion.div>
            {!userEmail && !userLoding && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div style={{ display: "flex", marginTop: 20 }}>
                  {/* <h1 className="landing-page">
                    A place to where you Learn skills
                  </h1> */}
                  <button
                    className="button-btn"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    SignUp
                  </button>
                  <div>
                    <button
                      className="button-btn"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              className="landingpic"
              src={
                "https://www.creativefabrica.com/wp-content/uploads/2023/05/12/Man-Sitting-On-Chair-In-Front-Of-Computer-Side-Portrait-69523548-1.png"
              }
              width={"75%"}
            />
          </motion.div>
        </Grid>
      </Grid>

    </div>
  );
}

export default LandingPage;
