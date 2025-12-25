"use client"

import type { RepoSummary } from "@/schemas/github"
import StatCard from "@/components/custom/stat-card";

interface RepoStatsProps {
    repos: RepoSummary[]
}

export default function RepoStats({ repos }: RepoStatsProps) {
    if (!repos.length) return null

    const avgStars = Math.round(repos.reduce((sum, r) => sum + r.stars, 0) / repos.length)
    const avgForks = Math.round(repos.reduce((sum, r) => sum + r.forks, 0) / repos.length)
    const avgIssues = Math.round(repos.reduce((sum, r) => sum + r.issues, 0) / repos.length)

    const topStars = repos.reduce((a, b) => (a.stars > b.stars ? a : b))
    const topForks = repos.reduce((a, b) => (a.forks > b.forks ? a : b))
    const topWatchers = repos.reduce((a, b) => (a.watchers > b.watchers ? a : b))

    const recentUpdate = repos.reduce((a, b) =>
        new Date(a.updatedAt) > new Date(b.updatedAt) ? a : b
    )

    const oldestRepo = repos.reduce((a, b) =>
        new Date(a.createdAt) < new Date(b.createdAt) ? a : b
    )

    const reposWithIssues = repos.filter(r => r.issues > 0).length
    const issueRatio = ((reposWithIssues / repos.length) * 100).toFixed(1)

    const uniqueLanguages = new Set(repos.map(r => r.language).filter(Boolean)).size

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <StatCard title="Average Stars" value={avgStars} />
            <StatCard title="Average Forks" value={avgForks} />
            <StatCard title="Average Issues" value={avgIssues} />

            <StatCard title="Top Repo by Stars" value={`${topStars.fullName} (${topStars.stars})`} />
            <StatCard title="Top Repo by Forks" value={`${topForks.fullName} (${topForks.forks})`} />
            <StatCard title="Top Repo by Watchers" value={`${topWatchers.fullName} (${topWatchers.watchers})`} />

            <StatCard title="Most Recently Updated" value={recentUpdate.fullName} />
            <StatCard title="Oldest Repo" value={oldestRepo.fullName} />

            <StatCard title="Repos with Issues (%)" value={`${issueRatio}%`} />
            <StatCard title="Unique Languages" value={uniqueLanguages} />
        </div>
    )
}