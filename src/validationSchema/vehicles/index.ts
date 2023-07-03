import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  company_id: yup.string().nullable(),
});
