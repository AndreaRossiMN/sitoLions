export interface ILambdaResponse <T>{
    body: {
        Items: T[];
    }
}