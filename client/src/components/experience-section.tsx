import { Briefcase, Presentation, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Deneyimlerim</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {/* Current Position */}
            <div className="relative flex items-center md:justify-between animate-on-scroll">
              <div className="flex items-center md:w-5/12">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                  <Briefcase className="text-primary-foreground h-4 w-4" />
                </div>
                <div className="ml-6 md:ml-0 md:text-right md:pr-8">
                  <Card>
                    <CardContent className="p-6">
                      <span className="text-primary font-semibold text-sm">2024 - Devam Ediyor</span>
                      <h3 className="text-xl font-bold text-foreground mt-1">Sürü Sistemleri Uzmanı</h3>
                      <p className="text-muted-foreground font-medium">Tusmec Robotik</p>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        ROS, Gazebo ve ArduPilot kullanarak farklı İKA ve İHA'ları heterojen ve otonom bir yapıda 
                        kullanabilmek amacıyla projeler geliştiriyorum.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Teaching Position */}
            <div className="relative flex items-center md:justify-between animate-on-scroll">
              <div className="flex items-center md:w-5/12 md:ml-auto">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full border-4 border-background flex items-center justify-center z-10">
                  <Presentation className="text-white h-4 w-4" />
                </div>
                <div className="ml-6">
                  <Card>
                    <CardContent className="p-6">
                      <span className="text-green-600 font-semibold text-sm">2021 - Devam Ediyor</span>
                      <h3 className="text-xl font-bold text-foreground mt-1">Robotik Kodlama Eğitmeni</h3>
                      <p className="text-muted-foreground font-medium">İhlas Vakfı & Tügva İcatHane</p>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        İlkokul ve ortaokul öğrencilerine Scratch, Python, mBlock, Arduino ve Micro:bit 
                        konularında robotik kodlama eğitimleri vermekteyim.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Internships */}
            <div className="relative flex items-center md:justify-between animate-on-scroll">
              <div className="flex items-center md:w-5/12">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full border-4 border-background flex items-center justify-center z-10">
                  <Laptop className="text-white h-4 w-4" />
                </div>
                <div className="ml-6 md:ml-0 md:text-right md:pr-8">
                  <Card>
                    <CardContent className="p-6">
                      <span className="text-purple-600 font-semibold text-sm">2022 - 2023</span>
                      <h3 className="text-xl font-bold text-foreground mt-1">Yazılım Geliştirici Stajyeri</h3>
                      <p className="text-muted-foreground font-medium">Selvi Teknoloji & Arvis Teknoloji</p>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        Veri etiketleme, görüntü birleştirme, otonom sürüş ve yapay zeka projeleri. 
                        Trafik kaza analizi ve araç hasar tespiti sistemleri geliştirdim.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
