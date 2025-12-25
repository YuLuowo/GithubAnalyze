export interface GithubRepository {
    id: number
    name: string
    full_name: string
    html_url: string

    language: string | null

    stargazers_count: number
    forks_count: number
    open_issues_count: number
    watchers_count: number

    created_at: string
    updated_at: string
}

export interface RepoSummary {
    id: number
    name: string
    fullName: string
    url: string

    language: string | null
    stars: number
    forks: number
    issues: number
    watchers: number

    createdAt: string
    updatedAt: string
}
