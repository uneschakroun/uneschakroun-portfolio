import { Download, ArrowLeft, Image } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ServicePDFProps {
  onBack: () => void;
}

export function ServicePDF({ onBack }: ServicePDFProps) {
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!pdfRef.current) return;

    try {
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Get all sections
      const sections = pdfRef.current.querySelectorAll('.pdf-section');
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        // Capture section as canvas with higher quality
        const canvas = await html2canvas(section, {
          scale: 3,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: section.scrollWidth,
          windowHeight: section.scrollHeight
        });

        const imgData = canvas.toDataURL('image/png', 1.0);
        
        // Add new page if not first section
        if (i > 0) {
          pdf.addPage();
        }

        // Add image to PDF - fill entire page
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      }

      // Download PDF
      pdf.save('Services-Design-Freelance.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleDownloadJPG = async () => {
    if (!pdfRef.current) return;

    try {
      // Get all sections
      const sections = pdfRef.current.querySelectorAll('.pdf-section');
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        // Capture section as canvas with higher quality
        const canvas = await html2canvas(section, {
          scale: 3,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: section.scrollWidth,
          windowHeight: section.scrollHeight
        });

        // Convert to JPG
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        // Create download link
        const link = document.createElement('a');
        link.download = `Services-Design-Freelance-Page${i + 1}.jpg`;
        link.href = imgData;
        link.click();
        
        // Small delay between downloads
        if (i < sections.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error) {
      console.error('Error generating JPG:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black py-16">
      {/* Action Buttons - Hidden when printing */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 mb-8">
        <div className="flex items-center justify-between gap-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-white/60 hover:text-[#c1ff72] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm">Retour</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleDownload}
            className="flex items-center gap-3 bg-[#c1ff72] text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#b0ee61] transition-colors"
          >
            <Download className="w-5 h-5" />
            Télécharger PDF
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleDownloadJPG}
            className="flex items-center gap-3 bg-[#c1ff72] text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#b0ee61] transition-colors"
          >
            <Image className="w-5 h-5" />
            Télécharger JPG
          </motion.button>
        </div>
      </div>

      {/* A4 PDF Content */}
      <div ref={pdfRef} className="container mx-auto max-w-[210mm] shadow-2xl" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
        
        {/* Page 1 */}
        <div className="pdf-section" style={{ width: '210mm', height: '297mm', padding: '15mm', backgroundColor: '#ffffff', boxSizing: 'border-box' }}>
          
          {/* Header */}
          <div style={{ borderBottom: '4px solid #000000', paddingBottom: '20px', marginBottom: '28px' }}>
            <h1 style={{ fontSize: '42px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '-0.5px', marginBottom: '6px', color: '#000000', lineHeight: '1.1' }}>
              Services de Design
            </h1>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '-0.5px', marginBottom: '14px', color: '#d1d5db', lineHeight: '1.1' }}>
              Freelance
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ height: '3px', width: '50px', backgroundColor: '#c1ff72' }}></div>
              <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#6b7280', margin: '0' }}>
                Collaboration créative basée sur des projets
              </p>
            </div>
          </div>

          {/* Service Overview */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '12px', color: '#000000', lineHeight: '1.2' }}>
              <span style={{ color: '#c1ff72', marginRight: '8px' }}>01.</span>Vue d'ensemble du service
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.65', fontSize: '14px', margin: '0' }}>
              Un service de design flexible basé sur des projets où vous payez par projet, 
              pas à l'heure. Nous collaborons chaque mois pour discuter de vos objectifs 
              et de votre budget. Transparence et alignement garantis à chaque étape. 
              Aucun engagement à long terme requis.
            </p>
          </div>

          {/* How It Works */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '12px', color: '#000000', lineHeight: '1.2' }}>
              <span style={{ color: '#c1ff72', marginRight: '8px' }}>02.</span>Comment ça marche
            </h3>
            <table style={{ width: '100%', borderSpacing: '0 12px', borderCollapse: 'separate' }}>
              <tbody>
                <tr>
                  <td style={{ width: '28px', verticalAlign: 'top', paddingRight: '12px' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      backgroundColor: '#000000', 
                      color: '#c1ff72', 
                      textAlign: 'center',
                      fontWeight: 'bold', 
                      fontSize: '14px',
                      paddingTop: '7px',
                      boxSizing: 'border-box'
                    }}>
                      1
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: '#000000', margin: '0 0 3px 0' }}>Réunion mensuelle de planification</h4>
                    <p style={{ color: '#4b5563', fontSize: '12px', lineHeight: '1.5', margin: '0' }}>
                      Nous nous rencontrons chaque mois pour parler de vos objectifs, des projets à venir et du budget.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '28px', verticalAlign: 'top', paddingRight: '12px' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      backgroundColor: '#000000', 
                      color: '#c1ff72', 
                      textAlign: 'center',
                      fontWeight: 'bold', 
                      fontSize: '14px',
                      paddingTop: '7px',
                      boxSizing: 'border-box'
                    }}>
                      2
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: '#000000', margin: '0 0 3px 0' }}>Portée et tarification du projet</h4>
                    <p style={{ color: '#4b5563', fontSize: '12px', lineHeight: '1.5', margin: '0' }}>
                      Chaque projet est défini et tarifé individuellement selon sa complexité et ses livrables.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '28px', verticalAlign: 'top', paddingRight: '12px' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      backgroundColor: '#000000', 
                      color: '#c1ff72', 
                      textAlign: 'center',
                      fontWeight: 'bold', 
                      fontSize: '14px',
                      paddingTop: '7px',
                      boxSizing: 'border-box'
                    }}>
                      3
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: '#000000', margin: '0 0 3px 0' }}>Design et livraison</h4>
                    <p style={{ color: '#4b5563', fontSize: '12px', lineHeight: '1.5', margin: '0' }}>
                      Je travaille sur vos projets avec des mises à jour régulières et je livre des résultats de haute qualité dans les délais.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '28px', verticalAlign: 'top', paddingRight: '12px' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      backgroundColor: '#000000', 
                      color: '#c1ff72', 
                      textAlign: 'center',
                      fontWeight: 'bold', 
                      fontSize: '14px',
                      paddingTop: '7px',
                      boxSizing: 'border-box'
                    }}>
                      4
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: '#000000', margin: '0 0 3px 0' }}>Continuation flexible</h4>
                    <p style={{ color: '#4b5563', fontSize: '12px', lineHeight: '1.5', margin: '0' }}>
                      Continuez, mettez en pause ou ajustez le partenariat à tout moment selon vos besoins.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* What You Get */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '12px', color: '#000000', lineHeight: '1.2' }}>
              <span style={{ color: '#c1ff72', marginRight: '8px' }}>03.</span>Ce que vous obtenez
            </h3>
            <table style={{ width: '100%', borderSpacing: '0', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ width: '50%', padding: '4px 10px 4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Design d'identité de marque</span>
                  </td>
                  <td style={{ width: '50%', padding: '4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Matériel marketing</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '50%', padding: '4px 10px 4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Design de logo et variations</span>
                  </td>
                  <td style={{ width: '50%', padding: '4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Supports print et digital</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '50%', padding: '4px 10px 4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Systèmes d'identité visuelle</span>
                  </td>
                  <td style={{ width: '50%', padding: '4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Chartes graphiques</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '50%', padding: '4px 10px 4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Contenu pour réseaux sociaux</span>
                  </td>
                  <td style={{ width: '50%', padding: '4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Design de packaging</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: '50%', padding: '4px 10px 4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Design Instagram</span>
                  </td>
                  <td style={{ width: '50%', padding: '4px 0', verticalAlign: 'top' }}>
                    <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#c1ff72', borderRadius: '50%', marginRight: '8px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontSize: '12px', color: '#374151', lineHeight: '1.4' }}>Design environnemental</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pricing Structure */}
          <div style={{ backgroundColor: '#f9fafb', padding: '18px', borderLeft: '4px solid #c1ff72' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '12px', color: '#000000', lineHeight: '1.2', margin: '0 0 12px 0' }}>
              <span style={{ color: '#c1ff72', marginRight: '8px' }}>04.</span>Structure tarifaire
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: '#000000' }}>Mode de paiement</span>
                <span style={{ color: '#374151', fontSize: '12px' }}>Par projet</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: '#000000' }}>Cycle de facturation</span>
                <span style={{ color: '#374151', fontSize: '12px' }}>Discussion mensuelle</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: '#000000' }}>Base du devis</span>
                <span style={{ color: '#374151', fontSize: '12px' }}>Portée et livrables</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', color: '#000000' }}>Durée du contrat</span>
                <span style={{ color: '#374151', fontSize: '12px' }}>Flexible / Sans minimum</span>
              </div>
            </div>
          </div>

        </div>

        {/* Page 2 */}
        <div className="pdf-section" style={{ width: '210mm', height: '297mm', padding: '15mm', backgroundColor: '#ffffff', boxSizing: 'border-box' }}>

          {/* Key Benefits */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '14px', color: '#000000', lineHeight: '1.2' }}>
              <span style={{ color: '#c1ff72', marginRight: '8px' }}>05.</span>Avantages clés
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '14px' }}>
                <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '11px', marginBottom: '6px', color: '#c1ff72', margin: '0 0 6px 0' }}>Pas de tarif horaire</h4>
                <p style={{ fontSize: '11px', lineHeight: '1.5', color: '#d1d5db', margin: '0' }}>
                  Tarification fixe par projet, pas de surprises. Vous savez exactement ce que vous payez.
                </p>
              </div>
              <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '14px' }}>
                <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '11px', marginBottom: '6px', color: '#c1ff72', margin: '0 0 6px 0' }}>Transparence totale</h4>
                <p style={{ fontSize: '11px', lineHeight: '1.5', color: '#d1d5db', margin: '0' }}>
                  Les réunions mensuelles assurent une communication claire et des attentes alignées.
                </p>
              </div>
              <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '14px' }}>
                <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '11px', marginBottom: '6px', color: '#c1ff72', margin: '0 0 6px 0' }}>Pause à tout moment</h4>
                <p style={{ fontSize: '11px', lineHeight: '1.5', color: '#d1d5db', margin: '0' }}>
                  Besoin d'une pause ? Suspendez votre abonnement sans pénalité ni engagement.
                </p>
              </div>
              <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '14px' }}>
                <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '11px', marginBottom: '6px', color: '#c1ff72', margin: '0 0 6px 0' }}>Contrôle du budget</h4>
                <p style={{ fontSize: '11px', lineHeight: '1.5', color: '#d1d5db', margin: '0' }}>
                  Planifiez votre budget design mensuellement et ajustez selon vos besoins.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose This Service */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '14px', color: '#000000', lineHeight: '1.2' }}>
              <span style={{ color: '#c1ff72', marginRight: '8px' }}>06.</span>Pourquoi choisir ce service
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '13px', margin: '0' }}>
                <span style={{ fontWeight: 'bold', color: '#000000' }}>Flexibilité maximale :</span> Adaptez la collaboration à vos besoins. Augmentez ou réduisez les projets selon votre activité.
              </p>
              <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '13px', margin: '0' }}>
                <span style={{ fontWeight: 'bold', color: '#000000' }}>Qualité garantie :</span> Chaque projet est réalisé avec attention aux détails et respect des standards professionnels les plus élevés.
              </p>
              <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '13px', margin: '0' }}>
                <span style={{ fontWeight: 'bold', color: '#000000' }}>Communication directe :</span> Vous travaillez directement avec moi, senior designer expérimenté, sans intermédiaires.
              </p>
              <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '13px', margin: '0' }}>
                <span style={{ fontWeight: 'bold', color: '#000000' }}>Expertise régionale :</span> Connaissance approfondie des marchés Morocco, KSA et UAE avec une approche culturellement adaptée.
              </p>
            </div>
          </div>

          {/* Footer / Contact */}
          <div style={{ borderTop: '2px solid #e5e7eb', paddingTop: '20px', marginTop: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '30px' }}>
              <div style={{ flex: '1' }}>
                <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px', marginBottom: '6px', color: '#000000', margin: '0 0 6px 0' }}>Prêt à commencer ?</h4>
                <p style={{ fontSize: '11px', color: '#4b5563', marginBottom: '3px', margin: '0 0 3px 0' }}>Discutons de votre prochain projet</p>
                <p style={{ fontSize: '11px', color: '#4b5563', marginBottom: '12px', margin: '0 0 12px 0' }}>et créons quelque chose d'exceptionnel ensemble.</p>
                <div>
                  <span style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', display: 'block' }}>Portfolio</span>
                  <div style={{ 
                    backgroundColor: '#000000', 
                    color: '#c1ff72', 
                    padding: '8px 14px', 
                    fontSize: '11px', 
                    fontWeight: 'bold', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.5px', 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1'
                  }}>
                    www.uneschakroun.ink
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right', flex: '0 0 auto' }}>
                <div style={{ 
                  backgroundColor: '#c1ff72', 
                  color: '#000000', 
                  padding: '8px 14px', 
                  fontWeight: 'bold', 
                  textTransform: 'uppercase', 
                  fontSize: '11px', 
                  letterSpacing: '0.5px', 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  lineHeight: '1'
                }}>
                  Contactez-moi
                </div>
                <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '8px', margin: '8px 0 4px 0' }}>Senior Designer • Morocco • KSA & UAE</p>
                <p style={{ fontSize: '11px', color: '#4b5563', marginTop: '4px', margin: '0' }}>uneschakroun@gmail.com</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}