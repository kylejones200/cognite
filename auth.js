let identityPool = 'us-east-1:3481c532-99ed-4ccd-90f4-8e37ce0634c3'; //Cognito Identity Pool
let region = 'us-east-1';
let poolId = 'us-east-1_qIa3RwxYd'; //Cognito User Pool
let clientId = 'm87j0rj027fl0r453jjf2pfsd'; //Cognito User Pool App
let appDomain = 'octankoffshore.auth.us-east-1.amazoncognito.com';
let endpoint = "https://6s5szhok0h.execute-api.us-east-1.amazonaws.com/prod"; //API Endpoint URL
let authData = {
    ClientId : clientId, 
    AppWebDomain : appDomain,
    TokenScopesArray : ['openid'],
    RedirectUriSignIn : 'https://d12345example.cloudfront.net', //CloudFront Distribution URL
    RedirectUriSignOut : 'https://d12345example.cloudfront.net' //CloudFront Distribution URL
};

