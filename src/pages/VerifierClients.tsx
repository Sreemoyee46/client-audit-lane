import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, Clock, CheckCircle, AlertCircle, Search, Filter } from "lucide-react";

const clientStats = [
  { title: "Total Clients", value: "1,247", color: "bg-blue-100 text-blue-800", icon: Users },
  { title: "In Progress", value: "156", color: "bg-orange-100 text-orange-800", icon: Clock },
  { title: "Completed", value: "987", color: "bg-green-100 text-green-800", icon: CheckCircle },
  { title: "Pending", value: "23", color: "bg-red-100 text-red-800", icon: AlertCircle },
];

const clients = [
  {
    id: "CLI001",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 9876543210",
    filingType: "Individual Tax Return",
    status: "In Progress",
    assignedOperator: "Rajesh Gupta",
    deadline: "2024-01-15",
    priority: "High",
    amount: "₹15,000",
    statusColor: "orange"
  },
  {
    id: "CLI002", 
    name: "Arjun Mehta",
    email: "arjun.mehta@company.com",
    phone: "+91 9876543211",
    filingType: "Corporate Tax Filing",
    status: "Completed",
    assignedOperator: "Meera Singh", 
    deadline: "2024-01-10",
    priority: "Medium",
    amount: "₹75,000",
    statusColor: "green"
  },
  {
    id: "CLI003",
    name: "Kavita Patel", 
    email: "kavita.patel@business.com",
    phone: "+91 9876543212",
    filingType: "GST Return",
    status: "Pending",
    assignedOperator: "Not Assigned",
    deadline: "2024-01-20", 
    priority: "Low",
    amount: "₹8,500",
    statusColor: "red"
  },
  {
    id: "CLI004",
    name: "Rohit Kumar",
    email: "rohit.kumar@startup.com", 
    phone: "+91 9876543213",
    filingType: "Audit Filing",
    status: "In Progress",
    assignedOperator: "Kavya Iyer",
    deadline: "2024-01-25",
    priority: "High", 
    amount: "₹45,000",
    statusColor: "orange"
  },
  {
    id: "CLI005",
    name: "Sunita Reddy",
    email: "sunita.reddy@gmail.com",
    phone: "+91 9876543214", 
    filingType: "Individual Tax Return",
    status: "Completed",
    assignedOperator: "Rajesh Gupta",
    deadline: "2024-01-08",
    priority: "Medium",
    amount: "₹12,000", 
    statusColor: "green"
  }
];

export default function VerifierClients() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Client Management</h1>
          <p className="text-muted-foreground">Monitor client filings and their progress status</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-primary text-primary-foreground">
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clientStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-muted rounded-lg p-1 w-fit">
        <Button variant="secondary" className="bg-background text-foreground shadow-sm">
          All <Badge variant="secondary" className="ml-2">1,247</Badge>
        </Button>
        <Button variant="ghost">
          In Progress <Badge variant="secondary" className="ml-2">156</Badge>
        </Button>
        <Button variant="ghost">
          Completed <Badge variant="secondary" className="ml-2">987</Badge>
        </Button>
        <Button variant="ghost">
          Pending <Badge variant="secondary" className="ml-2">23</Badge>
        </Button>
      </div>

      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          placeholder="Search by client name or email..." 
          className="pl-10"
        />
      </div>

      {/* Clients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Client List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client ID</TableHead>
                <TableHead>Client Details</TableHead>
                <TableHead>Filing Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned Operator</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-sm text-muted-foreground">{client.email}</p>
                      <p className="text-sm text-muted-foreground">{client.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>{client.filingType}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary"
                      className={
                        client.statusColor === 'green' ? 'bg-green-100 text-green-800' :
                        client.statusColor === 'orange' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }
                    >
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {client.assignedOperator === "Not Assigned" ? (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                        Not Assigned
                      </Badge>
                    ) : (
                      client.assignedOperator
                    )}
                  </TableCell>
                  <TableCell>{client.deadline}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary"
                      className={
                        client.priority === 'High' ? 'bg-red-100 text-red-800' :
                        client.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }
                    >
                      {client.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{client.amount}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Verify
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}