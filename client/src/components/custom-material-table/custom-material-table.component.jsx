import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: '2rem',
      color: theme.palette.primary.main,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
  })
);

const CustomMaterialTable = ({ options }) => {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.title}>{options.title}</p>
      <MaterialTable
        title=""
        options={options.toolbarOptions}
        columns={options.assetsServicesColumns}
        localization={options.localizationOptions}
        data={query =>
          new Promise((resolve, reject) => {
            let url = `${options.apiURL}?_limit=${query.pageSize}&_page=${(query.page + 1)}&q=${query.search}`
            fetch(url)
              .then(async response => { 
                let totalCount = Number(response.headers.get('x-total-count'));
                const data = await response.json();
                return ({ ...data, totalCount: totalCount });
              })
              .then(result => {
                resolve({
                  data: result.payload,
                  page: query.page,
                  totalCount: result.totalCount,
                })
              }) 
          })
        }
        />
    </div>
  );
}

export default CustomMaterialTable;
