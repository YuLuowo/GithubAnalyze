import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function RepoLanguageChartSkeleton() {
    return (
        <Card className="mt-2">
            <CardHeader>
                <CardTitle>Language Distribution</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <Skeleton className="h-4 w-28" />
                                </CardHeader>
                                <CardContent>
                                    <Skeleton className="h-6 w-20" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Skeleton className="h-64 w-64 rounded-full" />

                    <div className="flex flex-col gap-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Skeleton className="w-3 h-3 rounded-full" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}