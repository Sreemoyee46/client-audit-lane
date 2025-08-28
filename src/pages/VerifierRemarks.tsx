import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MessageSquare, Star, AlertTriangle, CheckCircle, Clock, Plus } from "lucide-react";
import { toast } from "sonner";

const operators = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    avatar: "/placeholder.svg",
    status: "active",
    performance: "excellent",
    totalRemarks: 3,
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    name: "Rahul Kumar",
    email: "rahul.kumar@email.com", 
    avatar: "/placeholder.svg",
    status: "active",
    performance: "good",
    totalRemarks: 1,
    lastActive: "30 minutes ago"
  },
  {
    id: 3,
    name: "Sneha Patel",
    email: "sneha.patel@email.com",
    avatar: "/placeholder.svg", 
    status: "idle",
    performance: "needs_improvement",
    totalRemarks: 5,
    lastActive: "5 hours ago"
  },
  {
    id: 4,
    name: "Amit Singh",
    email: "amit.singh@email.com",
    avatar: "/placeholder.svg",
    status: "active", 
    performance: "good",
    totalRemarks: 2,
    lastActive: "1 hour ago"
  }
];

const existingRemarks = [
  {
    id: 1,
    operatorName: "Sneha Patel",
    operatorId: 3,
    type: "improvement",
    priority: "high",
    remark: "Need to improve client communication skills. Several clients mentioned delays in responses.",
    date: "2024-01-15",
    status: "pending"
  },
  {
    id: 2,
    operatorName: "Priya Sharma", 
    operatorId: 1,
    type: "appreciation",
    priority: "low",
    remark: "Excellent work on the Rajesh Industries audit. Very thorough and professional.",
    date: "2024-01-14",
    status: "acknowledged"
  },
  {
    id: 3,
    operatorName: "Rahul Kumar",
    operatorId: 2,
    type: "feedback",
    priority: "medium",
    remark: "Good technical skills but needs to work on documentation quality.",
    date: "2024-01-13",
    status: "pending"
  }
];

export default function VerifierRemarks() {
  const [selectedOperator, setSelectedOperator] = useState("");
  const [remarkType, setRemarkType] = useState("");
  const [priority, setPriority] = useState("");
  const [remarkText, setRemarkText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "idle": return "bg-yellow-100 text-yellow-800";
      case "offline": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case "excellent": return <Star className="w-4 h-4 text-yellow-500" />;
      case "good": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "needs_improvement": return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleSubmitRemark = () => {
    if (!selectedOperator || !remarkType || !priority || !remarkText.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Remark submitted successfully!");
    setSelectedOperator("");
    setRemarkType("");
    setPriority("");
    setRemarkText("");
  };

  const filteredRemarks = existingRemarks.filter(remark => {
    const matchesSearch = remark.operatorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         remark.remark.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || remark.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Operator Remarks</h1>
          <p className="text-muted-foreground">Monitor and provide feedback on operator performance</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Remark</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Remark</DialogTitle>
              <DialogDescription>
                Provide feedback or remarks for an operator's performance
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Select Operator</Label>
                  <Select value={selectedOperator} onValueChange={setSelectedOperator}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose operator" />
                    </SelectTrigger>
                    <SelectContent>
                      {operators.map((operator) => (
                        <SelectItem key={operator.id} value={operator.id.toString()}>
                          {operator.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Remark Type</Label>
                  <Select value={remarkType} onValueChange={setRemarkType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appreciation">Appreciation</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="improvement">Needs Improvement</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Priority Level</Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Remark Details</Label>
                <Textarea
                  placeholder="Provide detailed feedback or remarks..."
                  value={remarkText}
                  onChange={(e) => setRemarkText(e.target.value)}
                  rows={4}
                />
              </div>
              
              <Button onClick={handleSubmitRemark} className="w-full">
                Submit Remark
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Operators Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5" />
            <span>Current Operators</span>
          </CardTitle>
          <CardDescription>Overview of all operators and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {operators.map((operator) => (
              <div key={operator.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={operator.avatar} />
                    <AvatarFallback>{operator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{operator.name}</h4>
                    <p className="text-sm text-muted-foreground truncate">{operator.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(operator.status)}>
                    {operator.status}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {getPerformanceIcon(operator.performance)}
                    <span className="text-sm capitalize">{operator.performance.replace('_', ' ')}</span>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Remarks:</span>
                    <span className="font-medium">{operator.totalRemarks}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Active:</span>
                    <span>{operator.lastActive}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Remarks History */}
      <Card>
        <CardHeader>
          <CardTitle>Remarks History</CardTitle>
          <CardDescription>View and manage all operator remarks</CardDescription>
          
          <div className="flex space-x-4 mt-4">
            <Input
              placeholder="Search remarks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="appreciation">Appreciation</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="improvement">Needs Improvement</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRemarks.map((remark) => (
              <div key={remark.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium">{remark.operatorName}</h4>
                    <Badge variant="outline" className="capitalize">
                      {remark.type.replace('_', ' ')}
                    </Badge>
                    <Badge className={getPriorityColor(remark.priority)}>
                      {remark.priority} priority
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{remark.date}</span>
                    <Badge variant={remark.status === "acknowledged" ? "default" : "secondary"}>
                      {remark.status}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">{remark.remark}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}