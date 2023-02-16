import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";



export default function LaborTable({laborData,painterData}) {


  const rowData = [];

  console.log({laborData})

  return (
    <TableContainer
      sx={{
        width: "100%",
        overflowX: "scroll",
        height: "80vh",
        border: "1px solid black",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              colSpan="4"
              style={{
                // backgroundColor: "#b19cd9",
                "text-align": "center",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              Project Labour Board
            </TableCell>
            <TableCell
              sx={{
                borderLeft: "1px solid black",
                // backgroundColor: "#b19cd9",
              }}
            ></TableCell>
            <TableCell
              sx={{
                borderLeft: "1px solid black",
                // backgroundColor: "#b19cd9",
              }}
            ></TableCell>
            <TableCell
              sx={{
                borderLeft: "1px solid black",
                // backgroundColor: "#b19cd9",
              }}
            ></TableCell>
            <TableCell
              sx={{
                borderLeft: "1px solid black",
                // backgroundColor: "#b19cd9",
              }}
            ></TableCell>
            <TableCell sx={{ borderLeft: "1px solid black" }}>
              Painters
            </TableCell>
            <TableCell sx={{ borderLeft: "1px solid black" }}>Status</TableCell>
            
            {painterData?.map((painter, index) => (
              <TableCell
                colSpan="2"
                sx={{
                  borderLeft: "1px solid black",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  fontWeight: "bold",
                }}
                key={index}
              >
                {painter.Contractor_First_Name}     
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Contact</TableCell>
            <TableCell sx={{ borderLeft: "1px solid black" }}>Date</TableCell>
            <TableCell sx={{ borderLeft: "1px solid black" }}>Job no</TableCell>
            <TableCell sx={{ borderLeft: "1px solid black" }}>Client</TableCell>
            <TableCell sx={{ borderLeft: "1px solid black" }}>
              Project
            </TableCell>
            <TableCell sx={{ borderLeft: "1px solid black" }}>
              Office Budget
            </TableCell>
            <TableCell sx={{ borderLeft: "1px solid black" }}>
              Asseses
            </TableCell>
            <TableCell
              sx={{
                borderLeft: "1px solid black",
                // backgroundColor: "#addfad",
              }}
            >
              WIP
            </TableCell>
            <TableCell
              sx={{
                borderLeft: "1px solid black",
                // backgroundColor: "#b19cd9",
              }}
            >
              To Compelte
            </TableCell>
            <TableCell sx={{ borderLeft: "1px solid black" }}></TableCell>
            {painterData?.map((name, index) => (
              <>
                <TableCell sx={{ borderLeft: "1px solid black",fontWeight:"bold" }}>
                  Invoiced
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid black",fontWeight:"bold" }}>
                  Invoiced This Week
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {laborData.map((row, id) => (
            <TableRow key={id}>
              <TableCell></TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}></TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                {row.Job_No}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                {row.Client}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                {row.Name}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                {row.office_budget}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                {row.asses}
              </TableCell>
              <TableCell sx={{ borderLeft: "1px solid black" }}>
                {row.wip}
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid black",
                }}
              >
                {" "}
              </TableCell>
              <TableCell
                sx={{
                  borderLeft: "1px solid black",
                }}
              >
                {" "}
              </TableCell>

              {painterData?.map((painter, index) => (
                 <>
                 <TableCell sx={{ borderLeft: "1px solid black" }}>
                 Invoiced
               </TableCell>
               <TableCell sx={{ borderLeft: "1px solid black" }}>
                 Invoiced This Week
               </TableCell>
             </>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
