const { CategoryModel } = require("../models");

const category = async () => {
    try {
        const insertRecords = [
            { "id": "1", "name": "Action Games", "image": null, "shorting": "1", "status": "Active", "created_at": "2025-03-29 06:49:45", "updated_at": "2025-03-29 06:49:45", "deleted_at": null },
            { "id": "2", "name": "Arcade Games", "image": null, "shorting": "2", "status": "Active", "created_at": "2025-03-29 06:49:53", "updated_at": "2025-03-29 06:49:53", "deleted_at": null },
            { "id": "3", "name": "Hypercasual Games", "image": null, "shorting": "3", "status": "Active", "created_at": "2025-03-29 06:50:04", "updated_at": "2025-03-29 06:50:04", "deleted_at": null },
            { "id": "4", "name": "Puzzle Games", "image": null, "shorting": "4", "status": "Active", "created_at": "2025-03-29 06:50:14", "updated_at": "2025-03-29 06:50:14", "deleted_at": null }
        ];
        await CategoryModel.bulkCreate(insertRecords);
    } catch (error) {
        console.error("category seeder:", error);
    }
};
module.exports = { category };
