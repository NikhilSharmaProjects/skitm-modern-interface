import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, User, Calendar, CheckCircle, Download, BookOpen, Landmark, Building, GraduationCap, BadgeDollarSign } from 'lucide-react';

const Scholarships = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Scholarships & Fee Structure - SKITM</title>
        <meta
          name="description"
          content="Explore scholarships, eligibility, and fee structure at SKITM, including special and merit scholarships for outstanding students."
        />
        <meta
          name="keywords"
          content="SKITM scholarships, fee structure, merit scholarships, sports scholarships, SKITM fees"
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={headingRef}
            className="text-center mb-16 animate-fade-in"
          >
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-skitm-blue/10 rounded-full text-skitm-blue">
              Financial Assistance
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-skitm-navy mb-6">
              Scholarships & Fee Structure
            </h1>
            <p className="text-lg text-skitm-gray max-w-2xl mx-auto">
              Supporting talented students through genuine SKITM scholarships and transparent fee structure for AY 2025-26.
            </p>
          </div>
          
          {/* Scholarships Section */}
          <div className="glassmorphism rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-6 text-center">
              Scholarships
            </h2>

            <h3 className="text-xl font-bold text-skitm-blue mb-3">Special scholarships through an application</h3>
            <p className="text-skitm-gray mb-4">
              We award special scholarships for achievers or outstanding all-round performers in diverse fields. You may be eligible for a scholarship if you meet any of the following criteria:
            </p>
            <ul className="list-disc list-inside text-skitm-gray space-y-2 mb-4">
              <li><b>Academic Excellence:</b> State-level, board level, or national level rank holder in academics.</li>
              <li>
                <b>SKITM Sports Scholarships:</b> For international/national/state level award winners, provided the applicant has participated or is a rank holder under the School Games Federation of India (SGFI), or has represented any member association of The Indian Olympic Association (IOA). Only sports recognized by SGFI or IOA will be considered.
              </li>
              <li>
                <b>Other Achievements:</b> National/state level achievers in fields other than academics or sports.
              </li>
            </ul>
            <p className="text-skitm-gray mb-8">
              <span className="font-semibold text-skitm-navy">Supporting documents</span> are mandatory to be considered for this scholarship.
            </p>

            <h3 className="text-xl font-bold text-skitm-blue mb-3">Merit scholarships for enrolled students</h3>
            <p className="text-skitm-gray mb-4">
              To encourage and reward exceptional academic performance, merit scholarships may be awarded to students enrolled in SKITM programs.
            </p>
            <ul className="list-disc list-inside text-skitm-gray mb-4 space-y-2">
              <li>The list of meritorious students is prepared based on annual academic performance at the end of every academic year.</li>
              <li>Eligible students, who are not on any other scholarship, shall be considered for the scholarship award for the remaining term of their program.</li>
            </ul>

            <h4 className="font-semibold text-skitm-blue mb-2 mt-6">Scholarship Conditions</h4>
            <ul className="list-disc list-inside text-skitm-gray space-y-2">
              <li>Scholarships are awarded for the full duration of the program.</li>
              <li>The Scholarship Committee will review the performance of every scholarship student each term. Continuation of the scholarship depends on maintaining an exceptional score every semester in the enrolled program.</li>
              <li>The scholarship amount is not paid directly to the student but is deducted from the term dues.</li>
              <li>If a scholarship student withdraws, the student must refund scholarship amounts already disbursed by SKITM.</li>
              <li>The Scholarship Committee reserves the right to alter, modify, or withdraw any provisions and policies at any time.</li>
              <li>If any of the recipient's information is found to be false or inaccurate during the program, the award will be withdrawn and the student will be liable for full payment of fees or immediate dismissal.</li>
            </ul>
          </div>
          
          {/* Introduction Section */}
          <div className="glassmorphism rounded-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-skitm-navy">Shivajirao Kadam Group of Institutions</h2>
              <ul className="space-y-2 mb-6 text-center">
                <li className="font-semibold text-skitm-navy">SHIVAJIRAO KADAM INSTITUTE OF TECHNOLOGY & MANAGEMENT</li>
                <li className="text-green-600 font-medium">(NAAC A Grade | An UGC Autonomous Institute)</li>
                <li className="font-semibold text-skitm-navy">SHIVAJIRAO KADAM INSTITUTE OF PHARMACEUTICAL EDU. & RESEARCH</li>
                <li className="font-semibold text-skitm-navy">COLLEGE OF PROFESSIONAL STUDIES-ATC</li>
                <li className="font-semibold text-skitm-navy">TRANSNATIONAL SCHOOL OF LAW</li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center">
                  <Award className="text-skitm-blue mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-skitm-navy mb-2">Merit-Based</h3>
                  <p className="text-sm text-skitm-gray">Scholarships based on JEE Percentile and academic performance</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <Users className="text-skitm-blue mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-skitm-navy mb-2">Institute Level</h3>
                  <p className="text-sm text-skitm-gray">Special scholarships for sports, single parents, girls, and more</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <Building className="text-skitm-blue mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-skitm-navy mb-2">Hostel Facility</h3>
                  <p className="text-sm text-skitm-gray">Accommodation available for both boys and girls</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Merit-Based Scholarship Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-8 text-center">
              Merit Scholarship cum Fees Structure for AY 2025-26
            </h2>
            <p className="text-center text-skitm-navy font-medium mb-4">(For MP Domicile Only)</p>
            
            {/* Engineering Programs */}
            <div className="glassmorphism rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="text-skitm-blue mr-3" size={28} />
                <h3 className="text-xl font-bold text-skitm-navy">Engineering Programs Fee Structure (in ₹)</h3>
              </div>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-skitm-blue/10">
                      <th className="border border-gray-300 px-2 py-3 text-left font-semibold text-skitm-navy">JEE Percentile</th>
                      <th className="border border-gray-300 px-2 py-3 text-left font-semibold text-skitm-navy">12/UG Percentage</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">CSE B.Tech. <br/>Including PRP</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">B.Tech. AIML <br/>Including PRP</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">B.Tech. IT/CSIT <br/>Including PRP</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">B.Tech. DS <br/>Including PRP</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">B.Tech. EC</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">B.Tech CE/ME</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/50">
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">Above 90</td>
                      <td className="border border-gray-300 px-2 py-2">Above 90</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">35,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">25,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">25,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">25,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">25,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">25,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">75-89.9</td>
                      <td className="border border-gray-300 px-2 py-2">85-89.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">70,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">65,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">63,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">60,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">30,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">34,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">60-74.9</td>
                      <td className="border border-gray-300 px-2 py-2">80-84.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">78,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">73,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">71,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">65,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">37,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">40,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">40-59.9</td>
                      <td className="border border-gray-300 px-2 py-2">75-79.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">83,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">76,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">74,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">71,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">41,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">46,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">30-39.9</td>
                      <td className="border border-gray-300 px-2 py-2">70-74.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">87,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">79,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">77,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">74,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">44,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">48,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">20-29.9</td>
                      <td className="border border-gray-300 px-2 py-2">65-69.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">89,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">82,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">80,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">77,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">47,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">50,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">Below 20</td>
                      <td className="border border-gray-300 px-2 py-2">Below 65</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">91,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">85,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">83,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">80,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">50,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">55,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-skitm-blue/10">
                      <th className="border border-gray-300 px-2 py-3 text-left font-semibold text-skitm-navy">Lateral Entry</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">CSE/EC</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">CE/ME</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/50">
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">Fee Structure</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">60,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">50,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-skitm-gray bg-gray-50 p-3 rounded">
                B.Tech Plus: Additional ₹35,000/Year (Optional) for International Study Tour & higher configuration laptop.
              </p>
            </div>
            
            {/* Other Programs */}
            <div className="glassmorphism rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-skitm-blue mr-3" size={28} />
                <h3 className="text-xl font-bold text-skitm-navy">Professional Programs Fee Structure (in ₹)</h3>
              </div>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-skitm-blue/10">
                      <th className="border border-gray-300 px-2 py-3 text-left font-semibold text-skitm-navy">12th/UG Percentage</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">BBA <br/>Including PRP</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">B.Pharm</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">D.Pharm</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">M.Pharm</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">B.Com <br/>Including PRP</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">IMBA <br/>Including PRP</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">MBA <br/>Including PRP</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/50">
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">Above 85</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">80,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">43,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">85,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">49,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">37,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">55,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">64,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">80-84.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">85,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">47,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">90,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">51,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">39,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">58,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">69,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">75-79.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">88,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">49,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">93,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">53,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">42,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">61,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">74,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">70-74.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">90,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">51,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">95,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">55,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">45,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">65,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">79,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">65-69.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">92,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">55,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">98,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">57,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">48,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">70,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">81,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">Below 65</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">95,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">60,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">100,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">60,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">50,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">75,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">84,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-skitm-blue/10">
                      <th className="border border-gray-300 px-2 py-3 text-left font-semibold text-skitm-navy">12th/UG Percentage</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">BALLB/BBA LLB</th>
                      <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-skitm-navy">LLB</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/50">
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">Above 85</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">50,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">33,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">80-84.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">55,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">35,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">75-79.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">60,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">38,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">70-74.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">65,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">40,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">65-69.9</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">70,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">42,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">Below 65</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">75,000</td>
                      <td className="border border-gray-300 px-2 py-2 text-center">45,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-3 mt-4 text-sm">
                <p className="text-skitm-gray bg-gray-50 p-3 rounded">
                  <strong>Additional PWC @ Rs. 50,000</strong> (Optional)
                </p>
                <p className="text-skitm-gray bg-gray-50 p-3 rounded">
                  <strong>For all other courses:</strong> Additional ₹1,05,000 (Optional) for International Study Tour & Tablet which can be equally divided in yearly fee.
                </p>
                <p className="text-skitm-gray bg-gray-50 p-3 rounded">
                  <strong>M.Pharm:</strong> Rs. 85,000/- fee for GPAT qualified students.
                </p>
                <p className="text-skitm-gray bg-gray-50 p-3 rounded">
                  <strong>Upgrade PRP for B.Tech, MBA, IMBA.BBA and B.Com.</strong>
                </p>
                <p className="text-skitm-gray bg-gray-50 p-3 rounded">
                  <strong>One Time Admission Fee:</strong> Rs.2,000/-
                </p>
              </div>
            </div>
            
            {/* Hostel Facility */}
            <div className="glassmorphism rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Building className="text-skitm-blue mr-3" size={28} />
                <h3 className="text-xl font-bold text-skitm-navy">Hostel Facility</h3>
              </div>
              
              <div className="bg-white/50 rounded-lg p-6">
                <p className="text-skitm-navy font-semibold mb-2">Hostel Fee (Boy's & Girl's): ₹80,000/-</p>
                <p className="text-sm text-skitm-gray">Comfortable accommodation with modern amenities for both boys and girls.</p>
              </div>
            </div>
          </div>
          
          {/* Institute Level Scholarships */}
          <div className="glassmorphism rounded-xl p-8 mb-16">
            <div className="flex items-center mb-8 justify-center">
              <BadgeDollarSign className="text-skitm-blue mr-3" size={28} />
              <h2 className="text-2xl font-display font-bold text-skitm-navy">Institute Level Scholarships</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 p-6 rounded-lg">
                <div className="flex items-start mb-2">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-skitm-navy">Sports Scholarship</h4>
                    <p className="text-sm text-skitm-gray">₹5,000/- (National Level) & ₹3,000/- (State Level) for all courses entry level only.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-lg">
                <div className="flex items-start mb-2">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-skitm-navy">Single Parent Scholarship</h4>
                    <p className="text-sm text-skitm-gray">₹5,000/- for students with no parents or single parent for during the course.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-lg">
                <div className="flex items-start mb-2">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-skitm-navy">Girl's Scholarship</h4>
                    <p className="text-sm text-skitm-gray">₹3,000/- for all girls' students during the course.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-lg">
                <div className="flex items-start mb-2">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-skitm-navy">EWS Scholarship</h4>
                    <p className="text-sm text-skitm-gray">₹5,000/- for students admitted under EWS category for during the course.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-lg">
                <div className="flex items-start mb-2">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-skitm-navy">Sibling Scholarship</h4>
                    <p className="text-sm text-skitm-gray">₹5,000/- for B.Tech & B.Pharm and ₹3,000/- for Professional Studies & D.Pharm entry level.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-lg">
                <div className="flex items-start mb-2">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-skitm-navy">Defence Service Scholarship</h4>
                    <p className="text-sm text-skitm-gray">Scholarship of ₹5,000/- for child of defence service employee entry level.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-lg md:col-span-2">
                <div className="flex items-start mb-2">
                  <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-skitm-navy">Full Payment Discount</h4>
                    <p className="text-sm text-skitm-gray">On one time Full annual fee deposit: 5% discount of Annual fee.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="glassmorphism rounded-xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-skitm-navy mb-4">
              Admission Helpline
            </h2>
            <div className="max-w-xl mx-auto space-y-3">
              <p className="text-skitm-gray">
                <strong>Phone:</strong> 0731-2995586
              </p>
              <p className="text-skitm-gray">
                <strong>Mobile:</strong> 9770907103, 9770907100
              </p>
              <p className="text-skitm-gray">
                <strong>Website:</strong> <a href="https://www.skitm.in" className="text-skitm-blue">www.skitm.in</a>
              </p>
              <p className="text-skitm-gray">
                <strong>Email:</strong> <a href="mailto:admissions@skitm.in" className="text-skitm-blue">admissions@skitm.in</a>
              </p>
              <p className="text-skitm-gray">
                <strong>Address:</strong> Near Ralamandal, Tillor Khurd Indore (M.P.) 452020
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="#" 
                className="inline-flex items-center bg-skitm-blue text-white px-6 py-3 rounded-md hover:bg-skitm-blue/80 transition-colors font-medium"
              >
                <Download size={18} className="mr-2" />
                Download Fee Structure
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Scholarships;
