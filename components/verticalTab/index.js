// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
//
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }
//
// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };
//
// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }
//
// export default function VerticalTabs({ displayTabs }) {
//   const [value, setValue] = React.useState(0);
//
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//
//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         bgcolor: "background.paper",
//         display: "flex flex-col",
//         minHeight: 700,
//       }}
//     >
//       <Tabs
//         orientation="horizontal"
//         variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         //aria-label="Vertical tabs example"
//         sx={{ borderRight: 1, borderColor: "divider" }}
//       >
//         {displayTabs?.map(({ label }, index) => (
//           <Tab key={index} label={label} {...a11yProps({ index })} />
//         ))}
//       </Tabs>
//       {displayTabs?.map(({ comp, label }, index) => (
//         <TabPanel index={index} value={value} key={index}>
//           {comp}
//         </TabPanel>
//       ))}
//     </Box>
//   );
// }
