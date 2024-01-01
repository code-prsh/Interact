import { Divider, IconButton, Stack } from "@mui/material";
import { FacebookLogo,GoogleLogo, TwitterLogo } from "phosphor-react";
import React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "solid",
          },
        }}
      >
        OR
      </Divider>
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
        <IconButton>
          <GoogleLogo color="#DF3E30" />
        </IconButton>
        <IconButton>
          <FacebookIcon color="primary"/>
        </IconButton>
        <IconButton>
          <TwitterLogo color="#1C9CEA" />
        </IconButton>
      </Stack>
    </div>
  );
};

export default AuthSocial;
