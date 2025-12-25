import { Skeleton } from "@/components/ui/skeleton"

export default function RepoStatsSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="p-6 border rounded-xl shadow-sm gap-1 bg-card">
                    <Skeleton className="h-4 w-24 mb-5" />
                    <Skeleton className="h-6 w-32" />
                </div>
            ))}
        </div>
    )
}