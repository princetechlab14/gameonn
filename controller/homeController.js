const { GameModel, ContactUsModel, Sequelize } = require("../models");

const Home = async (req, res) => {
    try {
        const games = await GameModel.findAll({ where: { status: "Active" }, order: Sequelize.literal('RAND()') });
        res.render('frontend/index', { games });
    } catch (error) {
        console.error("Error Fetching Home:", error);
        res.status(500).send("Internal Server Error");
    }
};

const Single = async (req, res) => {
    const { slug } = req.params;
    try {
        const gameDetail = await GameModel.findOne({ where: { slug, status: "Active" } });
        if (!gameDetail) return res.send("Game not found");
        const games = await GameModel.findAll({ where: { status: "Active" } });
        res.render('frontend/single', { gameDetail, games });
    } catch (error) {
        console.error("Error Fetching Single:", error);
        res.status(500).send("Internal Server Error");
    }
};

const PlayGame = async (req, res) => {
    const { slug } = req.params;
    try {
        const game = await GameModel.findOne({ where: { slug, status: "Active" } });
        if (!game) return res.send("Game not found");
        res.render('frontend/play', { game });
    } catch (error) {
        console.error("Error Fetching PlayGame:", error);
        res.status(500).send("Internal Server Error");
    }
};

const About = async (req, res) => {
    try {
        res.render('frontend/about');
    } catch (error) {
        console.error("Error Fetching About:", error);
        res.status(500).send("Internal Server Error");
    }
}

const PrivacyPolicy = async (req, res) => {
    try {
        res.render('frontend/privacyPolicy');
    } catch (error) {
        console.error("Error Fetching About:", error);
        res.status(500).send("Internal Server Error");
    }
}

const TermUse = async (req, res) => {
    try {
        res.render('frontend/termUse');
    } catch (error) {
        console.error("Error Fetching About:", error);
        res.status(500).send("Internal Server Error");
    }
}

const ContactUs = async (req, res) => {
    try {
        res.render('frontend/contactUs');
    } catch (error) {
        console.error("Error Fetching ContactUs:", error);
        res.status(500).send("Internal Server Error");
    }
};

const ContactUsStore = async (req, res) => {
    const { subject, email, message } = req.body;
    try {
        await ContactUsModel.create({ subject, email, message });
        res.redirect("/");
    } catch (error) {
        console.error("Error Fetching Contact Us Store:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { Home, Single, PlayGame, About, PrivacyPolicy, TermUse, ContactUs, ContactUsStore };
