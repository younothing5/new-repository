import { Checkbox, Typography, IconButton, ListItem as MuiListItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

type ListItemProps = {
      item: string;
};


const ListItem = ({item}: ListItemProps) =>
<MuiListItem>
    <Checkbox />
      <Typography>
         {item}
          </Typography>
            <IconButton>
             <EditIcon fontSize={'small'}/>
            </IconButton>
         <IconButton>
    <ClearIcon fontSize={'small'}/>
  </IconButton>
</MuiListItem>



export default ListItem;