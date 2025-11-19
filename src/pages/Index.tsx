import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Users, Heart, Package, Clock, Shield, Smartphone, Star, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";
import customersImage from "@/assets/happy-customers.jpg";
import appImage from "@/assets/app-interface.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <span className="text-secondary font-semibold">Premium Delivery Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              One Order, Multiple Stores,<br />
              <span className="text-secondary">Zero Stress</span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-primary-foreground/90 font-light">
              You Shop. We Run. You Receive.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-secondary text-secondary-foreground hover:shadow-glow transition-all duration-300 text-lg px-10 py-7 rounded-xl font-semibold hover:scale-105"
              >
                Download App Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-lg px-10 py-7 rounded-xl font-semibold hover:scale-105"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
                <div className="text-sm text-primary-foreground/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-primary-foreground/80">Active Runners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
                <div className="text-sm text-primary-foreground/80">Deliveries Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How It <span className="text-secondary">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">Simple, fast, and efficient</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-10 text-center hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-2 border-2 hover:border-secondary/30 bg-white">
              <div className="bg-gradient-secondary text-secondary-foreground w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <ShoppingCart size={40} />
              </div>
              <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">You Shop</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose what you need from any stores within the same shopping center. Groceries, takeout, pharmacy items, gifts… you name it!
              </p>
            </Card>

            <Card className="p-10 text-center hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-2 border-2 hover:border-secondary/30 bg-white">
              <div className="bg-gradient-primary text-primary-foreground w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-premium">
                <Users size={40} />
              </div>
              <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">We Run</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your personal Runner shops from multiple stores in one go — saving you time, fuel, and multiple delivery fees.
              </p>
            </Card>

            <Card className="p-10 text-center hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-2 border-2 hover:border-secondary/30 bg-white">
              <div className="bg-gradient-secondary text-secondary-foreground w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Heart size={40} />
              </div>
              <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">You Receive</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track your delivery in real time and get your order delivered fast — with a smile.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose <span className="text-secondary">Send Me Pls</span>
            </h2>
            <p className="text-xl text-muted-foreground">Redefining the Art of Personalized Shopping</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white border-2 hover:border-secondary/20">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Package className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Multi Store Shopping</h3>
              <p className="text-muted-foreground">One order. Multiple stores. Sorted in a single trip.</p>
            </Card>

            <Card className="p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white border-2 hover:border-secondary/20">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Personal Shopper</h3>
              <p className="text-muted-foreground">Your Runner specializes in personalized shopping and delivery.</p>
            </Card>

            <Card className="p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white border-2 hover:border-secondary/20">
              <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Transparent Pricing</h3>
              <p className="text-muted-foreground">Clear costs upfront. No hidden fees, no surprises.</p>
            </Card>

            <Card className="p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1 bg-white border-2 hover:border-secondary/20">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Community Driven</h3>
              <p className="text-muted-foreground">Local Runners supporting their communities every day.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Section with Image */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <img
                src={customersImage}
                alt="Happy customers"
                className="rounded-3xl shadow-premium-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
                <span className="text-secondary font-semibold">Customer Satisfaction</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Loved by Thousands<br />
                <span className="text-secondary">Across South Africa</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join our growing community of satisfied customers who save time and money with every order.
                Experience the convenience of having a personal shopper at your fingertips.
              </p>
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-secondary fill-secondary" size={32} />
                ))}
                <span className="ml-2 text-2xl font-bold text-foreground">4.9/5.0</span>
              </div>
              <Button
                size="lg"
                className="bg-gradient-secondary text-secondary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold"
              >
                Start Shopping Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              If It Fits in a Car or Bike,<br />
              <span className="text-secondary">Your Runner Can Fetch It</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Groceries from your favourite local supermarkets",
              "Meals from restaurants & takeaways",
              "Gifts, flowers, and special-occasion treats",
              "Pet supplies, pharmacy items, and more"
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="bg-gradient-secondary text-secondary-foreground w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
                <span className="text-secondary font-semibold">Download Our App</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Experience Premium<br />
                <span className="text-secondary">Shopping on the Go</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Download our beautifully designed app and enjoy seamless shopping from multiple stores.
                Track your orders in real-time and communicate directly with your Runner.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Smartphone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Real-time Tracking</h4>
                    <p className="text-muted-foreground">Know exactly where your order is</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Fast Delivery</h4>
                    <p className="text-muted-foreground">Get your items within hours</p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gradient-secondary text-secondary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold"
              >
                Download Now
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src={appImage}
                alt="App interface"
                className="rounded-3xl shadow-premium-lg max-w-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="font-semibold">Join Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Become A Runner</h2>
            <p className="text-2xl mb-8 font-light">Your Needs, Delivered - Fast</p>
            <p className="text-xl mb-10 opacity-90">
              Our Runners cater to on-demand shopping from multiple stores.
              Start earning on your own schedule today!
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-3 border-white text-white bg-transparent hover:bg-white hover:text-secondary transition-all duration-300 text-lg px-10 py-7 rounded-xl font-semibold hover:scale-105"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Award className="text-secondary mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-foreground mb-2">Award Winning</div>
              <p className="text-muted-foreground">Service Excellence</p>
            </div>
            <div className="text-center">
              <TrendingUp className="text-primary mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-foreground mb-2">98%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <Clock className="text-secondary mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-foreground mb-2">&lt; 2 Hours</div>
              <p className="text-muted-foreground">Average Delivery Time</p>
            </div>
            <div className="text-center">
              <Shield className="text-primary mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold text-foreground mb-2">100%</div>
              <p className="text-muted-foreground">Secure Payments</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
