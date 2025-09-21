import { Mail, User, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleNavClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          {/* Professional developer avatar */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold shadow-2xl">
            AY
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Abdulkadir Yeşilkaya
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Bilgisayar Mühendisi & Robotik Uzmanı
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Yapay zeka, robotik ve sürü sistemleri alanlarında uzmanlaşmış, 3+ yıllık eğitmenlik deneyimi olan bilgisayar mühendisi. 
            ROS, Python, Arduino ve İKA/İHA teknolojileri ile inovatif projeler geliştiriyorum.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => handleNavClick("contact")}
              className="smooth-transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail className="mr-2 h-4 w-4" />
              İletişime Geç
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleNavClick("about")}
              className="smooth-transition"
            >
              <User className="mr-2 h-4 w-4" />
              Hakkımda
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-10">
            <a 
              href="https://github.com/Abdulkadir2516" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-2xl smooth-transition"
            >
              <Github />
            </a>
            <a 
              href="https://linkedin.com/in/abdulkadir-yesilkaya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-2xl smooth-transition"
            >
              <Linkedin />
            </a>
            <a 
              href="mailto:abdulkadir7725@gmail.com"
              className="text-muted-foreground hover:text-primary text-2xl smooth-transition"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
