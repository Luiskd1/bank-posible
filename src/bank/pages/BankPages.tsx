
import { IconButton } from "@mui/material"
import { GotagotaLayout } from "../layout/GotagotaLayout"
import { NoteView } from "../view"
import { AddOutlined } from "@mui/icons-material"



export const BankPages = () => {
  return (
    <GotagotaLayout>



      <NoteView/>

      <IconButton
      size="large"
      sx={{
        color:'black',
        backgroundColor:"error.main",
        "hover":{backgroundColor:"error.main",opacity:0.9},
        position:'fixed',
        right:50,
        bottom:50
      }}>
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
      
    </GotagotaLayout>
  )
}
