import React from 'react';
import MaterialTable from 'material-table';
import useStyles from './custom-material-table.style';
import { retriveData } from './custom-material-table.util';

const CustomMaterialTable = ({ options }) => {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.title}>{options.title}</p>
      <MaterialTable
        title=''
        options={options.toolbarOptions}
        columns={options.assetsServicesColumns}
        localization={options.localizationOptions}
        data={query => retriveData(query, options.apiURL)}
        />
    </div>
  );
}

export default CustomMaterialTable;
