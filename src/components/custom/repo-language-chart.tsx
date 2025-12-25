"use client"

import { PieChart, Pie, Cell } from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { RepoSummary } from "@/schemas/github"
import LanguageStatsCards from "@/components/custom/language-stat-card";

interface RepoLanguageChartProps {
    repos: RepoSummary[]
}

export default function RepoLanguageChart({ repos }: RepoLanguageChartProps) {
    if (!repos.length) return null

    const languageStats: Record<string, { count: number; stars: number; forks: number }> = {}
    repos.forEach((repo) => {
        if (!repo.language) return
        const lang = repo.language
        if (!languageStats[lang]) {
            languageStats[lang] = { count: 0, stars: 0, forks: 0 }
        }
        languageStats[lang].count += 1
        languageStats[lang].stars += repo.stars
        languageStats[lang].forks += repo.forks
    })

    const data = Object.entries(languageStats).map(([lang, stats]) => ({
        name: lang,
        value: stats.count,
    }))

    const totalLanguages = Object.keys(languageStats).length
    const topLanguage = Object.entries(languageStats).reduce((a, b) =>
        a[1].count > b[1].count ? a : b
    )[0]
    const mostStarsLang = Object.entries(languageStats).reduce((a, b) =>
        a[1].stars > b[1].stars ? a : b
    )[0]
    const mostForksLang = Object.entries(languageStats).reduce((a, b) =>
        a[1].forks > b[1].forks ? a : b
    )[0]

    const COLORS = generateColors(data.length)

    return (
        <Card className="mt-2">
            <CardHeader>
                <CardTitle>Language Distribution</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <LanguageStatsCards
                        totalLanguages={totalLanguages}
                        topLanguage={topLanguage}
                        mostStarsLang={mostStarsLang}
                        mostForksLang={mostForksLang}
                    />
                    <PieChart width={300} height={300} style={{ pointerEvents: "none" }}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label={false}
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className="flex flex-col gap-2">
                        {data.map((item, index) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <span
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                />
                                <span className="text-sm font-medium">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function generateColors(count: number) {
    return Array.from({ length: count }, (_, i) =>
        `hsl(${(i * 360) / count}, 70%, 50%)`
    )
}