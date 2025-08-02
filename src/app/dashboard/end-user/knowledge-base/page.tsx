
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowUpDown, ThumbsUp, ThumbsDown } from "lucide-react";
import Link from "next/link";
import { TicketStatusBadge } from "@/components/ticket-status-badge";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, Timestamp, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Ticket } from "@/lib/mock-data";

export default function KnowledgeBasePage() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'tickets'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const ticketsData = snapshot.docs.map(doc => {
                 const data = doc.data();
                 return {
                    id: doc.id,
                    ...data,
                    createdAt: (data.createdAt as Timestamp)?.toDate().toISOString() || new Date().toISOString(),
                    updatedAt: (data.updatedAt as Timestamp)?.toDate().toISOString() || new Date().toISOString(),
                 } as Ticket
            });
            setTickets(ticketsData.sort((a,b) => b.upvotes - a.upvotes));
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleVote = async (ticketId: string, voteType: 'upvotes' | 'downvotes') => {
        const ticketRef = doc(db, "tickets", ticketId);
        await updateDoc(ticketRef, {
            [voteType]: increment(1)
        });
    };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold font-headline text-foreground">Knowledge Base</h1>
            <p className="text-muted-foreground">Browse and learn from previously resolved tickets.</p>
        </div>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
      </div>
        <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="hidden md:table-cell">Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Votes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                        <TableCell colSpan={4} className="text-center">Loading tickets...</TableCell>
                    </TableRow>
                  ) : tickets.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={4} className="text-center">No tickets found in the knowledge base yet.</TableCell>
                    </TableRow>
                  ) : (
                    tickets.map((ticket) => (
                        <TableRow key={ticket.id}>
                            <TableCell>
                            <Link href={`/dashboard/support-agent/tickets/${ticket.id}`} className="font-medium text-foreground hover:underline">
                                {ticket.subject}
                            </Link>
                            <div className="text-sm text-muted-foreground hidden sm:block">by {ticket.createdBy}</div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                <Badge variant="outline">{ticket.category}</Badge>
                            </TableCell>
                            <TableCell>
                                <TicketStatusBadge status={ticket.status} />
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                     <Button variant="ghost" size="sm" onClick={() => handleVote(ticket.id, 'upvotes')}>
                                        <ThumbsUp className="h-4 w-4 mr-2"/>
                                        {ticket.upvotes}
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={() => handleVote(ticket.id, 'downvotes')}>
                                        <ThumbsDown className="h-4 w-4 mr-2"/>
                                        {ticket.downvotes}
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
        </Card>
    </div>
  );
}
