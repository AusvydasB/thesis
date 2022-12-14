import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button id='addToCartButton' className='mygtukas' aria-describedby={id} variant="contained" onClick={handleClick}>
        Add to Cart
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography id='popoveris' sx={{ p: 2 }}>Congratulations! Your item is added to the Cart!</Typography>
      </Popover>
    </div>
  );
}
