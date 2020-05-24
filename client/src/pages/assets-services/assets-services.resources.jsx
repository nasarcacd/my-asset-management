
const API_URL = '/api/assets_services';

const title = 'Mantenimiento de Activos';

const toolbarOptions = {
  exportButton: true,
  exportAllData: true,
};

const assetsServicesColumns = [
  { title: 'Identificación', field: 'unique_id' },
  { title: 'Nombre', field: 'name' },
  { title: 'Placa', field: 'plate' },
  { title: 'Serie', field: 'serial' },
  { title: 'Próximo Servicio', field: 'next_service_date' },
  { title: 'Tipo Servicio', field: 'service_type' },
  { title: 'Estado Servicio', field: 'service_status' },
];

const localizationOptions = {
  pagination: {
    labelRowsSelect: 'filas',
    firstTooltip: 'Primera Página',
    lastTooltip: 'Última Página',
    previousTooltip: 'Página Anterior',
    nextTooltip: 'Página Siguiente',
  },
  toolbar: {
    exportName: 'Exportar CSV',
    searchPlaceholder: 'Buscar',
    exportTitle: 'Exportar',
  },
  body: {
    emptyDataSourceMessage: 'Sin datos para mostrar',
  },
};

const customOptions = {
  title: title,
  toolbarOptions: toolbarOptions,
  assetsServicesColumns: assetsServicesColumns,
  localizationOptions: localizationOptions,
  apiURL: API_URL
}

export default customOptions;