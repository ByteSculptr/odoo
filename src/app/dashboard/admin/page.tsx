
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Dashboard</CardTitle>
        <CardDescription>Welcome, Admin! Here you can manage the application.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Admin-specific content will go here.</p>
      </CardContent>
    </Card>
  );
}
