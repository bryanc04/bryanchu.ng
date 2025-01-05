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
import Loader from "./Loader"; // Add this import
import { Player } from "react-simple-player";
import { AudioPlayer } from "react-audio-play";

interface PrerenderWebsiteProps {
  url: string;
}

export default function HomePage() {
  const [displayGame, setDisplayGame] = React.useState<boolean>(false);
  const [displayGameModal, setDisplayGameModal] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!displayGame) {
        setShowModal(true);
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll locking when game is displayed
  React.useEffect(() => {
    if (displayGame) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [displayGame]);

  return (
    <main className="relative">
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100vw",
          zIndex: 1000000,
          marginLeft: "auto",
          marginRight: "auto",
          height: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "fixed",
            bottom: "0",
            width: "400px",
            zIndex: 1000000,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <AudioPlayer
            src="/song.mp3"
            autoPlay
            volume={10}
            color="white"
            sliderColor="white"
            style={{ backgroundColor: "transparent", color: "white" }}
          />
        </div>
      </div>

      {loading ? (
        <div style={{ cursor: "none" }}>
          <AnimatedCursor
            innerSize={0}
            outerSize={0}
            innerScale={0}
            outerScale={0}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "transparent",
            }}
            outerStyle={{
              border: "0px solid transparent",
            }}
          />
          <Loader />
        </div>
      ) : (
        <></>
      )}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: displayGame ? "100%" : "0%",
          height: displayGame ? "100%" : "0%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: displayGame ? 999 : -1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "white",
          }}
        />
        <Iframe
          url="https://pokemon-bryanc004.web.app"
          styles={{
            width: "80vw",
            height: "80vh",
            border: "none",
          }}
        />
        <button
          onClick={() => setDisplayGame(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "black",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            color: "white",
          }}
        >
          Close Game
        </button>
      </div>

      {showModal && (
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
            {" "}
            <AnimatedCursor
              innerSize={8}
              outerSize={35}
              innerScale={1}
              outerScale={2}
              outerAlpha={0}
              innerStyle={{
                backgroundColor: "red",
              }}
            />
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
              You get to control my dog (Pommy) with your keyboard in a Pokemon
              setting and navigate through my portfolio. Please check it out!
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
                  setDisplayGame(true);
                  setShowModal(false);
                }}
              >
                Yes!
              </Button>
            </div>
          </Sheet>
        </Modal>
      )}

      {!displayGame && (
        <>
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
          <Link href="https://pokemon-bryanc004.web.app" prefetch={true}></Link>
          <Hero />
          <Projects func={setDisplayGame} />
          <Research />
          <Education />
          <Awards />
          <Footer />
        </>
      )}
    </main>
  );
}
