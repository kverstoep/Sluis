export interface INavigationPath {
    name: string;
    hideInToolbar?: boolean;
    routeLink?: string;
    subNavigationPaths?: INavigationPath[];
}

export class NavigationPaths {
    static paths: INavigationPath[] = [
        {
            name: 'Home',
            hideInToolbar: true,
            routeLink: ''
        },
        {
            name: 'Ontdek de speeltuin',
            routeLink: 'ontdek-de-speeltuin'
        },
        {
            name: 'Plan je bezoek',
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
        },
        {
            name: 'Over de Sluis',
            subNavigationPaths: [
                {
                    name: 'Bestuur & vrijwilligers',
                    routeLink: 'bestuur-vrijwilligers'
                },
                {
                    name: 'Sponsors',
                    routeLink: 'sponsors'
                },
                {
                    name: 'Samenwerking',
                    routeLink: 'samenwerking'
                },
                {
                    name: 'Vroeger en nu',
                    routeLink: 'vroeger-en-nu'
                }
            ]
        },
        {
            name: 'Albums',
            routeLink: 'albums'
        },
        {
            name: 'Contact',
            routeLink: 'contact'
        },
        {
            name: 'Nieuwsbrief',
            routeLink: 'nieuwsbrief'
        },
    ]
}