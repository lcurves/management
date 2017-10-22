import {Request, Response} from 'express';
import bindMethods from "./bind-methods";

class PromiseAppRespond {
    public req: Request;
    public res: Response;
    public next: Function;

    public data: any;
    public error: any;
    public status: number;

    constructor(req: Request, res: Response, next: Function) {
        bindMethods(this);
        this.req = req;
        this.res = res;
        this.next = next;
    }

    onSuccess(data) {
        this.data = data;
        this.res.jsonp(data);
        return this;
    }

    setStatus(status) {
        this.status = status;
        this.res.status(status);
        return this;
    }

    onFail(error) {
        this.error = error;
        this.res.status(400).jsonp(error);
        return this;
    }

}

export default PromiseAppRespond;
