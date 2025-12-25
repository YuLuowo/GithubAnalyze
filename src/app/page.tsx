import Analytics from "@/components/layout/analytics";

export default async function DashboardPage() {

    return (
        <main className="flex flex-col items-center min-h-[calc(100svh-4.5rem)] p-4">
            <h2 className="text-3xl font-semibold">GitHub Top 50 Repositories Analytics</h2>
            <Analytics />
        </main>
    );
}
