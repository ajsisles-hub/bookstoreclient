import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';



// We create a custom styled Box component and export it
export const StyledBookContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', // Starts items from the left side
    alignItems: 'flex-start',     // Aligns items to the top of the row
    gap: '24px',                  // Creates a clean 24px space between filter and list
    width: '100%',
});


export const useStyles = makeStyles()((theme) => ({
    // Widened layout to stretch beautifully across the page
    listContainer: {
        width: '100%',
        maxWidth: 1000, 
        margin: '0 auto',
    },
    // The main wide card row
    bookRowCard: {
        padding: theme.spacing(3), 
        display: 'flex',
        alignItems: 'flex-start', // Keeps layout crisp when text is long
        gap: theme.spacing(4), 
        borderRadius: theme.shape.borderRadius * 2,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: theme.shadows[4],
        },
    },
    // The visual book cover placeholder block
    imageContainer: {
        width: 100, // Slightly scaled up to match the longer card length
        height: 140,
        backgroundColor: theme.palette.grey[200],
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        border: `1px solid ${theme.palette.grey[300]}`,
    },
    coverImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    fallbackIcon: {
        color: theme.palette.grey[400],
        fontSize: 40,
    },
    // Context text wrapping box
    textBlock: {
        flexGrow: 1,
        minWidth: 0,
    },
    titleText: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
    // Removed the line-clamp so your entire description text displays
    descriptionText: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(2),
        lineHeight: 1.6,
    },
    tagBadge: {
        fontWeight: '500',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        padding: theme.spacing(0.5, 1.5),
        borderRadius: theme.shape.borderRadius,
    }
}));
