import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function LanguageStatsCards({
                                               totalLanguages,
                                               topLanguage,
                                               mostStarsLang,
                                               mostForksLang,
                                           }: {
    totalLanguages: number
    topLanguage: string
    mostStarsLang: string
    mostForksLang: string
}) {
    return (
        <div className="w-full max-w-xl grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Card className="gap-2">
                <CardHeader>
                    <CardTitle className="text-base font-medium">Total Languages</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{totalLanguages}</p>
                </CardContent>
            </Card>

            <Card className="gap-2">
                <CardHeader>
                    <CardTitle className="text-base font-medium">Top Language (by count)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{topLanguage}</p>
                </CardContent>
            </Card>

            <Card className="gap-2">
                <CardHeader>
                    <CardTitle className="text-base font-medium">Most Stars Language</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{mostStarsLang}</p>
                </CardContent>
            </Card>

            <Card className="gap-2">
                <CardHeader>
                    <CardTitle className="text-base font-medium">Most Forks Language</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">{mostForksLang}</p>
                </CardContent>
            </Card>
        </div>
    )
}