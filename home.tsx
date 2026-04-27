import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { env } from "../lib/env";

export function Home() {
  return (
    <main className="space-y-16 max-w-7xl mx-auto p-6 sm:p-8">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#26170e] sm:text-5xl">
          {env.appName} - Expert Bubble Development
        </h1>
        <p className="text-lg text-[#6f5b4a] leading-relaxed">
          Elevate your workflows with custom Bubble.io solutions crafted by our dedicated agency.
          Fast, reliable, and tailored to your unique business needs.
        </p>
        <Button asChild size="lg" className="bg-[#ff6b4a] text-white hover:bg-[#d94828] px-8">
          <Link to="#services">Get Started Today</Link>
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="grid gap-8 md:grid-cols-3">
        <Card className="border-[#f1ddc9] bg-[#fffaf2]">
          <CardHeader>
            <CardTitle className="text-xl text-[#26170e]">Custom Bubble Apps</CardTitle>
            <CardDescription className="text-[#6f5b4a]">
              Build tailored solutions using Bubble's no-code platform to streamline your business.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-[#6f5b4a]">
            From MVPs to complex workflows, we deliver fully functional apps without traditional coding.
          </CardContent>
        </Card>

        <Card className="border-[#f1ddc9] bg-[#fffaf2]">
          <CardHeader>
            <CardTitle className="text-xl text-[#26170e]">Workflow Automation</CardTitle>
            <CardDescription className="text-[#6f5b4a]">Optimize your processes with smart automation and integrations.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-[#6f5b4a]">
            Connect Bubble with your favorite services to automate tasks and improve efficiency.
          </CardContent>
        </Card>

        <Card className="border-[#f1ddc9] bg-[#fffaf2]">
          <CardHeader>
            <CardTitle className="text-xl text-[#26170e]">Consultation & Support</CardTitle>
            <CardDescription className="text-[#6f5b4a]">Get expert advice and ongoing support to help your app thrive.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-[#6f5b4a]">
            We partner with you post-launch to enhance, scale, and maintain your Bubble solution.
          </CardContent>
        </Card>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-center text-3xl font-bold text-[#26170e]">What Our Clients Say</h2>
        <div className="space-y-6">
          <Card className="border-[#f1ddc9] bg-[#fffaf2]">
            <CardContent className="text-[#6f5b4a] text-sm italic">
              “The Runtime Lab team transformed our idea into a powerful app without writing a line of code.
              Their expertise in Bubble saved us months and thousands of dollars.”
            </CardContent>
            <CardHeader className="pt-3">
              <CardTitle className="text-[#26170e] text-base">Jane D., Startup Founder</CardTitle>
            </CardHeader>
          </Card>
          <Card className="border-[#f1ddc9] bg-[#fffaf2]">
            <CardContent className="text-[#6f5b4a] text-sm italic">
              “Professional, responsive, and incredibly skilled. Our workflow automation increased efficiency by 50% after partnering with Runtime Lab.”
            </CardContent>
            <CardHeader className="pt-3">
              <CardTitle className="text-[#26170e] text-base">Mark S., Operations Manager</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Button asChild size="lg" className="bg-[#ff6b4a] text-white hover:bg-[#d94828] px-10 py-4">
          <Link to="#contact">Start Your Project Now</Link>
        </Button>
      </section>
    </main>
  );
}