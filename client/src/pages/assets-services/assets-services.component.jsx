import React from 'react';
import Container from '@material-ui/core/Container';
import CustomMaterialTable from '../../components/custom-material-table/custom-material-table.component';
import customOptions from './assets-services.resources';
import useStyles from './assets-services.style';

const AssetsServices = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth='lg'>
      <CustomMaterialTable options={customOptions} />
    </Container>
  );
}

export default AssetsServices;
