import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto-redirect to verifier dashboard
    navigate("/verifier/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Digital CA Platform</h1>
        <p className="text-xl text-muted-foreground">Verifier Dashboard</p>
        <Button onClick={() => navigate("/verifier/dashboard")}>
          Go to Verifier Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Index;
