const VehicleApi = {
  getAllModels() {
    return [
      { Key: 'fit', Year: 2015 },
      { Key: 'fit', Year: 2014 },
      { Key: 'civic', Year: 2015 },
      { Key: 'hrv', Year: 2015 },
    ];
  },

  getModelYears() {
    return [2014, 2015];
  },
};

export default VehicleApi;
