import PetsIcon from '@mui/icons-material/Pets';
import { Stack, IconButton, Container, TextField, List } from '@mui/material';
import { useState } from 'react';
import ListItem from './list-item';

const App = () => {
  const [input, setInput] = useState('');

  const [items, setItems] = useState<string[]>([]);

   console.log('items', items);

  return (
    <Container maxWidth={'sm'} disableGutters>
      <Stack direction={'row'} sx={{ paddingTop: '150px' }} justifyContent={'center'}>
        <TextField
          label={'Enter some items to buy'}
          fullWidth
          onChange={({ target: { value } }) => setInput(value)
          }
          value={input}
        />
        <IconButton sx={{ color: 'purple', width: "150px" }} onClick={() => {
        input.trim().length && setItems([...items, input.trim()])}}>

          <PetsIcon fontSize='large' />
        </IconButton>
      </Stack>
      <List>
        {items.map((value , index) => (<ListItem item={value} key = {index} />))}
      </List>
    </Container>
  );
};
export default App;