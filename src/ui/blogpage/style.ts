import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette, breakpoints }: Theme) => ({
  root: {
    flexGrow: 1,
    background: palette.background.paper,
    paddingBottom: spacing(4),
  },
  blogContent: {
    marginTop: spacing(3),
    padding: spacing(6),
    minBlockSize: '55vh',
    background: palette.background.default,
    [breakpoints.down('md')]: {
      padding: spacing(2),
      marginTop: 0,
    },
  },
}));

export default useStyles;
