
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Downloads = () => {
  const downloads = [
    {
      title: "Manager Manual (PDF)",
    }
  ];

  const handleDownload = (title) => {
    toast({
      title: "🚧 Download not available yet",
      description: "This feature isn't implemented yet. Files will be served from the /public/docs folder.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Downloads | Marketing Engineer</title>
        <meta name="description" content="Download resume and manager manual PDFs." />
      </Helmet>

      <div className="py-20 space-y-[12vh]">
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Downloads</h1>
            <p className="text-muted-foreground text-sm">Updated automatically from /public/docs folder.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {downloads.map((item, index) => (
              <motion.div
                key={index}
                className="p-8 border border-border rounded-lg text-center"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <FileText className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <motion.div whileHover={{ y: -2 }}>
                    <Button
                        onClick={() => handleDownload(item.title)}
                        variant="outline"
                        className="rounded-md"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                    </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Downloads;
