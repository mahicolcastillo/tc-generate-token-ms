import { header } from 'express-validator';

const validation = [
    header('clientName').isString().withMessage('Parameter clientName is required'),
    header('status').isString().withMessage('Parameter status is required'),
];

export default validation;