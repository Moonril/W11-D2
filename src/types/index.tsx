export interface ArticleObject {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    id:           number;
    title:        string;
    authors:      Author[];
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: string;
    updated_at:   string;
    featured:     boolean;
    launches:     Launch[];
    events:       any[];
}

export interface Author {
    name:    string;
    socials: Socials | null;
}

export interface Socials {
    x:         string;
    youtube:   string;
    instagram: string;
    linkedin:  string;
    mastodon:  string;
    bluesky:   string;
}

export interface Launch {
    launch_id: string;
    provider:  string;
}
