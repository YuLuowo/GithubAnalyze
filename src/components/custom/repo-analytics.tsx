"use client"

import type { RepoSummary } from "@/schemas/github"

interface RepoAnalyticsProps {
    repos: RepoSummary[]
}

export default function RepoAnalytics({ repos }: RepoAnalyticsProps) {
    if (!repos.length) return null

    const avgStars = Math.round(
        repos.reduce((sum, r) => sum + r.stars, 0) / repos.length
    )
    const topRepo = repos.reduce((a, b) => (a.stars > b.stars ? a : b))

    return (
        <div className="flex items-center w-full gap-4 mt-6">
            <h3 className="font-semibold">Average Stars: {avgStars}</h3>
            <h3 className="font-semibold">
                Top Repository: <a href={topRepo.url} target="_blank" className="hover:underline">
                    {topRepo.fullName}
                </a>
            </h3>
        </div>
    )
}