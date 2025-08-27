import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Eye, Edit, Search, Clock, CheckCircle } from "lucide-react";

const operatorStats = [
  { title: "Total Operators", value: "45", color: "bg-blue-100 text-blue-800", icon: Users },
  { title: "Available", value: "3", color: "bg-green-100 text-green-800", icon: CheckCircle },
  { title: "Busy", value: "23", color: "bg-orange-100 text-orange-800", icon: Clock },
  { title: "Total Filings", value: "870", color: "bg-gray-100 text-gray-800", icon: Users },
];

const operators = [
  {
    id: "CRG",
    name: "Operator Rajesh Gupta",
    status: "Available",
    experience: "8 years",
    rating: 4.8,
    specialization: "Corporate Tax",
    currentLoad: "8/12",
    completedFilings: 245,
    client: "Priya Sharma",
    clientType: "Individual filing",
    statusColor: "green"
  },
  {
    id: "CMS", 
    name: "Operator Meera Singh",
    status: "Available",
    experience: "10 years", 
    rating: 4.9,
    specialization: "Individual Returns",
    currentLoad: "10/12",
    completedFilings: 320,
    client: "Arjun Mehta",
    clientType: "Corporate filing",
    statusColor: "green"
  },
  {
    id: "AN",
    name: "Operator Arjun Nair", 
    status: "Busy",
    experience: "6 years",
    rating: 4.7,
    specialization: "GST & Compliance",
    currentLoad: "8/12", 
    completedFilings: 180,
    client: "Kavita Patel",
    clientType: "GST Return",
    statusColor: "orange"
  },
  {
    id: "KI",
    name: "Operator Kavya Iyer",
    status: "Available", 
    experience: "5 years",
    rating: 4.6,
    specialization: "Audit & Compliance",
    currentLoad: "6/12",
    completedFilings: 156,
    client: "Rohit Kumar",
    clientType: "Audit filing",
    statusColor: "green"
  }
];

export default function VerifierDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Verifier Dashboard</h1>
          <p className="text-muted-foreground">Monitor and verify operator assignments and work progress</p>
        </div>
        <Button className="bg-primary text-primary-foreground">
          Generate Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {operatorStats.map((stat, index) => (
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
          All <Badge variant="secondary" className="ml-2">4</Badge>
        </Button>
        <Button variant="ghost">
          Available <Badge variant="secondary" className="ml-2">3</Badge>
        </Button>
        <Button variant="ghost">
          Busy <Badge variant="secondary" className="ml-2">1</Badge>
        </Button>
      </div>

      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          placeholder="Search by operator name..." 
          className="pl-10"
        />
      </div>

      {/* Operators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {operators.map((operator) => (
          <Card key={operator.id} className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent text-accent-foreground p-2 rounded-lg font-bold">
                    {operator.id}
                  </div>
                  <div>
                    <h3 className="font-semibold">{operator.name}</h3>
                    <Badge 
                      variant="secondary" 
                      className={operator.statusColor === 'green' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}
                    >
                      {operator.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">{operator.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-medium">⭐ {operator.rating}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Specialisation</span>
                  <span className="font-medium">{operator.specialization}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Client</span>
                  <span className="font-medium">{operator.client}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Filing Type</span>
                  <span className="font-medium">{operator.clientType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Load</span>
                  <span className="font-medium">{operator.currentLoad}</span>
                </div>
              </div>

              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${(parseInt(operator.currentLoad.split('/')[0]) / parseInt(operator.currentLoad.split('/')[1])) * 100}%` }}
                ></div>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                {operator.completedFilings} completed filings
              </p>

              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-2" />
                  Verify Work
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}