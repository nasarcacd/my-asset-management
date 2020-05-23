import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CustomMaterialTable from '../../components/custom-material-table/custom-material-table.component';
import { customOptions } from "./assets-services.resources";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: 30,
    }
  })
);

const AssetsServices = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth='lg'>
      <CustomMaterialTable options={customOptions} />
    </Container>
  );
}

export default AssetsServices;
