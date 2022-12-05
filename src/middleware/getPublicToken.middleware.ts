import { header } from 'express-validator';

const validation = [
    header('clientName').isString().withMessage('Parameter clientName is required'),
];

export default validation;