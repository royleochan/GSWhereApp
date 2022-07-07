export type AmplifyDependentResourcesAttributes = {
    "function": {
        "healthcheckLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "api001": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "gswhere": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}