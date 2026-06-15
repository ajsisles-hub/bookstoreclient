import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// We create a custom styled Box component and export it
export const StyledBookContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', // Starts items from the left side
    alignItems: 'flex-start',     // Aligns items to the top of the row
    gap: '24px',                  // Creates a clean 24px space between filter and list
    width: '100%',
});