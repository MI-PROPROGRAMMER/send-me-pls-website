import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Clock, MapPin, Smartphone } from "lucide-react";

const BecomeRunner = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Runner</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community of Runners and start earning on your own schedule
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Download Runner App
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Earn Extra Income</h3>
              <p className="text-muted-foreground">
                Make money on your own schedule. The more you run, the more you earn.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Hours</h3>
              <p className="text-muted-foreground">
                Work when it suits you. Choose your own hours and availability.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Work</h3>
              <p className="text-muted-foreground">
                Stay in your community. All runs are in your local area.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy to Use App</h3>
              <p className="text-muted-foreground">
                Simple app interface. Accept jobs, navigate, and get paid seamlessly.
              </p>
            </Card>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="opacity-90">Download the Runner app and complete your registration</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Accept Jobs</h3>
                <p className="opacity-90">Choose which shopping runs you want to complete</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Get Paid</h3>
                <p className="opacity-90">Complete deliveries and receive payment directly to your account</p>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Requirements</h2>
            <ul className="max-w-2xl mx-auto space-y-4">
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  ✓
                </span>
                <span>Valid South African ID or work permit</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  ✓
                </span>
                <span>Smartphone with internet access</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  ✓
                </span>
                <span>Reliable vehicle (car, bike, or motorcycle)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  ✓
                </span>
                <span>Valid driver's license (if using motorized vehicle)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  ✓
                </span>
                <span>18 years or older</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BecomeRunner;
