import { Request, Response }    from "express";

const healthcheck = (req: Request, res: Response) => {
    return res.status(200).send('OK');
}

export default healthcheck;