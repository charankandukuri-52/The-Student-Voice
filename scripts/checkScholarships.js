require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const { ScholarshipModel } = require('../models/ScholarshipModel');

const MONGODB_URI = process.env.MONGODB_URI;

async function checkScholarships() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas');

        const scholarships = await ScholarshipModel.find();
        console.log(`Found ${scholarships.length} scholarships:`);
        scholarships.forEach((scholarship, index) => {
            console.log(`\n${index + 1}. ${scholarship.name}`);
            console.log(`   ID: ${scholarship.id}`);
            console.log(`   Provider: ${scholarship.provider}`);
            console.log(`   Type: ${scholarship.type}`);
            console.log(`   Category: ${scholarship.category}`);
            console.log(`   Amount: ${scholarship.amount}`);
        });

        await mongoose.disconnect();
        console.log('\nDisconnected from MongoDB');
    } catch (error) {
        console.error('Error:', error);
    }
}

checkScholarships(); 