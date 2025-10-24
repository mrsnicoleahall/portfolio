
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ReceiptModal from '@/components/ReceiptModal';

const ClaimCard = ({ kpi, statement, receipts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#00F5D4] dark:hover:border-[#00F5D4] transition-all cursor-pointer group"
        whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0, 245, 212, 0.15)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-3xl font-bold mb-3 creative-accent">
          {kpi}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {statement}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsModalOpen(true)}
          className="group-hover:border-[#00F5D4] group-hover:text-[#00F5D4]"
        >
          View Receipts
        </Button>
      </motion.div>

      <ReceiptModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        receipts={receipts}
      />
    </>
  );
};

export default ClaimCard;
