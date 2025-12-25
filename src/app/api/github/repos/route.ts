import { NextResponse } from 'next/server'
import type { GithubRepository, RepoSummary } from '@/schemas/github'

const GITHUB_API_URL = 'https://api.github.com/search/repositories'

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)

        const language = searchParams.get('language')
        const minStars = searchParams.get('minStars') || '1000'
        const sortBy = searchParams.get('sortBy') || 'stars'
        const page = searchParams.get('page') || '1'

        const query = new URLSearchParams({
            q: `language:${language} stars:>=${minStars}`,
            sort: sortBy,
            order: 'desc',
            per_page: '50',
            page,
        })

        const res = await fetch(`${GITHUB_API_URL}?${query.toString()}`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: 'application/vnd.github+json',
            },
            cache: 'no-store',
        })

        if (!res.ok) {
            return NextResponse.json(
                { error: 'GitHub API request failed' },
                { status: res.status }
            )
        }

        const data = await res.json()

        const repos: RepoSummary[] = data.items.map((repo: GithubRepository) => ({
            id: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            url: repo.html_url,

            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            issues: repo.open_issues_count,
            watchers: repo.watchers_count,

            createdAt: repo.created_at,
            updatedAt: repo.updated_at,
        }))

        return NextResponse.json({
            total: data.total_count,
            repos,
        })
    } catch (error) {
        console.error('[GitHub Repo API Error]', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
