import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Guide from './src/models/guide.model.js';

dotenv.config();

const guidesData = [
    {
        name: "Rajesh Sharma",
        bio: "Experienced trekking guide specializing in the Annapurna and Everest regions. Over 15 years of experience leading international groups.",
        photo: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80",
        languages: ["English", "Nepali", "Hindi"],
        specialties: ["Trekking & Hiking", "Photography Tours"],
        locations: ["Pokhara", "Kathmandu", "Everest Region", "Annapurna Region"],
        experienceYears: 15,
        pricing: {
            dailyRate: 40,
            currency: "USD"
        },
        contact: {
            email: "rajesh@example.com",
            phone: "+977-9841234567"
        },
        availability: "Available",
        averageRating: 4.9,
        totalReviews: 124,
        featured: true,
        isActive: true
    },
    {
        name: "Sita Thapa",
        bio: "Local cultural expert and licensed tour guide for the Kathmandu Valley. Passionate about sharing the rich history and traditions of Nepal.",
        photo: "https://images.unsplash.com/photo-1596484552431-a0d9440621453?auto=format&fit=crop&w=400&q=80",
        languages: ["English", "Nepali", "German"],
        specialties: ["Cultural Tours", "Spiritual & Religious", "Historical Sites"],
        locations: ["Kathmandu", "Patan"],
        experienceYears: 8,
        pricing: {
            dailyRate: 30,
            currency: "USD"
        },
        contact: {
            email: "sita@example.com",
            phone: "+977-9851234568"
        },
        availability: "Available",
        averageRating: 4.8,
        totalReviews: 86,
        featured: true,
        isActive: true
    },
    {
        name: "Mingma Sherpa",
        bio: "Certified mountain guide from the Solukhumbu region. Expert in technical climbing and high-altitude logistics. Certified by IFMGA.",
        photo: "https://images.unsplash.com/photo-1526715469143-6932463fb08d?auto=format&fit=crop&w=400&q=80",
        languages: ["English", "Sherpa", "Nepali"],
        specialties: ["Mountain Expeditions", "Trekking & Hiking"],
        locations: ["Everest Region", "Langtang"],
        experienceYears: 12,
        pricing: {
            dailyRate: 60,
            currency: "USD"
        },
        contact: {
            email: "mingma@example.com",
            phone: "+977-9861234569"
        },
        availability: "Limited Availability",
        averageRating: 5.0,
        totalReviews: 42,
        featured: false,
        isActive: true
    },
    {
        name: "Deepak Giri",
        bio: "Wildlife specialist and certified naturalist guide in Chitwan National Park. Expert in bird watching and jungle safari.",
        photo: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=400&q=80",
        languages: ["English", "Nepali"],
        specialties: ["Wildlife & Nature", "Adventure Sports"],
        locations: ["Chitwan", "Bardia"],
        experienceYears: 10,
        pricing: {
            dailyRate: 35,
            currency: "USD"
        },
        contact: {
            email: "deepak@example.com",
            phone: "+977-9841234570"
        },
        availability: "Available",
        averageRating: 4.7,
        totalReviews: 95,
        featured: false,
        isActive: true
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Find any user to be the creator
        const User = mongoose.connection.db.collection('users');
        const user = await User.findOne({});

        if (!user) {
            console.error('No users found in database. Please register a user first.');
            process.exit(1);
        }

        const createdBy = user._id;

        // Clear existing guides
        await Guide.deleteMany({});
        console.log('Cleared existing guides');

        // Insert new guides with createdBy
        const guides = guidesData.map(g => ({ ...g, createdBy }));
        await Guide.insertMany(guides);
        console.log('Successfully seeded guides');

        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();
