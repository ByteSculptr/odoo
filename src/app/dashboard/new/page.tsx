import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewTicketPage() {
  return (
    <div>
        <Link href="/dashboard" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Tickets
        </Link>
        <Card className="w-full">
            <CardHeader>
            <CardTitle className="font-headline text-2xl">Create New Ticket</CardTitle>
            <CardDescription>
                Please provide as much detail as possible so we can assist you effectively.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <form className="grid gap-6">
                <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., Unable to login" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                        <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="tech-support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="priority">Priority</Label>
                        <Select defaultValue="medium">
                            <SelectTrigger id="priority">
                                <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    placeholder="Describe your issue in detail..."
                    className="min-h-[150px]"
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="attachment" className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                    <Paperclip className="h-4 w-4"/>
                    Attachment (Optional)
                </Label>
                <Input id="attachment" type="file" className="border-dashed" />
                </div>
            </form>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t pt-6">
                <Button variant="outline">Cancel</Button>
                <Button>Submit Ticket</Button>
            </CardFooter>
        </Card>
    </div>
  );
}
