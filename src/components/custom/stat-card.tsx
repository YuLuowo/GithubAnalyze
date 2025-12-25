import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function StatCard({ title, value }: { title: string; value: string | number }) {
    return (
        <Card className="shadow-sm gap-1">
            <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xl font-bold wrap-break-word">{value}</p>
            </CardContent>
        </Card>
    )
}