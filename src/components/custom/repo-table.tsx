"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { RepoSummary } from "@/schemas/github"

interface RepoTableProps {
    repos: RepoSummary[]
}

export default function RepoTable({ repos }: RepoTableProps) {
    if (!repos.length) {
        return <p className="text-sm text-gray-500">No repositories found.</p>
    }

    return (
        <Table className="">
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Language</TableHead>
                    <TableHead>Stars</TableHead>
                    <TableHead>Forks</TableHead>
                    <TableHead>Issues</TableHead>
                    <TableHead>Updated</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {repos.map((repo) => (
                    <TableRow key={repo.id}>
                        <TableCell>
                            <a href={repo.url} target="_blank" className="font-semibold hover:underline">
                                {repo.fullName}
                            </a>
                        </TableCell>
                        <TableCell>{repo.language ?? "-"}</TableCell>
                        <TableCell>{repo.stars}</TableCell>
                        <TableCell>{repo.forks}</TableCell>
                        <TableCell>{repo.issues}</TableCell>
                        <TableCell>{new Date(repo.updatedAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}