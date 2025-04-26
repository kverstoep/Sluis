export interface INavigationPath {
    name: string;
    routeLink: string;
    subNavigationPaths?: INavigationPath[];
}

export class NavigationPaths {
    static paths: INavigationPath[] = [
        {
            name: 'Home',
            routeLink: ''
        },
        {
            name: 'Ontdek de speeltuin',
            routeLink: 'ontdek-de-speeltuin'
        },
        {
            name: 'Plan je bezoek',
            routeLink: 'plan-je-bezoek',
            subNavigationPaths: [
                {
                    name: 'Entree prijzen',
                    routeLink: 'entree-prijzen'
                },
                {
                    name: 'Openingstijden',
                    routeLink: 'openingstijden'
                },
                {
                    name: 'Abonnement',
                    routeLink: 'abonnement'
                },
                {
                    name: 'Huisregels',
                    routeLink: 'huisregels'
                },
                {
                    name: 'Route',
                    routeLink: 'route'
                }
            ]
        }
    ]
}