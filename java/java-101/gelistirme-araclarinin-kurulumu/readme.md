# Geliştirme Araçlarının Kurulumu

## Eclipse IDE Kurulumu ve Mimarisi

Eclipse IDE, Java projeleri geliştirmenizi sağlayan bir geliştirici aracıdır. 2001 yılında IBM Kanada&#39;da hayatına başlamıştır. 2004 yılında kurulan Eclipse Vakfı (Foundation) ile ivme kazanarak Java geliştirme dünyasında en çok tercih edilen geliştirme ortamlarından biri haline geldi. Bizler de eğitim sürecinde Eclipse geliştirme aracını kullanacağız. Eclipse, Eclipse Public License (EPL) isimli açık kaynak kod lisansına sahiptir. Ücretsiz bir dağıtımdır. Oldukça fazla plug-in desteğine sahiptir. Eclipse&#39;in sahip olduğu arayüz (Standard Widget Toolkit) SWT isimli teknoloji ile geliştirilmiştir. Eclipse plug-in&#39;lere dayalı bir mimariye sahiptir.

Not: IDE, bütünleşik geliştirme ortamı anlamına gelmektedir.

#### Eclipse Mimarisi

Eclipse temel bir platform üzerinde, tüm yeni işlevleri ve özellikleri bu temel alt yapı üzerine eklenen eklentiler (plug-in) ile sağlanmaktadır. Böylece modüler bir mimariye sahiptir. Eclipse modülerliğini sağlamakta olan altyapı OSGi standartlarındaki &quot;Equinox&quot; yazılım altyapısıdır.

![Eclipse Mimarisi](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java/java-101/gelistirme-araclarinin-kurulumu/figures/jdk-kurulumu-12.jpg)

Yukarıdaki mimaride de görüleceği üzere Eclipse Platform adı altında ana bir altyapıdan oluşur. SWT, JFace gibi teknolojiler bu çekirdek yapı içinde yer alır. Platform Runtime katmanı ise OSGi ile var olan Equinox altyapısını sağlar. Equinox ile eklentiler sisteme entegre edilip çalıştırılabilir. Bu da eklenti tabanlı modüler bir mimarinin önünü açar.

Java Development Tooling bizlere kod düzenleme araçları, Java projeleri oluşturmak için gerekli araçları sağlar. Bu eklenti Eclipse çekirdek yapı içinde yer alan önemli bir eklentidir. &quot;New Tool&quot; isminde belirtilen modüller mimariye entegre edilebilen yazılım eklentileridir.

#### Eclipse Kurulumu

Aşağıdaki indirme linkinden dilediğiniz bir versiyonu, dilediğiniz işletim sistemi için indirebilirsiniz. Eclipse kurulumu çok basittir. İndirdiğiniz sıkıştırılmış dosya içinden çalıştırılabilir dosyalar çıkacaktır. Direkt çift tıklama ile Eclipse&#39;i çalıştırabilirsiniz.

İndirme linki: [https://www.eclipse.org/downloads/packages/](https://www.eclipse.org/downloads/packages/)

![Eclipse Kurulumu](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java/java-101/gelistirme-araclarinin-kurulumu/figures/jdk-kurulumu-13.jpg)
