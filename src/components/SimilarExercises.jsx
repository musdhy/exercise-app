import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
    <Typography
      sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.slice(0, 5).length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises.slice(0, 5)} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        ml: "20px",
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.slice(0, 5).length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises.slice(0, 5)} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;