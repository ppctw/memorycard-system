const mongoose = require('mongoose');

const BorrowSchema = new mongoose.Schema({
    cardId: { type: String, required: true },
    borrowerName: { type: String, required: true },
    borrowDate: { type: Date, required: true },
    returnDate: { type: Date, default: null },
    notes: { type: String, default: '' },
});

module.exports = mongoose.model('Borrow', BorrowSchema);
