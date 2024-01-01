import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LoginForm from "../../sections/auth/LoginForm";
import AuthSocial from "../../sections/auth/AuthSocial";

{/*const imageSources = [
  "https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_bright-colors-1.jpg",
  "https://i.guim.co.uk/img/media/60f44618dac4233277f2a4e935ac180613678840/19_56_596_358/master/596.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=be258446a514355552784e0d7ee42b10",
  "https://miro.medium.com/v2/resize:fit:1400/1*4U6Gk_OfUZ_j2bpNaF_b-A.jpeg",
];

// Initial index
let currentIndex = 0;

// Function to change the image
function changeImage() {
  const imageElement = document.getElementById("myImage");

  imageElement.style.opacity = 0.3;

  // After a short delay, update the source and set opacity to 1 for a fade-in effect
  setTimeout(() => {
    imageElement.src = imageSources[currentIndex];
    imageElement.style.opacity = 1;
  }, 3000);

  // Increment the index, and reset to 0 if it exceeds the array length
  currentIndex = (currentIndex + 1) % imageSources.length;
}

// Set interval to change image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000); 
*/}


const Login = () => {
  return (
    <>
    <Stack>
      <Stack
        direction={{ sm: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Box sx={{ width: 640, height: "100vh", bgcolor: "white", ml: 5,}}>
          <Stack alignItems={"center"} justifyContent={"center"} spacing={3}>
            <img
              src="https://png.pngtree.com/png-clipart/20200721/original/pngtree-instagram-logo-with-name-png-png-image_4842574.jpg"
              alt=""
              style={{
                width: 100,
                height: 100,
                paddingTop: 10,
                
              }}
            />
           <Typography sx={{color: "#D62976"}}> 𝒄𝒂𝒑𝒕𝒖𝒓𝒆 𝒂𝒏𝒅 𝒔𝒉𝒂𝒓𝒆 𝒕𝒉𝒆 𝒘𝒐𝒓𝒍𝒅'𝒔 𝒎𝒐𝒎𝒆𝒏𝒕𝒔</Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={3}
            >
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                spacing={3}
              >
                <img
                  id="myImage"
                  src="https://www.shutterfly.com/ideas/wp-content/uploads/2017/12/creative-instagram-photo-ideas_bright-colors-1.jpg"
                  alt=""
                  style={{ width: 250, height: 200, borderRadius: 10, boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)',transition: "opacity 5s ease-in-out",
                opacity: 1,}}
                />
                <img
                  src="https://ipt.imgix.net/200907/x/0/arctic-delight.jpg?ar=1.91%3A1&w=1200&fit=crop"
                  alt=""
                  style={{ width: 300, height: 200, borderRadius: 10,boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)' }}
                />
              </Stack>

              <Stack alignItems={"center"} justifyContent={"start"} spacing={3}>
                <img
                  src="https://www.creativelive.com/blog/wp-content/uploads/2015/07/140911_burkard_83234-1000px.jpg"
                  alt=""
                  style={{ width: 300, height: 200, borderRadius: 10,boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)' }}
                />
                <img
                  src="https://superblog.supercdn.cloud/site_cuid_clilou76g4798113tmf1lw59vru/images/instagram-man-ideas-10-1687876762684-compressed.PNG"
                  alt=""
                  style={{ width: 225, height: 200, borderRadius: 10,boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)' }}
                />
              </Stack>
            </Stack>
          </Stack>
          
        </Box>
        <Box
          sx={{
            width: 440,
            height: "100vh",
            background: "linear-gradient(to top, #833AB490, #C1358490, #FD1D1D90)",
            
              boxShadow: '-8px 4px 8px rgba(0, 0, 0, 0.6)',
              mt: 4,
              mr: 8,
          }}
        >
          <Stack
            spacing={2}
            sx={{ mt: 5, position: "relative" }}
            alignItems={"center"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={0.5}
            >
             {/*<Typography variant="h4">𝕷𝖔𝖌𝖎𝖓 𝖙𝖔</Typography>*/}
              <img
                src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2010-2013.png"
                alt=""
                style={{ width: 150, height: 75, paddingTop: 10 }}
              />
            </Stack>

            
            {/*Login Form */}
            <LoginForm />

            <Stack direction={"row"} spacing={0.5}>
              <Typography variant="body2">New User?</Typography>
              <Link to="/auth/register" component={RouterLink} variant="subtitle2">
                Create an Account
              </Link>
            </Stack>
            {/*Auth Social */}
            <AuthSocial />
          </Stack>
        </Box>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={4} p={2} ml={10} mr={10} pt={4}>
            <Typography variant="caption" color="grey">Meta</Typography>
            <Typography variant="caption" color="grey">About</Typography>
            <Typography variant="caption" color="grey">Blogs</Typography>
            <Typography variant="caption" color="grey">Api</Typography>
            <Typography variant="caption" color="grey">Privacy</Typography>
            <Typography variant="caption" color="grey">Terms</Typography>
            <Typography variant="caption" color="grey">Location</Typography>
            <Typography variant="caption" color="grey">Instagram Lite</Typography>
            <Typography variant="caption" color="grey">Threads</Typography>
            <Typography variant="caption" color="grey">ContactUploading&NonUsers</Typography>
            <Typography variant="caption" color="grey">Meta verified</Typography>
            <Typography variant="caption" color="grey">English</Typography>
            
          </Stack>
          <Stack alignItems={"center"} justifyContent={"center"} spacing={1} mb={4}>
          <Typography variant="subtitle2" color={"grey"}> @ 2023 Instagram From Meta</Typography>
          </Stack>
      </Stack>
    </>
  );
};

export default Login;
