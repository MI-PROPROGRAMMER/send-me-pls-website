import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Us</h1>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground text-center mb-6">
              Send Me Pls is revolutionizing the way South Africans shop. We connect you with personal 
              shoppers who can run errands across multiple stores in a single trip, saving you time, 
              money, and hassle.
            </p>
            <p className="text-lg text-muted-foreground text-center">
              Our mission is to make personalized shopping accessible to everyone while creating earning 
              opportunities for local community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Team</h3>
              <p className="text-muted-foreground">
                A dedicated group of professionals committed to making your life easier through 
                innovative delivery solutions.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide fast, reliable, and personalized shopping services that save time 
                and support local communities.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, reliability, and community support drive everything we do. 
                Your satisfaction is our priority.
              </p>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Why We Started</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              We recognized that people are increasingly time-poor but need more from their shopping 
              experience. Whether it's picking up items from multiple stores, handling special requests, 
              or simply avoiding the crowds, Send Me Pls bridges the gap between convenience and 
              personalized service. We're proud to be a South African solution for South African needs.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
