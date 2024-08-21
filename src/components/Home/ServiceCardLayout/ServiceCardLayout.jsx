import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceCardLayout = ({ title, description, route }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-lg p-4 m-4 cursor-pointer border border-gray-200 hover:shadow-xl transition-all"
            onClick={() => navigate(route)}
        >
            <h3 className="text-2xl font-semibold text-customGray">{title}</h3>
            <p className="text-sm font-semibold text-gray-600 mt-2">{description}</p>
        </motion.div>
    );
};

export default ServiceCardLayout;
