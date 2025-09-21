import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Hakkımda</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern workspace with multiple monitors and coding environment" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-foreground mb-6">Tutkum Teknoloji</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Son 3 yıldır çeşitli kurum ve kuruluşlarda robotik kodlama eğitimi vermekteyim ve kariyerimi 
                robotik ile yapay zeka alanlarında ilerletmeyi hedefliyorum.
              </p>
              <p>
                Üniversiteye başladığım zamandan bu yana birçok yapay zeka projesinde yer aldım. Bu projeler, 
                doğal dil işleme, görüntü işleme, veri bilimi ve ses işleme gibi alanlarla ilgiliydi.
              </p>
              <p>
                Genel olarak, yapay zeka kullanılarak geliştirilen ürünleri Jetson Nano, Raspberry Pi ve 
                Deneyap Kartı gibi çeşitli mini bilgisayarlarda sürdürülebilir bir ürün haline getirmeyi hedefliyorum.
              </p>
            </div>

            {/* Education Cards */}
            <div className="mt-8 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Balıkesir Üniversitesi</h4>
                  </div>
                  <p className="text-muted-foreground">Bilgisayar Mühendisliği • 2021-2024 • GANO: 2.78</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Uludağ Üniversitesi</h4>
                  </div>
                  <p className="text-muted-foreground">Bilgisayar Programcılığı • 2019-2021 • GANO: 3.28</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
