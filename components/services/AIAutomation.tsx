"use client";



import { motion } from "framer-motion";

import { Workflow, Cpu, Database } from "lucide-react";



const services = [

  {

    title: "Workflow Automation Systems",

    description: "Replace repetitive manual tasks with custom automation workflows that connect your apps, reduce errors, and save time.",

    icon: Workflow,

    deliverables: [

      "Visual mapping of existing processes",

      "Custom-built workflows using tools like Zapier, Make.com, or custom code",

      "Integration with your tech stack for end-to-end automation"

    ],

    timeline: "3-5 weeks"

  },

  {

    title: "Custom AI Automation Systems",

    description: "Develop AI-driven systems that automate complex, multi-step business operations tailored to your needs.",

    icon: Cpu,

    deliverables: [

      "AI-powered solutions for lead qualification to inventory management",

      "Integration with ERP, CRM, or proprietary systems",

      "Scalable automation processes with real-time tracking"

    ],

    timeline: "6-8 weeks"

  },

  {

    title: "Intelligent Business Operations",

    description: "Streamline your entire business with advanced AI automation, reducing costs and maximizing output.",

    icon: Database,

    deliverables: [

      "Full audit and process mapping for identifying automation opportunities",

      "Automated solutions for invoicing, HR processes, and supply chain",

      "Performance dashboards for ongoing optimization"

    ],

    timeline: "8-10 weeks"

  }

];



export function AIAutomation() {

  return (

    <section className="py-24 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="absolute inset-0 grid-overlay opacity-10" />

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.6 }}

          className="text-center mb-16"

        >

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">

            Automate Everything.<br />Focus on What Matters.

          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">

            We identify your bottlenecks and replace them with intelligent, automated workflows 

            for seamless, cost-effective operations.

          </p>

        </motion.div>



        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div

              key={service.title}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.6, delay: index * 0.1 }}

              className="relative group"

            >

              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-200" />

              <div className="relative dark-card p-8 rounded-2xl h-full">

                <service.icon className="w-12 h-12 text-purple-500 mb-6" />

                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>

                <p className="text-gray-400 mb-6">{service.description}</p>

                

                <div className="space-y-4 mb-6">

                  <h4 className="text-lg font-semibold text-white">Deliverables:</h4>

                  <ul className="space-y-2">

                    {service.deliverables.map((item, i) => (

                      <li key={i} className="text-gray-400 flex items-start">

                        <span className="text-purple-500 mr-2">•</span>

                        {item}

                      </li>

                    ))}

                  </ul>

                </div>

                

                <div className="space-y-2">

                  <p className="text-gray-400">

                    <span className="text-white font-semibold">Timeline:</span> {service.timeline}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}