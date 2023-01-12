import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
const MUIButton = () => {
  return (
    <>
      <Typography variant="h1">BUTTONS</Typography>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>

          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack direction="row">
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="secondary">
            <Button>left</Button>
            <Button>center</Button>
            <Button>right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default MUIButton;
