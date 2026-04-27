import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

export function Home() {
  return (
    <main className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 px-6 rounded-2xl max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
          Build Your Dream Apps with Bubble Experts
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl font-light">
          Runtime Lab delivers fast, customizable Bubble development solutions to bring your ideas to life without code.
        </p>
        <Button asChild size="lg" className="mt-10 bg-white text-blue-700 font-semibold hover:bg-gray-100">
          <Link to="#contact">Get Started</Link>
        </Button>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border border-gray-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Custom Bubble Development</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Tailored no-code applications built to match your unique business needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Rapidly develop scalable, maintainable Bubble apps with expert guidance at every step.
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Integrations & Automation</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Connect and automate your workflows for increased efficiency and reduced manual tasks.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Leverage Bubble’s API and plugins to build powerful integrations suited to your ecosystem.
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Support & Training</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Ongoing support, troubleshooting, and end-user training so you get the most from your Bubble app.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              We empower your team with knowledge and solve issues quickly to keep your app running smoothly.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 px-6 rounded-2xl max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border border-gray-200 bg-white shadow-sm">
            <CardContent className="text-slate-800 italic">“Runtime Lab transformed our prototype into a fully functional app in a fraction of the time. Their Bubble expertise is outstanding.”</CardContent>
            <CardHeader className="mt-4">
              <CardTitle className="text-lg font-semibold text-slate-900">Jamie L.</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">Founder, Startup Inc.</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border border-gray-200 bg-white shadow-sm">
            <CardContent className="text-slate-800 italic">“Professional, responsive, and effective—our automation workflows built by Runtime Lab have saved us countless hours.”</CardContent>
            <CardHeader className="mt-4">
              <CardTitle className="text-lg font-semibold text-slate-900">Alicia M.</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">Operations Manager, Ecom Co.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Build Your App?</h2>
        <p className="text-lg mb-8 text-slate-700 max-w-xl mx-auto">
          Contact Runtime Lab today for a free consultation and let’s start bringing your ideas to life.
        </p>
        <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>
    </main>
  );
}