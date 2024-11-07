"use client";

import * as React from "react";
import Link from "next/link";
import Iframe from "react-iframe";
import { Hero } from "~/components/hero";
import { Projects } from "~/components/projects";
import Research from "~/components/research/research";
import Education from "~/components/education/education";
import Awards from "~/components/awards/awards";
import { Footer } from "~/components/footer";
import AnimatedCursor from "react-animated-cursor";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
interface PrerenderWebsiteProps {
  url: string;
}

const PrerenderWebsite: React.FC<PrerenderWebsiteProps> = ({ url }) => {
  React.useEffect(() => {
    if (typeof url === "string") {
      const link = document.createElement("link");
      link.rel = "prerender";
      link.href = url;
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    } else {
      console.error("URL must be a string:", url);
    }
  }, [url]);

  return null;
};

export default function HomePage() {
  const [displayGame, setDisplayGame] = React.useState(false);
  const [displayGameModal, setDisplayGameModal] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  // Show the modal after 8 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleYesClick = () => {
    setDisplayGame(true);
    setShowModal(false);
  };

  const handleNoClick = () => {
    setShowModal(false);
  };

  return (
    <main className="relative">
      {/* <div style={{ width: "100vw", height: "100vh" }}> */}
      <Iframe
        url="https://pokemon-bryanc004.web.app"
        display="block"
        position="absolute"
        styles={{
          zIndex: 1000,
          width: displayGame ? "80vw" : "1px",
          height: displayGame ? "80vh" : "1px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, 0%)",
        }}
      />
      <React.Fragment>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={displayGameModal}
          onClose={() => setDisplayGameModal(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{ borderRadius: "md", p: 3, boxShadow: "lg" }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              sx={{ fontWeight: "lg", mb: 1 }}
            >
              Pokemon!
            </Typography>
            <Iframe
              url="https://pokemon-bryanc004.web.app"
              display="block"
              styles={{
                zIndex: 1000,
                width: "90vw",
                height: "90vh",
              }}
            />
          </Sheet>
        </Modal>
      </React.Fragment>

      {/* </div> */}
      {showModal ? (
        <React.Fragment>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={showModal}
            onClose={() => setShowModal(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              caretColor: "black",
            }}
          >
            <Sheet
              variant="solid"
              sx={{
                maxWidth: 500,
                borderRadius: "md",
                p: 3,
                boxShadow: "lg",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <ModalClose variant="plain" sx={{ m: 1 }} />
              <Typography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                sx={{ fontWeight: "lg", mb: 1 }}
              >
                Do you want to check out my Pokemon game?
                <span style={{ color: "#ff8080", fontSize: "15px" }}>
                  (Strongly Recommended!)
                </span>
              </Typography>
              <Typography id="modal-desc" textColor="white">
                You get to control my dog (Pommy) with your keyboard in a
                Pokemon setting and navigate through my portfolio. Please check
                it out!
              </Typography>
              <div style={{ width: "100%" }}>
                <Button
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "white",
                    color: "black",
                    marginLeft: "auto",
                    display: "flex",
                  }}
                  onClick={() => {
                    // setDisplayGame(true);
                    setDisplayGameModal(true);
                    setShowModal(false);
                  }}
                >
                  Yes!
                </Button>
              </div>
            </Sheet>
          </Modal>
        </React.Fragment>
      ) : (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "white",
          }}
          outerStyle={{
            border: "3px solid white",
          }}
        />
      )}
      <Link href="https://pokemon-bryanc004.web.app" prefetch={true}></Link>
      <PrerenderWebsite url={"https://pokemon-bryanc004.web.app"} />

      <Hero />
      <Projects />
      <Research />
      <Education />
      <Awards />
      <Footer />

      {/* Modal */}
    </main>
  );
}
