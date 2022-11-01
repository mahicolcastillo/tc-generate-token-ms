class OutputMessage{
    constructor(private _payload: any){}

    public success(){
        return {
            code: 200, 
            message: "Success",
            payload: this._payload
        };
    }

    public created(){
        return {
            code: 201, 
            message: "Created",
            payload: this._payload
        };
    }

    public internalServerError(){
        return {
            code: 500, 
            message: "Internal Server Error",
            payload: this._payload
        };
    }

    public badRequest(){
        return {
            code: 400, 
            message: "Bad Request",
            payload: this._payload
        };
    }
}

export default OutputMessage;