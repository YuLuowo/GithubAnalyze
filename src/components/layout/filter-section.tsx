"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import RepoTable from "@/components/custom/repo-table";
import RepoAnalytics from "@/components/custom/repo-analytics";

export default function FilterSection() {
    const [language, setLanguage] = useState("Python")
    const [minStars, setMinStars] = useState(1000)
    const [sortBy, setSortBy] = useState("stars")
    const [repos, setRepos] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    async function applyFilters() {
        setLoading(true)
        try {
            const res = await fetch(
                `/api/github/repos?language=${language}&minStars=${minStars}&sortBy=${sortBy}`
            )
            const data = await res.json()
            setRepos(data.repos || [])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-full max-w-6xl gap-4">
            <Card className="w-full md:min-w-6xl gap-4">
                <CardHeader>
                    <CardTitle className="text-base">Filters</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div className="flex flex-row gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Language</label>
                                <Select value={language} onValueChange={setLanguage}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Python">Python</SelectItem>
                                        <SelectItem value="TypeScript">TypeScript</SelectItem>
                                        <SelectItem value="JavaScript">JavaScript</SelectItem>
                                        <SelectItem value="Java">Java</SelectItem>
                                        <SelectItem value="C#">C#</SelectItem>
                                        <SelectItem value="C++">C++</SelectItem>
                                        <SelectItem value="Go">Go</SelectItem>
                                        <SelectItem value="Rust">Rust</SelectItem>
                                        <SelectItem value="PHP">PHP</SelectItem>
                                        <SelectItem value="Kotlin">Kotlin</SelectItem>
                                        <SelectItem value="Swift">Swift</SelectItem>
                                        <SelectItem value="Ruby">Ruby</SelectItem>
                                        <SelectItem value="Scala">Scala</SelectItem>
                                        <SelectItem value="Dart">Dart</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Sort By</label>
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="stars">Stars</SelectItem>
                                        <SelectItem value="forks">Forks</SelectItem>
                                        <SelectItem value="updated">Last Updated</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">
                                Minimum Stars: <span className="font-semibold">{minStars}</span>
                            </label>
                            <Slider
                                value={[minStars]}
                                onValueChange={(v) => setMinStars(v[0])}
                                min={100}
                                max={5000}
                                step={100}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button className="hover:cursor-pointer" onClick={applyFilters}>
                            {loading ? "Loading..." : "Apply Filters"}
                        </Button>
                    </div>

                </CardContent>
            </Card>

            <RepoAnalytics repos={repos} />
            <RepoTable repos={repos} />
        </div>
    )
}