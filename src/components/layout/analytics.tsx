"use client"

import { useEffect, useState } from "react"
import type { RepoSummary } from "@/schemas/github"
import RepoLanguageChart from "@/components/custom/repo-language-chart"
import RepoStats from "@/components/custom/repo-stats"
import RepoStatsSkeleton from "@/components/skeleton/repo-stats-skeleton"
import RepoLanguageChartSkeleton from "@/components/skeleton/repo-language-chart-skeleton"

export default function Analytics() {
    const [repos, setRepos] = useState<RepoSummary[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchRepos() {
            setLoading(true)
            try {
                const res = await fetch("/api/github/repos?minStars=1000&sortBy=stars")
                const data = await res.json()
                setRepos(data.repos || [])
            } finally {
                setLoading(false)
            }
        }
        fetchRepos()
    }, [])

    if (loading) {
        return (
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
                <RepoStatsSkeleton />
                <RepoLanguageChartSkeleton />
            </div>
        )
    }

    return (
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
            <RepoStats repos={repos} />
            <RepoLanguageChart repos={repos} />
        </div>
    )
}