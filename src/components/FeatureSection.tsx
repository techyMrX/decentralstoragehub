
import { Shield, Upload, Download, User, RefreshCw, Database } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-brand-purple" />,
    title: "Enhanced Security",
    description:
      "End-to-end encryption ensures your data remains private and secure from unauthorized access."
  },
  {
    icon: <Database className="h-8 w-8 text-brand-teal" />,
    title: "Distributed Storage",
    description:
      "Data is distributed across multiple nodes, eliminating single points of failure."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-brand-purple" />,
    title: "Redundancy",
    description:
      "Multiple copies of your data ensure availability even if some nodes go offline."
  },
  {
    icon: <Upload className="h-8 w-8 text-brand-teal" />,
    title: "Fast Uploads",
    description:
      "Optimized upload protocols ensure your data is stored quickly and efficiently."
  },
  {
    icon: <Download className="h-8 w-8 text-brand-purple" />,
    title: "Reliable Downloads",
    description:
      "Retrieve your files from the closest and fastest available nodes."
  },
  {
    icon: <User className="h-8 w-8 text-brand-teal" />,
    title: "Full User Control",
    description:
      "Maintain complete control over your data, including access permissions and sharing."
  }
];

const FeatureSection = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Platform Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our decentralized storage solution offers enhanced security, reliability, and control 
            over your valuable data assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:border-brand-purple/30 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
