const mongoose = require('mongoose');

const MemoryCardSchema = new mongoose.Schema({
    cardType: {
        type: String,
        required: true, // 記憶卡類型 (64G, 128G, 256G)
    },
    serialNumber: {
        type: String,
        required: false, // 編號
    },
    remarks: {
        type: String,
        required: false, // 備註
    },
});

module.exports = mongoose.model('MemoryCard', MemoryCardSchema);
