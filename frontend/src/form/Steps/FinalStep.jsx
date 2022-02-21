import React from "react";
import { Box, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import { renderText } from "../common/DisplayComponent";

const FinalStep = ({ data }) => {
  return (
    <div className="formHead ">
    <Paper  style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "You have Successfully submitted your data . Now you can go and select templates for your Resume and Portfolio Website",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      {/* {JSON.stringify(data, null, 4)} */}
    </Paper>
    </div>
  );
};

export default FinalStep;
