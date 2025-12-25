import FilterSection from "@/components/layout/filter-section";

export default async function DashboardPage() {

    return (
        <main className="flex flex-col items-center min-h-[calc(100svh-4.5rem)] p-4">
            <FilterSection />
        </main>
    );
}
