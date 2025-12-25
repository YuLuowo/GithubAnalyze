import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function DocsPage() {
    return (
        <div className="max-w-4xl mx-auto min-h-[calc(100svh-4.5rem)] p-6 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>專案簡介</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        這是一個用來分析 GitHub 上 star 數最高的前 50 個 repositories 的網站。
                        主要功能包括統計數據、語言分布 Pie chart、Top repo，以及其他數據分析。
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>功能介紹</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                        <li>統計數據：顯示平均 Stars、Forks、Issues 等</li>
                        <li>語言分布圖表：用 Pie chart 呈現 repo 的語言比例</li>
                        <li>Top 排行榜：依照 stars/forks/watchers 排序</li>
                        <li>互動式分析：支援不同條件查詢</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>技術架構</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                        <li>Frontend: Next.js, React, TypeScript, TailwindCSS, shadcn/ui</li>
                        <li>Backend: Next.js API routes</li>
                        <li>Data Source: GitHub REST API (search/repositories)</li>
                        <li>Deployment: Vercel</li>
                    </ul>
                </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="usage">
                    <AccordionTrigger>使用方式</AccordionTrigger>
                    <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                            打開網站後，會自動顯示 GitHub top 50 repo 的分析。
                            使用者可以瀏覽不同的統計卡片和圖表，並透過查詢條件進行互動式分析。
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="motivation">
                    <AccordionTrigger>專案目的</AccordionTrigger>
                    <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                            本專案透過 Next.js + GitHub API，建立一個完整的 dashboard。
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}