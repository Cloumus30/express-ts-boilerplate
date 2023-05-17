class ErrorType extends Error{
    public message: string
    public status: number
    public view: string

    constructor(message:string, status:number = 500, view:string = 'api'){
        super(message);
        this.message = message
        this.status = status
        this.view = view
    }
}

export default ErrorType