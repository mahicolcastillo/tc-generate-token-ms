import { header } from 'express-validator';

const validation = [
    header('clientName').isString().withMessage('Parameter clientName is required'),
    header('authorization').isJWT().withMessage('Parameter authorization is required'),
];

export default validation;