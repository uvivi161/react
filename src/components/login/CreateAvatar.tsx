import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { UserContext } from './UserReducer';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';


export const btnUpdateContext = createContext<[boolean, Dispatch<SetStateAction<Boolean>>]>([
  {} as boolean,
  () => { },
]);

const CreateAvatar = () => {

  const [user] = useContext(UserContext);

  return (

    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor:"#3b3c71" }}>{user.email?.charAt(0) || user.firstName?.charAt(0)}</Avatar>
    </Stack>
  );
}
export default CreateAvatar