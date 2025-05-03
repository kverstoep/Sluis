import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: "http://localhost:4200/admin",
    clientId: '479206959568-nas89211g51ik5695jm62bfauhn9fsb9.apps.googleusercontent.com',
    responseType: 'token id_token',
    scope: 'openid profile email',
    timeoutFactor: 0.75,
    useSilentRefresh: true,
    strictDiscoveryDocumentValidation: false,
};